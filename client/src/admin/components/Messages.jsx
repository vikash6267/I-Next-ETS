import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

const Messages = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const removeDiscreption = () => {};
  const setDiscreption = () => {};
  return (
    <div className="md:pt-4 md:px-12">
      <div className="grid grid-cols-3 gap-2 ">
        <div className="col-span-1 bg-[#343A40] py-2 px-6 text-gray-300  rounded-md  ">
          <p className="flex justify-between items-center">
            <span className="text-2xl font-bold">Anshu Pandey</span>
            {toggle ? (
              <span onClick={handleToggle}>
                <FaChevronUp onClick={removeDiscreption} size={35} />
              </span>
            ) : (
              <span onClick={handleToggle}>
                <FaChevronDown onClick={setDiscreption} size={35} />
              </span>
            )}
          </p>
        </div>
        <div className="col-span-1 bg-[#343A40] py-2 px-6 text-gray-300  rounded-md  ">
          <p className="flex justify-between items-center">
            <span className="text-2xl font-bold">Anshu Pandey</span>
            {toggle ? (
              <span onClick={handleToggle}>
                <FaChevronUp onClick={removeDiscreption} size={35} />
              </span>
            ) : (
              <span onClick={handleToggle}>
                <FaChevronDown onClick={setDiscreption} size={35} />
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Messages;  