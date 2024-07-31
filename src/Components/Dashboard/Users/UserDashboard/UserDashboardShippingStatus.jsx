import { dateFormate } from "../../../../api/utils";
import UseToGetSoldCarByEmail from "../../../../Hooks/UseToGetSoldCarByEmail";
import processing from "../../../../assets/Images/processingOrder.gif";
import packing from "../../../../assets/Images/packingOrder.gif";
import shipping from "../../../../assets/Images/ontheway.gif";
import delivered from "../../../../assets/Images/delivered.gif";
const UserDashboardShippingStatus = () => {
  const [soldCarByEmail] = UseToGetSoldCarByEmail();
  // console.log(soldCarByEmail);

  const filterCar = soldCarByEmail.filter(
    (item) => item?.status !== "delivered"
  );
  return (
    <>
      <div className="h-[220px] overflow-x-auto">
        <table className="table table-pin-rows">
          <thead className="">
            <tr className="shadow-purple-200 shadow-2xl">
              <h1 className="mb-2 underline px-4 text-2xl font-semibold text-purple-800 flex gap-2 items-center">
                Shipping Status
              </h1>
            </tr>
          </thead>
          <tbody>
            <tr>
              {filterCar.map((item, index) => (
                <div key={item?._id}>
                  <div className="flex justify-between gap-2 lg:gap-4 py-4 bg-slate-50 px-4 text-sm">
                    {/* car info */}
                    <div>
                      <h1 className="text-[16px] text-purple-900 underline font-bold">
                        Order: {index + 1}
                      </h1>
                      <div className="">
                        <h1 className="text-[16px] text-purple-600 font-bold flex items-center gap-4">
                          Status:
                          {item?.status === "processing" ? (
                            <span className="flex items-center text-slate-400">
                              {" "}
                              <img
                                className="w-[35px] rounded-full"
                                src={processing}
                                alt=""
                              />
                              (processing)
                            </span>
                          ) : item?.status === "packing" ? (
                            <span className="flex items-center text-slate-400">
                              {" "}
                              <img
                                className="w-[35px] rounded-full"
                                src={packing}
                                alt=""
                              />
                              (packing)
                            </span>
                          ) : item?.status === "shipping" ? (
                            <span className="flex items-center text-slate-400">
                              {" "}
                              <img
                                className="w-[35px] rounded-full"
                                src={shipping}
                                alt=""
                              />
                              (shipping)
                            </span>
                          ) : item?.status === "delivered" ? (
                            <span className="flex items-center text-slate-400">
                              {" "}
                              <img
                                className="w-[35px] rounded-full"
                                src={delivered}
                                alt=""
                              />
                              (delivered)
                            </span>
                          ) : (
                            " "
                          )}
                        </h1>{" "}
                      </div>
                      <h1 className="text-slate-700 ">
                        <span className="text-[16px] text-purple-600 font-bold">
                          Transaction ID:
                        </span>{" "}
                        {item?.transactionId}
                      </h1>
                      <h2 className="text-slate-700 ">
                        <span className="text-[16px] text-purple-600 font-bold">
                          {" "}
                          Biller Name:
                        </span>{" "}
                        {item?.customerInfo?.billerName}
                      </h2>
                      <h2 className="text-slate-700 ">
                        <span className="text-[16px] text-purple-600 font-bold">
                          Biller Email:
                        </span>{" "}
                        {item?.email}
                      </h2>
                      <h2 className="font-semibold ">
                        <span className="text-[16px] text-purple-600 font-bold">
                          Order Date:
                        </span>{" "}
                        {dateFormate(item?.date)}{" "}
                      </h2>
                    </div>
                    {/*car img  */}
                    <div className="">
                      <div className="flex justify-end">
                        <img
                          className="w-[150px]"
                          src={item?.car?.Images?.[2]?.url}
                          alt=""
                        />
                      </div>
                      <h1 className="text-purple-600 font-semibold">
                        {item?.car?.CarModel}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      {/* ===================== */}

      <section className="bg-base-50 py-2 shadow-lg">
        <div></div>
      </section>
    </>
  );
};

export default UserDashboardShippingStatus;
