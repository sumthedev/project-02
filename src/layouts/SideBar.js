import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <>
      <div className=" sidebar-container w-[260px] h-[300px] font-01 flex flex-col justify-evenly flex-wrap content-center">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="logo" />
          <img src="/images/logo-icon.svg" alt="icon" className="ml-3" />
        </div>

        <div>
          <NavLink to="/" className="flex items-center">
            <span className="ml-2 ">
              <img src="/images/dashboard.svg" alt="icon" />
            </span>
            <span className="ml-[10px]">Dashboard</span>
          </NavLink>
        </div>

        <div>
          <NavLink to="/users" className="flex items-center">
            <span className="ml-2">
              <img src="/images/user.svg" alt="icon" />
            </span>
            <span className="ml-[10px]">Users</span>
          </NavLink>
        </div>

        <div>
          <NavLink to="/events" className="flex items-center">
            <span className="ml-2">
              <img src="/images/events.png" alt="icon" />
            </span>
            <span className="ml-[10px]">Events</span>
          </NavLink>
        </div>

        <div>
          <NavLink to="/messages" className="flex items-center">
            <span className="ml-2">
              <img src="/images/messages.svg" alt="icon" />
            </span>
            <span className="ml-[10px]">Messages</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SideBar;
