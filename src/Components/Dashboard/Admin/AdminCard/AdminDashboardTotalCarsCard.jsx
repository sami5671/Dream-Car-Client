import React from "react";

const AdminDashboardTotalCarsCard = ({
  img,
  label,
  figure,
  newCar,
  usedCar,
}) => {
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
              New: <span className="text-purple-900 font-bold">{newCar}</span>
            </div>
            <div>
              Used: <span className="text-purple-900 font-bold">{usedCar}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardTotalCarsCard;
