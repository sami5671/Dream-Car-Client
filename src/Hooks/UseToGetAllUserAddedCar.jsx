import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";

const UseToGetAllUserAddedCar = () => {
  const { data: allUserAddedCar = [], refetch } = useQuery({
    queryKey: ["allUserAddedCar"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allUserAddedCar");
      return res.data;
    },
  });
  return [allUserAddedCar, refetch];
};

export default UseToGetAllUserAddedCar;
