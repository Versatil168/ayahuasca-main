import React, { useState } from "react";

const WhatsAppButton: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={togglePopup}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg"
      >
        <img
          src="https://img.icons8.com/ios-filled/30/ffffff/whatsapp.png"
          alt="WhatsApp"
        />
      </button>

      {showPopup && (
        <div className="mt-2 p-4 bg-white rounded-lg shadow-lg animate-fade-in">
          <p className="text-gray-800 mb-2">¿En qué podemos ayudarte?</p>
          <a
            href="https://wa.link/hwg39w" // Reemplaza con tu número real
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-semibold hover:underline"
          >
            Chatea con nosotros
          </a>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
