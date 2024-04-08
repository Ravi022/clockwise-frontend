import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function TeacherLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });
      console.log("Login successful:", response.data.message);
      navigate("/attendance-page");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleSignUpClick = () => {
    console.log("Sign Up button clicked");
    navigate("/Teacher-Signup");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Teacher Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              placeholder="xyz@iiitg.ac.in"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md px-3 py-2 mt-1 w-full"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-md px-3 py-2 mt-1 w-full"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              className="bg-blue-500 text-white rounded-md py-2 px-6 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              type="submit"
            >
              Login
            </button>
            <button
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              type="button"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
