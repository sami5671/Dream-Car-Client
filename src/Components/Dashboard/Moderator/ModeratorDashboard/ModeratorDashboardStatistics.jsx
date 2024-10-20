import { IoBarChartOutline, IoPieChartSharp } from "react-icons/io5";
import ModeratorBarChartCarType from "./ModeratorBarChartCarType";
import ModeratorPieChart from "./ModeratorPieChart";

const ModeratorDashboardStatistics = () => {
  return (
    <div className="flex bg-gradient-to-tl from-black via-slate-700 to-black text-white py-6 rounded-3xl">
      <div className="w-2/3 h-[340px]">
        <h1 className="mb-8 px-4 text-xl font-semibold text-white flex gap-2 items-center">
          Types Of Car Categories <IoBarChartOutline />
        </h1>
        <ModeratorBarChartCarType />
      </div>

      <div className="h-[340px]" style={{ width: "30%" }}>
        <h1 className="mb-2 px-4 text-xl font-semibold text-white flex gap-2 items-center">
          <span className="flex items-center gap-2">
            Percentage of Car Types %<IoPieChartSharp className="mt-1" />
          </span>
        </h1>
        <ModeratorPieChart />
      </div>
    </div>
  );
};

export default ModeratorDashboardStatistics;
