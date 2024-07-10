import { Link } from "react-router-dom";
import UseToGetSoldCarByEmail from "../../../Hooks/UseToGetSoldCarByEmail";
import processing from "../../../assets/Images/processingOrder.gif";
import packing from "../../../assets/Images/packingOrder.gif";
import shipping from "../../../assets/Images/ontheway.gif";
import delivered from "../../../assets/Images/delivered.gif";
import orderDetails from "../../../assets/Images/orderDetails.png";
const MyShippingInfo = () => {
  const [soldCarByEmail] = UseToGetSoldCarByEmail();
  console.log(soldCarByEmail);

  return (
    <div>
      <h1 className="text-center mb-12 text-2xl text-purple-800 font-bold">
        My Shipping Info
        <hr />
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg text-white p-4">
        <table className="table table-auto w-full text-left border-collapse">
          {/* head */}
          <thead>
            <tr className="bg-purple-950 text-gray-300">
              <th className="px-4 py-2">No.</th>
              <th className="px-4 py-2">Biller Name</th>
              <th className="px-4 py-2">Biller Email</th>
              <th className="px-4 py-2">Img</th>
              <th className="px-4 py-2">Car Model</th>
              <th className="px-4 py-2">Car Price</th>
              <th className="px-4 py-2 text-center">Car Img</th>
              <th className="px-4 py-2">Order Details</th>
              <th className="px-4 py-2">Shipping Status</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {soldCarByEmail.map((item, index) => (
              <tr
                key={item._id}
                className="text-black hover:bg-slate-200 transition-colors"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="font-semibold">
                  {item?.customerInfo?.billerName}
                </td>
                <td>{item?.email}</td>
                <td>
                  <div className="">
                    <img
                      className="rounded-full h-12 w-12"
                      src={item?.photo}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </td>

                <td>{item?.car?.CarModel}</td>
                <td className="font-bold">${item?.car?.CarPriceNew}</td>
                <td>
                  <div className="">
                    <div className="w-36 h-18">
                      <img src={item?.car?.Images?.[2]?.url} alt="" />
                    </div>
                  </div>
                </td>

                <td>
                  <Link to={`/dashboard/user-order-summary/${item?._id}`}>
                    <div className="cursor-pointer">
                      <img
                        className="rounded-full h-10 w-10"
                        src={orderDetails}
                        alt="Order Details"
                      />
                    </div>
                  </Link>
                </td>
                <td>
                  <div className="cursor-pointer">
                    {item?.status === "processing" && (
                      <>
                        <p className="text-blue-700 font-bold mr-1">
                          Processing
                        </p>
                        <img
                          className="rounded-full h-10 w-10"
                          src={processing}
                          alt="Processing"
                        />
                      </>
                    )}
                    {item?.status === "packing" && (
                      <>
                        <p className="text-cyan-400 font-bold mr-1">Packing</p>
                        <img
                          className="rounded-full h-10 w-10"
                          src={packing}
                          alt="Packing"
                        />
                      </>
                    )}
                    {item?.status === "shipping" && (
                      <>
                        <p className="text-blue-600 font-bold mr-1">Shipping</p>
                        <img
                          className="rounded-full h-10 w-10"
                          src={shipping}
                          alt="Shipping"
                        />
                      </>
                    )}
                    {item?.status === "delivered" && (
                      <>
                        <p className="text-green-600 font-bold mr-1">
                          Delivered
                        </p>
                        <img
                          className="rounded-full h-10 w-10"
                          src={delivered}
                          alt="Delivered"
                        />
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <CustomerDetailsModal
        isOpenCustomer={isOpenCustomer}
        CloseModalCustomer={CloseModalCustomer}
        customer={customer}
      />
      <OrderStatusModal
        updateOrder={updateOrder}
        handleCloseUpdateOrder={handleCloseUpdateOrder}
        modalHandler={modalHandler}
      /> */}
    </div>
  );
};

export default MyShippingInfo;
