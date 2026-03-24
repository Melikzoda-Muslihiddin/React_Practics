import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout/Layout";
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
