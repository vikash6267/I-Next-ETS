import React from "react";
import { IoMoon } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";

const Mode = ({ toggle, setToggle }) => {
  const handleToggle = () => {
    setToggle(!toggle);
    if (!toggle) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <div
        className="p-4 rounded-full bg-gray-300  cursor-pointer"
        onClick={handleToggle}
      >
        {toggle ? (
          <IoMoon size={30} color="white" />
        ) : (
          <LuSunMoon size={30} color="black" />
        )}
      </div>
    </div>
  );
};

export default Mode;
