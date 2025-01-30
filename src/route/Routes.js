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
import AddStaff from "../pages/Staff/AddStaff";
import AllStaff from "../pages/Staff/AllStaff";
import ProfileStaff from "../pages/Staff/ProfileStaff";
import PrivateRoutes from "./PrivetRoutes";
import POSInvoice from "../pages/ManageOrder/POSInvoice";
import OrderDetails from "../pages/ManageOrder/OrderDetails";
import PendingOrder from "../pages/ManageOrder/PendingOrder";
import CompleteOrder from "../pages/ManageOrder/CompleteOrder";

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
        element: (
          <PrivateRoutes requiredPermission="/dashboard">
            <Dashboard />
          </PrivateRoutes>
        ),
      },
      {
        path: "/order/pos_invoice",
        element: <POSInvoice />,
      },
      {
        path: "/order/list",
        element: <OrderDetails></OrderDetails>,
      },
      {
        path: "/pending/order",
        element: <PendingOrder></PendingOrder>,
      },
      {
        path: "/order/details",
        element: <OrderDetails></OrderDetails>,
      },
      {
        path: "/complete/order",
        element: <CompleteOrder></CompleteOrder>,
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
      // staff
      {
        path: "/add/staff",
        element: <AddStaff></AddStaff>,
      },
      {
        path: "all/staff",
        element: <AllStaff></AllStaff>,
      },
      {
        path: "/staff/profile",
        element: <ProfileStaff></ProfileStaff>,
      },
    ],
  },
]);

export default router;
