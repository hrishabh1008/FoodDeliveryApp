import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";

import Search from "./components/headerComponents/Search.jsx";
import Help from "./components/headerComponents/Help.jsx";
import Signin from "./components/headerComponents/Signin";
import Cart from "./components/headerComponents/Cart.jsx";
import Offers from "./components/headerComponents/Offers.jsx";
import Body from "./components/Body.jsx";
import Error from "./components/Error.jsx";
import RestaurantDetails from "./components/bodyComponets/RestaurantDetails.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <Search />,
      },

      {
        path: "/help",
        element: <Help />,
      },

      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

let root = document.getElementById("root");
createRoot(root).render(<RouterProvider router={appRouter} />);
