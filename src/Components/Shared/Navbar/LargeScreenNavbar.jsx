import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import useAuth from "../../../Hooks/UseAuth";
import { useState } from "react";
import SignUp from "../../../Pages/SignUp/SignUp";
import registerImg from "../../../assets/Images/registerImg.gif";
import popularCar from "../../../assets/Images/popularCar.gif";
import { RiLogoutCircleLine } from "react-icons/ri";

const LargeScreenNavbar = () => {
  const { user, logOut } = useAuth();
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const location = useLocation();

  const openSignUpModal = () => {
    setIsSignUpOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpOpen(false);
  };

  return (
    <>
      <div className="hidden lg:block w-1/2">
        <ul className="flex items-center gap-10 justify-center text-[16px] font-serif font-semibold text-slate-600">
          {location.pathname === "/" ? (
            <Link to="/">
              <li className="border-purple-600 border-b-2 text-purple-500">
                Home
              </li>
            </Link>
          ) : (
            <Link to="/">
              <li className="hover:border-purple-600 hover:border-b-2 hover:text-purple-500">
                Home
              </li>
            </Link>
          )}
          {location.pathname === "/carCollection" ? (
            <Link to="carCollection">
              <li className="border-purple-600 border-b-2 text-purple-500">
                Explore Cars
              </li>
            </Link>
          ) : (
            <Link to="carCollection">
              <li className="hover:border-purple-600 hover:border-b-2 hover:text-purple-500">
                Explore Cars
              </li>
            </Link>
          )}
          {location.pathname === "/" && (
            <ScrollLink spy={true} smooth={true} to="popular">
              <li className="hover:border-purple-600 hover:border-b-2 hover:text-purple-500 cursor-pointer flex items-center gap-1">
                Popular <img src={popularCar} className="w-[30px]" alt="" />
              </li>
            </ScrollLink>
          )}
          <li className="hover:border-purple-600 hover:border-b-2 hover:text-purple-500">
            About Us
          </li>
          {user ? (
            <li
              onClick={logOut}
              className="hover:border-purple-600 hover:border-b-2 hover:text-purple-500 cursor-pointer flex items-center gap-1"
            >
              LogOut <RiLogoutCircleLine />
            </li>
          ) : (
            <li
              onClick={openSignUpModal}
              className="hover:border-purple-600 hover:border-b-2 hover:text-purple-500 cursor-pointer flex items-center gap-1"
            >
              Register <img src={registerImg} className="w-[20px]" alt="" />
            </li>
          )}
        </ul>
      </div>

      <SignUp
        isSignUpOpen={isSignUpOpen}
        openSignUpModal={openSignUpModal}
        closeSignUpModal={closeSignUpModal}
      />
    </>
  );
};

export default LargeScreenNavbar;
