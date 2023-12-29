import React from "react";
import { Link } from "react-router-dom";

function Form() {
  return (
    <>
      <div className="flex bg-01-shadow flex-col mt-[60px] ml-[255px] w-[510px] h-[486px] ">
        <div
          className="flex mt-[-5px] flex-row w-[510px] h-[51px] bg-white"
          style={{
            borderBottom: "2px solid #EBE9F1",
            marginRight: "10px",
          }}
        >
          <span className="ml-[10px] mt-[15px]">Add new User</span>
          <span className="ml-[355px] mt-[18px]">
            <Link to="/users">
              <img src="/images/Vector.svg" className="" alt="cross" />
            </Link>
          </span>
        </div>
        <div className="flex mt-[95px] ml-[35px] flex-col w-[408px] h-[72px]">
          <form>
            <label>
              <span className="form-name flex ">Name</span>
              <input
                className="form-input mt-[12px]  border-gray-200 py-2 px-3"
                type="text"
                name="name"
                required
                placeholder="John Doe"
              />
            </label>

            <div className="flex mt-[20px]">
              <label>
                <span className="form-name flex ">Email</span>
                <input
                  className="form-input mt-[12px]  border-gray-200 py-2 px-3"
                  type="text"
                  name="email"
                  required
                  placeholder="johndoe@gmail.com"
                />
              </label>
            </div>
            <div className="flex  mt-[45px]">
              <Link to="/users">
                <button className="button-form w-[190px]  h-12  py-2 border-2 border-gray-300 rounded-md mx-2">
                  Cancel
                </button>
              </Link>

              <button className="button-form w-[280px] h-12  py-2 border-2 border-gray-300 rounded-md mx-2">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
