import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import fuel from "../../../assets/Images/fuel.png";
import driving from "../../../assets/Images/driving.png";
import people from "../../../assets/Images/group.png";
import { deleteFavoriteCar } from "../../../api/Cars";
import UseUserFavoriteCar from "../../../Hooks/UseUserFavoriteCar";

const UserFavoriteCarCard = ({ car }) => {
  const [, refetch] = UseUserFavoriteCar();
  // console.log(car);

  // console.log(car);
  const handleDeleteCar = async (id) => {
    const res = await deleteFavoriteCar(id);
    if (res.deletedCount > 0) {
      refetch();
      toast.success(`Deleted Favorite ${car?.favoriteCar?.CarModel}`);
    }
  };

  return (
    <section className="mt-12">
      <div className="bg-slate-100 border-2 border-cyan-50 lg:border-none w-[160px] lg:w-[290px] lg:py-4 px-1 lg:px-2 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
        {/* here is the card head */}
        <div className="flex justify-between gap-2 h-[100px] lg:h-[90px]">
          <div>
            <h1 className="text-sm lg:text-xl font-bold text-gray-800">
              {car?.favoriteCar?.CarModel}
            </h1>
            <p className="mt-2 font-semibold text-slate-400">
              {car?.favoriteCar?.Category}
            </p>
          </div>
          <div>
            <button
              onClick={() => handleDeleteCar(car?._id)}
              className="flex items-end justify-end py-1"
            >
              <MdDelete className="text-slate-400 hover:text-red-600 hover:object-fit text-xl" />
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={car?.favoriteCar?.Images?.[2]?.url}
            className="w-full h-[80px] lg:w-full lg:h-[150px] rounded-lg group-hover:scale-110 transition object-cover"
            alt={car?.favoriteCar?.CarModel}
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
            <p>{car?.favoriteCar?.Seating} People</p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-5 mt-6">
          <div className="text-[12px] lg:text-xl">
            <span className="font-bold ">
              ${car?.favoriteCar?.CarPriceNew}/
            </span>
            <span className="font-bold">New</span>
          </div>

          <div className="">
            <button className="text-purple-600 text-[12px] lg:text-normal font-semibold hover:text-purple-800">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserFavoriteCarCard;
