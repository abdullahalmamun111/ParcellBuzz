import { createBrowserRouter } from "react-router";
import Rootlayout from "../Layout/Rootlayout";
import Home from "../Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
        {
            index: true,
            Component: Home
        }
    ]
  },
]);