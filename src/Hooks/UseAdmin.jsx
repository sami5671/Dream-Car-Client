import axiosSecure from "../api";
import useAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";

const UseAdmin = () => {
  const { user, loading } = useAuth();

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/users/admin/${user.email}`);
      //   console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default UseAdmin;
