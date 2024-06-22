import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";
import { postFavoriteCar } from "../../api/Cars";
import UseUserFavoriteCar from "../../Hooks/UseUserFavoriteCar";
import fuel from "../../assets/Images/fuel.png";
import driving from "../../assets/Images/driving.png";
import people from "../../assets/Images/group.png";
import { FcElectricity } from "react-icons/fc";

const CarCard = ({ car }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [, refetch] = UseUserFavoriteCar();
  // console.log(car);

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

  return (
    <div className="bg-slate-100 w-[300px] py-4 px-2 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
      {/* here is the card head */}
      <div className="flex justify-between gap-2">
        <div>
          <h1 className="text-xl font-bold text-gray-800">{car?.CarModel}</h1>
          <p className="mt-2 font-semibold text-slate-400">{car?.Category}</p>
        </div>
        <div>
          <button
            onClick={() => handleFavoriteCar()}
            className="flex items-end justify-end py-2 pr-2 hover:animate-bounce"
          >
            <FaHeart className="text-gray-400 hover:text-red-600 transition-colors duration-300" />
          </button>
        </div>
      </div>

      <div className="relative">
        <img
          src={car?.Images?.[2]?.url}
          className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
          alt="Car"
        />
      </div>

      {/* driving ,fuel, people */}
      <div className="flex gap-3 mt-4">
        <div className="flex gap-1 items-center">
          <img className="w-[25px]" src={fuel} alt="" />
          <p className="text-slate-500 font-bold">{car?.FuelCapacity}</p>
        </div>
        <div className="flex gap-1">
          <img className="w-[25px]" src={driving} alt="" />
          <p className="text-slate-500 font-bold ">{car?.Transmission}</p>
        </div>
        <div className="flex gap-1">
          <img className="w-[25px]" src={people} alt="" />
          <p className="text-slate-500 font-bold">{car?.Seating} People</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-5 mt-4">
        <div>
          <span className="font-bold text-xl">${car?.CarPriceNew}/</span>
          <span className="text-[10px] font-bold">New</span>
        </div>
        <Link to={`/carDetailsPage/${car?._id}`}>
          <div>
            <button className="bg-purple-800 px-2 py-1 text-white font-semibold rounded-2xl hover:bg-purple-600">
              More Info
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
