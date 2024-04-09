import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function TakeAttendance() {
  const location = useLocation();
  const navigate = useNavigate();
  const [studentsData, setStudentsData] = useState([]);
  const [selectedCurs, setSelectedCurs] = useState("");
  const [attendanceSubmitted, setAttendanceSubmitted] = useState(false);

  useEffect(() => {
    if (location.state && location.state.studentsData) {
      setStudentsData(location.state.studentsData);
    }
    if (location.state && location.state.selectedCourse) {
      setSelectedCurs(location.state.selectedCourse);
    }
  }, [location.state]);

  const handleAttendanceChange = (index) => {
    const updatedStudentsData = [...studentsData];
    updatedStudentsData[index] = {
      ...updatedStudentsData[index],
      status: updatedStudentsData[index].status ? 0 : 1,
    };
    setStudentsData(updatedStudentsData);
  };

  const handleSubmitAttendance = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/attendance/uploadAttendance/",
        {
          course_name: selectedCurs,
          students: studentsData,
        }
      );
      console.log(response.data);
      setAttendanceSubmitted(true);
    } catch (error) {
      console.error("Error submitting attendance:", error);
    }
  };

  const handleNavigateToHome = () => {
    navigate("/home");
  };

  const handleGoBack = () => {
    navigate(-1); // Go back one step in history
  };

  return (
    <div className="container mx-auto px-4" style={{ maxHeight: "80vh", overflowY: "auto" }}>
      <h1 className="text-3xl font-semibold mb-4">Attendance Page For {selectedCurs}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {studentsData.map((student, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md flex">
            <div className="flex-grow p-4">
              <h2 className="text-xl font-semibold">{student.name}</h2>
              <p className="text-gray-600">Roll No: {student.roll_no}</p>
            </div>
            <div className="my-auto mr-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={student.status === 1}
                  onChange={() => handleAttendanceChange(index)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Attendance</span>
              </label>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmitAttendance}
        className="bg-blue-500 text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit Attendance
      </button>
      {attendanceSubmitted && (
        <SuccessCard handleNavigateToHome={handleNavigateToHome} handleGoBack={handleGoBack} />
      )}
    </div>
  );
}

function SuccessCard({ handleNavigateToHome, handleGoBack }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 shadow-md text-center">
        <div className="text-green-500 text-6xl mb-4">&#10003;</div>
        <div className="text-lg font-semibold mb-4">Attendance Submitted Successfully</div>
        <div className="flex justify-center">
          <button
            onClick={handleNavigateToHome}
            className="bg-blue-500 text-white rounded-md py-2 px-4 mr-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Go to Home
          </button>
          <button
            onClick={handleGoBack}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
