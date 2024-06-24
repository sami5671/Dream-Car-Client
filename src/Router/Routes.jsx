import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../ErrorPage";
import Home from "../Pages/Home/Home";
import CustomerGarageDetails from "../Pages/Home/CustomerGarage/CustomerGarageDetails";
import SignUpPage from "../Pages/SignUp/SignUpPage";
import LoginPage from "../Pages/Login/LoginPage";
import CarDetails from "../Pages/CarDetailsPage/CarDetails";
import { getCar } from "../api/Cars";
import PrivateRoute from "./PrivateRoute";
import CarCollection from "../Pages/CarCollectionPage/CarCollection";
import DashboardLayout from "../Layout/DashboardLayout";
import AddCar from "../Components/Dashboard/Moderator/AddCar/AddCar";
import ManageCar from "../Components/Dashboard/Moderator/MaanageCar/ManageCar";
import ManageOrder from "../Components/Dashboard/Moderator/ManageOrder/ManageOrder";
import UpdateCar from "../Components/Dashboard/Moderator/MaanageCar/UpdateCar";
import UserFavoriteCars from "./../Components/Dashboard/Users/UserFavoriteCars";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/customerGarageDetails",
        element: <CustomerGarageDetails />,
      },
      {
        path: "/signUpPage",
        element: <SignUpPage />,
      },
      {
        path: "/loginPage",
        element: <LoginPage />,
      },
      {
        path: "/carCollection",
        element: <CarCollection />,
      },
      {
        path: "/carDetailsPage/:id",
        element: (
          <PrivateRoute>
            <CarDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getCar(params.id),
      },
      {
        path: "/userFavoriteCar",
        element: (
          <PrivateRoute>
            <UserFavoriteCars />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "add-car",
        element: (
          <PrivateRoute>
            <AddCar />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-car",
        element: (
          <PrivateRoute>
            <ManageCar />
          </PrivateRoute>
        ),
      },
      {
        path: "update-car/:id",
        element: (
          <PrivateRoute>
            <UpdateCar />
          </PrivateRoute>
        ),
        loader: ({ params }) => getCar(params.id),
      },
      {
        path: "manage-order",
        element: (
          <PrivateRoute>
            <ManageOrder />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
