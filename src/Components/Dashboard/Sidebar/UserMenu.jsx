import MenuItem from "./MenuItem";
import { GiHomeGarage } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { MdCarCrash } from "react-icons/md";

const UserMenu = () => {
  return (
    <>
      <MenuItem icon={MdDashboard} label="Dashboard" address="my-dashboard" />
      <MenuItem
        icon={MdCarCrash}
        label="Sell Your Car"
        address="add-user-car"
      />
      <MenuItem icon={GiHomeGarage} label="My Garage" address="user-garage" />
      <MenuItem
        icon={FaShippingFast}
        label="My Shipping"
        address="my-shipping"
      />
      <hr />
      <hr />
    </>
  );
};

export default UserMenu;
