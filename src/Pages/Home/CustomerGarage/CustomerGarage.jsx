import Container2 from "../../../Components/Shared/Container2";
import { GiHomeGarage } from "react-icons/gi";
import YourGarageImg from "../../../assets/Images/YourGarageImg.jpeg";
import { Link } from "react-router-dom";
const CustomerGarage = () => {
  return (
    <>
      <Container2>
        <div className="border-2 border-purple-100 lg:h-[175px] mt-16 mb-12 lg:mt-24 bg-fuchsia-50 border-dashed">
          <div className="flex items-center justify-between px-2 py-2">
            <div className="lg:px-4">
              <span className="flex items-center gap-2 text-[8px] lg:text-xl text-purple-700 font-bold">
                <GiHomeGarage /> Your Garage
              </span>
              <p className="text-[12px] lg:text-4xl font-bold lg:mb-3">
                Start Tracking Your <br /> Car's Value
              </p>
              <Link to="/customerGarageDetails">
                <button className="border-2 bg-purple-600 text-[8px] lg:text-sm text-white rounded-lg hover:bg-white hover:text-black font-semibold px-2 py-1 ">
                  Learn More
                </button>
              </Link>
            </div>

            <div>
              <img
                src={YourGarageImg}
                className="w-[120px] lg:w-[250px]"
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
