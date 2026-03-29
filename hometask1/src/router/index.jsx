import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Todo from "../pages/Todo";
import Info from "../pages/Info";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "info/:id",
        element: <Info />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
