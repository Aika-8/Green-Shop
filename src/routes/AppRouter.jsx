import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "../layout/Layout";
import { MainPage } from "../pages/MainPage";
import { Blog } from "../pages/Blog";
import { CardInner } from "../pages/CardInner";
import { Login } from "../auth/Login";

export const AppRouter = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/main" />,
        },
        {
          path: "/main/*",
          element: <MainPage />,
        },
        {
          path: "main/:cardId",
          element: <CardInner />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/auth",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};
