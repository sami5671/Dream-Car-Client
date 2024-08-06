import { IoBarChartOutline } from "react-icons/io5";
import AdminBarChartCarType from "./AdminBarChartCarType";
import AdminBarChartSales from "./AdminBarChartSales";

const AdminDashboardStatistics = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-0 bg-gradient-to-tl from-black via-slate-700 to-black text-white py-6 rounded-3xl">
        <div className="w-full lg:w-1/2">
          <h1 className="mb-8 px-4 text-xl font-semibold flex gap-2 items-center">
            Sales Report in 2024 <IoBarChartOutline />
          </h1>
          <AdminBarChartSales />
        </div>
        <div className="h-[340px]" style={{ width: "50%" }}>
          <h1 className="mb-8 px-4 text-xl font-semibold flex gap-2 items-center">
            Statistics of Car Categories <IoBarChartOutline />
          </h1>
          <AdminBarChartCarType />
        </div>
      </div>
    </>
  );
};

export default AdminDashboardStatistics;
