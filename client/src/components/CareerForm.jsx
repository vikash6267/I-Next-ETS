import React, { useState } from "react";
import axios from "axios";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    applicationFor: "",
    resume: null,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("contact", formData.contact);
    data.append("message", formData.message);
    data.append("resume", formData.resume);
    data.append("applicationFor", formData.applicationFor);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/career",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccessMessage(response.data.message);
      setFormData({
        name: "",
        email: "",
        contact: "",
        message: "",
        applicationFor: "",
        resume: null,
      });
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Error submitting the form"
      );
      setSuccessMessage("");
    }
  };

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold my-4 text-center">Career Form</h2>
      {successMessage && (
        <p className="mb-4 text-green-600">{successMessage}</p>
      )}
      {errorMessage && <p className="mb-4 text-red-600">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 lg:gap-10">
        <div className="mb-4">
          <label className="block text-xl text-gray-700 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full  text-xl px-3 py-2 border border-yellow-600 h-16 rounded-lg "
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl text-gray-700 mb-2 " htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full text-xl px-3 py-2 border border-yellow-600 h-16 rounded-lg"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl text-gray-700 mb-2" htmlFor="contact">
            Contact Number
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="w-full text-xl px-3 py-2 border border-yellow-600 h-16 rounded-lg"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-xl text-gray-700 mb-2"
            htmlFor="position"
          >
            Select Position
          </label>
          <select
            id="position"
            name="applicationFor"
            className=" text-xl w-full px-3 py-2 border border-yellow-600 h-16 rounded-lg"
            value={formData.applicationFor}
            onChange={handleChange}
            required
          >
            <option value="">Select Position</option>
            <option value="React JS Developer">React JS Developer</option>
            <option value="Node.js Developer">Node.js Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="MERN Stack Developer">MERN Stack Developer</option>
            <option value="PHP  Developer">PHP Developer</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-xl text-gray-700 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full text-xl px-3 py-2 border border-yellow-600 h-36 rounded-lg"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-xl text-gray-700 mb-2" htmlFor="resume">
            Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            className="w-full text-xl px-3 py-2 border border-yellow-600 h-16 rounded-lg"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="contact-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CareerForm;
