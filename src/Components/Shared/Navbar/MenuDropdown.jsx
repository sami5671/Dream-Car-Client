import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";
import allCars from "../../../assets/Images/garage.png";
import userDefaultImg from "../../../assets/Images/userlogo.gif";
import { Link } from "react-router-dom";
import Login from "../../../Pages/Login/Login";
import SignUp from "../../../Pages/SignUp/SignUp";
import useAuth from "../../../Hooks/UseAuth";
import "./MenuDropdown.css";

const MenuDropdown = () => {
  // ----------------------------------------------------------------
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // console.log(user);
  // ----------------------------------------------------------------

  // ------------------------Control the login modal----------------------------------------
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };
  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };
  // ------------------------Control the SignUp modal----------------------------------------
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const openSignUpModal = () => {
    setIsSignUpOpen(true);
  };
  const closeSignUpModal = () => {
    setIsSignUpOpen(false);
  };

  // ----------------------------------------------------------------
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Become A Host btn */}

        {/* {user ? (
          <div className="hover:animate-pulse">
            <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-[10px] lg:text-sm font-semibold rounded-full transition">
              <span className="flex items-center gap-2 ">
                Get Membership
                <FaCar className="text-purple-800 " />
              </span>
            </button>
          </div>
        ) : (
          " "
        )} */}

        {/* garage all car */}
        <Link to="/carCollection">
          <div className="cursor-pointer">
            <img className="" height="30" width="30" src={allCars} alt="" />
          </div>
        </Link>
        {/* garage all car */}
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`p-4 md:py-1 md:px-2 rounded-full flex flex-row items-center gap-3 cursor-pointer  transition ${
            user ? " " : " "
          }`}
        >
          <div className="animate-spinner rounded-full ">
            {/* Avatar */}
            <img
              className="rounded-full"
              referrerPolicy="no-referrer"
              src={user && user.photoURL ? user.photoURL : userDefaultImg}
              alt="profile"
              height="30"
              width="30"
            />
          </div>
        </div>
        {/* for save car */}
        <div className="">
          <span className="text-purple-800">
            <FaRegHeart className="text-xl lg:text-2xl cursor-pointer" />
          </span>

          <div className="absolute">
            <p className="flex flex-col justify-center items-center font-semibold -mt-[30px] lg:-mt-[36px] ml-3 lg:ml-4 bg-purple-600 text-white w-4 h-4 lg:w-5 lg:h-5 rounded-badge">
              1
            </p>
          </div>
        </div>
        {/* for save car */}
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>

            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Dashboard
                </Link>
                <div
                  onClick={logOut}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={openLoginModal}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </button>
                <button
                  onClick={openSignUpModal}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
      {/* <HostRequestModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        modalHandler={modalHandler}
      /> */}
      <Login
        isLoginOpen={isLoginOpen}
        openLoginModal={openLoginModal}
        closeLoginModal={closeLoginModal}
      />
      <SignUp
        isSignUpOpen={isSignUpOpen}
        openSignUpModal={openSignUpModal}
        closeSignUpModal={closeSignUpModal}
      />
    </div>
  );
};

export default MenuDropdown;
