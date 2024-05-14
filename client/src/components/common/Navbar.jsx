import React, { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom"
import {navbar} from '../../constantData/navbarLink';
import { NavLink } from 'react-router-dom';
import { matchPath } from 'react-router-dom';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import SingleService from '../core/Navbar/SingleService';
import { design,devlopemt,marketing } from '../../constantData/servicesData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
const[isOpen,setIsOpen] = useState(false)
const location = useLocation();


const [isOpenH, setIsOpenH] = useState(false);
const onclickHandler = () => {
  setIsOpenH(false);
};

const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-transparent z-10 shadow-md transition-all duration-300 h-[80px] ${isScrolled ? 'backdrop-blur-sm' : ''} `}>
      <div className="container mx-auto px-4 py-3 flex justify-between h-full items-center relative ">
    <div className=' flex gap-4 items-center'>
    <button
        className="flex-col justify-center items-center relative z-50"
        onClick={handleClick}
      >
        <span
          className={`bg-gray-500 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out
         ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
        ></span>

        <span
          className={`bg-gray-500 block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-100 ease-out 
        ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>

        <span
          className={`bg-gray-500 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out
         ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
        ></span>

      
      </button>


      <h1 className='font-bold text-2xl'>I-Next-ETS </h1>

    </div>

      <div
        className={`fixed top-[66px] left-0 ${
          isOpen ? "w-[30vh]" : "w-0"
        } h-screen ${
          location.pathname !== "/" ? "bg-black" : "bg-[#000c23]"
        } z-[100] flex justify-start items-center transition-all duration-[1s] flex-col overflow-hidden`}
      >
        <div
          className={`${
            isOpen
              ? "opacity-100 duration-[4.5s] "
              : "opacity-0 duration-[0.45s] "
          } w-full transition-all overflow-hidden`}
        >
            </div>
        </div>







<div className=' flex gap-3 items-center  '>


<ul className="flex gap-x-6 text-black hover:cursor-pointer">
            {navbar.map((link, index) => (
              <li key={index}>
                {link.title === "Services" ? (
                  <div className="group  flex cursor-pointer items-center gap-1  ">
                    <p>{link.title}</p>
                    <IoIosArrowDropdownCircle />
                    {/* <AiOutlineDown/> */}

                    <div className="invisible absolute  top-[50%] z-[1000] flex min-w-[95vw]  left-[50%]   translate-x-[-50%]  flex-col rounded-lg bg-white border p-4 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100">
                    {/* <div className="invisible absolute  top-[50%] z-[1000] flex min-w-[80%] mx-auto translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-gray-300 p-4 text-black opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]"> */}
                      {/* <div className="absolute left-[60%] top-0 -z-10 h-6 w-6 translate-x-[100%] translate-y-[-40%] rotate-45 select-none rounded bg-yellow-200"></div> */}

                      {/* {loading ? (
                        <div className="w-full">
                          <Skeleton
                            count={5}
                            className="w-[90%] m-5 h-[15px]"
                            baseColor="#C5C7D4"
                            highlightColor="#AFB2BF"
                          />
                        </div>
                      ) : subLinks?.length ? (
                        <>
                          {subLinks
                            ?.filter((subLink) => subLink?.courses?.length > 0)
                            ?.map((subLink, i) => (
                              <Link
                                to={`/catalog/${subLink.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                className="rounded-lg bg-transparent py-4 pl-4 hover:bg-black0"
                                key={i}
                              >
                                <p>{subLink.name}</p>
                              </Link>
                            ))}
                        </>
                      ) : (
                        <div className="text-center">No Course Found</div>
                      )} */}



<div className=' grid grid-cols-4 mt-6  text-xl w-11/12 mx-auto'>


  <div className=' font-bold text-3xl leading-snug'>Drive your digital success with our experts 
</div>
  <div onClick={onclickHandler}>
<SingleService serviceName="Design" services={design} />
    
  </div>
  <div>
  <SingleService serviceName="Devlopment" services={devlopemt} />


  </div>
  <div>

<SingleService serviceName="Marketing" services={marketing} />

  </div>
</div>
                    </div>
                  </div>
                ) : (
                  <NavLink to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-black"
                      }`}
                    >
                      {link.title}
                    </p>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>


          <h2 className=' p-3 bg-gray-100 rounded-xl'>Get In touch</h2>


</div>  




    </div>
    </nav>
  );
};

export default Navbar;
