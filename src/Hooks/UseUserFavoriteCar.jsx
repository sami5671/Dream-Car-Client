import useAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api/index";

const UseUserFavoriteCar = () => {
  // tan stack query to fetch data from the database
  const { user } = useAuth();

  const { data: userFavoriteCar = [], refetch } = useQuery({
    queryKey: ["userFavoriteCar", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/userFavoriteCar?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [userFavoriteCar, refetch];
};

export default UseUserFavoriteCar;
