import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../components/Login";
import User from "../components/User";
import Users from "../components/Users";
import AppIndex from "./AppIndex";

function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <Login />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <Login /> },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/user",
          element: <User />,
        },
      ],
    },
  ]);
  return element;
}
export default AppNavigation;
