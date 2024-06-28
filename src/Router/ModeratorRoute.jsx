import Loader from "../Components/Loader/Loader";
import useAuth from "../Hooks/UseAuth";
import UseModerator from "../Hooks/UseModerator";
import { Navigate, useLocation } from "react-router-dom";

const ModeratorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isModerator, isModeratorLoading] = UseModerator();
  const location = useLocation();

  if (loading || isModeratorLoading) {
    return <Loader />;
  }
  if (user && isModerator) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default ModeratorRoute;
