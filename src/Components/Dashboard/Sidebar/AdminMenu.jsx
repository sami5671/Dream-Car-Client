import MenuItem from "./MenuItem";
import { PiUsersThreeFill } from "react-icons/pi";
import { GiHomeGarage } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";

const AdminMenu = () => {
  return (
    <div>
      <MenuItem
        icon={MdDashboard}
        label="Dashboard"
        address="admin-dashboard"
      />
      <MenuItem
        icon={PiUsersThreeFill}
        label="Manage Users"
        address="manage-users"
      />
      <MenuItem
        icon={GiHomeGarage}
        label="User Added Cars"
        address="user-car-accept"
      />
      <hr />
    </div>
  );
};

export default AdminMenu;
