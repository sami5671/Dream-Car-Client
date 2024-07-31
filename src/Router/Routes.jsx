import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../ErrorPage";
import Home from "../Pages/Home/Home";
import CustomerGarageDetails from "../Pages/Home/CustomerGarage/CustomerGarageDetails";
import SignUpPage from "../Pages/SignUp/SignUpPage";
import LoginPage from "../Pages/Login/LoginPage";
import CarDetails from "../Pages/CarDetailsPage/CarDetails";
import {
  getCar,
  getOneSoldCarDetail,
  getSecondHandCar,
  getSoldCarForUser,
} from "../api/Cars";
import PrivateRoute from "./PrivateRoute";
import CarCollection from "../Pages/CarCollectionPage/CarCollection";
import DashboardLayout from "../Layout/DashboardLayout";
import AddCar from "../Components/Dashboard/Moderator/AddCar/AddCar";
import ManageCar from "../Components/Dashboard/Moderator/MaanageCar/ManageCar";
import ManageOrder from "../Components/Dashboard/Moderator/ManageOrder/ManageOrder";
import UpdateCar from "../Components/Dashboard/Moderator/MaanageCar/UpdateCar";
import UserFavoriteCars from "./../Components/Dashboard/Users/UserFavoriteCars";
import OrderDetails from "../Components/Dashboard/Moderator/ManageOrder/OrderDetails";
import MyShippingInfo from "../Components/Dashboard/Users/MyShippingInfo";
import UserOrderSummary from "../Components/Dashboard/Users/UserOrderSummary";
import ManageUsers from "../Components/Dashboard/Admin/ManageUsers/ManageUsers";
import ModeratorRoute from "./ModeratorRoute";
import AdminRoute from "./AdminRoute";
import AddUserCar from "../Components/Dashboard/Users/AddUserCar";
import UserGarage from "../Components/Dashboard/Users/UserGarage";
import UserCarAcceptance from "../Components/Dashboard/Admin/ManageCarAccept/UserCarAcceptance";
import UpdateUserAddedCar from "../Components/Dashboard/Users/UpdateUserAddedCar";
import MyProfile from "../Components/ProfileInfo/MyProfile";
import Success from "../Payment/SSLCommerce/Success";
import Cancel from "../Payment/SSLCommerce/Cancel";
import Fail from "../Payment/SSLCommerce/Fail";
import AdminDashboard from "../Components/Dashboard/Admin/AdminDashboard/AdminDashboard";
import ModeratorDashboard from "../Components/Dashboard/Moderator/ModeratorDashboard/ModeratorDashboard";
import UserDashboard from "../Components/Dashboard/Users/UserDashboard/UserDashboard";

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
      {
        path: "/success",
        element: (
          <PrivateRoute>
            <Success />
          </PrivateRoute>
        ),
      },
      {
        path: "/cancel",
        element: (
          <PrivateRoute>
            <Cancel />
          </PrivateRoute>
        ),
      },
      {
        path: "/fail",
        element: (
          <PrivateRoute>
            <Fail />
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
      // moderator routes
      {
        path: "moderator-dashboard",
        element: (
          <PrivateRoute>
            <ModeratorRoute>
              <ModeratorDashboard />
            </ModeratorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "add-car",
        element: (
          <PrivateRoute>
            <ModeratorRoute>
              <AddCar />
            </ModeratorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-car",
        element: (
          <PrivateRoute>
            <ModeratorRoute>
              <ManageCar />
            </ModeratorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "update-car/:id",
        element: (
          <PrivateRoute>
            <ModeratorRoute>
              <UpdateCar />
            </ModeratorRoute>
          </PrivateRoute>
        ),
        loader: ({ params }) => getCar(params.id),
      },
      {
        path: "manage-order",
        element: (
          <PrivateRoute>
            <ModeratorRoute>
              <ManageOrder />
            </ModeratorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "order-details/:id",
        element: (
          <PrivateRoute>
            <ModeratorRoute>
              <OrderDetails />
            </ModeratorRoute>
          </PrivateRoute>
        ),
        loader: ({ params }) => getOneSoldCarDetail(params.id),
      },
      //users dashboard
      {
        path: "user-dashboard",
        element: (
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "add-user-car",
        element: (
          <PrivateRoute>
            <AddUserCar />
          </PrivateRoute>
        ),
      },
      {
        path: "user-garage",
        element: (
          <PrivateRoute>
            <UserGarage />
          </PrivateRoute>
        ),
      },
      {
        path: "user-addedCar-update/:id",
        element: (
          <PrivateRoute>
            <UpdateUserAddedCar />
          </PrivateRoute>
        ),
        loader: ({ params }) => getSecondHandCar(params.id),
      },
      {
        path: "my-shipping",
        element: (
          <PrivateRoute>
            <MyShippingInfo />
          </PrivateRoute>
        ),
      },
      {
        path: "user-order-summary/:id",
        element: (
          <PrivateRoute>
            <UserOrderSummary />
          </PrivateRoute>
        ),
        loader: ({ params }) => getSoldCarForUser(params.id),
      },
      // admin  routes
      {
        path: "admin-dashboard",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "user-car-accept",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <UserCarAcceptance />
            </AdminRoute>
          </PrivateRoute>
        ),
      },

      // others
      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
