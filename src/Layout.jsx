import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./Components/Sidebar/SideBar";
import TopLogo from "./Components/IIITGLogo/TopLogo";

export default function Layout() {
  return (
    <div className="">
      <TopLogo />
      <hr className="mt-1 border-gray-300" />
      <div className="flex">
        <div>
          <SideBar />
        </div>
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
