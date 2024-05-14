import "./App.css";
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
      </div>

      <CustomPointer />
    </div>
  );
}

export default App;
