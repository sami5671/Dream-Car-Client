import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import axiosSecure from "../api";

const UseToGetSoldCarByEmail = () => {
  // tan stack query to fetch data from the database
  const { user } = useAuth();

  const { data: soldCarByEmail = [], refetch } = useQuery({
    queryKey: ["soldCarByEmail", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/soldCarByEmail?email=${user?.email}`);
      return res.data;
    },
  });
  return [soldCarByEmail, refetch];
};

export default UseToGetSoldCarByEmail;
