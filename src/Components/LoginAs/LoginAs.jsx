import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginAs() {
  const navigate = useNavigate();

  const handleTeacherLogin = () => {
    navigate("/TeacherLogin");
  };

  const handleStudentLogin = () => {
    navigate("/Student-Login");
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-opacity-50 bg-gray-800">
      <div className="bg-white rounded-lg p-8 max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login As</h2>
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l"
            onClick={handleTeacherLogin}
          >
            Teacher
          </button>
          <button
            type="button"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-r"
            onClick={handleStudentLogin}
          >
            Student
          </button>
        </div>
      </div>
    </div>
  );
}
