import UserBarChart from "./UserBarChart";
import UserPieChart from "./UserPieChart";
import { IoBarChartOutline } from "react-icons/io5";

const UserDashboardStatistics = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:gap-0 gap-16 bg-gradient-to-tl from-black via-slate-700 to-black rounded-2xl py-2">
      <div className="w-full lg:w-1/2">
        <h1 className="mb-8 px-4 text-xl font-semibold text-white flex gap-2 items-center">
          Sales Report in 2024 <IoBarChartOutline />
        </h1>
        <UserBarChart />
      </div>
      <div style={{ width: "50%" }}>
        <UserPieChart />
      </div>
    </div>
  );
};

export default UserDashboardStatistics;
