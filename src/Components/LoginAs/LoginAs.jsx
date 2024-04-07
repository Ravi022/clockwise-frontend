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
    <div>
      <div className="h-full flex justify-center items-center">
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={handleTeacherLogin}
        >
          Teacher
        </button>
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={handleStudentLogin}
        >
          Student
        </button>
      </div>
    </div>
  );
}
