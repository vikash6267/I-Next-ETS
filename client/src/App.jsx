import React, { useState, useEffect, useContext } from "react";
import "./App.css";
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
import Header from "./admin/components/Header";
import Service from "./pages/Service";
import CMSDevelopment from "./components/development/CMSDevelopment";
import EcomDevlopment from "./components/development/EcomDevlopment";
import ScrollToTop from "./components/ScrollToTop";
import SoftwareDevelopment from "./components/development/SoftwareDevelopment";
import Inbound from "./components/marketing/Inbound";
import SeoMarketing from "./components/marketing/SeoMarketing";
import SocialMedia from "./components/marketing/SocialMedia";
import PaidAdvertising from "./components/marketing/PaidAdvertising";
import ContantMarketing from "./components/marketing/ContantMarketing";

function App() {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const { adminData } = useContext(admin);

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
                <Route path="/service" element={<Service />} />
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
                <Route path="/cmsdev" element={<CMSDevelopment />} />
                <Route path="/ecomdev" element={<EcomDevlopment />} />
                <Route path="/softwaredev" element={<SoftwareDevelopment />} />

                {/* marketing  */}
                <Route path="/inboudmarket" element={<Inbound />} />
                <Route path="/seomarket" element={<SeoMarketing />} />
                <Route path="/socialmarket" element={<SocialMedia />} />
                <Route path="/paiadvertising" element={<PaidAdvertising />} />
                <Route
                  path="/contentmarketing"
                  element={<ContantMarketing />}
                />

                <Route path="*" element={<NotFound />} />
                <Route path="/login" element={<Login />} />
              </Routes>
              <CustomPointer />
              {/* <Mode toggle={toggle} setToggle={setToggle} /> */}
              <ScrollToTop />
              <ButtomIcon />
              <Footer />
            </div>
          ) : (
            <div>
              <Header />
              <Routes>
                <Route path="/" element={<AdminHome />} />
              </Routes>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
