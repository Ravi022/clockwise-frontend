import React from "react";
import { TeacherLogin } from "./TeacherLogin";
export default function Teacher() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-400">
      <div className="w-96">
        <TeacherLogin />
      </div>
    </div>
  );
}
