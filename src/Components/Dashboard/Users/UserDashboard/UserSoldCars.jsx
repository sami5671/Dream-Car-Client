import UseToGetUserTotalSaleByEmail from "../../../../Hooks/UseToGetUserTotalSaleByEmail";
import { dateFormate } from "./../../../../api/utils";

const UserSoldCars = () => {
  const [totalSaleByEmail] = UseToGetUserTotalSaleByEmail();

  // console.log(totalSaleByEmail.length);
  return (
    <>
      <div className="bg-gradient-to-tl from-black via-slate-700 to-black">
        <h1 className="mb-2 underline px-4 text-2xl font-semibold text-white flex gap-2 items-center">
          Sold Cars
        </h1>
      </div>
      <div className="h-[180px] overflow-x-auto">
        <table className="table table-pin-rows">
          <thead className="">
            <tr className="bg-gradient-to-tl from-black via-slate-700 to-black text-white">
              <th>No</th>
              <th>Date</th>
              <th>Model</th>
              <th>Image</th>
              <th>Payment</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className="shadow-lg bg-base-100">
            {totalSaleByEmail.map((item, index) => (
              <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>{dateFormate(item?.date)}</td>
                <td className="">
                  <span>{item?.car?.CarModel}</span>
                </td>
                <td>
                  <div className="">
                    <div className="">
                      <img
                        className="w-[80px]"
                        src={item?.car?.Images?.[2]?.url}
                        alt=""
                      />
                    </div>
                  </div>
                </td>
                <td className="text-green-500 font-bold">
                  {item?.paymentStatus}
                </td>
                <td>${item?.car?.CarPriceNew}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* ===================== */}
    </>
  );
};

export default UserSoldCars;
