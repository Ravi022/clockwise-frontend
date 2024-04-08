import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Layout from "./Layout";
import LoginAs from "./Components/LoginAs/LoginAs";
import Teacher from "./Components/LoginAs/Teacher/Teacher";
import StudentLogin from "./Components/LoginAs/Student/StudentLogin";
import TeacherSignup from "./Components/LoginAs/Teacher/TeacherSignup";
import Attendance from "./Components/Attendance/Attendance";
import Student from "./Components/LoginAs/Student/Student";
import StudentSignUp from "./Components/LoginAs/Student/StudentSignUp";
import TakeAttendance from "./Components/Attendance/TakeAttendance";
// import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/login-as", element: <LoginAs /> },
      {
        path: "/TeacherLogin",
        element: <Teacher />,
        // children: [{ path: "/attendance-page", element: <Attendance /> }],
      },
      {
        path: "/attendance-page",
        element: <Attendance />,
      },
      { path: "/Student-Login", element: <Student /> },
      { path: "/Student-Signup", element: <StudentSignUp /> },
      { path: "/Teacher-Signup", element: <TeacherSignup /> },
      { path: "/take-attendance", element: <TakeAttendance /> },
      { path: "/users", element: <Users /> },
      { path: "/messages", element: <Messages /> },
      { path: "/analytics", element: <Analytics /> },
      { path: "/file-manager", element: <FileManager /> },
      { path: "/order", element: <Order /> },
      { path: "/saved", element: <Saved /> },
      { path: "/settings", element: <Setting /> },
      { path: "*", element: <div>Not found</div> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
