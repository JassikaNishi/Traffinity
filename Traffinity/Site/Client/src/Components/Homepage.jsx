import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));

    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;
    });
  }, []);

  const handleGetStartedClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="bg-[#f9f8f8] min-h-screen text-gray-800 font-sans relative overflow-hidden">
      <div className="cursor"></div>

      <section className="text-center py-20 px-8 relative overflow-hidden animate-on-scroll">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#ded8c7] rounded-full opacity-25 z-10"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#ded8c7] rounded-full opacity-25 z-10"></div>
        <h2 className="text-5xl font-extrabold text-[#6a6f54] mb-6">
          Your Journey to a Healthier Life
        </h2>
        <p className="text-lg text-[#8b8f78] max-w-3xl mx-auto mb-10">
          Achieve your fitness goals, monitor your progress, and stay motivated
          every step of the way. Whether you're aiming to lose weight, gain
          strength, or maintain a balanced lifestyle, we are here to guide you.
        </p>
        <button
          className="bg-[#6a6f54] text-white px-10 py-4 rounded-full shadow-lg hover:bg-[#5a5e45] transition duration-300"
          onClick={handleGetStartedClick}
        >
          Get Started
        </button>
      </section>

      <section className="animate-on-scroll">
        <img
          src="./clear.jpg"
          alt="Healthy Life"
          className="w-screen h-[70vh] object-cover shadow-lg"
        />
      </section>

      <section className="py-20 px-10 bg-[#f4f4f4] animate-on-scroll">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-5/12">
            <img
              src="./4image.jpg"
              alt="Healthy Life"
              className="w-full h-[95vh] object-cover shadow-lg rounded-lg"
            />
          </div>
          <div className="w-full md:w-7/12 space-y-12 bg-white/70 backdrop-blur-md p-8 rounded-lg shadow-lg">
            <div>
              <h3 className="text-3xl font-bold text-[#6a6f54] mb-4">
                Track Daily Steps
              </h3>
              <p className="text-gray-600 text-lg">
                Keep an eye on your daily step count to maintain a healthy level
                of physical activity. Set personal walking goals and challenge
                yourself to increase your daily steps over time. Whether you're
                walking for fitness or for leisure, we help you stay motivated and
                on track.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#6a6f54] mb-4">
                Monitor Water Intake
              </h3>
              <p className="text-gray-600 text-lg">
                Staying hydrated is crucial for your health. Monitor your daily
                water intake and set personalized hydration goals to ensure you're
                getting enough water. Keeping track of your hydration levels helps
                improve energy, skin health, and overall wellness.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#6a6f54] mb-4">
                Set and Achieve Goals
              </h3>
              <p className="text-gray-600 text-lg">
                Setting realistic fitness goals is the first step to improving
                your health. Whether it's losing weight, building muscle, or
                improving cardiovascular health, we provide tools to help you set,
                track, and achieve your fitness objectives. Celebrate your progress
                and milestones along the way to stay motivated and focused.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-8">
        <div className="w-full border-t-4 border-dotted border-[#ded8c7]"></div>
      </div>

      <section className="py-20 px-10 bg-[#eae6da] animate-on-scroll">
        <h3 className="text-4xl font-bold text-[#6a6f54] text-center mb-12">
          Contact Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 bg-white rounded-xl shadow-lg">
            <h4 className="text-2xl font-bold text-[#6a6f54] mb-4">Jassika</h4>
            <p>Email: <a href="mailto:jassika@example.com" className="text-blue-500">jassika@example.com</a></p>
            <p>Phone: +123 456 7890</p>
            <p>We would love to hear from you! Feel free to reach out with any questions or feedback.</p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-lg">
            <h4 className="text-2xl font-bold text-[#6a6f54] mb-4">Anisha Plawat</h4>
            <p>Email: <a href="mailto:anisha@example.com" className="text-blue-500">anisha@example.com</a></p>
            <p>Phone: +987 654 3210</p>
            <p>If you're interested in collaboration or partnerships, don't hesitate to get in touch!</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#ded8c7] py-6 text-center text-[#6a6f54] text-sm">
        &copy; {new Date().getFullYear()} SehatKal.co. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
