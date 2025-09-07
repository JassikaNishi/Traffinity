// import React from "react";


const TipsAndResources = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-purple-200 min-h-screen">
      <div className="text-center py-10">
        <h1 className="text-5xl font-extrabold text-gray-800 animate__animated animate__fadeIn animate__delay-1s">
          Tips & Resources for a Healthy Lifestyle
        </h1>
        <p className="text-xl mt-4 text-gray-700">
          Discover helpful tips, insightful articles, and useful resources to lead a balanced and healthy life.
        </p>
      </div>

      <div className="px-8 lg:px-20 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-6">
              Fitness Tips
            </h2>
            <ul className="space-y-4">
              <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
                <strong>Start small:</strong> If you’re new to fitness, start with shorter, easier routines and gradually increase the intensity.
              </li>
              <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
                <strong>Consistency is key:</strong> Regular exercise, even in small amounts, can significantly improve your health over time.
              </li>
              <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
                <strong>Mix it up:</strong> Include both cardio and strength training to ensure overall fitness and avoid boredom.
              </li>
              <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
                <strong>Stay hydrated:</strong> Drink water before, during, and after your workout to maintain performance and recovery.
              </li>
              <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
                <strong>Rest & recovery:</strong> Make sure to get enough sleep and allow your muscles to recover to prevent injury.
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-6">
              Sleep & Hydration Tips
            </h2>
            <ul className="space-y-4">
              <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
                <strong>Stay hydrated throughout the day:</strong> Aim to drink at least 8 glasses of water daily, more if you’re active.
              </li>
              <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
                <strong>Limit caffeine intake:</strong> Avoid caffeine in the late afternoon or evening to improve the quality of your sleep.
              </li>
              <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
                <strong>Establish a bedtime routine:</strong> Stick to a sleep schedule, avoid screens before bed, and create a relaxing environment.
              </li>
              <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
                <strong>Eat for sleep:</strong> Consuming light, sleep-promoting snacks like almonds or bananas can help you rest better.
              </li>
              <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
                <strong>Use a water bottle:</strong> Keep a water bottle near you to remind yourself to stay hydrated throughout the day.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-2xl mt-10 transform hover:scale-105 transition-all">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6">
            Mental Health Tips
          </h2>
          <ul className="space-y-4">
            <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
              <strong>Practice mindfulness:</strong> Meditation or deep breathing exercises can help manage stress and improve mental clarity.
            </li>
            <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
              <strong>Connect with others:</strong> Social support is essential for mental well-being, so stay in touch with friends and family.
            </li>
            <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
              <strong>Engage in creative activities:</strong> Creative hobbies like painting or writing can help alleviate stress and boost mood.
            </li>
            <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
              <strong>Limit screen time:</strong> Taking breaks from digital screens helps prevent burnout and promotes mental clarity.
            </li>
            <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
              <strong>Seek help when needed:</strong> Don’t hesitate to reach out to a therapist or counselor if you’re feeling overwhelmed.
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-2xl mt-10 transform hover:scale-105 transition-all">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6">
            Embedded Videos
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Short Workout Routine</h3>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/agvdkRc_img?si=N-jXEgprQ8LfvEbo"
                title="Short Workout Routine"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Guided Meditation for Relaxation</h3>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/inpok4MKVLM?si=Hp6QYx6x-Aq1f2AF"
                title="Guided Meditation"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-2xl mt-10 transform hover:scale-105 transition-all">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6">
            External Resources
          </h2>
          <ul className="space-y-4">
            <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
              <strong>MyFitnessPal:</strong> <a href="https://www.myfitnesspal.com" className="text-blue-500">Track your nutrition and fitness progress</a>
            </li>
            <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
              <strong>Headspace:</strong> <a href="https://www.headspace.com" className="text-blue-500">Meditation and mindfulness tools</a>
            </li>
            <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
              <strong>Calm:</strong> <a href="https://www.calm.com" className="text-blue-500">Relaxation and sleep improvement app</a>
            </li>
            <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
              <strong>Strava:</strong> <a href="https://www.strava.com" className="text-blue-500">Connect with fitness communities and track your outdoor activities</a>
            </li>
            <li className="text-gray-600 hover:text-indigo-600 transition duration-300">
              <strong>Fitbit:</strong> <a href="https://www.fitbit.com" className="text-blue-500">Track your daily activity, sleep, and heart health</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TipsAndResources;
