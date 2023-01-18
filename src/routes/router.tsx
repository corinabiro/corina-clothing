import React from "react";
import { Route, Routes } from "react-router-dom";
import { routerType } from "./types";
import { Suspense } from "react";
import Spinner from "../components/spinner/spinner.component";
import { lazy } from "react";
import pagesData from "./pagesData";

const Navigation = lazy(
  () => import("../pages/navigation/navigation.component")
);

const Router = () => {
  const pageRoutes = pagesData.map(
    ({ path, title, element, index }: routerType) => {
      return (
        <Route
          key={title}
          index={index == true}
          path={`/${path}`}
          element={element}
        />
      );
    }
  );

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          {pageRoutes}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router; 
