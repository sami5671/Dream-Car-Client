import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import allCars from "../../../assets/Images/garage.png";
import userDefaultImg from "../../../assets/Images/userlogo.gif";
import { Link } from "react-router-dom";
import Login from "../../../Pages/Login/Login";
import SignUp from "../../../Pages/SignUp/SignUp";
import useAuth from "../../../Hooks/UseAuth";
import { MdOutlineDashboard } from "react-icons/md";
import { RiLoginCircleFill, RiLogoutCircleLine } from "react-icons/ri";
import "./MenuDropdown.css";
import { FaUser } from "react-icons/fa6";
import { IoIosMan } from "react-icons/io";
import UseUserFavoriteCar from "../../../Hooks/UseUserFavoriteCar";
import UseAdmin from "../../../Hooks/UseAdmin";
import UseModerator from "../../../Hooks/UseModerator";

const MenuDropdown = () => {
  // ----------------------------------------------------------------
  const { user, logOut } = useAuth();
  const [isAdmin] = UseAdmin();
  const [isModerator] = UseModerator();
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

        {/* ========navbar for large screen========= */}

        {/* ================= */}

        {/* garage all car */}
        <Link to="/carCollection">
          <div className="cursor-pointer">
            <img className="" height="30" width="30" src={allCars} alt="" />
          </div>
        </Link>
        {/* garage all car */}
        {/* Dropdown btn */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="animate-spinner rounded-full"
          >
            <div className="">
              <img
                className="rounded-full"
                referrerPolicy="no-referrer"
                src={user && user.photoURL ? user.photoURL : userDefaultImg}
                alt="profile"
                height="40"
                width="40"
              />
            </div>
          </div>
          {user ? (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border-2"
            >
              <li>
                {isAdmin ? (
                  <Link to="/dashboard/admin-dashboard">
                    <button className="text-purple-700 hover:text-black hover:font-bold">
                      <span className="flex items-center gap-2">
                        <MdOutlineDashboard />
                        Dashboard
                      </span>
                    </button>
                  </Link>
                ) : isModerator ? (
                  <Link to="/dashboard/moderator-dashboard">
                    <button className="text-purple-700 hover:text-black hover:font-bold">
                      <span className="flex items-center gap-2">
                        <MdOutlineDashboard />
                        Dashboard
                      </span>
                    </button>
                  </Link>
                ) : (
                  <Link to="/dashboard/user-dashboard">
                    <button className="text-purple-700 hover:text-black hover:font-bold">
                      <span className="flex items-center gap-2">
                        <MdOutlineDashboard />
                        Dashboard
                      </span>
                    </button>
                  </Link>
                )}
              </li>
              <li>
                <Link to="/dashboard/my-profile">
                  <button className="text-purple-700 hover:text-black hover:font-bold">
                    <span className="flex items-center gap-2">
                      <FaUser /> Profile
                    </span>
                  </button>
                </Link>
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
              className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow-2xl border-2 bg-base-100 rounded-box w-52"
            >
              <li>
                <button
                  onClick={openLoginModal}
                  className="text-purple-500 font-semibold hover:text-black"
                >
                  <RiLoginCircleFill />
                  Login
                </button>
              </li>
              <li>
                <button
                  onClick={openSignUpModal}
                  className="text-purple-500 font-semibold hover:text-black"
                >
                  <IoIosMan />
                  Sign Up
                </button>
              </li>
            </ul>
          )}
        </div>
        {/* for save car */}
        <Link to="/userFavoriteCar">
          <div className="">
            <span className="text-white">
              <FaRegHeart className="text-xl lg:text-2xl cursor-pointer" />
            </span>
            {favoriteCar.length > 0 ? (
              <div className="absolute">
                <span className="flex flex-col justify-center items-center font-semibold px-2 -mt-[30px] lg:-mt-[36px] ml-3 lg:ml-4 bg-white text-black rounded-badge">
                  {favoriteCar.length}
                </span>
              </div>
            ) : (
              " "
            )}
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
