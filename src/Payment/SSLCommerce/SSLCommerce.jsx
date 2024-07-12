import sslLogo from "../../assets/Images/sslcommerce.png";
import premierBank from "../../assets/Images/premierbank-removebg-preview.png";
import dhakaBank from "../../assets/Images/dhakabank-removebg-preview.png";
import ucbBank from "../../assets/Images/ucbbank-removebg-preview.png";
import cityBank from "../../assets/Images/citybank-removebg-preview.png";
import bkash from "../../assets/Images/bkash-removebg-preview.png";
import nagad from "../../assets/Images/nagad-removebg-preview.png";
import axios from "axios";
const SSLCommerce = ({ car }) => {
  // console.log(car);
  const handleCreatePayment = () => {
    axios
      .post("http://localhost:5000/create-payment", {
        amount: 10000,
        currency: "USD",
      })
      .then((response) => {
        console.log(response);
        const redirectUrl = response.data.paymentUrl;
        if (redirectUrl) {
          window.location.replace(redirectUrl);
        }
      });
    console.log("hi");
  };
  return (
    <>
      <div className="flex items-center justify-center mt-24">
        <img src={sslLogo} className="w-[280px] " alt="" />
      </div>
      <h1 className="text-center font-bold text-3xl">
        <span className="text-cyan-600">SSL</span>
        <span className="text-slate-600">Commerze</span>
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

      <div onClick={handleCreatePayment} className="mt-4">
        <p className="bg-blue-800 rounded-lg px-2 py-2 hover:bg-blue-600 text-white font-bold text-center cursor-pointer">
          <button>Pay now</button>
        </p>
      </div>
    </>
  );
};

export default SSLCommerce;
