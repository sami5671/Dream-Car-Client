import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../ErrorPage";
import Home from "../Pages/Home/Home";
import CustomerGarageDetails from "../Pages/Home/CustomerGarage/CustomerGarageDetails";

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
    ],
  },
]);
