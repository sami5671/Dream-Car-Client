import { useState } from "react";
import UseToGetSoldCars from "../../../../Hooks/UseToGetSoldCars";
import updatelogo from "../../../../assets/Images/update.png";
import customerDetails from "../../../../assets/Images/customerDetails.png";
import orderDetails from "../../../../assets/Images/orderDetails.png";
import processing from "../../../../assets/Images/processingOrder.gif";
import CustomerDetailsModal from "./CustomerDetailsModal";
import { Link } from "react-router-dom";

const ManageOrder = () => {
  const [soldCars, refetch] = UseToGetSoldCars();
  const [isOpenCustomer, setIsOpenCustomer] = useState(false);
  const [customer, setCustomer] = useState({});

  const handleOpenModalCustomer = (customer) => {
    setIsOpenCustomer(true);
    setCustomer(customer);
  };

  const CloseModalCustomer = () => {
    setIsOpenCustomer(false);
  };

  return (
    <div>
      <h1 className="text-center mb-12 text-2xl text-purple-800 font-bold">
        Manage Order
        <hr />
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg text-white p-4">
        <table className="table-auto w-full text-left border-collapse">
          {/* head */}
          <thead>
            <tr className="bg-purple-950 text-gray-300">
              <th className="px-4 py-2">No.</th>
              <th className="px-4 py-2">Biller Name</th>
              <th className="px-4 py-2">Biller Email</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Update Status</th>
              <th className="px-4 py-2">Customer Details</th>
              <th className="px-4 py-2">Order Details</th>
              <th className="px-4 py-2">Shipping Status</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {soldCars.map((item, index) => (
              <tr
                key={item._id}
                className="text-black hover:bg-slate-200 transition-colors"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="text-center">
                  {item?.customerInfo?.billerName}
                </td>
                <td>{item?.email}</td>
                <td>
                  <div className="flex items-center justify-center">
                    <img
                      className="rounded-full h-12 w-12"
                      src={item?.photo}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center cursor-pointer">
                    <img
                      className="rounded-full h-10 w-10"
                      src={updatelogo}
                      alt="Update Logo"
                    />
                  </div>
                </td>
                <td>
                  <div
                    onClick={() => handleOpenModalCustomer(item.customerInfo)}
                    className="flex items-center justify-center cursor-pointer"
                  >
                    <img
                      className="rounded-full h-10 w-10"
                      src={customerDetails}
                      alt="Customer Details"
                    />
                  </div>
                </td>
                <td>
                  <Link to={`/dashboard/order-details/${item?._id}`}>
                    <div className="flex items-center justify-center cursor-pointer">
                      <img
                        className="rounded-full h-10 w-10"
                        src={orderDetails}
                        alt="Order Details"
                      />
                    </div>
                  </Link>
                </td>
                <td>
                  <div className="flex items-center justify-center cursor-pointer">
                    <p className="text-green-600 font-bold mr-1">Processing</p>
                    <img
                      className="rounded-full h-10 w-10"
                      src={processing}
                      alt="Processing"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CustomerDetailsModal
        isOpenCustomer={isOpenCustomer}
        CloseModalCustomer={CloseModalCustomer}
        customer={customer}
      />
    </div>
  );
};

export default ManageOrder;
