import cv2
import numpy as np
import winsound
import threading
import time
from twilio.rest import Client
from dotenv import load_dotenv
import os

load_dotenv()   

TWILIO_SID = os.getenv("TWILIO_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_NUMBER = os.getenv("TWILIO_NUMBER")

hospital_numbers = ["+916287553967", "+918709319499","+917209287406"]

net = cv2.dnn.readNet("./public/yolov4.weights", "./public/yolov4.cfg")
layer_names = net.getLayerNames()
output_layers = [layer_names[i - 1] for i in net.getUnconnectedOutLayers().flatten()]
vehicle_classes = [2, 3, 5, 7]

prev_positions = {}
prev_sizes = {}
crash_frames = {}

CRASH_THRESHOLD = 1
SPEED_THRESHOLD = 2
SIZE_CHANGE_THRESHOLD = 15

call_made = False
beep_active = False


def beep_alarm():
    """Continuously beeps while a crash is detected."""
    global beep_active
    while beep_active:
        winsound.Beep(1500, 500)
        time.sleep(1)


def call_hospital(index=0):
    """Calls hospitals in sequence if no response is received within 10 seconds."""
    global call_made
    if index >= len(hospital_numbers):
        print("All hospitals are busy. No response received.")
        return

    hospital_phone_number = hospital_numbers[index]
    client = Client(TWILIO_SID, TWILIO_AUTH_TOKEN)

    try:
        call = client.calls.create(
            twiml='<Response><Say>Emergency! A severe crash has been detected at VIT Vellore,Tamil Nadu. Immediate medical assistance is required. Please respond urgently to provide necessary aid. Lives may be at risk. This is an emergency alert. Kindly take action now!.</Say></Response>',
            to=hospital_phone_number,
            from_=TWILIO_NUMBER
        )
        print(f"Calling hospital at {hospital_phone_number}... Call SID: {call.sid}")

        time.sleep(10)

        if not call_made:  
            call_hospital(index + 1)
    except Exception as e:
        print(f"Error making call: {e}")
        call_hospital(index + 1)  


def send_alert():
    """Handles the crash alert: starts beeping and makes the first call."""
    global call_made, beep_active

    if not call_made:
        print("🚨 Crash Detected! Calling hospital in 10 seconds...")
        beep_active = True
        threading.Thread(target=beep_alarm, daemon=True).start()
        time.sleep(1)  
        if not call_made:
            call_hospital()
            call_made = True
            beep_active = False  


def detect_crash(video_path):
    """Detects crashes in the given video using object detection."""
    global call_made, beep_active
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print(f"❌ Error: Cannot open video file {video_path}")
        return

    crash_detected = False

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        height, width, _ = frame.shape
        blob = cv2.dnn.blobFromImage(frame, 0.00392, (416, 416), swapRB=True, crop=False)
        net.setInput(blob)
        detections = net.forward(output_layers)

        detected_vehicles = []
        confidences = []
        boxes = []

        for detection in detections:
            for obj in detection:
                scores = obj[5:]
                class_id = np.argmax(scores)
                confidence = scores[class_id]

                if class_id in vehicle_classes and confidence > 0.3:
                    center_x, center_y, w, h = (obj[:4] * [width, height, width, height]).astype("int")
                    x, y = int(center_x - w / 2), int(center_y - h / 2)

                    boxes.append([x, y, w, h])
                    confidences.append(float(confidence))
                    detected_vehicles.append((x, y, w, h, class_id))

        indices = cv2.dnn.NMSBoxes(boxes, confidences, 0.3, 0.2)

        if len(indices) > 0:
            for i in indices.flatten():
                x, y, w, h = boxes[i]
                obj_id = f"{x}-{y}"
                size = w * h

                if obj_id in prev_positions:
                    prev_x, prev_y = prev_positions[obj_id]
                    speed = np.sqrt((x - prev_x) ** 2 + (y - prev_y) ** 2)

                    if obj_id in prev_sizes:
                        size_change = abs(prev_sizes[obj_id] - size) / prev_sizes[obj_id] * 100

                        if size_change > SIZE_CHANGE_THRESHOLD or speed < SPEED_THRESHOLD:
                            crash_frames[obj_id] = crash_frames.get(obj_id, 0) + 1
                        else:
                            crash_frames[obj_id] = 0

                        if crash_frames[obj_id] >= CRASH_THRESHOLD:
                            crash_detected = True

                    prev_sizes[obj_id] = 0.6 * prev_sizes.get(obj_id, size) + 0.4 * size

                prev_positions[obj_id] = (x, y)
                color = (0, 0, 255) if crash_detected else (0, 255, 0)
                label = "🚨 Crash!" if crash_detected else "Vehicle"
                cv2.rectangle(frame, (x, y), (x + w, y + h), color, 2)
                cv2.putText(frame, label, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)

        if crash_detected and not call_made:
            send_alert()  

        cv2.imshow("⚡ Ultra-Fast Crash Detection", frame)

        if cv2.waitKey(10) & 0xFF == ord("q"):
            break

        if crash_detected:  
            break

    cap.release()
    cv2.destroyAllWindows()


detect_crash('./public/crash3.mp4')
