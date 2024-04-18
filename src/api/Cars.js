import axiosSecure from ".";
// fetch data from the mongodb database

// export const getAllCars = async () => {
//   const { data } = await axiosSecure("/cars");
//   return data;
// };

// get brand new car
export const getBrandNewCar = async () => {
  const { data } = await axiosSecure("/cars/brandNew");
  return data;
};

// get single car from database
export const getCar = async (id) => {
  const { data } = await axiosSecure(`/car/${id}`);
  return data;
};
