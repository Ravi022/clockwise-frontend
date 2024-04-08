import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "../../Login/ui/label";
import { Input } from "../../Login/ui/input";
import axios from "axios";

export default function TeacherSignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/register/",
        {
          name: name,
          id: id,
          email_id: email,
          password: password,
          cat: "Faculty",
        }
      ); // Include name and id
      console.log("Signup successful:", response.data);
      setErrorMessage("");
      navigate("/TeacherLogin");
    } catch (error) {
      console.error("Signup error:", error.response.data.error);
      setErrorMessage(error.response.data.error);
    }
  };

  const handleLoginClick = () => {
    navigate("/TeacherLogin");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-400">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Teacher SignUp
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {errorMessage && (
            <div className="bg-red-500 text-white p-2 rounded-md">
              {errorMessage}
            </div>
          )}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <Label htmlFor="id">ID</Label>
            <Input
              id="id"
              placeholder="Enter your ID"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none"
              type="submit"
            >
              Register
            </button>
            <button
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              type="button"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
