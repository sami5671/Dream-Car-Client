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

// delete user favorite car
export const deleteFavoriteCar = async (id) => {
  const { data } = await axiosSecure.delete(`/userFavoriteCar/${id}`);
  return data;
};

// delete user all favorite car
export const deleteFavoriteCars = async (ids) => {
  const res = await axiosSecure.delete("/deleteFavoriteCars", {
    data: { carIds: ids },
  });
  return res.data;
};

// ------------------moderator api------------------------- (add car to database)
export const addCar = async (carData) => {
  const { data } = await axiosSecure.post("/addCar", carData);
  return data;
};

// update a car info
export const updateCarInfo = async (id, carData) => {
  const { data } = await axiosSecure.patch(`/updateCar/${id}`, carData);
  return data;
};

// delete a car
export const deleteCar = async (id) => {
  const { data } = await axiosSecure.delete(`/deleteCar/${id}`);
  return data;
};

//---------- payment method (create payment intent for stripe payment)-----------------
export const createPaymentIntent = async (price) => {
  const { data } = await axiosSecure.post("/create-payment-intent", price);
  return data;
};
// save buying info in db
export const saveSoldCarInfo = async (paymentInfo) => {
  const { data } = await axiosSecure.post("/soldCars", paymentInfo);
  return data;
};
// get single sold card details
export const getOneSoldCarDetail = async (id) => {
  const { data } = await axiosSecure(`/orderDetail/${id}`);
  return data;
};

// update order status
export const updateOrderStatus = async (id, status) => {
  const { data } = await axiosSecure.patch(`/orderStatus/${id}`, { status });
  return data;
};

// ============================user related api=====================================
// get single sold card details for a user
export const getSoldCarForUser = async (id) => {
  const { data } = await axiosSecure(`/userOrderSummary/${id}`);
  return data;
};
export const addUserCar = async (carData) => {
  const { data } = await axiosSecure.post("/addUserCar", carData);
  return data;
};

//================================ admin related api functions====================

export const updateUserRole = async (id, role) => {
  const { data } = await axiosSecure.patch(`/updateUserRole/${id}`, { role });
  return data;
};

export const deleteUser = async (id) => {
  const { data } = await axiosSecure.delete(`/deleteUser/${id}`);
  return data;
};
