import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "../../Login/ui/label";
import { Input } from "../../Login/ui/input";
import axios from "axios";
// const dummyResponse = {
//   status: "success",
//   data: {
//     userId: "123456",
//     email: "admin@gmail.com",
//     token: "admin",
//     // Add any other data you want to include in the response
//   },
// };

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/administration/login/",
        {
          email: email,
          password: password,
        }
      );
      // console.log("Login response:", response.data);

      if (response.data.allowed === "yes") {
        // Navigate to the specified URL and send data through it
        navigate("/admin-dashboard", {
          state: { leaveList: response.data.leave_list },
        });
        console.log("Login response:", response.data.leave_list);
      } else {
        // Show error message if access is not allowed
        setError("Access denied. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error.response.data.error);
      setError(error.response.data.error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-96 p-5 z-[10]">
        <div className="max-w-md w-full mx-auto rounded-lg p-4 md:p-8 shadow-input bg-white">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Admin Login
          </h2>
          <form className="my-8" onSubmit={handleSubmit}>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <LabelInputContainer>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=""
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
                className=""
              />
            </LabelInputContainer>
            <div className="flex justify-center items-center mt-2">
              <button
                className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                type="submit"
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
