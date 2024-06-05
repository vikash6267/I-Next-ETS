import React, { useContext } from "react";
import Cookies from "cookies-js";
import { admin } from "../../context/admin";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Home = () => {
  const { setAdminData } = useContext(admin);
  const navigate = useNavigate();
  const handleLogOut = () => {
    try {
      Cookies.set("userId", null, { expires: -1, path: "/" });
      setAdminData(null);
      navigate("/");

      Swal.fire({
        title: "Good job!",
        text: "You are successfully Logged out !",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There is some Error in Logging out ",
        icon: "error",
      });
    }
  };
  return (
    <div className="mt-[87px] w-11/12 mx-auto">
      This is Home Page of Admin
      <button
        onClick={handleLogOut}
        className="py-2 px-4 rounded-md bg-slate-700 text-white  "
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
