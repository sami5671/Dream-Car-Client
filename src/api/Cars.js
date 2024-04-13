import axiosSecure from ".";
// fetch data from the mongodb database

export const getAllCars = async () => {
  const { data } = await axiosSecure("/cars");
  return data;
};
