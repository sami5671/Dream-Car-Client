const DashboardCardModerator = ({ label, img, figure }) => {
  return (
    <>
      <div className="flex items-center lg:py-0 py-6 gap-4 px-6 lg:px-10 bg-base-50 border-2 border-slate-100 rounded-xl  shadow-lg">
        <div>
          <img src={img} className="w-[35px] rounded-full" alt="" />
        </div>
        <div className="">
          <p className="font-semibold text-slate-500">{label}</p>
          <p className="text-purple-600 font-bold text-xl">{figure}</p>
        </div>
      </div>
    </>
  );
};

export default DashboardCardModerator;
