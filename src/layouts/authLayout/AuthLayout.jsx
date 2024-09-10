import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/informatique.jpg";

const AuthLayout = ({ title, children }) => {
  const navigate = useNavigate();

  const gotoLandingPage = () => {
    // navigate(ROUTES.home)
  };
  return (
    <>
      <main
        className={`bg-[#272c34] bg-cover bg-center w-full h-screen flex justify-center items-center`}
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex flex-col gap-y-8 justify-center items-center mb-5">
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
