import React from "react";

function Navbar() {
  return (
    <>
      <div className="flex items-center bg-04-shadow  p-[10px] justify-between">
        <div className="flex flex-grow">
          <div className="search-bar flex flex-row bg-03-shadow">
            <div className="flex flex-row">
              <span className="ml-5 mt-1">
                <img src="/images/search-normal.svg" alt="search" />
              </span>
              <input
                className="ml-2 input-01"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>

        <span className="">
          <img src="/images/img-01.svg" alt="notification" />
        </span>

        <div className="flex flex-col p-[10px]">
          <span className="text-02 mt-[10px]">John Doe</span>
          <span className="text-03">Admin</span>
        </div>

        <span className="">
          <img src="/images/admin.svg" alt="admin" />
        </span>
      </div>
    </>
  );
}

export default Navbar;
