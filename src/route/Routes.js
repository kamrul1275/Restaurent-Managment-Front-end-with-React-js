import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Dashboard from "../pages/Dashboard";

import Login from "../Component/Login";
import AllCategory from "../pages/Category/AllCategory";
import CreateCategory from "../pages/Category/CreateCategory";
import AddCustomer from "../pages/Customer/AddCustomer";
import AllCustomer from "../pages/Customer/AllCustomer";
import AddMenu from "../pages/Menu/AddMenu";
import AllMenu from "../pages/Menu/AllMenu";
import AddProduct from "../pages/Product/AddProduct";
import AllProduct from "../pages/Product/AllProduct";

import AddOrder from "../pages/Order/AddOrder";
import AllOrder from "../pages/Order/AllOrder";
import AddOrderItem from "../pages/OrderItem/AddOrderItem";
import AllOrderItem from "../pages/OrderItem/AllOrderItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, // App is the parent layout
  },
  {
    path: "/",
    element: <App />, // App is the parent layout
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />, // Standalone Login route
      },
      {
        path: "/add/customer",
        element: <AddCustomer />, // Standalone Login route
      },
      {
        path: "/all/customer",
        element: <AllCustomer />, // Standalone Login route
      },

      {
        path: "/add/menu",
        element: <AddMenu></AddMenu>,
      },
      {
        path: "all/menu",
        element: <AllMenu></AllMenu>,
      },

      {
        path: "/add/product",
        element: <AddProduct />,
      },
      {
        path: "/all/product",
        element: <AllProduct />,
      },
      {
        path: "/add/category",
        element: <CreateCategory />,
        // Standalone Registration route
      },
      {
        path: "/all/category",
        element: <AllCategory></AllCategory>, // Standalone Registration route
      },
      {
        path: "/add/order",
        element: <AddOrder></AddOrder>,
      },
      {
        path: "all/order",
        element: <AllOrder></AllOrder>,
      },
      {
        path: "/add/order/item",
        element: <AddOrderItem></AddOrderItem>,
      },
      {
        path: "all/order/item",
        element: <AllOrderItem></AllOrderItem>,
      },
    ],
  },
]);

export default router;
