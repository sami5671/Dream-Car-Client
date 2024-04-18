import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import Loader from "../Components/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/loginPage" state={{ from: location }} replace="true" />;
};

export default PrivateRoute;
