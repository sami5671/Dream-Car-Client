import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";
import { postFavoriteCar } from "../../api/Cars";
import UseUserFavoriteCar from "../../Hooks/UseUserFavoriteCar";

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
    <>
      <div className="border-2  px-2 hover:shadow-xl cursor-pointer">
        <button
          onClick={() => handleFavoriteCar()}
          className="flex items-end justify-end py-1"
        >
          <FaHeart className="text-slate-400 hover:text-purple-800 hover:object-fit" />
        </button>
        <Link to={`/carDetailsPage/${car?._id}`}>
          <div>
            <img
              src={car?.Images?.[1]?.url}
              className="w-[250px] h-[150px] group-hover:scale-110 transition object-cover "
              alt="Img"
            />
          </div>
          <div className="w-full h-[50px]">
            <h1 className="text-xl font-bold text-slate-700">
              {car?.CarModel}
            </h1>
          </div>
          <div className="w-full h-[10px] mt-8">
            <p className=" bg-slate-400  px-2 w-fit mt-2 text-white font-bold rounded-md">
              ${car.CarPriceNew}
            </p>
          </div>
          <div className="mt-8 py-2">
            <p className="text-purple-600 font-semibold">Shop Now</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CarCard;
