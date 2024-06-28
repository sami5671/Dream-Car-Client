import jsPDF from "jspdf";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const UserOrderSummary = () => {
  const order = useLoaderData();
  //   console.log(order);
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    setLoader(true);

    const doc = new jsPDF();

    // Set up document styles and formatting
    doc.setFont("helvetica");
    doc.setFontSize(12);

    // Add content to the PDF
    doc.text("Order Summary", 105, 10, { align: "center" });
    doc.text(`Transaction ID: ${order.transactionId}`, 20, 20);
    doc.text(`Date: ${new Date(order.date).toLocaleString()}`, 20, 30);
    doc.text(`Status: ${order.status}`, 20, 40);

    // Billing Information
    doc.text("Billing Information", 20, 50);
    doc.text(`Biller Name: ${order.customerInfo.billerName}`, 20, 60);
    doc.text(`Biller Email: ${order.customerInfo.billerEmail}`, 20, 70);
    doc.text(`Biller Zip Code: ${order.customerInfo.billerZipCode}`, 20, 80);
    doc.text(`Biller Phone: ${order.customerInfo.billerPhone}`, 20, 90);

    // Receiver Information
    doc.text("Receiver Information", 20, 100);
    doc.text(`Receiver Name: ${order.customerInfo.receiverName}`, 20, 110);
    doc.text(
      `Shipping Address: ${order.customerInfo.shippingAddress}`,
      20,
      120
    );
    doc.text(`Receiver Email: ${order.customerInfo.receiverEmail}`, 20, 130);
    doc.text(`Receiver Phone: ${order.customerInfo.receiverPhone}`, 20, 140);

    // Car Details
    doc.text("Car Details", 20, 150);
    doc.text(`Car Model: ${order.car.CarModel}`, 20, 160);
    doc.text(`Car Condition: ${order.car.CarCondition}`, 20, 170);
    doc.text(`Category: ${order.car.Category}`, 20, 180);

    // Add more details as needed

    // Save the PDF
    doc.save("order-summary.pdf");
    setLoader(false);
  };

  return (
    <div className="container mx-auto py-6">
      <div className="max-w-3xl shadow-2xl mx-auto bg-white p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Order Summary</h1>

        <div className="flex items-center justify-center">
          <img
            className="w-[300px]"
            src={order?.car?.Images?.[2]?.url}
            alt=""
          />
        </div>
        <p className="text-center font-bold mb-6">{order?.car?.CarModel}</p>

        <div className="order-details" id="order-details">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">
                  Transaction ID
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {order.transactionId}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">
                  Order Date
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {new Date(order.date).toLocaleString()}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">
                  Shipping Status
                </td>
                <td className="px-6 py-4 text-gray-500">{order.status}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">
                  Biller Name
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {order.customerInfo.billerName}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">
                  Biller Email
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {order.customerInfo.billerEmail}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">
                  Biller Zip Code
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {order.customerInfo.billerZipCode}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">
                  Biller Phone
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {order.customerInfo.billerPhone}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">
                  Receiver Name
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {order.customerInfo.receiverName}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">
                  Shipping Address
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {order.customerInfo.shippingAddress}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">
                  Receiver Email
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {order.customerInfo.receiverEmail}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">
                  Receiver Phone
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {order.customerInfo.receiverPhone}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">
                  Car Model
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {order.car.CarModel}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">
                  Car Condition
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {order.car.CarCondition}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">
                  Category
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {order.car.Category}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-between mt-6">
            <Link to="/dashboard/my-shipping">
              {" "}
              <button className="px-4 py-2 bg-red-800 hover:bg-red-600 text-white font-bold rounded-lg">
                Previous Page
              </button>
            </Link>
            <button
              className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2"
              onClick={downloadPDF}
              disabled={loader}
            >
              {loader ? "Generating PDF..." : "Download Order Summary PDF"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOrderSummary;
