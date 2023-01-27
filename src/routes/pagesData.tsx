import React from "react";
import { lazy } from "react";
import { routerType } from "./types";
const Home = lazy(() => import("../pages/home/home.component"));
const Authentication = lazy(
  () => import("../pages/authentication/authentication.component")
);
const Shop = lazy(() => import("../pages/shop/shop.component"));
const Checkout = lazy(() => import("../pages/checkout/checkout.component"));
const Payment = lazy(() => import("../pages/payment/payment.component"));
const OrderHistory = lazy(() => import("../pages/order-history/order-history.component"));
const OrderHistoryDetails = lazy(() => import("../pages/order-history-details/order-history-details.component"));
const OrderSent = lazy(() => import("../pages/order-sent/order-sent.component")); 

export const pathPagesType = { 
  HOME: "",
  AUTHENTICATION: "/auth",
  SHOP: "/shop/*",     
  CHECKOUT: "/checkout",
  PAYMNET: "/payment", 
  ORDER_HISTORY: "/orderHistory", 
  ORDER_HISTORY_DEATILS:  "/orderHistoryDetails/", 
  ORDER_SENT: "/orderSent", 
}

const pagesData: routerType[] = [
  {
    path: pathPagesType.HOME,
    element: <Home />,
    title: "home",
    index: true,
  },
  {
    path: pathPagesType.AUTHENTICATION,
    element: <Authentication />,
    title: "authentication",
    index: false,
  },
  {
    path: pathPagesType.SHOP,
    element: <Shop />,
    title: "shop",
    index: false,
  },
  {
    path: pathPagesType.CHECKOUT,
    element: <Checkout />,
    title: "checkout",
    index: false,
  },
  {     
    path: pathPagesType.PAYMNET,
    element: <Payment />,
    title: "payment",
    index: false,
  },
  {     
    path: pathPagesType.ORDER_HISTORY,
    element: <OrderHistory />,
    title: "Order History",
    index: false,
  },
  {     
    path: pathPagesType.ORDER_HISTORY_DEATILS + ":id",
    element: <OrderHistoryDetails />,
    title: "Order History DEATILS",
    index: false,
  },
  {     
    path: pathPagesType.ORDER_SENT,
    element: <OrderSent />,
    title: "Order Sent",
    index: false,
  },
];


export default pagesData;
