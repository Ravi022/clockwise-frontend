import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "../../Login/ui/label";
import { Input } from "../../Login/ui/input";
import { cn } from "../../Login/utils/cn";
import axios from "axios";

export default function TeacherSignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate a successful signup response
      const dummyResponse = { data: { message: "Signup successful" } };
      console.log("Signup successful:", dummyResponse.data.message);
      setSuccessMessage("Signup successful. Redirecting to login page...");
      // Simulate a delay before navigating to login page
      setTimeout(() => {
        navigate("/TeacherLogin");
      }, 2000); // 2000 milliseconds (2 seconds)
    } catch (error) {
      // If signup fails, display error message
      console.error("Signup error:", error);
      // Handle signup error here
    }
  };

  const handleLoginClick = () => {
    navigate("/TeacherLogin");
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-400 ">
        <div className="w-96">
          <div className="h-[300px] max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <form className="my-8" onSubmit={handleSubmit}>
              {successMessage && (
                <div className="absolute top-0 right-0 bg-green-500 text-white p-2 rounded-md mt-4 mr-4">
                  {successMessage}
                </div>
              )}
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  Register
                </button>
                <button
                  className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
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
