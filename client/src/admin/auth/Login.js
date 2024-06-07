import React, { useContext, useEffect, useState } from "react";
import { db } from "../../firebase.config";
import Cookies from "cookies-js";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { admin } from "../../context/admin";
import Swal from "sweetalert2";
const Login = () => {
  const [formData, setFormData] = useState({ userId: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const { setAdminData } = useContext(admin);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!formData.userId.trim() || !formData.password.trim()) {
        Swal.fire({
          title: "Error!",
          text: "All fields are required.",
          icon: "error",
        });
        setLoading(false);
        return;
      }

      Swal.fire({
        title: "Loading...",
        text: "Please wait while we process your request.",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const q = query(
        collection(db, "admin"),
        where("userId", "==", formData.userId)
      );
      const userSnap = await getDocs(q);

      let user;
      userSnap.forEach((doc) => {
        user = doc.data();
      });

      if (!user || user.password !== formData.password) {
        Swal.fire({
          title: "Error!",
          text: "Invalid Password .",
          icon: "error",
        });
        setLoading(false);
        return;
      }

      Cookies.set("userId", user.userId, {
        expires: 36500,
        path: "/",
        secure: false,
      });

      const cookieSet = Cookies.get("userId");
      console.log("Cookie set:", cookieSet);

      Swal.fire({
        title: "Good job!",
        text: "You are successfully logged in !",
        icon: "success",
      });

      setAdminData(user);
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const userId = Cookies.get("userId");
    console.log("Retrieved userId from cookies:", userId);
  }, []);

  return (
    <div className="flex justify-center shadow-2xl bg-[#FFFFFF] w-full flex-col gap-5 items-center h-screen">
      <input
        onChange={handleChange}
        id="userId"
        placeholder="Enter User ID"
        className="focus:outline-none md:w-[30%] py-2  w-[70%]   px-4 border border-gray-300"
        type="text"
        value={formData.userId}
      />
      <input
        onChange={handleChange}
        id="password"
        placeholder="Enter Password"
        className="focus:outline-none md:w-[30%] w-[70%] py-2 px-4 border border-gray-300"
        type="password"
        value={formData.password}
      />
      <div className="w-fit">
        <button
          onClick={handleSubmit}
          className="contact-btn"
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
      {message && <div>{message}</div>}
    </div>
  );
};

export default Login;
