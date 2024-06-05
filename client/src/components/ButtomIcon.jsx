import React, { useState } from "react";
import {
  FaHome,
  FaInfo,
  FaEnvelope,
  FaPhone,
  FaQuestion,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ButtomIcon = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed bottom-24 right-4 flex flex-col items-center space-y-3">
      {toggle && (
        <div className="flex flex-col space-y-3 mb-3">
          <Link to="/home" className="icon">
            <FaHome className="w-8 h-8 text-white bg-gray-800 hover:bg-yellow-600 p-2 rounded-full transition duration-300" />
          </Link>
          <Link to="/about" className="icon">
            <FaInfo className="w-8 h-8 text-white bg-gray-800 p-2 rounded-full hover:bg-yellow-600 transition duration-300" />
          </Link>
          <Link to="/contact" className="icon">
            <FaEnvelope className="w-8 h-8 text-white bg-gray-800 p-2 rounded-full hover:bg-yellow-600 transition duration-300" />
          </Link>
          <Link to="/phone" className="icon">
            <FaPhone className="w-8 h-8 text-white bg-gray-800 p-2 rounded-full hover:bg-yellow-600 transition duration-300" />
          </Link>
          <Link to="/faq" className="icon">
            <FaQuestion className="w-8 h-8 text-white bg-gray-800 p-2 rounded-full hover:bg-yellow-600 transition duration-300" />
          </Link>
        </div>
      )}

      <button
        className="w-16 h-16 flex items-center justify-center text-white bg-gray-800 p-2 rounded-full hover:bg-yellow-600 transition duration-300"
        onClick={handleToggle}
      >
        {toggle ? <FaMinus size={25} /> : <FaPlus size={25} />}
      </button>
    </div>
  );
};

export default ButtomIcon;
