import { useState } from "react";
import UseToGetSoldCars from "../../../../Hooks/UseToGetSoldCars";
import updatelogo from "../../../../assets/Images/update.png";
import customerDetails from "../../../../assets/Images/customerDetails.png";
import orderDetails from "../../../../assets/Images/orderDetails.png";
import processing from "../../../../assets/Images/processingOrder.gif";
import packing from "../../../../assets/Images/packingOrder.gif";
import shipping from "../../../../assets/Images/ontheway.gif";
import delivered from "../../../../assets/Images/delivered.gif";
import CustomerDetailsModal from "./CustomerDetailsModal";
import { Link } from "react-router-dom";
import OrderStatusModal from "./OrderStatusModal";
import { toast } from "react-hot-toast";
import { updateOrderStatus } from "../../../../api/Cars";

const ManageOrder = () => {
  const [soldCars, refetch] = UseToGetSoldCars();

  const [isOpenCustomer, setIsOpenCustomer] = useState(false);
  const [customer, setCustomer] = useState({});
  const [updateOrder, setUpdateOrder] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleOpenModalCustomer = (customer) => {
    setIsOpenCustomer(true);
    setCustomer(customer);
  };
  const CloseModalCustomer = () => {
    setIsOpenCustomer(false);
  };

  const handleOpenUpdateOrder = (id) => {
    setSelectedOrderId(id);
    setUpdateOrder(true);
  };

  const handleCloseUpdateOrder = () => {
    setUpdateOrder(false);
    setSelectedOrderId(null);
  };

  const modalHandler = async (status) => {
    // console.log(status, selectedOrderId);
    try {
      const data = await updateOrderStatus(selectedOrderId, status);
      refetch();
      toast.success(`${status} order updated successfully`);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setUpdateOrder(false);
    }
  };

  return (
    <div className="text-white">
      <h1 className="text-center mb-12 text-2xl font-bold">
        Manage Order
        <hr />
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg text-white p-4">
        <table className="table table-auto w-full text-left border-collapse">
          {/* head */}
          <thead>
            <tr className="text-gray-300">
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
                className="hover:bg-slate-200 hover:text-black transition-colors"
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
                  <div
                    onClick={() => handleOpenUpdateOrder(item?._id)}
                    className="flex items-center justify-center cursor-pointer"
                  >
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
      <CustomerDetailsModal
        isOpenCustomer={isOpenCustomer}
        CloseModalCustomer={CloseModalCustomer}
        customer={customer}
      />
      <OrderStatusModal
        updateOrder={updateOrder}
        handleCloseUpdateOrder={handleCloseUpdateOrder}
        modalHandler={modalHandler}
      />
    </div>
  );
};

export default ManageOrder;
