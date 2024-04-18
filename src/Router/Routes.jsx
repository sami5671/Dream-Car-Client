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
        path: "/carDetailsPage/:id",
        element: (
          <PrivateRoute>
            <CarDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getCar(params.id),
      },
    ],
  },
]);
