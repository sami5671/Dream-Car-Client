import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import axiosSecure from "../api";

const UseToGetUserAddedCarByEmail = () => {
  // tan stack query to fetch data from the database
  const { user } = useAuth();

  const { data: userAddedCarByEmail = [], refetch } = useQuery({
    queryKey: ["userAddedCarByEmail", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/userAddedCarByEmail?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [userAddedCarByEmail, refetch];
};

export default UseToGetUserAddedCarByEmail;
