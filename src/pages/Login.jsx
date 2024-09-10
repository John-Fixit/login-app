import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthLayout from "../layouts/authLayout/AuthLayout";
import { Input } from "antd";
import CustomButton from "../components/buttons/CustomButton";
import useCustomMessage from "../hooks/useCustomMessage";

const Login = () => {
  //external hooks
  //   const mutation = useStaffLogin();

  const navigate = useNavigate();

  const { showMessage, contextHolder } = useCustomMessage();

  //

  //react hooks=======================

  const [loading, setLoading] = useState(false);

  //

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    trigger,
    reset,
    getValues,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    const json = {
      email: data.email,
      password: data.password,
    };

    console.log(json);

    // mutation.mutate(json)
  };

  const handleChange = (e, fieldName) => {
    const value = e.target.value;

    setValue(fieldName, value);
    trigger(fieldName); // Trigger validation after setting value
  };

  //   //useEffect for mutation
  //   useEffect(()=>{
  //     if (mutation.isPending) {
  //       setLoading(true);
  //     } else if (mutation.isSuccess) {
  //       setLoading(false);
  //       let response = mutation?.data?.data

  //       localStorage.setItem('staffAccessToken', response?.data?.accessToken);
  //       localStorage.setItem('staffRefreshToken', response?.data?.refreshToken);

  //       // handleClick("Login successful", "success")
  //       navigate(ROUTES.dashboard)

  //     } else if (mutation.isError) {
  //       setLoading(false);
  //       let message = mutation?.error?.response?.data?.message
  //       let message2 = mutation?.error?.message
  //       showMessage("error", message??message2)

  //     }
  //   }, [mutation.status])

  return (
    <>
      <AuthLayout>
        <main className=" p-5 mx-4 rounded-lg bg-white">
          <p className="text-[#131842] text-center font-[600] text-[24px]">
            Login
          </p>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-x-5">
              <div className="m">
                <label
                  htmlFor="email"
                  className="font-[400] text-[14px] text-white"
                >
                  Email Address
                </label>
                <Input
                  name="email"
                  value={getValues("email")}
                  type="email"
                  placeholder="Enter Email"
                  size={"large"}
                  className={`text-[16px] ${errors.email ? "error" : ""}`}
                  status={errors.email ? "error" : ""}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  onChange={(e) => handleChange(e, "email")}
                />
                <p>
                  <small style={{ fontSize: "13px" }} className="text-red-500">
                    {errors.email && errors.email.message}
                  </small>
                </p>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="font-[400] text-[16px] text-white">
                  Password
                </label>
                <Input.Password
                  name="password"
                  value={getValues("password")}
                  type="password"
                  placeholder="Enter password"
                  size={"large"}
                  className={`text-[14px] ${errors.password ? "error" : ""}`}
                  status={errors.password ? "error" : ""}
                  {...register("password", {
                    required: "password is required",
                  })}
                  onChange={(e) => handleChange(e, "password")}
                />
                <p>
                  <small style={{ fontSize: "13px" }} className="text-red-500">
                    {errors.password && errors.password.message}
                  </small>
                </p>
              </div>
            </div>

            <div className="mt-12 mb-6 flex flex-col gap-y-2 gap-x-3 max-w-lg mx-auto">
              <CustomButton
                className={"w-full"}
                type={"submit"}
                loading={loading}
              >
                Login
              </CustomButton>
              <p className="font-[500] text-center cursor-pointer text-[14px]">
                <Link to={""} className="text-decoration-none">
                  Forgotten password?
                </Link>
              </p>
            </div>
          </form>
        </main>
      </AuthLayout>

      {contextHolder}
    </>
  );
};

export default Login;
