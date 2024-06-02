import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import allCars from "../../../assets/Images/garage.png";
import userDefaultImg from "../../../assets/Images/userlogo.gif";
import { Link } from "react-router-dom";
import Login from "../../../Pages/Login/Login";
import SignUp from "../../../Pages/SignUp/SignUp";
import useAuth from "../../../Hooks/UseAuth";
import { MdOutlineDashboard } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import "./MenuDropdown.css";
import { FaUser } from "react-icons/fa6";
import UseUserFavoriteCar from "../../../Hooks/UseUserFavoriteCar";

const MenuDropdown = () => {
  // ----------------------------------------------------------------
  const { user, logOut } = useAuth();

  const [favoriteCar] = UseUserFavoriteCar();
  // console.log(favoriteCar.length);

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
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-circle avatar">
            <div className="w-10 rounded-full animate-spinner">
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
          {user ? (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border-2"
            >
              <li>
                <button className="text-purple-700 hover:text-black hover:font-bold">
                  <span className="flex items-center gap-2">
                    <FaUser /> Profile
                  </span>
                </button>
              </li>
              <li>
                <button className="text-purple-700 hover:text-black hover:font-bold">
                  <span className="flex items-center gap-2">
                    <MdOutlineDashboard />
                    Dashboard
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={logOut}
                  className="text-purple-700 hover:text-black hover:font-bold"
                >
                  <span className="flex items-center gap-2">
                    <RiLogoutCircleLine />
                    Logout
                  </span>
                </button>
              </li>
            </ul>
          ) : (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-12 z-[1] p-2 shadow-xl bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={openLoginModal}>Login</button>
              </li>
              <li>
                <button onClick={openSignUpModal}>Sign Up</button>
              </li>
            </ul>
          )}
        </div>
        {/* for save car */}
        <Link to="/userFavoriteCar">
          <div className="">
            <span className="text-purple-800">
              <FaRegHeart className="text-xl lg:text-2xl cursor-pointer" />
            </span>
            <div className="absolute">
              <p className="flex flex-col justify-center items-center font-semibold -mt-[30px] lg:-mt-[36px] ml-3 lg:ml-4 bg-purple-600 text-white w-4 h-4 lg:w-5 lg:h-5 rounded-badge">
                {favoriteCar.length}
              </p>
            </div>
          </div>
        </Link>
        {/* for save car */}
      </div>

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
