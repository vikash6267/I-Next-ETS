import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import SingleService from "../core/Navbar/SingleService";
import { navbar } from "../../constantData/navbarLink";
import { design, devlopemt, marketing } from "../../constantData/servicesData";
import GetInTouchModal from "../GetInTouchModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const location = useLocation();
  const sidebarRef = useRef(null);

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); // Toggle the state isOpen
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-transparent z-10 shadow-md transition-all duration-300 h-[80px] ${
        isScrolled ? "backdrop-blur-sm" : ""
      } `}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between h-full items-center relative">
        <div className="flex gap-4 items-center">
          <button
            className="flex-col justify-center items-center relative z-50 md:hidden"
            onClick={handleClick}
          >
            <span
              className={`bg-gray-500 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-gray-500 block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-100 ease-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-gray-500 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            ></span>
          </button>

          <Link to="/" className="font-bold text-black text-2xl">
            <img
              src="https://i.ibb.co/N608STN/inext-ets-logo.jpg"
              width={65}
              height={28}
              style={{ borderRadius: "20px" }}
              alt=""
            />
          </Link>
        </div>

        <div
          ref={sidebarRef}
          className={`fixed top-[66px] left-0 ${
            isOpen ? "w-[80vw]" : "w-0"
          } h-screen bg-white z-[100] flex justify-start items-center transition-all duration-[1s] flex-col overflow-hidden md:hidden`}
        >
          <ul
            onClick={handleOpen}
            className={`${
              isOpen
                ? "opacity-100 duration-[1s] delay-[0.5s]"
                : "opacity-0 duration-[0.5s]"
            } w-full flex flex-col gap-6 mt-20 px-6 text-xl font-bold text-black`}
          >
            {navbar.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link?.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-black hover:text-orange-500"
                      : "text-gray-500 hover:text-orange-500"
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
            <hr className="bg-blue-700" />
            <li>
              <button
                className="p-3 bg-gray-300 hover:bg-pink-200 hover:text-orange-400 rounded-xl font-bold text-[18px]"
                onClick={() => {
                  setIsModalOpen(true);
                  setIsOpen(false);
                }}
              >
                Get In Touch
              </button>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex gap-3 items-center">
          <ul className="flex gap-x-6 text-sm font-bold hover:cursor-pointer">
            {navbar.map((link, index) => (
              <li key={index}>
                {link.title === "Services" ? (
                  <div
                    className="group flex cursor-pointer items-center gap-1 relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <p className="hover:text-orange-500">{link.title}</p>
                    <IoIosArrowDropdownCircle />

                    <div
                      className={`absolute top-[50%] z-[1000] flex min-w-[95vw] left-[100%] translate-x-[-55%] flex-col rounded-lg bg-white border p-4 transition-all duration-150 ${
                        isDropdownOpen
                          ? "visible translate-y-[1.65em] opacity-100"
                          : "invisible opacity-0"
                      }`}
                    >
                      <div className="grid grid-cols-4 gap-16 text-xl w-11/12 mx-auto">
                        <div className="font-bold text-xl leading-snug">
                          Drive your digital
                          <p>success with</p>
                          <p> our experts</p>
                        </div>
                        <div
                          onClick={() => setIsDropdownOpen(false)} // Close menu on click
                          className="hover:text-black text-sm font-thin"
                        >
                          <SingleService
                            serviceName="Design"
                            services={design}
                          />
                        </div>
                        <div
                          onClick={() => setIsDropdownOpen(false)} // Close menu on click
                          className="text-sm font-thin"
                        >
                          <SingleService
                            serviceName="Development"
                            services={devlopemt}
                          />
                        </div>
                        <div
                          onClick={() => setIsDropdownOpen(false)} // Close menu on click
                          className="text-sm font-thin"
                        >
                          <SingleService
                            serviceName="Marketing"
                            services={marketing}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={link?.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-black hover:text-orange-500"
                        : "text-gray-500 hover:text-orange-500"
                    }
                  >
                    <p>{link.title}</p>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          <h2
            className="p-3 bg-gray-300 hover:bg-pink-200 hover:text-orange-400 rounded-xl font-bold text-[12px] hover:cursor-pointer"
            onClick={() => {
              setIsModalOpen(true);
              setIsOpen(false);
            }}
          >
            Get In Touch
          </h2>
        </div>
      </div>
      <GetInTouchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </nav>
  );
};
export default Navbar;
