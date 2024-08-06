import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";
import { postFavoriteCar } from "../../api/Cars";
import UseUserFavoriteCar from "../../Hooks/UseUserFavoriteCar";
import fuel from "../../assets/Images/fuel.png";
import driving from "../../assets/Images/driving.png";
import people from "../../assets/Images/group.png";

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
    <div className="bg-gradient-to-tl from-black via-slate-700 to-black text-white  lg:border-none w-[160px] lg:w-[290px] py-2 lg:py-8 px-2 lg:px-2 rounded-3xl overflow-hidden shadow-2xl hover:shadow-xl hover:shadow-slate-400 transition-shadow duration-300 cursor-pointer mb-6">
      {/* here is the card head */}
      <div className="flex justify-between gap-2 h-[100px] lg:h-[90px]">
        <div>
          <h1 className="text-sm lg:text-xl font-bold">{car?.CarModel}</h1>
          <p className="mt-2 font-semibold text-slate-300">{car?.Category}</p>
        </div>
        <div>
          <button
            onClick={() => handleFavoriteCar()}
            className="flex items-end justify-end py-2 pr-2 hover:animate-bounce"
          >
            <FaHeart className=" hover:text-red-600 transition-colors duration-300" />
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={car?.Images?.[2]?.url}
          className="w-full h-[80px] lg:w-full lg:h-[150px] rounded-lg group-hover:scale-110 transition object-cover"
          alt={car?.CarModel}
        />
      </div>

      {/* driving ,fuel, people */}
      <div className="flex flex-col lg:flex-row gap-3 mt-4">
        <div className="flex gap-1">
          <img className="w-[25px]" src={fuel} alt="" />
          <p>80L</p>
        </div>
        <div className="flex gap-1">
          <img className="w-[25px]" src={driving} alt="" />
          <p>Automatic</p>
        </div>
        <div className="flex gap-1">
          <img className="w-[25px]" src={people} alt="" />
          <p>{car?.Seating} People</p>
        </div>
      </div>
      <div className="mt-6">
        <div className="text-[14px] lg:text-xl">
          <span className="font-bold">${car?.CarPriceNew}/</span>
          <span className="font-bold">New</span>
        </div>
      </div>

      <Link to={`/carDetailsPage/${car?._id}`}>
        <div className="absolute ml-[99px] -mt-12 lg:ml-[229px] lg:-mt-6">
          <button className="bg-gradient-to-tl from-blue-500 via-slate-700 to-slate-100 py-1 px-2 rounded-tl-3xl rounded-br-3xl">
            More <br /> Info
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CarCard;
