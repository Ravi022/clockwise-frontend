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
  const handleStudentLogin1 = () => {
    navigate("/Admin-Login");
  };

  return (
    <div className="absolute w-full h-full bg-gradient-to-r from-green-400 to-blue-400">
      <div className="relative w-full h-full  inset-0 flex justify-center items-center z-50 bg-opacity-50">
        <div className="bg-white rounded-lg p-8 max-w-md">
          <h2 className="text-2xl font-bold mb-4 flex justify-center p-3">
            Login As
          </h2>
          <div className="flex justify-between gap-3 rounded ">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l shadow-md"
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
            <button
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-r"
              onClick={handleStudentLogin1}
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
