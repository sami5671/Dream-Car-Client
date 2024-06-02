import axiosSecure from ".";

// fetch data from the mongodb database

export const getAllCars = async () => {
  const { data } = await axiosSecure("/cars");
  return data;
};

// get brand new car
export const getBrandNewCar = async () => {
  const { data } = await axiosSecure("/cars/brandNew");
  return data;
};
// get recondition new car
export const getReconditionCar = async () => {
  const { data } = await axiosSecure("/cars/recondition");
  return data;
};

// get single car from database
export const getCar = async (id) => {
  const { data } = await axiosSecure(`/car/${id}`);
  return data;
};

// post favorite car and email to database
export const postFavoriteCar = async (favoriteCarItem) => {
  const { data } = await axiosSecure.post("/favoriteCar", favoriteCarItem);
  return data;
};

// get User favorite car by email

// tan stack query watch Hooks folder
// =================================================================
