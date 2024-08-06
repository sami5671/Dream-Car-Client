const DashboardCard = ({ label, img, figure }) => {
  return (
    <>
      <div className="flex items-center bg-slate-50 text-slate-600 shadow-xl shadow-slate-500 py-8 pl-6 pr-20 bg-base-50 rounded-xl  gap-5">
        <div>
          <img src={img} className="w-[30px]" alt="" />
        </div>
        <div>
          <p className="font-semibold">{label}</p>
          <p className="font-bold text-xl text-purple-600">{figure}</p>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
