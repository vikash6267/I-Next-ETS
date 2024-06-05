import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import TrustedCompanies from "../TrustedCompanies";
import { FaQuoteRight } from "react-icons/fa";
import { hiringUx, uiUx } from "../cardData";
import Projects from "../tech/Projects";
import IndustryExpertise from "../IndustryExpertise";
import Help from "../Help";
import UxServices from "./UxServices";

const UIUX = () => {
  return (
    <>
      <div className="mt-[111px] w-11/12 mx-auto">
        <div className="flex gap-3">
          <p className="border-r-2 pr-3 text-gray-300 text-xl">Home</p>
          <p className="text-xl">UI/UX Design</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2  items-center lg:-mt-20 mt-7 ">
          <div className="first ">
            <p className="text-2xl lg:text-3xl font-bold">
              UI/UX Design and Consulting Services
              <span className="text-orange-500">Consulting Services</span>{" "}
            </p>
            <br />

            <p className="text-xl">
              Our experts improve your digital product’s user experience,
              leading to satisfied customers and revenue growth.
            </p>
            <br />
            <br />
            <br />
            <button className="flex items-center gap-2 font-bold text-2xl bg-orange-500 px-5 py-3 rounded-lg hover:bg-gray-300 hover:text-orange-600">
              Let's Talk <IoIosArrowDropright className="mt-1" />
            </button>
            <br />
          </div>

          <div className="second">
            <img
              src="./images/developer_male-removebg-preview.png"
              alt="not found"
              className="animate-float"
            />
          </div>
        </div>

        <TrustedCompanies />

        <div className="grid lg:grid-cols-3 md:grid-cols-2">
          <img src="./images/design/1.png" alt="not found" />
          <img src="./images/design/2.png" alt="" />
          <img src="./images/design/3.png" alt="" />
        </div>

        <br />
        <br />
        <br />
        <p className="text-2xl lg:text-4xl font-bold">
          You deserve a systematic and unique{" "}
          <p className="mt-1">approach for your UI/UX design needs.</p>
        </p>
        <div className="main grid lg:grid-cols-2 items-center gap-5 my-10 bg-gray-50 p-6 rounded-md">
          <div className="first">
            <p className="text-xl lg:text-3xl ">
              Brands approach us when they are struggling with
            </p>
            <br />
            <div className="grid gap-9">
              {uiUx.map((currElem) => (
                <p
                  key={currElem.id}
                  className="flex gap-3  text-xl leading-tight"
                >
                  <FaQuoteRight className="mt-1" />
                  <span>{currElem.title}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="second">
            <img
              src="https://d1hdtc0tbqeghx.cloudfront.net/wp-content/uploads/2023/05/22063438/UI-UX-Design.png"
              alt="not found"
            />
          </div>
        </div>

        <UxServices />

        <p className="text-3xl lg:text-4xl mt-28 mb-14 font-bold">
          Unlock your business’s full potential with I Next Ets
        </p>

        <div className="bg-gray-50 p-12 grid gap-6">
          {hiringUx.map((currElem) => (
            <p key={currElem.id} className="flex gap-3  text-xl leading-tight">
              <FaQuoteRight className="mt-1" />
              <span className="font-bold text-xl" id="border">
                {currElem.title}
              </span>
            </p>
          ))}
        </div>

        <Projects />
        <IndustryExpertise />
      </div>
      <Help />
    </>
  );
};

export default UIUX;
