import DashboardCard from "../../../Shared/DashboardCard";
import pendingImg from "../../../../assets/Images/pending.gif";
import soldOutImg from "../../../../assets/Images/soldOut.png";
import totalCarImg from "../../../../assets/Images/cars1.png";
import usersImg from "../../../../assets/Images/group.png";
import AdminDashboardUserCard from "../AdminCard/AdminDashboardUserCard";
import AdminDashboardTotalCarsCard from "../AdminCard/AdminDashboardTotalCarsCard";
import UseAllCar from "./../../../../Hooks/UseAllCar";
import UseToGetAllUsers from "../../../../Hooks/UseToGetAllUsers";
import UseToGetSoldCars from "../../../../Hooks/UseToGetSoldCars";
import UseToGetAllUserAddedCar from "../../../../Hooks/UseToGetAllUserAddedCar";

const AdminDashboardCard = () => {
  const [allCar] = UseAllCar();
  const [users] = UseToGetAllUsers();
  const [soldCars] = UseToGetSoldCars();
  const [allUserAddedCar] = UseToGetAllUserAddedCar();

  // console.log(soldCars);

  const totalCars = allCar.length;
  const newCars = allCar.filter((item) => item?.CarCondition === "Brand New");
  const usedCars = allCar.filter((item) => item?.CarCondition === "Used");

  const admin = users.filter((item) => item?.role === "admin");
  const moderator = users.filter((item) => item?.role === "moderator");

  return (
    <div className="flex flex-col lg:flex-row  gap-4 lg:gap-5">
      {/* card s */}
      <AdminDashboardUserCard
        label="Users"
        figure={users.length}
        img={usersImg}
        admin={admin.length}
        moderator={moderator.length}
      />
      <AdminDashboardTotalCarsCard
        label="Total Cars"
        figure={totalCars}
        img={totalCarImg}
        newCar={newCars.length}
        usedCar={usedCars.length}
      />

      <DashboardCard
        label="Pending Car"
        figure={allUserAddedCar.length}
        img={pendingImg}
      />
      <DashboardCard
        label="Sold Out"
        figure={soldCars.length}
        img={soldOutImg}
      />
    </div>
  );
};

export default AdminDashboardCard;
