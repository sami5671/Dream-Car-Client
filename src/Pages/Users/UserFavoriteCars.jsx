import UseUserFavoriteCar from "../../Hooks/UseUserFavoriteCar";

const UserFavoriteCars = () => {
  const [favoriteCar] = UseUserFavoriteCar();

  console.log(favoriteCar);

  return (
    <div>
      <h1>cars {favoriteCar.length}</h1>
    </div>
  );
};

export default UserFavoriteCars;
