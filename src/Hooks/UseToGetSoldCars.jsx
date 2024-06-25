import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";

const UseToGetSoldCars = () => {
  const { data: soldCars = [], refetch } = useQuery({
    queryKey: ["soldCars"],
    queryFn: async () => {
      const res = await axiosSecure.get("/soldCars");
      return res.data;
    },
  });
  return [soldCars, refetch];
};

export default UseToGetSoldCars;
