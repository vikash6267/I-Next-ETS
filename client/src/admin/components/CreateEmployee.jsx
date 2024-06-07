import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { db } from "../../firebase.config";

const CreateEmployee = () => {
  const [formData, setFormData] = useState();

  const handleChanage = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };
  const handleSubmit = async () => {
    try {
      if (
        !formData.address.trim() ||
        !formData.confirm_password.trim() ||
        !formData.designation.trim() ||
        !formData.email.trim() ||
        !formData.name.trim() ||
        !formData.password.trim() ||
        !formData.phone.trim() ||
        !formData.start_date.trim()
      ) {
        Swal.fire({
          title: "Error!",
          text: "All fields are required.",
          icon: "error",
        });
        return;
      }
      if (formData.password !== formData.confirm_password) {
        Swal.fire({
          title: "Error!",
          text: " Password must be same ",
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

      const collectionRef = collection(db, "employees");
      const newData =   await addDoc(collectionRef, formData);
       console.log(newData)
      Swal.fire({
        title: "Good job!",
        text: " Employee  Added   successfully  !",
        icon: "success",
      });
    } catch (error) {

      console.log(error) ; 
      Swal.fire({
        title: "Error!",
        text: error?.message,
        icon: "error",
      });
      return;
    }
  };
  return (
    <div className="">
       <div className="flex justify-center text-2xl md:mt-8 font-bold  ">Create Employee  here  </div>
      <div className="grid  grid-cols-4  md:mt-12   bg-white md:pb-10 pt-5 rounded-md   md:mx-12 md:px-10 shadow-2xl  space-y-1  items-center gap-4">
        <div className="col-span-2 flex flex-col space-y-1 ">
          <label className="text-xl font-medium ">
            {" "}
            Enter Name of the Employee <span className="text-red-600">
              *
            </span>{" "}
          </label>
          <input
            onChange={handleChanage}
            placeholder="Enter Name of Employee"
            required
            className="py-2 focus:outline-none   px-4 border-2 border-gray-300 rounded-md "
            type="text"
            id="name"
          />
        </div>
        <div className="col-span-2 flex flex-col space-y-1 ">
          <label className="text-xl font-medium ">
            Enter designation of the Employee{" "}
            <span className="text-red-600">*</span>
          </label>
          <input
            onChange={handleChanage}
            required
            placeholder="Enter the Employee Designation"
            className="py-2 focus:outline-none   px-4 border-2 border-gray-300 rounded-md "
            id="designation"
            type="text"
          />
        </div>

        <div className="col-span-2 flex flex-col space-y-1 ">
          <label className="text-xl font-medium ">
            {" "}
            Enter joining date of the Employee{" "}
            <span className="text-red-600">*</span>
          </label>
          <input
            onChange={handleChanage}
            required
            placeholder="Joining  Date of Employee"
            className="py-2 focus:outline-none  px-4 border-2 border-gray-300  rounded-md"
            id="start_date"
            type="date"
          />
        </div>
        <div className="col-span-2 flex flex-col space-y-1 ">
          <label className="text-xl font-medium ">
            {" "}
            Enter the Address of the Employee
            <span className="text-red-600">*</span>
          </label>
          <input
            onChange={handleChanage}
            required
            placeholder="Address of the Employee"
            className="py-2 focus:outline-none  px-4 border-2 border-gray-300  rounded-md"
            id="address"
            type="text"
          />
        </div>
        <div className="col-span-2 flex flex-col space-y-1 ">
          <label className="text-xl font-medium ">
            {" "}
            Enter Phone Number of the Employee
            <span className="text-red-600">*</span>
          </label>
          <input
            onChange={handleChanage}
            required
            placeholder=" Phone Number of the Employee"
            className="py-2 focus:outline-none  px-4 border-2 border-gray-300  rounded-md"
            id="phone"
            type="Number"
          />
        </div>
        <div className="col-span-2 flex flex-col space-y-1 ">
          <label className="text-xl font-medium ">
            {" "}
            Enter Email of the Employee
            <span className="text-red-600">*</span>
          </label>
          <input
            onChange={handleChanage}
            required
            placeholder=" Email  of the Employee"
            className="py-2 focus:outline-none  px-4 border-2 border-gray-300  rounded-md"
            id="email"
            type="email"
          />
        </div>
        <div className="col-span-2 flex flex-col space-y-1 ">
          <label className="text-xl font-medium ">
            {" "}
            Create Password
            <span className="text-red-600">*</span>
          </label>
          <input
            onChange={handleChanage}
            required
            placeholder="Create Password"
            className="py-2 focus:outline-none  px-4 border-2 border-gray-300  rounded-md"
            id="password"
            type="password"
          />
        </div>
        <div className="col-span-2 flex flex-col space-y-1 ">
          <label className="text-xl font-medium ">
            {" "}
            Confirm Password
            <span className="text-red-600">*</span>
          </label>
          <input
            onChange={handleChanage}
            required
            placeholder="Confirm Password"
            className="py-2 focus:outline-none  px-4 border-2 border-gray-300  rounded-md"
            id="confirm_password"
            type="password"
          />
        </div>
        <div className="col-span-4 flex flex-col space-y-1 ">
          <button onClick={handleSubmit} className="contact-btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;

// <label className="text-xl font-medium ">
// Enter Name of the Employee
// <span className="text-red-600">*</span>
// </label>
// <input onChange={handleChanage}
// placeholder="Enter Name of Employee"
// required
// className="py-2 focus:outline-none   px-4 border-2 border-gray-300 rounded-md "
// type="text"
// id="name"
// />
// <label className="text-xl font-medium ">
// Enter designation of the Employee{" "}
// <span className="text-red-600">*</span>
// </label>
// <input onChange={handleChanage}
// required
// placeholder="Enter the Employee Designation"
// className="py-2 focus:outline-none   px-4 border-2 border-gray-300 rounded-md "
// id="designation"
// type="text"
// />
// <label className="text-xl font-medium ">
// {" "}
// Enter joining date of the Employee{" "}
// <span className="text-red-600">*</span>
// </label>
// <input onChange={handleChanage}
// required
// placeholder="Joining  Date of Employee"
// className="py-2 focus:outline-none  px-4 border-2 border-gray-300  rounded-md"
// id="start_date"
// type="date"
// />
// <label className="text-xl font-medium ">
// {" "}
// Enter Address of the Employee <span className="text-red-600">*</span>
// </label>
// <input onChange={handleChanage}
// placeholder="Enter Address of the Employee"
// required
// className="py-2 focus:outline-none  px-4 border-2 border-gray-300  rounded-md"
// id="address"
// type="text"
// />
// <label className="text-xl font-medium ">
// Enter Phone Number of the Employee
// <span className="text-red-600">*</span>
// </label>
// <input onChange={handleChanage}
// placeholder="Enter Name of the Employee"
// required
// className="py-2 focus:outline-none  px-4 border-2 border-gray-300  rounded-md"
// id="phone"
// type="Number"
// />
// <label className="text-xl font-medium ">
// Enter Email of the Employee
// <span className="text-red-600">*</span>
// </label>
// <input onChange={handleChanage}
// placeholder="Enter Email of the Employee"
// required
// className="py-2 focus:outline-none  px-4 border-2 border-gray-300  rounded-md"
// id="email"
// type="text"
// />
