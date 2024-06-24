import stripeLogo from "../assets/Images/stripelogo.png";
import visa from "../assets/Images/visa.png";
import mastercard from "../assets/Images/mastercard.png";
import americanExpress from "../assets/Images/americanexpress.png";
import discover from "../assets/Images/discover.png";
import jcb from "../assets/Images/jcb.png";
import { useState } from "react";
import PaymentModal from "./PaymentModal";
import useAuth from "./../Hooks/UseAuth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Payment = ({ car }) => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [billerPhoneNumber, setBillerPhoneNumber] = useState("");
  const [receiverPhoneNumber, setReceiverPhoneNumber] = useState("");
  const [customerInfo, setCustomerInfo] = useState("");

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleCustomerInfo = (e) => {
    e.preventDefault();
    const form = e.target;

    const billerName = form.billerName.value;
    const zipCodeBiller = form.zipCodeBiller.value;
    const billerEmail = form.billerEmail.value;
    const billerPhone = billerPhoneNumber;

    const receiverName = form.receiverName.value;
    const shippingAddress = form.shippingAddress.value;
    const receiverEmail = form.receiverEmail.value;
    const receiverPhone = receiverPhoneNumber;

    const customerInfo = {
      billerName,
      zipCodeBiller,
      billerEmail,
      billerPhone,
      receiverName,
      shippingAddress,
      receiverEmail,
      receiverPhone,
    };

    console.log(customerInfo);
    setCustomerInfo(customerInfo);

    handleOpenModal();
  };

  return (
    <>
      <div className="">
        <div className="flex items-center justify-center">
          <img src={stripeLogo} className="w-[80px] " alt="" />
        </div>
        <h1 className="text-center font-bold text-3xl">
          <span className="text-cyan-600">Stripe</span>{" "}
          <span className="text-slate-600">Payment</span>
        </h1>
        <div className="mt-6 flex items-center justify-center">
          <div>
            <p className="font-bold mr-2">We Allow:</p>
          </div>

          <div className="flex items-center justify-center">
            <img src={visa} className="w-[50px]" alt="" />
            <img src={mastercard} className="w-[50px]" alt="" />
            <img src={americanExpress} className="w-[50px]" alt="" />
            <img src={discover} className="w-[50px]" alt="" />
            <img src={jcb} className="w-[50px]" alt="" />
          </div>
        </div>

        {/* form for collecting users billing shipping info */}
        <form onSubmit={handleCustomerInfo}>
          <div>
            {/* billing */}
            <div className="mt-8">
              <h1 className="text-xl font-semibold">Billing Info</h1>
              <hr />
              <div className="flex gap-2 mt-4">
                <div className="space-y-1 text-sm">
                  <label htmlFor="biller name" className="block text-gray-600">
                    Name
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                    name="billerName"
                    type="text"
                    placeholder="Biller Name"
                    required
                    defaultValue={user?.displayName}
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="zip code" className="block text-gray-600">
                    Zip Code
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                    name="zipCodeBiller"
                    type="text"
                    placeholder="Zip"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1 text-sm mt-2">
                <label htmlFor="biller email" className="block text-gray-600">
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                  name="billerEmail"
                  type="text"
                  placeholder="Biller Email"
                  required
                  defaultValue={user?.email}
                />
              </div>
              <div className="space-y-1 text-sm mt-2">
                <label
                  htmlFor="biller phone number"
                  className="block text-gray-600"
                >
                  Phone Number
                </label>
                <PhoneInput
                  country={"bd"}
                  value={billerPhoneNumber}
                  onChange={setBillerPhoneNumber}
                  inputStyle={{
                    width: "100%",
                    padding: "12px 24px",
                    border: "1px solid #a855f7",
                    borderRadius: "8px",
                    color: "#1f2937",
                    fontSize: "14px",
                  }}
                  buttonStyle={{
                    border: "1px solid #a855f7",
                    borderRadius: "8px 0 0 8px",
                  }}
                  dropdownStyle={{
                    borderRadius: "8px",
                    border: "1px solid #a855f7",
                    maxHeight: "200px",
                    overflowY: "scroll",
                  }}
                />
              </div>
            </div>

            {/* shipping  */}
            <div className="mt-8">
              <h1 className="text-xl font-semibold">Shipping Info</h1>
              <hr />
              <div className="space-y-1 text-sm mt-2">
                <label
                  htmlFor="shipping address"
                  className="block text-gray-600"
                >
                  Shipping Address
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                  name="shippingAddress"
                  type="text"
                  placeholder="Shipping Location"
                  required
                />
              </div>
              <div className="flex gap-2 mt-4">
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="receiver name"
                    className="block text-gray-600"
                  >
                    Receiver's Name
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                    name="receiverName"
                    type="text"
                    placeholder="Receiver Name"
                    required
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="zip code" className="block text-gray-600">
                    Zip Code
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                    name="zipCodeS"
                    type="text"
                    placeholder="Zip"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1 text-sm mt-2">
                <label htmlFor="receiver email" className="block text-gray-600">
                  Receiver's Email
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                  name="receiverEmail"
                  type="text"
                  placeholder="Receiver Email"
                  required
                  defaultValue={user?.email}
                />
              </div>
              <div className="space-y-1 text-sm mt-2">
                <label
                  htmlFor="receiver phone number"
                  className="block text-gray-600"
                >
                  Phone Number
                </label>
                <PhoneInput
                  country={"us"}
                  value={receiverPhoneNumber}
                  onChange={setReceiverPhoneNumber}
                  inputStyle={{
                    width: "100%",
                    padding: "12px 24px",
                    border: "1px solid #a855f7",
                    borderRadius: "8px",
                    color: "#1f2937",
                    fontSize: "14px",
                  }}
                  buttonStyle={{
                    border: "1px solid #a855f7",
                    borderRadius: "8px 0 0 8px",
                  }}
                  dropdownStyle={{
                    borderRadius: "8px",
                    border: "1px solid #a855f7",
                    maxHeight: "200px",
                    overflowY: "scroll",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="border-2 py-2 px-4 rounded-lg hover:bg-purple-600 cursor-pointer bg-purple-900 text-white font-semibold"
            >
              Check and Pay
            </button>
          </div>
        </form>

        <PaymentModal
          closeModal={handleCloseModal}
          isOpen={isOpen}
          car={car}
          customerInfo={customerInfo}
        />
      </div>
    </>
  );
};

export default Payment;
