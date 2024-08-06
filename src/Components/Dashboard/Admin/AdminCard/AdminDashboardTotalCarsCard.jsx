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
      <div className="flex py-8 pl-6 pr-20 bg-slate-50 text-black rounded-xl shadow-xl shadow-slate-500 gap-5">
        <div>
          <img src={img} className="w-[35px]" alt="" />
        </div>
        <div>
          <p className="font-semibold">
            {label}{" "}
            <span className="font-bold text-xl text-purple-600">
              ({figure})
            </span>
          </p>

          <div className="text-[12px] text-slate-500">
            <div>
              New: <span className="font-bold text-purple-600">{newCar}</span>
            </div>
            <div>
              Used: <span className="font-bold text-purple-600">{usedCar}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardTotalCarsCard;
