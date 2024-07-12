import bkash from "../../../assets/Images/bkash-removebg-preview.png";
import nagad from "../../../assets/Images/nagad-removebg-preview.png";
import dhakabank from "../../../assets/Images/dhakabank-removebg-preview.png";
import citybank from "../../../assets/Images/citybank-removebg-preview.png";
import premierbank from "../../../assets/Images/premierbank-removebg-preview.png";
import ucb from "../../../assets/Images/ucbbank-removebg-preview.png";
import visa from "../../../assets/Images/visa.png";
import master from "../../../assets/Images/mastercard.png";
import american from "../../../assets/Images/americanexpress.png";
import discover from "../../../assets/Images/discover.png";
import jcb from "../../../assets/Images/jcb.png";
import Logo2 from "../Logo2";
const Footer = () => {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-10 mt-16 lg:mt-24">
        <aside>
          <Logo2></Logo2>
          <p>
            Dream Car Ltd.
            <br />
            Providing reliable service since 2017, <br /> Vatpara, A-54/4,
            Savar, Dhaka-1343.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className=" bg-base-200 text-base-content p-4 lg:p-10">
        <h1 className="mb-8 text-xl font-bold text-slate-600">We Support </h1>
        <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:gap-12">
          <div className="flex gap-3">
            <img className="w-[35px] lg:w-[80px]" src={bkash} alt="" />
            <img className="w-[35px] lg:w-[70px]" src={nagad} alt="" />
            <img className="w-[35px] lg:w-[70px]" src={dhakabank} alt="" />
            <img className="w-[35px] lg:w-[70px]" src={premierbank} alt="" />
            <img className="w-[35px] lg:w-[70px]" src={ucb} alt="" />
            <img className="w-[35px] lg:w-[70px]" src={citybank} alt="" />
          </div>
          <div className="flex gap-3">
            <img className="w-[35px]" src={visa} alt="" />
            <img className="w-[35px]" src={master} alt="" />
            <img className="w-[35px]" src={american} alt="" />
            <img className="w-[35px]" src={jcb} alt="" />
            <img className="w-[35px]" src={discover} alt="" />
          </div>
        </div>
      </footer>
      <div className="py-6 text-sm text-center text-gray-400">
        © 2024 Dream Car Inc. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
