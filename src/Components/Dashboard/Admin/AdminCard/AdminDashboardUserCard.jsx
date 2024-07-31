const AdminDashboardUserCard = ({ img, label, figure, admin, moderator }) => {
  return (
    <>
      <div className="flex py-8 pl-6 pr-20 bg-base-50 border-2 border-slate-100 rounded-xl  shadow-lg gap-5">
        <div>
          <img src={img} className="w-[35px]" alt="" />
        </div>
        <div>
          <p className="font-semibold text-slate-500">
            {label}{" "}
            <span className="text-purple-600 font-bold text-xl">
              ({figure})
            </span>
          </p>

          <div className="text-[12px] text-slate-500">
            <div>
              Admin: <span className="text-purple-900 font-bold">{admin}</span>
            </div>
            <div>
              Moderator:{" "}
              <span className="text-purple-900 font-bold">{moderator}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardUserCard;
