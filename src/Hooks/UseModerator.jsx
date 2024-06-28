import useAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";

const UseModerator = () => {
  const { user, loading } = useAuth();

  const { data: isModerator, isPending: isModeratorLoading } = useQuery({
    queryKey: [user?.email, "isModerator"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/users/moderator/${user.email}`);
      //   console.log(res.data);
      return res.data?.moderator;
    },
  });

  return [isModerator, isModeratorLoading];
};

export default UseModerator;
