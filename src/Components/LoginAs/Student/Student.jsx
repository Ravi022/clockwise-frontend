import React from "react";
import StudentLogin from "./StudentLogin";

export default function Student() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-400">
      <div className="w-96">
        <StudentLogin />
      </div>
    </div>
  );
}
