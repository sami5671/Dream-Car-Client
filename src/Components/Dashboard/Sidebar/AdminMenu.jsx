import MenuItem from "./MenuItem";
import { PiUsersThreeFill } from "react-icons/pi";

const AdminMenu = () => {
  return (
    <div>
      <MenuItem
        icon={PiUsersThreeFill}
        label="Manage Users"
        address="manage-users"
      />
      <hr />
      <hr />
    </div>
  );
};

export default AdminMenu;
