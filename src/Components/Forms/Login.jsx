import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { userCheck } from "../../Api/api";
import { userAuths } from "../../Features/userAuth";
import InputList from "./InputList";
import FormHead from "./FormHead";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError, isFetching } = useSelector(userAuths);
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
            <FormHead />
            <div>
              <div className="mt-4">
                <InputList register={register} errors={errors} />
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
