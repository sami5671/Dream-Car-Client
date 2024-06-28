import axiosSecure from ".";

// save user info into the database
export const saveUser = async (user) => {
  const currentUser = {
    name: user.displayName,
    email: user.email,
    photo: user.photoURL,
    firebaseUserId: user.uid,
    role: "user",
  };
  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);
  return data;
};

// Get token from server
export const getToken = async (email) => {
  const { data } = await axiosSecure.post(`/jwt`, { email });
  console.log("Token received from server------>", data);
  return data;
};

// remove the token from the browser cookie
export const clearCookie = async () => {
  const { data } = await axiosSecure.get("/logout");
  return data;
};
