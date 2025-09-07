import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        onClick={handleToggleChat}
        className="chatbot-icon fixed bottom-10 right-10 p-4 bg-green-600 rounded-full cursor-pointer z-50 transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        <i className="text-white text-3xl">💬</i>
      </div>

      {isOpen && (
        <div className="chatbot-iframe fixed bottom-20 right-10 w-[400px] h-[550px] z-50 transition-all duration-300">
          <iframe
            src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/15/21/20241215215731-1DA8B25A.json"
            title="Chatbot"
            width="100%"
            height="100%"
            style={{
              borderRadius: '12px',
              border: 'none',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            }}
          ></iframe>
          <button
            onClick={handleToggleChat}
            className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-800 transition-all duration-300"
          >
            ❌
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
