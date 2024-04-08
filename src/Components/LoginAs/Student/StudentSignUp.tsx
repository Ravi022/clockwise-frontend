import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "../../Login/ui/label";
import { Input } from "../../Login/ui/input";
import axios from "axios";

export default function StudentSignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/register/",
        {
          name,
          department,
          rollNumber,
          email,
          password,
          cat: "Student",
        }
      );
      console.log("Signup successful:", response.data.message);
      setSuccessMessage("Signup successful. Redirecting to login page...");
      setTimeout(() => {
        navigate("/Student-Login");
      }, 2000);
    } catch (error) {
      console.error("Signup error:", error.response.data.error);
      setErrorMessage(error.response.data.error);
    }
  };

  const handleLoginClick = () => {
    navigate("/Student-Login");
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-400">
      <div className="w-96 p-5 z-10">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-lg p-4 md:p-8 shadow-input bg-white">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Student SignUp
          </h2>
          <form className="my-8" onSubmit={handleSubmit}>
            {successMessage && (
              <div className="absolute top-0 right-0 bg-green-500 text-white p-2 rounded-md mb-4 text-center">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="text-red-500 mb-4">{errorMessage}</div>
            )}
            <LabelInputContainer>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                placeholder="Enter your department (CSE/ECE)"
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="mt-1"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="rollNumber">Roll Number</Label>
              <Input
                id="rollNumber"
                placeholder="Enter your roll number"
                type="text"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                className="mt-1"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                Register
              </button>
              <button
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
                type="button"
                onClick={handleLoginClick}
              >
                Login
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
