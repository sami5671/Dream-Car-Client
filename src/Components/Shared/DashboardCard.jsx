const DashboardCard = ({ label, img, figure }) => {
  return (
    <>
      <div className="flex items-center py-8 pl-6 pr-20 bg-base-50 border-2 border-slate-100 rounded-xl  shadow-lg gap-5">
        <div>
          <img src={img} className="w-[30px]" alt="" />
        </div>
        <div>
          <p className="font-semibold text-slate-500">{label}</p>
          <p className="text-purple-600 font-bold text-xl">{figure}</p>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
