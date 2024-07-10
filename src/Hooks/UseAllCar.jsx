import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";

const UseAllCar = () => {
  const { data: allCar = [], refetch } = useQuery({
    queryKey: ["allCar"],
    queryFn: async () => {
      const res = await axiosSecure.get("/cars");
      return res.data;
    },
  });
  return [allCar, refetch];
};

export default UseAllCar;
