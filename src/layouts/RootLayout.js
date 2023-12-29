import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <div class="container">
      <div className="header    ">
        <Navbar />
      </div>
      <div className="sidebar bg-01 bg-01-shadow">
        <SideBar />
      </div>
      <div className="main ">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
