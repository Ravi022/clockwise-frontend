import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DropdownForm = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission default behavior

    try {
      // Make API request to backend to send selected course value
      const response = await axios.post(
        "http://127.0.0.1:8000/attendance/getStudent/",
        {
          course_name: selectedCourse,
        }
      );
      console.log("succesfull ", response.data);
      // Navigate to "/take-attendance" route upon successful response
      navigate("/take-attendance");
    } catch (error) {
      console.error("Error sending course value:", error);
    }
  };

  const handleChange = (e) => {
    setSelectedCourse(e.target.value); // Update selected course state
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-64 p-8 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Select Course
        </h2>
        <div className="flex flex-col mb-4">
          <select
            value={selectedCourse}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a course</option>
            <option value="CS330">Software Engineering</option>
            <option value="CS320">Compilers</option>
            <option value="CS361">Computer Security</option>
            <option value="CS332">Storage System</option>
            <option value="HS305">Advanced communication</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md py-2 px-4 mt-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DropdownForm;
