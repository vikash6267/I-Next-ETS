import React, { useState } from "react";
import LandingPage from "../components/LandingPage";
import WrodPress from "../components/WordPress";
import Ecom from "../components/Ecom";
import FullStack from "../components/FullStack";
import MobileDev from "../components/MobileDev";
const PortFolio = () => {
  const [activeTab, setActiveTab] = useState("landing-page");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-[87px] w-11/12 mx-auto">
      <div className="flex items-center justify-center mt-10 gap-4 lg:gap-14 sm:flex flex-wrap">
        <button
          className={` font-bold text-2xl ${
            activeTab === "landing-page"
              ? "border-b-4 pb-1 border-orange-500 text-blue-800"
              : ""
          }`}
          onClick={() => handleTabChange("landing-page")}
        >
          Landing Page Portfolio
        </button>
        <button
          className={`font-bold text-2xl ${
            activeTab === "WordPress"
              ? "border-b-4 pb-1 border-orange-500  text-blue-800"
              : ""
          }`}
          onClick={() => handleTabChange("WordPress")}
        >
          WordPress Portfolio{" "}
        </button>
        <button
          className={`font-bold text-2xl ${
            activeTab === "Ecommerce"
              ? "border-b-4 pb-1 border-orange-500 text-blue-800"
              : ""
          }`}
          onClick={() => handleTabChange("Ecommerce")}
        >
          Ecommerce
        </button>
        <button
          className={`font-bold text-2xl ${
            activeTab === "full-stack"
              ? " text-blue-800 border-b-4 pb-1 border-orange-500"
              : ""
          }`}
          onClick={() => handleTabChange("full-stack")}
        >
          Full Stack
        </button>
        <button
          className={`font-bold text-2xl ${
            activeTab === "mobile-application"
              ? " text-blue-800 border-b-4 pb-1 border-orange-500 "
              : ""
          }`}
          onClick={() => handleTabChange("mobile-application")}
        >
          Mobile Application
        </button>
      </div>
      <div className="border"></div>
      <div className="mt-3">
        {activeTab === "landing-page" && <LandingPage />}
        {activeTab === "WordPress" && <WrodPress />}
        {activeTab === "Ecommerce" && <Ecom />}
        {activeTab === "full-stack" && <FullStack />}
        {activeTab === "mobile-application" && <MobileDev />}
      </div>
    </div>
  );
};

export default PortFolio;
