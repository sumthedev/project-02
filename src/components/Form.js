import React from "react";

function Form({ onClose }) {
  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <div className="bg-white ">
        <div
          className="flex mt-[-5px] flex-row  bg-white p-[10px]"
          style={{
            borderBottom: "2px solid #EBE9F1",
            marginRight: "10px",
          }}
        >
          <span className="ml-[10px] mt-[15px]">Add new User</span>
          <span className="ml-[355px] mt-[18px]">
            <button className="button-link" onClick={handleCancel}>
              <img src="/images/Vector.svg" className="" alt="cross" />
            </button>
          </span>
        </div>
        <div className="flex mt-[95px]  ml-[35px] flex-col ">
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
            <div className="flex p-[10px] mt-[45px]">
              <button
                onClick={handleCancel}
                className="button-form w-[190px]  h-12  py-2 border-2 border-gray-300 rounded-md mx-2"
              >
                Cancel
              </button>

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
