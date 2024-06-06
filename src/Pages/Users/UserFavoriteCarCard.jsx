import { MdDelete } from "react-icons/md";
import { deleteFavoriteCar } from "../../api/Cars";
import toast from "react-hot-toast";
import UseUserFavoriteCar from "../../Hooks/UseUserFavoriteCar";

const UserFavoriteCarCard = ({ car }) => {
  const [, refetch] = UseUserFavoriteCar();
  // =================================================================

  const handleDeleteCar = async (id) => {
    const res = await deleteFavoriteCar(id);
    if (res.deletedCount > 0) {
      refetch();
      toast.success(`Deleted Favorite ${car?.favoriteCar?.CarModel}`);
    }
  };

  // =================================================================
  return (
    <section className="mt-12">
      <div className="border-2  px-2 hover:shadow-xl cursor-pointer">
        <button
          onClick={() => handleDeleteCar(car?._id)}
          className="flex items-end justify-end py-1"
        >
          <MdDelete className="text-slate-400 hover:text-red-600 hover:object-fit text-xl" />
        </button>

        <div>
          <img
            src={car?.favoriteCar?.Images?.[3]}
            className="w-[250px] h-[150px] group-hover:scale-110 transition object-cover "
            alt="Img"
          />
        </div>
        <div className="w-full h-[50px]">
          <h1 className="text-xl font-bold text-slate-700">
            {car?.favoriteCar?.CarModel}
          </h1>
        </div>
        <div className="w-full h-[10px] mt-8">
          <p className=" bg-slate-400  px-2 w-fit mt-2 text-white font-bold rounded-md">
            ${car?.favoriteCar?.CarPriceNew}
          </p>
        </div>
        <div className="mt-8 py-2">
          <p className="text-purple-600 font-semibold">Buy Now</p>
        </div>
      </div>
    </section>
  );
};

export default UserFavoriteCarCard;
