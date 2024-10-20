import Container2 from "../../../Components/Shared/Container2";
import { GiHomeGarage } from "react-icons/gi";
import { Link } from "react-router-dom";

const CustomerGarage = () => {
  return (
    <>
      <Container2>
        <div className="border-2 border-slate-400 rounded-xl  mt-12  lg:mt-24 bg-gradient-to-tl from-black via-slate-700 to-black text-white border-dotted">
          <div className="flex items-center justify-between px-2 py-2">
            <div className="lg:px-4">
              <span className="flex items-center gap-2  text-[8px] lg:text-xl font-bold">
                <GiHomeGarage /> Your Garage
              </span>
              <p className="text-[12px] lg:text-4xl font-bold lg:mb-3">
                Start Tracking Your <br /> Car's Value
              </p>
              <Link to="/customerGarageDetails">
                <button className="bg-gradient-to-tl from-blue-400 via-slate-700 to-black text-white text-[8px] hover:text-slate-500 lg:text-sm  rounded-lg font-semibold px-4 lg:py-2 ">
                  Learn More
                </button>
              </Link>
            </div>

            <div className="mt-8">
              <img
                src="https://res.cloudinary.com/dgz0be5p3/image/upload/v1722979438/zohtwi3ylxkuovawsad4.png"
                className="w-[120px] lg:w-[430px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container2>
    </>
  );
};

export default CustomerGarage;
