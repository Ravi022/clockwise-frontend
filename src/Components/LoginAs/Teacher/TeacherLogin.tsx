import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Label } from "../../Login/ui/label";
import { Input } from "../../Login/ui/input";
import { LabelInputContainer } from "../../Login/ui/labelInputContainer"; // Import LabelInputContainer

export function TeacherLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/login/", {
        email: email,
        password: password,
        cat: "Faculty",
      });
      console.log("Login successful:", response.data);
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
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="xyz@iiitg.ac.in"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md px-3 py-2  w-full"
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-md px-3 py-2  w-full"
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
