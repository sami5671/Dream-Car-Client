import { Helmet } from "react-helmet-async";
import Container from "../../Components/Shared/Container";
import { useLoaderData } from "react-router-dom";
import CarCarousal from "./CarCarousal";
import { FaRegHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import CarDetailsBanner from "./CarDetailsBanner";
import category from "../../assets/Images/category.png";
import topSpeed from "../../assets/Images/topSpeed.png";
import fuelCapacity from "../../assets/Images/fuel.png";
import engine from "../../assets/Images/engine.png";
import Payment from "../../Payment/Payment";

const CarDetails = () => {
  const car = useLoaderData();

  const [carPrice, setCarPrice] = useState(0);
  const newP = car?.CarPriceNew;
  const PreviousP = car?.CarPricePrevious;

  useEffect(() => {
    if (PreviousP && newP && newP < PreviousP) {
      const priceDrop = PreviousP - newP;
      setCarPrice(priceDrop);
    }
  }, [PreviousP, newP]);

  // console.log(car);
  return (
    <>
      <CarDetailsBanner car={car} />
      <Container>
        <Helmet>
          <title>Car Type || {car?.CarModel}</title>
        </Helmet>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-6 lg:mt-10">
          <div className="w-full lg:w-2/3">
            <CarCarousal car={car} />

            <div className="flex justify-between mt-8">
              <div>
                <p className="text-slate-500">{car?.CarCondition}</p>
                <h1 className="lg:text-4xl font-bold bg-gradient-to-br from-purple-600 to-green-900 text-transparent bg-clip-text">
                  {car?.CarModel}
                </h1>
                <p className="mt-4">
                  <span className="font-semibold text-2xl">
                    ${car?.CarPriceNew}
                  </span>
                  <span className="text-red-600">
                    {carPrice > 0 ? ` ($${carPrice} price drop)` : ""}
                  </span>
                </p>
              </div>
              <div className="mt-8">
                <button className="border-2 border-purple-900 hover:border-dotted px-3 py-1 rounded-full">
                  <span className="flex items-center gap-2">
                    <FaRegHeart /> Save
                  </span>
                </button>
              </div>
            </div>

            <h1 className="text-3xl font-bold mt-12 bg-gradient-to-br from-purple-600 to-green-900 text-transparent bg-clip-text">
              Key Specifications
            </h1>
            <div className="mt-2">
              <hr />
              <hr />
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="border-2 bg-slate-50 flex items-center gap-4 py-2 px-2 rounded-xl">
                <img src={category} className="w-[80px] h-[80px] " alt="" />
                <div>
                  <p className="font-bold text-xl">Category</p>
                  <p className="text-purple-900 font-semibold">
                    {car?.Category}
                  </p>
                </div>
              </div>
              <div className="border-2 bg-slate-50 flex items-center gap-4 py-2 px-2 rounded-xl">
                <img src={topSpeed} className="w-[80px] h-[80px] " alt="" />
                <div>
                  <p className="font-bold text-xl">Top Speed</p>
                  <p className="text-purple-900 font-semibold">
                    {car?.TopSpeed} Km
                  </p>
                </div>
              </div>
              <div className="border-2 bg-slate-50 flex items-center gap-4 py-2 px-2 rounded-xl">
                <img src={fuelCapacity} className="w-[80px] h-[80px] " alt="" />
                <div>
                  <p className="font-bold text-xl">Fuel Capacity</p>
                  <p className="text-purple-900 font-semibold">
                    {car?.FuelCapacity}
                  </p>
                </div>
              </div>
              <div className="border-2 bg-slate-50 flex items-center gap-4 py-2 px-2 rounded-xl">
                <img src={engine} className="w-[80px] h-[80px] " alt="" />
                <div>
                  <p className="font-bold text-xl">Engine</p>
                  <p className="text-purple-900 font-semibold">{car?.Engine}</p>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold mt-12  bg-gradient-to-br from-purple-600 to-green-900 text-transparent bg-clip-text">
              Basics
            </h1>
            <div className="mt-2">
              <hr />
              <hr />
            </div>
            <div className="overflow-x-auto mt-6 bg-slate-100 px-4 py-2 rounded-lg">
              <table className="table-auto w-full text-left">
                <tbody>
                  {[
                    { label: "Exterior color", value: car?.ExteriorColor },
                    { label: "Interior color", value: car?.InteriorColor },
                    { label: "Drivetrain", value: car?.Drivetrain },
                    { label: "Transmission", value: car?.Transmission },
                    { label: "Engine", value: car?.Engine },
                    { label: "Mileage", value: `${car?.Mileage} mi.` },
                  ].map((basic, idx) => (
                    <tr key={idx}>
                      <td className="font-bold text-xl py-2">{basic.label}</td>
                      <td>{basic.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h1 className="font-bold text-4xl mt-12 bg-gradient-to-br from-purple-600 to-green-900 text-transparent bg-clip-text ">
              Features
            </h1>
            <div className="mt-2">
              <hr />
              <hr />
            </div>
            <div className="overflow-x-auto mt-6 bg-slate-100 rounded-lg px-4 py-4">
              <table className="table-auto w-full text-left">
                <tbody>
                  {[
                    {
                      category: "Convenience",
                      features: [
                        "Adaptive Cruise Control",
                        "Heated Seats",
                        "Heated Steering Wheel",
                        "Navigation System",
                      ],
                    },
                    {
                      category: "Entertainment",
                      features: [
                        "Bluetooth®",
                        "HomeLink",
                        "Premium Sound System",
                      ],
                    },
                    { category: "Exterior", features: ["Alloy Wheels"] },
                    {
                      category: "Safety",
                      features: [
                        "Backup Camera",
                        "Blind Spot Monitor",
                        "Brake Assist",
                      ],
                    },
                    {
                      category: "Seating",
                      features: ["Leather Seats", "Memory Seat"],
                    },
                  ].map((feature, idx) => (
                    <tr key={idx}>
                      <td className="font-bold text-xl py-2">
                        {feature.category}
                      </td>
                      <td>{feature.features.join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h1 className="text-4xl font-bold mt-12  bg-gradient-to-br from-purple-600 to-green-900 text-transparent bg-clip-text">
              Seller Info
            </h1>
            <div className="mt-2">
              <hr />
              <hr />
            </div>
          </div>
          {/* --------- */}
          <div className="w-full lg:w-1/3 p-4 bg-gray-100 rounded-lg lg:mt-[210px]">
            {/* stripe payment will be START here */}
            <Payment car={car} />
            {/* stripe payment will be ENDhere */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default CarDetails;
