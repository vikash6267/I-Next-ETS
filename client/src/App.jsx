import "./App.css";
import IndustryExpertise from "./components/IndustryExpertise";
import Technology from "./components/Technology";
import Navbar from "./components/common/Navbar";
function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col ">
      <Navbar />
      <div className=" mt-[87px] w-11/12 mx-auto">
        <Technology />
        <IndustryExpertise />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
