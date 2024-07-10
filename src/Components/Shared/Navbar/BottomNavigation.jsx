import home from "../../../assets/Images/home1.png";
import car from "../../../assets/Images/cars1.png";
import profile from "../../../assets/Images/user.png";
import { NavLink } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <div className="btm-nav h-14 mt-10 shadow-xl">
      <NavLink to="/">
        <button className="items-center flex flex-col justify-center">
          <img src={home} className="w-[25px]" alt="" />
          <span className="btm-nav-label font-semibold">Home</span>
        </button>
      </NavLink>
      <NavLink to="/carCollection">
        <button className="items-center flex flex-col justify-center">
          <img src={car} className="w-[25px]" alt="" />
          <span className="btm-nav-label font-semibold">Cars</span>
        </button>
      </NavLink>
      <button className="items-center flex flex-col justify-center">
        <img src={profile} className="w-[25px]" alt="" />
        <span className="btm-nav-label font-semibold">Profile</span>
      </button>
    </div>
  );
};

export default BottomNavigation;
