import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "../../Login/ui/label";
import { Input } from "../../Login/ui/input";
import { cn } from "../../Login/utils/cn";

// Dummy backend data
const dummyUserData = {
  rollNumber: "xyz@iitg.ac.in",
  password: "1234",
};

export default function StudentLogin() {
  const navigate = useNavigate();
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate backend login with dummy data
      if (
        rollNumber === dummyUserData.rollNumber &&
        password === dummyUserData.password
      ) {
        // If login successful, navigate to dashboard
        navigate("/dashboard");
      } else {
        throw new Error("Invalid roll number or password");
      }
    } catch (error) {
      // If login fails, display error message
      console.error("Login error:", error.message);
      setError(error.message);
    }
  };

  const handleSignUpClick = () => {
    navigate("/Student-Signup");
  };

  return (
    <div>
      <div className="h-[300px] max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <form className="my-8" onSubmit={handleSubmit}>
          {error && <div className="text-red-500">{error}</div>}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="rollNumber">Roll Number</Label>
            <Input
              id="rollNumber"
              placeholder="Enter your roll number"
              type="text"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </LabelInputContainer>
          <div className="flex space-x-4">
            <button
              className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600 focus:outline-none focus:bg-red-600"
              type="submit"
            >
              Login
            </button>
            <button
              className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
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

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("mb-4", className)}>{children}</div>;
};
