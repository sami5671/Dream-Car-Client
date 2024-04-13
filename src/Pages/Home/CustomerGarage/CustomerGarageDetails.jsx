import Container from "./../../../Components/Shared/Container";
import bannerGarageImg from "../../../assets/Images/bannerYourGarage.png";
import bannerGarageImg2 from "../../../assets/Images/customerGarageBanner2.png";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaTag } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion";

const CustomerGarageDetails = () => {
  return (
    <>
      <Container>
        {/* banner */}
        <div className="flex flex-col-reverse lg:flex-row justify-between">
          <div className="lg:w-[480px]">
            <h1 className="text-3xl lg:text-5xl font-bold mt-6 lg:mt-0">
              Your Garage
            </h1>
            <h3 className="text-2xl lg:text-3xl font-semibold mt-5 lg:mt-12">
              Add your car. Track its value.
            </h3>
            <p className="mt-5 text-slate-800">
              Add your car to Your Garage to track its market value and cash in
              when the time is right to sell.
            </p>
            <button className="mt-4 lg:mt-12 lg:text-xl bg-purple-600 px-5 py-3 rounded-full font-bold text-white border-2 hover:text-purple-700 hover:bg-slate-200 hover:border-purple-600 hover:border-dotted">
              Get Started
            </button>
            <p className="mt-1 ml-1">
              Already have an account?
              <span className="font-bold underline cursor-pointer hover:decoration-white">
                Sign in
              </span>
            </p>
          </div>

          <div className="lg:mt-20">
            <img src={bannerGarageImg} alt="" />
          </div>
        </div>

        {/*  */}

        {/* border */}

        <div className="mt-12">
          <hr />
          <hr />
        </div>
        {/*  */}

        {/* Always know how much is in Your Garage */}
        <div>
          <h1 className="mt-12 text-xl lg:text-3xl font-bold">
            Always know how much is in Your Garage
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-12 ">
            <div className="shadow-md rounded-xl px-4 py-4 lg:w-[450px] h-[200px] text-center bg-teal-50">
              <p className="flex justify-center items-center text-teal-600 text-4xl mb-4">
                <FaArrowTrendUp />
              </p>
              <h1 className="text-2xl font-semibold mb-4">
                Track its market value
              </h1>
              <p className="text-slate-800">
                Access real-time insight into how much your car is worth.
              </p>
            </div>

            <div className="shadow-md rounded-xl px-4 py-4 lg:w-[450px] h-[200px] text-center bg-teal-50">
              <p className="flex justify-center items-center text-teal-600 text-4xl mb-4">
                <IoMdTime />
              </p>
              <h1 className="text-2xl font-semibold mb-4">
                Know the right time to sell
              </h1>
              <p className="text-slate-800">
                View its historical and projected value to decide when to sell.
              </p>
            </div>

            <div className="shadow-md rounded-xl px-4 py-4 lg:w-[450px] h-[200px] text-center bg-teal-50">
              <p className="flex justify-center items-center text-teal-600 text-4xl mb-4">
                <FaTag />
              </p>
              <h1 className="text-2xl font-semibold mb-4">
                Sell your car your way
              </h1>
              <p className="text-slate-800">
                Secure an instant offer from a local dealership or sell it
                yourself on Cars.com.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="mt-24"> </div>
      {/* get started with two step */}

      <div className="bg-zinc-100">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="lg:w-[550px]">
              <h1 className="text-4xl font-bold">Get started in two steps</h1>
              <div className="flex gap-4 mt-4">
                <div>
                  <p className="text-4xl font-bold text-gray-700">1</p>
                </div>
                <div>
                  <h1 className="text-2xl font-semibold mb-2">
                    Create an account
                  </h1>
                  <p>
                    All you need is an email address to sign up. Or, simply sign
                    in with your Google, Facebook, or Apple account.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <div>
                  <p className="text-4xl font-bold text-gray-700">2</p>
                </div>
                <div>
                  <h1 className="text-2xl font-semibold mb-2">Add your car</h1>
                  <p>
                    Enter your license place, VIN or your car's year, make, and
                    model to start tracking its value.
                  </p>
                </div>
              </div>

              <button className="mt-8 px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-black hover:border-dotted border-2 hover:border-black bg-black text-white ">
                Get Started
              </button>
              <p className="mt-2">
                Already have an account?
                <span className="font-bold underline hover:decoration-white cursor-pointer ">
                  Sign in
                </span>
              </p>
            </div>

            <div>
              <img src={bannerGarageImg2} alt="" />
            </div>
          </div>
        </Container>
      </div>
      <FrequentlyAskedQuestion />
    </>
  );
};

export default CustomerGarageDetails;
