import React from "react";
import {
  FaHome,
  FaInfo,
  FaEnvelope,
  FaPhone,
  FaQuestion,
} from "react-icons/fa";

const ButtomIcon = () => {
  return (
    <div className="fixed bottom-5 left-5 flex flex-col space-y-3">
      <a href="#home" className="icon">
        <FaHome className="w-8 h-8 text-white bg-gray-800 hover:bg-yellow-600 p-2 rounded-full  transition duration-300" />
      </a>
      <a href="#about" className="icon">
        <FaInfo className="w-8 h-8 text-white bg-gray-800 p-2 rounded-full hover:bg-yellow-600 transition duration-300" />
      </a>
      <a href="#contact" className="icon">
        <FaEnvelope className="w-8 h-8 text-white bg-gray-800 p-2 rounded-full hover:bg-yellow-600 transition duration-300" />
      </a>
      <a href="#phone" className="icon">
        <FaPhone className="w-8 h-8 text-white bg-gray-800 p-2 rounded-full hover:bg-yellow-600 transition duration-300" />
      </a>
      <a href="#faq" className="icon">
        <FaQuestion className="w-8 h-8 text-white bg-gray-800 p-2 rounded-full hover:bg-yellow-600 transition duration-300" />
      </a>
    </div>
  );
};

export default ButtomIcon;
