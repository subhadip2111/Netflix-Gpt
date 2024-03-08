import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/browser",
      element: <Browse />,
    },
    {
      path: "/",
      element: <Login />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
