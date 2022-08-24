import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userCheck } from "../../Store/userAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, isSuccess, errorMessage, isFetching, user } = useSelector(
    (state) => state.userAuth
  );
  const { username, password } = data;

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
    }
    if (isFetching) {
      toast.info("is fetching...");
    }

    if (isSuccess || user) {
      navigate("/account");
      toast.success("süper");
    }
  }, [isError, isSuccess, user, isFetching, navigate, errorMessage]);

  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  const go = () => {
    const user = {
      username,
      password,
    };

    dispatch(userCheck(user));
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      >
        {toast} 
      </ToastContainer>
      <div className="container">
        <div className="flex items-center justify-center min-h-screen">
          <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
            <div className="flex justify-center">
              <NavLink to={"/"}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxYHtHfZpE0uwrQlNjwA5YBKaTykHPBFaD63RzN3lXLsAvu4vnJLOxiHUNsXeLUPIddE&usqp=CAU"
                  alt="ekinoks"
                />
              </NavLink>
            </div>
            <h3 className="text-2xl font-bold text-center">
              Login to your account
            </h3>
            <div>
              <div className="mt-4">
                <div>
                  <label className="block">Email</label>
                  <input
                    type="text"
                    placeholder="username"
                    name="username"
                    value={username}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    onChange={onChange}
                  />
                  <span className="text-xs tracking-wide text-red-600 d-none">
                    Email field is required
                  </span>
                </div>
                <div className="mt-4">
                  <label className="block">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    onChange={onChange}
                  />
                </div>
                <div className="flex items-baseline justify-between">
                  <button
                    onClick={go}
                    className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                  >
                    Login
                  </button>
                  <NavLink
                    to={"/register"}
                    className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Register
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
