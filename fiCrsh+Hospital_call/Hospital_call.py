from twilio.rest import Client
from twilio.twiml.voice_response import VoiceResponse, Gather
import os
from dotenv import load_dotenv
from flask import Flask, request
import threading
import time

load_dotenv()

TWILIO_SID = os.getenv("TWILIO_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_NUMBER = os.getenv("TWILIO_NUMBER")

hospital_numbers = ["+916287553967", "+918709319499"]

app = Flask(__name__)
call_status = {}

def generate_twiml(index):
    response = VoiceResponse()
    gather = Gather(num_digits=1, action=f"/handle-key?index={index}", method="POST")
    gather.say("Emergency! A crash has been detected. If you can assist, press 1. If you are busy, press 2.")
    response.append(gather)
    response.pause(length=10)
    response.redirect(f"/handle-key?index={index}&Digits=2")
    return str(response)

def call_hospital(index=0):
    if index >= len(hospital_numbers):
        print("All hospitals are busy. No response received.")
        return

    hospital_phone_number = hospital_numbers[index]
    client = Client(TWILIO_SID, TWILIO_AUTH_TOKEN)

    try:
        call = client.calls.create(
            twiml=generate_twiml(index),
            to=hospital_phone_number,
            from_=TWILIO_NUMBER
        )
        call_status[call.sid] = "pending"
        threading.Thread(target=check_call_timeout, args=(call.sid, index), daemon=True).start()
        print(f"Calling hospital at {hospital_phone_number}... Call SID: {call.sid}")
    except Exception as e:
        print(f"Error making call: {e}")

def check_call_timeout(call_sid, index):
    time.sleep(10)  
    if call_status.get(call_sid) == "pending":
        print(f"No response from hospital {hospital_numbers[index]}. Trying next hospital...")
        call_hospital(index + 1)

@app.route("/handle-key", methods=["POST"])
def handle_key():
    digit = request.form.get("Digits")
    index = int(request.args.get("index", 0))
    call_sid = request.form.get("CallSid")

    if call_sid:
        call_status[call_sid] = "responded"

    if digit == "1":
        return "<Response><Say>Thank you for your help. Ending the call.</Say></Response>"
    elif digit == "2":
        next_index = index + 1
        if next_index < len(hospital_numbers):
            call_hospital(next_index)
            return "<Response><Say>Transferring to the next hospital.</Say></Response>"
        else:
            return "<Response><Say>All hospitals are busy. No response received.</Say></Response>"

if __name__ == "__main__":
    call_hospital(0)
    app.run(port=5000)
