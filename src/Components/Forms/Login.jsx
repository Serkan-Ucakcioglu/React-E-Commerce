import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userCheck } from "../../Store/userAuth";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, isFetching } = useSelector((state) => state.userAuth);
  let user = localStorage.getItem("user") == null ? false : true;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => dispatch(userCheck(data));

  useEffect(() => {
    if (isError) {
      toast.error("Kullanıcı Adı Veya Parola Yanlış");
    }
    if (isFetching) {
      toast.info("is fetching...");
    }

    if (user) {
      navigate("/account");
      toast.success("süper");
    }
  }, [isError, user, isFetching, navigate]);

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
        theme="colored"
        draggable
        pauseOnHover
      >
        {toast}
      </ToastContainer>
      <div className="container">
        <div className="flex items-center justify-center mt-60">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-8 py-6 mt-4 text-left bg-white shadow-lg"
          >
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
                    {...register("username", {
                      required: 'required !',
                      minLength: {
                        value: 4,
                        message: "Minimum Length 4!",
                      },
                      maxLength: {
                        value: 20,
                        message: "Maximum Length 4!",
                      },
                    })}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                 
                    <div className="text-red-500">{errors.username?.message}</div>
                  
                </div>
                <div className="mt-4">
                  <label className="block">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: 'required!',
                      minLength: {
                        value: 7,
                        message: 'Minimum Length 7!'
                      },
                      maxLength: {
                        value: 15,
                        message: 'Maximum Length 15!'
                      },
                     pattern: /^[A-Za-z]+$/i 
                    })}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                 
                    <div className="text-red-500">{errors.password?.message}</div>
                
                </div>
                <div className="flex items-baseline justify-between">
                  <button
                    onClick={handleSubmit(onSubmit)}
                    type="submit"
                    className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
