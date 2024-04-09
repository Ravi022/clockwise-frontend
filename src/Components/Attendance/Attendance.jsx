import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const courseMapping = {
  CS330: "Software Engineering",
  CS320: "Compilers",
  CS361: "Computer Security",
  CS332: "Storage System",
  HS305: "Advanced communication",
};

const Attendance = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [studentsData, setStudentsData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission default behavior

    try {
      // Make API request to backend to fetch student data for the selected course
      const response = await axios.post(
        "http://127.0.0.1:8000/attendance/getStudent/",
        {
          course_name: selectedCourse,
        }
      );
      // Update studentsData state with fetched data
      setStudentsData(response.data.students);
      console.log(response.data.students);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  const handleChange = (e) => {
    const courseCode = e.target.value;
    setSelectedCourse(courseCode); // Update selected course state
    console.log("Selected course:", courseMapping[courseCode]); // Log the course name
  };

  useEffect(() => {
    // Navigate to "/take-attendance" route when studentsData state is updated
    if (studentsData.length > 0) {
      navigate("/take-attendance", { state: { studentsData, selectedCourse } });
    }
  }, [studentsData, navigate, selectedCourse]);

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-400">
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="w-64 p-10 bg-white rounded-lg shadow-md"
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
          <div className="flex justify-center w-full ">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md py-2 px-4 mt-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Attendance;
