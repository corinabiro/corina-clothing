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
 

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
    index: true,
  },
  {
    path: "auth",
    element: <Authentication />,
    title: "authentication",
    index: false,
  },
  {
    path: "/shop/*",
    element: <Shop />,
    title: "shop",
    index: false,
  },
  {
    path: "checkout",
    element: <Checkout />,
    title: "checkout",
    index: false,
  },
  {     
    path: "payment",
    element: <Payment />,
    title: "payment",
    index: false,
  },
];

export default pagesData;
