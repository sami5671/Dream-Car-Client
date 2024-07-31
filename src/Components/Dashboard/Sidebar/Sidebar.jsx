import { useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { IoCarSport } from "react-icons/io5";

import { MdMenu } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import useAuth from "../../../Hooks/UseAuth";
import Logo2 from "../../Shared/Logo2";
import MenuItem from "./MenuItem";
import ModeratorMenu from "./ModeratorMenu";
import UserMenu from "./UserMenu";
import AdminMenu from "./AdminMenu";
import UseAdmin from "../../../Hooks/UseAdmin";
import UseModerator from "../../../Hooks/UseModerator";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const [isAdmin] = UseAdmin();
  const [isModerator] = UseModerator();
  // console.log(isAdmin);
  // =================================================================
  const handleToggle = () => {
    setActive(!isActive);
  };
  // =================================================================
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Logo2 />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <MdMenu className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 rounded-lg justify-center items-center mx-auto">
              <Logo2 />
            </div>
            <hr />
            <hr />
            <hr />
          </div>

          <div>
            <h1>
              {isAdmin ? (
                <p className="text-center text-purple-700 font-bold">Admin</p>
              ) : isModerator ? (
                <p className="text-center text-purple-700 font-bold">
                  Moderator
                </p>
              ) : (
                <p className="text-center text-purple-700 font-bold"></p>
              )}
            </h1>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-1">
            {/* If a user is host */}
            {/* {role === "host" ? <ToggleBtn toggleHandler={toggleHandler} /> : ""} */}
            <nav>
              {isAdmin ? (
                <AdminMenu />
              ) : isModerator ? (
                <ModeratorMenu />
              ) : (
                <UserMenu />
              )}

              <MenuItem icon={FaHome} label="Home" address="/" />
              <MenuItem
                icon={IoCarSport}
                label="All Cars"
                address="/carCollection"
              />
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <MenuItem
            icon={IoSettingsSharp}
            label="Profile"
            address="/dashboard/my-profile"
          />
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-purple-400   hover:text-white transition-colors duration-300 transform"
          >
            <RiLogoutCircleLine />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
