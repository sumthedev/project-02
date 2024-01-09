function Login({ onLogin }) {
  const handleClick = (e) => {
    e.preventDefault(e);
    alert("Registration Process on working. Please Login");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-10 border-2 border-gray-300 rounded-md w-[400px]">
        <div className="flex justify-between items-center border-b-2 border-gray-300 pb-2 mb-4">
          <span className="text-lg font-bold p-[10px]">
            <img src="/images/logo.png" alt="logo" />
          </span>
        </div>
        <div className="flex flex-col p-[10px]">
          <form>
            <label className="flex flex-col mb-4">
              <span className="p-[10px] font-semibold">Name</span>
              <input
                id="nameInput"
                className="border border-gray-200 py-2 px-3 rounded-md"
                type="text"
                name="name"
                required
                placeholder="John Doe"
              />
            </label>
            <label className="flex flex-col mb-4">
              <span className=" p-[10px] font-semibold">Email</span>
              <input
                className="border border-gray-200 py-2 px-3 rounded-md"
                type="text"
                name="email"
                required
                placeholder="johndoe@gmail.com"
              />
            </label>
            <div className="flex justify-between p-[10px]">
              <button
                onClick={onLogin}
                className="button-form w-[45%] h-12 border border-gray-300 rounded-md mr-2"
              >
                Login
              </button>
              <button
                onClick={handleClick}
                className="button-form w-[45%] h-12 border border-gray-300 rounded-md ml-2"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
