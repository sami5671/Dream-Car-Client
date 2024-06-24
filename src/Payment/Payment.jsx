import stripeLogo from "../assets/Images/stripelogo.png";
import visa from "../assets/Images/visa.png";
import mastercard from "../assets/Images/mastercard.png";
import americanExpress from "../assets/Images/americanexpress.png";
import discover from "../assets/Images/discover.png";
import jcb from "../assets/Images/jcb.png";
import { useState } from "react";
import PaymentModal from "./PaymentModal";
import toast from "react-hot-toast";
import { FaCopy } from "react-icons/fa6";

const Payment = ({ car }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCardCopied1, setIsCardCopied1] = useState(false);
  const [isCardCopied2, setIsCardCopied2] = useState(false);
  const [isCardCopied3, setIsCardCopied3] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleCardNumberClick1 = () => {
    const cardNumber = "4242424242424242";
    navigator.clipboard
      .writeText(cardNumber)
      .then(() => {
        setIsCardCopied1(true);
        toast.success("Card number copied to clipboard! (Visa Card)");
        setTimeout(() => setIsCardCopied1(false), 2000); // Reset the state after 2 seconds
      })
      .catch((err) => {
        toast.error("Failed to copy card number!");
      });
  };
  const handleCardNumberClick2 = () => {
    const cardNumber = " 5555555555554444";
    navigator.clipboard
      .writeText(cardNumber)
      .then(() => {
        setIsCardCopied2(true);
        toast.success("Card number copied to clipboard! (Master Card)");
        setTimeout(() => setIsCardCopied2(false), 2000); // Reset the state after 2 seconds
      })
      .catch((err) => {
        toast.error("Failed to copy card number!");
      });
  };
  const handleCardNumberClick3 = () => {
    const cardNumber = "6011000990139424";
    navigator.clipboard
      .writeText(cardNumber)
      .then(() => {
        setIsCardCopied3(true);
        toast.success(" Card number copied to clipboard! (Discover)");
        setTimeout(() => setIsCardCopied3(false), 2000); // Reset the state after 2 seconds
      })
      .catch((err) => {
        toast.error("Failed to copy card number!");
      });
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

        <div className="mt-4">
          <h1 className="font-bold">Dummy Cards:</h1>
          <p onClick={handleCardNumberClick1} className="flex items-center">
            <img src={visa} className="w-[50px]" alt="" />
            4242424242424242
            <span className="hover:text-slate-400 cursor-pointer ml-2">
              <FaCopy />
            </span>
          </p>
        </div>
        <div className="">
          <p onClick={handleCardNumberClick2} className="flex items-center">
            <img src={mastercard} className="w-[50px]" alt="" />
            5555555555554444
            <span className="hover:text-slate-400 cursor-pointer ml-2">
              <FaCopy />
            </span>
          </p>
        </div>
        <div className="">
          <p onClick={handleCardNumberClick3} className="flex items-center">
            <img src={discover} className="w-[50px]" alt="" />
            6011000990139424
            <span className="hover:text-slate-400 cursor-pointer ml-2">
              <FaCopy />
            </span>
          </p>
        </div>

        <div>
          <p className=" font-bold">Month / Year / CCV</p>
          <p>12 / 30 / 12345</p>
        </div>
        <div className="mt-4">
          <p
            onClick={handleOpenModal}
            className="text-center cursor-pointer font-semibold bg-purple-700 text-white px-2 py-2 rounded-lg hover:bg-purple-600"
          >
            <button>Stripe Payment Gateway</button>
          </p>
        </div>

        <PaymentModal closeModal={handleCloseModal} isOpen={isOpen} car={car} />
      </div>
    </>
  );
};

export default Payment;
