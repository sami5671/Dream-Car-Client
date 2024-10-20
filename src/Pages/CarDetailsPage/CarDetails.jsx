import { Helmet } from "react-helmet-async";
import Container from "../../Components/Shared/Container";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import CarDetailsBanner from "./CarDetailsBanner";
import category from "../../assets/Images/category.png";
import topSpeed from "../../assets/Images/topSpeed.png";
import fuelCapacity from "../../assets/Images/fuel.png";
import engine from "../../assets/Images/engine.png";
import Payment from "../../Payment/Payment";
import SSLCommerce from "../../Payment/SSLCommerce/SSLCommerce";
import { postFavoriteCar } from "../../api/Cars";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/UseAuth";
import UseUserFavoriteCar from "../../Hooks/UseUserFavoriteCar";

const CarDetails = () => {
  const car = useLoaderData();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [, refetch] = UseUserFavoriteCar();

  const [carPrice, setCarPrice] = useState(0);
  const newP = car?.CarPriceNew;
  const PreviousP = car?.CarPricePrevious;

  useEffect(() => {
    if (PreviousP && newP && newP < PreviousP) {
      const priceDrop = PreviousP - newP;
      setCarPrice(priceDrop);
    }
  }, [PreviousP, newP]);

  const handleFavoriteCar = async () => {
    if (user && user.email) {
      const favoriteCarItem = {
        favoriteCar: car,
        email: user.email,
      };
      // console.log(favoriteCarItem);
      postFavoriteCar(favoriteCarItem).then((res) => {
        // console.log(res);
        if (res.acknowledged === true) {
          refetch();
          toast.success(`${car?.CarModel} Added to the favorite`);
        }
      });
    } else {
      navigate("/loginPage");
    }
  };
  // console.log(car);
  return (
    <>
      <section>
        <CarDetailsBanner car={car} />
        {/* <CarCarousal car={car} /> */}
        <Container>
          <Helmet>
            <title>Car Type || {car?.CarModel}</title>
          </Helmet>

          <div className="flex flex-col lg:flex-row items-start justify-center gap-6 lg:mt-2 text-white">
            <div className="w-full lg:w-2/3">
              {/* ---- */}
              <div className="flex justify-between mt-8">
                <div>
                  <p className="text-slate-500">{car?.CarCondition}</p>
                  <h1 className="lg:text-4xl font-bold bg-gradient-to-br from-white to-blue-300 text-transparent bg-clip-text">
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
                  <button
                    onClick={handleFavoriteCar}
                    className="border-2 border-purple-900 hover:bg-purple-800 hover:text-white px-3 py-1 rounded-full"
                  >
                    <span className="flex items-center gap-2">
                      <FaHeart className="text-gray-400 hover:animate-bounce hover:text-red-600 transition-colors duration-300" />{" "}
                      Save
                    </span>
                  </button>
                </div>
              </div>

              <h1 className="text-3xl font-bold mt-12 bg-gradient-to-br from-white to-blue-300 text-transparent bg-clip-text">
                Key Specifications
              </h1>
              <div className="mt-2">
                <hr />
                <hr />
              </div>
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className=" bg-gradient-to-tl from-black via-slate-700 to-blue-950 flex items-center gap-4 py-2 px-2 rounded-xl">
                  <img src={category} className="w-[80px] h-[80px] " alt="" />
                  <div>
                    <p className="font-bold text-xl">Category</p>
                    <p className=" font-semibold">{car?.Category}</p>
                  </div>
                </div>
                <div className=" bg-gradient-to-tl from-black via-slate-700 to-blue-950 flex items-center gap-4 py-2 px-2 rounded-xl">
                  <img src={topSpeed} className="w-[80px] h-[80px] " alt="" />
                  <div>
                    <p className="font-bold text-xl">Top Speed</p>
                    <p className=" font-semibold">{car?.TopSpeed} Km</p>
                  </div>
                </div>
                <div className=" bg-gradient-to-tl from-black via-slate-700 to-blue-950 flex items-center gap-4 py-2 px-2 rounded-xl">
                  <img
                    src={fuelCapacity}
                    className="w-[80px] h-[80px] "
                    alt=""
                  />
                  <div>
                    <p className="font-bold text-xl">Fuel Capacity</p>
                    <p className=" font-semibold">{car?.FuelCapacity}</p>
                  </div>
                </div>
                <div className=" bg-gradient-to-tl from-black via-slate-700 to-blue-950 flex items-center gap-4 py-2 px-2 rounded-xl">
                  <img src={engine} className="w-[80px] h-[80px] " alt="" />
                  <div>
                    <p className="font-bold text-xl">Engine</p>
                    <p className=" font-semibold">{car?.Engine}</p>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl font-bold mt-12  bg-gradient-to-br from-white to-blue-300 text-transparent bg-clip-text">
                Basics
              </h1>
              <div className="mt-2">
                <hr />
                <hr />
              </div>
              <div className="overflow-x-auto mt-6 bg-gradient-to-tl from-black via-slate-700 to-blue-950 bg-slate-100 px-6 py-4 rounded-lg">
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
                        <td className="font-bold text-xl py-2">
                          {basic.label}
                        </td>
                        <td>{basic.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h1 className="font-bold text-4xl mt-12 bg-gradient-to-br from-white to-blue-300 text-transparent bg-clip-text ">
                Features
              </h1>
              <div className="mt-2">
                <hr />
                <hr />
              </div>
              <div className="overflow-x-auto mt-6 bg-gradient-to-tl from-black via-slate-700 to-blue-950 rounded-lg px-4 py-4">
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
            <div className="w-full lg:w-1/3 p-4 bg-gradient-to-tl from-black via-slate-700 to-blue-950 rounded-lg lg:mt-10">
              {/* stripe payment will be START here */}
              <Payment car={car} />
              {/* stripe payment will be ENDhere */}
              <SSLCommerce car={car} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CarDetails;
