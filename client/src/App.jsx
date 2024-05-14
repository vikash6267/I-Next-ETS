import "./App.css";
import Technology from "./components/Technology";
import Navbar from "./components/common/Navbar";
function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col ">
      <Navbar />
      <div className=" mt-[87px] w-11/12 mx-auto">
        <Technology />
      </div>
    </div>
  );
}

export default App;
