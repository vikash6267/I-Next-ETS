import React, { useState, useEffect } from "react";
import "./App.css";
import Mode from "./components/Mode";
import Navbar from "./components/common/Navbar";
import CustomPointer from "./components/common/Pointer";
import Footer from "./components/common/footer/Footer";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import WorkDone from "./pages/WorkDone";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ButtomIcon from "./components/ButtomIcon";
import HowWeWork from "./pages/HowWeWork";
import Loader from "./components/Loader";
import PortFolio from "./pages/PortFolio";
import Career from "./pages/Career";
import WebDesign from "./components/Design/WebDesign";
import UIUX from "./components/Design/UIUX";
import Products from "./components/Design/Products";
import Brands from "./components/Design/Brands";
import MobileUIUX from "./components/Design/MobileUIUX";

function App() {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen w-screen flex-col  ">
      {loading ? ( // Render the loader if loading is true
        <Loader />
      ) : (
        // Render the content once loading is false
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/prework" element={<WorkDone />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/workinfo" element={<HowWeWork />} />
            <Route path="/portfolio" element={<PortFolio />} />
            {/* services  */}
            <Route path="/webdesign" element={<WebDesign />} />
            <Route path="/uiuxdesign" element={<UIUX />} />
            <Route path="/productdesign" element={<Products />} />
            <Route path="/brandidentity" element={<Brands />} />
            <Route path="/mobile" element={<MobileUIUX />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <CustomPointer />
          <Mode toggle={toggle} setToggle={setToggle} />
          <ButtomIcon />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
