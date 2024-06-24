import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import UseUserFavoriteCar from "./../../../Hooks/UseUserFavoriteCar";
import Container from "../../Shared/Container";
import EmptyData from "./../../EmptyData/EmptyData";
import UserFavoriteCarCard from "./UserFavoriteCarCard";
import { deleteFavoriteCars } from "./../../../api/Cars";

const UserFavoriteCars = () => {
  const [favoriteCar, refetch] = UseUserFavoriteCar();

  // console.log(favoriteCar);

  const handleDeleteAllCars = async () => {
    const carIds = favoriteCar.map((car) => car._id);
    // console.log(carIds);

    const res = await deleteFavoriteCars(carIds);
    // console.log(res);
    if (res.deletedCount > 0) {
      refetch();
      toast.success("Deleted all favorite cars");
    }
  };

  return (
    <section>
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="lg:text-4xl font-bold ">
              <span className="flex gap-2 items-center bg-gradient-to-br from-purple-500 to-red-600 text-transparent bg-clip-text">
                Your Favorites
                <FaStar className="text-red-900/[.4]" />
              </span>
            </h1>
          </div>

          <div>
            <button
              onClick={handleDeleteAllCars}
              className="text-2xl font-semibold text-purple-600 hover:underline"
            >
              Erase All
            </button>
          </div>
        </div>

        {/* show favorite  car  data */}

        {favoriteCar.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-3">
            {favoriteCar.map((car) => (
              <UserFavoriteCarCard key={car._id} car={car} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
            <EmptyData
              center={true}
              title="Whoo Whoo No Favorite Car selected!!"
              subtitle="Please Select"
            />
          </div>
        )}
      </Container>
    </section>
  );
};

export default UserFavoriteCars;
