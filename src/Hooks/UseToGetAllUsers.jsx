import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";

const UseToGetAllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/users");
      return res.data;
    },
  });
  return [users, refetch];
};

export default UseToGetAllUsers;
