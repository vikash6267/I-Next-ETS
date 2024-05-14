import "./App.css";
import IndustryExpertise from "./components/IndustryExpertise";
import Technology from "./components/Technology";
import Navbar from "./components/common/Navbar";
import CustomPointer from "./components/common/Pointer";
import Home from "./pages/Home";
function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col  ">
      <Navbar />
      <Home />



     
      <div className=" mt-[87px] w-11/12 mx-auto">
        <Technology />
        <IndustryExpertise />
      </div>
<<<<<<< HEAD
      <br />
      <br />
      <br />
=======

      <CustomPointer />
>>>>>>> 843e11e5a0b939dd943a3c6855d101276099f3be
    </div>
  );
}

export default App;
