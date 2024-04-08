import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "../../Login/ui/label";
import { Input } from "../../Login/ui/input";
import axios from "axios";

export default function StudentLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // Change rollNumber to email
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password }); // Change rollNumber to email
      console.log("Login successful:", response.data.message);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error.response.data.error);
      setError(error.response.data.error);
    }
  };

  const handleSignUpClick = () => {
    navigate("/Student-Signup");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-96 p-5 z-[10]">
        <div className="max-w-md w-full mx-auto rounded-lg p-4 md:p-8 shadow-input bg-white">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Student Login
          </h2>
          <form className="my-8" onSubmit={handleSubmit}>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <LabelInputContainer>
              <Label htmlFor="email">Email</Label>{" "}
              {/* Change Roll Number to Email */}
              <Input
                id="email" // Change rollNumber to email
                placeholder="Enter your email" // Change Roll Number to Email
                type="text" // Change text to email
                value={email} // Change rollNumber to email
                onChange={(e) => setEmail(e.target.value)} // Change rollNumber to email
                className="mt-1"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
              />
            </LabelInputContainer>
            <div className="flex justify-between items-center">
              <button
                className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
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
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};
