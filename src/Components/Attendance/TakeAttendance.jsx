import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function TakeAttendance() {
  const location = useLocation();
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
    console.log({
      course_name: selectedCurs,
      students: studentsData,
    });
    try {
      await axios.post("http://127.0.0.1:8000/attendance/uploadAttendance/", {
        course_name: selectedCurs,
        students: studentsData,
      });
      setAttendanceSubmitted(true);
    } catch (error) {
      console.error("Error submitting attendance:", error);
    }
  };

  return (
    <div
      className="container mx-auto px-4"
      style={{ maxHeight: "80vh", overflowY: "auto" }}
    >
      <h1 className="text-3xl font-semibold mb-4">
        Attendance Page For {selectedCurs}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {studentsData.map((student, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md flex">
            {/* <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="rounded-full my-auto ml-4"
            /> */}
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
        <div className="text-green-600 font-semibold mt-2">
          Attendance Submitted Successfully
        </div>
      )}
    </div>
  );
}
