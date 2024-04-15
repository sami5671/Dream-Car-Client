import { useState } from "react";
import { FaCar } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import userDefaultImg from "../../../assets/Images/UserDefault.jpg";
import { Link } from "react-router-dom";
import Login from "../../../Pages/Login/Login";
import SignUp from "../../../Pages/SignUp/SignUp";
import useAuth from "../../../Hooks/UseAuth";

const MenuDropdown = () => {
  // ----------------------------------------------------------------
  const { user, logOut } = useAuth;
  const [isOpen, setIsOpen] = useState(false);

  console.log(user);
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
        <div className="">
          <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-[10px] lg:text-sm font-semibold rounded-full transition">
            <span className="flex items-center gap-2 ">
              Request for Member <FaCar className="text-cyan-500" />
            </span>
          </button>
        </div>

        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
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
                <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer">
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
