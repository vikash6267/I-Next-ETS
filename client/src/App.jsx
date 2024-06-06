import React, { useState, useEffect, useContext } from "react";
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
import WebDevelopment from "./components/development/WebDevelopment";
import WebAppDevelopment from "./components/development/WebAppDevelopment";

import { admin } from "./context/admin";
import AdminHome from "./admin/Home/Home";
import Login from "./admin/auth/Login";
import MakeAdmin from "./admin/components/MakeAdmin";
import Sidebar from "./admin/components/Sidebar";
import { sidebarContext } from "./context/sidebar";
import Messages from "./admin/components/Messages";
function App() {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const { adminData } = useContext(admin);
  const { minWidth, maxWidth } = useContext(sidebarContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen w-screen flex-col">
      {loading ? (
        <Loader />
      ) : (
        <>
          {!adminData ? (
            <div>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/prework" element={<WorkDone />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/workinfo" element={<HowWeWork />} />
                <Route path="/portfolio" element={<PortFolio />} />
                <Route path="/career" element={<Career />} />
                {/* Services */}
                {/* Design */}
                <Route path="/webdesign" element={<WebDesign />} />
                <Route path="/uiuxdesign" element={<UIUX />} />
                <Route path="/productdesign" element={<Products />} />
                <Route path="/brandidentity" element={<Brands />} />
                <Route path="/mobile" element={<MobileUIUX />} />
                {/* Development */}
                <Route path="/webDevelopment" element={<WebDevelopment />} />
                <Route
                  path="/webAppDevelopment"
                  element={<WebAppDevelopment />}
                />
                <Route path="*" element={<NotFound />} />
                <Route path="/login" element={<Login />} />
              </Routes>
              <CustomPointer />
              <Mode toggle={toggle} setToggle={setToggle} />
              <ButtomIcon />
              <Footer />
            </div>
          ) : (
            <div className="flex">
              <div
                className="transition-all duration-[400ms]"
                style={{ width: `${minWidth}%` }}
              >
                <Sidebar />
              </div>
              <div style={{ width: `${maxWidth}%` }}>
                <Routes>
                  <Route path="/" element={<AdminHome />} />
                  <Route path="/makeadmin" element={<MakeAdmin />} />
                  <Route path="/messages" element={<Messages />} />
                </Routes>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
