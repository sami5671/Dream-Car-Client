import MenuItem from "./MenuItem";
import { FaPlusCircle } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
import { IoBagAddSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

const ModeratorMenu = () => {
  return (
    <>
      <MenuItem
        icon={MdDashboard}
        label="Dashboard"
        address="moderator-dashboard"
      />
      <MenuItem icon={FaPlusCircle} label="Add Car" address="add-car" />
      <MenuItem
        icon={MdManageHistory}
        label="Manage Car"
        address="manage-car"
      />
      <MenuItem
        icon={IoBagAddSharp}
        label="Manage Order"
        address="manage-order"
      />
      <hr />
      <hr />
    </>
  );
};

export default ModeratorMenu;
