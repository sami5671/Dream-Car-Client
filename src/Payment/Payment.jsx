import stripeLogo from "../assets/Images/stripelogo.png";
import visa from "../assets/Images/visa.png";
import mastercard from "../assets/Images/mastercard.png";
import americanExpress from "../assets/Images/americanexpress.png";
import discover from "../assets/Images/discover.png";
import jcb from "../assets/Images/jcb.png";
import { useState } from "react";
import PaymentModal from "./PaymentModal";

const Payment = ({ car }) => {
  //   console.log(car);
  const [isOpen, isSetOpen] = useState(false);

  const handleOpenModal = () => {
    isSetOpen(true);
  };
  const handleCloseModal = () => {
    isSetOpen(false);
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
        <form>
          <div>
            {/* billing */}
            <div className="mt-8">
              <h1 className="text-xl font-semibold">Billing Info</h1>
              <hr />
              <hr />
            </div>

            {/* shipping  */}
            <div></div>
          </div>
        </form>
        {/* form for collecting users billing shipping info */}
        <button onClick={handleOpenModal} className="btn btn-ghost">
          Pay
        </button>
      </div>

      <PaymentModal closeModal={handleCloseModal} isOpen={isOpen} car={car} />
    </>
  );
};

export default Payment;
