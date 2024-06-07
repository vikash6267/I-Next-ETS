import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase.config";
import Swal from "sweetalert2";

const MakeAdmin = () => {
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMassage] = useState();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setMassage("");

      if (!formData.userId.trim() || !formData.password.trim()) {
        Swal.fire({
          title: "Error!",
          text: "All fields are required.",
          icon: "error",
        });
        setLoading(false);
        return;
      }
      console.log(formData);
      const collectionRef = collection(db, "admin");
      const q = query(
        collection(db, "admin"),
        where("userId", "==", formData?.userId)
      );
      const dataSnap = await getDocs(q);
      if (!dataSnap.empty) {
        Swal.fire({
          title: "Error!",
          text: "User Id Already Exist  .",
          icon: "error",
        });
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
      await addDoc(collectionRef, formData);
      Swal.fire({
        title: "Good job!",
        text: "You are successfully logged in !",
        icon: "success",
      });

      setFormData({ userId: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="flex justify-center shadow-2xl bg-[#FFFFFF] w-full flex-col gap-5 items-center h-screen">
        <div className="md:flex md:justify-center md:items-center ">
          <h1 className="text-2xl md:text-4xl md:font-bold font-medium">
            This is the form for Create Admin{" "}
          </h1>
        </div>
        <input
          onChange={handleChange}
          id="userId"
          placeholder="Enter User ID"
          className="focus:outline-none md:w-[30%] py-2  w-[70%]   px-4 border border-gray-300"
          type="text"
          value={formData?.userId}
        />
        <input
          onChange={handleChange}
          id="password"
          placeholder="Enter Password"
          className="focus:outline-none md:w-[30%] w-[70%] py-2 px-4 border border-gray-300"
          type="password"
          value={formData?.password}
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
    </div>
  );
};

export default MakeAdmin;
