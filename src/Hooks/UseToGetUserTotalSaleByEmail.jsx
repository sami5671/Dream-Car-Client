import useAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";

const UseToGetUserTotalSaleByEmail = () => {
  // tan stack query to fetch data from the database
  const { user } = useAuth();

  const { data: totalSaleByEmail = [], refetch } = useQuery({
    queryKey: ["totalSaleByEmail", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/userTotalSalesCarByEmail?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [totalSaleByEmail, refetch];
};

export default UseToGetUserTotalSaleByEmail;
