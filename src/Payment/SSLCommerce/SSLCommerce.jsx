import sslLogo from "../../assets/Images/sslcommerce.png";
import premierBank from "../../assets/Images/premierbank-removebg-preview.png";
import dhakaBank from "../../assets/Images/dhakabank-removebg-preview.png";
import ucbBank from "../../assets/Images/ucbbank-removebg-preview.png";
import cityBank from "../../assets/Images/citybank-removebg-preview.png";
import bkash from "../../assets/Images/bkash-removebg-preview.png";
import nagad from "../../assets/Images/nagad-removebg-preview.png";
import axios from "axios";
import useAuth from "../../Hooks/UseAuth";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ImSpinner9 } from "react-icons/im";

const SSLCommerce = ({ car }) => {
  // console.log(car);
  const [billerPhoneNumber, setBillerPhoneNumber] = useState("");
  const [receiverPhoneNumber, setReceiverPhoneNumber] = useState("");
  const [processing, setProcessing] = useState(false);

  const { user } = useAuth();
  console.log(user);

  const userData = {
    email: user.email,
    photo: user.photoURL,
  };

  const handleCreatePayment = async (event) => {
    // ----------------------------------------------------------------
    event.preventDefault();
    console.log("clicked");
    // =================================================================
    const form = event.target;

    const billerName = form.billerName.value;
    const billerZipCode = form.zipCodeBiller.value;
    const billerEmail = form.billerEmail.value;
    const billerPhone = billerPhoneNumber;

    const shippingAddress = form.shippingAddress.value;
    const receiverName = form.receiverName.value;
    const receiverEmail = form.receiverEmail.value;
    const receiverPhone = receiverPhoneNumber;

    const customerInfo = {
      billerName,
      billerZipCode,
      billerEmail,
      billerPhone,
      receiverName,
      shippingAddress,
      receiverEmail,
      receiverPhone,
    };
    console.log(customerInfo);
    // ----------------------------------------------------------------
    axios
      .post("https://dream-car-server-pi.vercel.app/create-payment", {
        car,
        customerInfo,
        userData,
      })
      .then((response) => {
        console.log(response);
        const redirectUrl = response.data.paymentUrl;
        if (redirectUrl) {
          window.location.replace(redirectUrl);
        }
      });
    // console.log("hi");
  };
  return (
    <>
      <div className="flex items-center justify-center mt-24">
        <img src={sslLogo} className="w-[280px] " alt="" />
      </div>
      <h1 className="text-center font-bold text-3xl">
        <span className="text-cyan-400">SSL</span>
        <span className="text-slate-600 bg-white px-1 rounded-xl ml-1">
          Commerze
        </span>
      </h1>
      <div className="mt-12 flex items-center justify-center">
        <div className="flex flex-wrap gap-5">
          <img src={bkash} className="w-[80px]" alt="" />
          <img src={nagad} className="w-[80px]" alt="" />
          <img src={dhakaBank} className="w-[80px]" alt="" />
          <img src={cityBank} className="w-[80px]" alt="" />
          <img src={premierBank} className="w-[80px]" alt="" />
          <img src={ucbBank} className="w-[80px]" alt="" />
        </div>
      </div>

      {/* -------------------------------- */}

      <form onSubmit={handleCreatePayment}>
        <div>
          {/* billing */}
          <div className="mt-8">
            <h1 className="text-xl font-semibold">Billing Info</h1>
            <hr />
            <div className="flex gap-2 mt-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="biller name" className="block">
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
                <label htmlFor="zip code" className="block">
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
              <label htmlFor="biller email" className="block">
                Email
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                name="billerEmail"
                type="text"
                placeholder="Biller Email"
                disabled
                defaultValue={user?.email}
              />
            </div>
            <div className="space-y-1 text-sm mt-2">
              <label htmlFor="biller phone number" className="block">
                Phone Number
              </label>
              <PhoneInput
                country={"ar"}
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
              <label htmlFor="shipping address" className="block">
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
                <label htmlFor="receiver name" className="block">
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
                <label htmlFor="zip code" className="block">
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
              <label htmlFor="receiver email" className="block">
                Receiver's Email
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                name="receiverEmail"
                type="text"
                placeholder="Receiver Email"
                required
              />
            </div>
            <div className="space-y-1 text-sm mt-2">
              <label htmlFor="receiver phone number" className="block">
                Phone Number
              </label>
              <PhoneInput
                country={"br"}
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
          <div className="mt-4">
            {processing ? (
              <button className=" rounded-lg px-2 py-2 text-white font-bold text-center cursor-pointer">
                <ImSpinner9 />
              </button>
            ) : (
              <button
                type="submit"
                className="bg-gradient-to-tr from-blue-500 via-slate-700 to-slate-100  rounded-lg w-full py-2  text-white font-bold text-center cursor-pointer"
              >
                Pay now
              </button>
            )}
          </div>
        </div>
      </form>
      {/* other details */}

      {/* -------------------------------- */}
    </>
  );
};

export default SSLCommerce;
