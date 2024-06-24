import React, { useContext, useEffect, useState } from "react";
import { sidebarContext } from "../../context/sidebar";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { navbar } from "../constData/Navlist";
const ToggleComponent = () => {
  const [toggle, setToggle] = useState(false);
  const { setMinWidth, setMaxWidth } = useContext(sidebarContext);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  useEffect(() => {
    if (toggle) {
      setMinWidth(5);
      setMaxWidth(95);
    } else {
      setMinWidth(20);
      setMaxWidth(80);
    }
  }, [toggle, setMaxWidth, setMinWidth]);

  return (
    <div>
      <div className=" transition-all duration-[400ms] bg-[#343A40] text-gray-300 h-screen font-bold">
        <p className="  flex justify-between  text-2xl px-4 py-4  md:font-medium ">
          {!toggle && (
            <Link to="/" className="font-bold text-black text-2xl">
              <img
                src="https://i.ibb.co/N608STN/inext-ets-logo.jpg"
                width={30}
                height={28}
                style={{ borderRadius: "20px" }}
                alt=""
              />
            </Link>
          )}
          <button className="cursor-pointer" onClick={handleToggle}>
            <IoMenu />
          </button>
        </p>
        <div className="    md:mt-4 flex-col flex space-y-6 ">
          {navbar.map((item) => (
            <p
              key={item.id}
              className="flex gap-2 hover:bg-gray-600  py-2   items-center px-4 "
            >
              <Link to={`${item.path}`}>
                <span className="text-2xl hover:text-white  text-gray-300 ">
                  {item.icon}
                </span>
              </Link>
              {!toggle && (
                <Link to={`${item.path}`}>
                  <span className="text-xl hover:text-white  text-gray-300 ">
                    {item.title}
                  </span>
                </Link>
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ToggleComponent;
