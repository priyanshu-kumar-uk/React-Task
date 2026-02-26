import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Component/About.jsx";
import Product from "./Component/Product.jsx";
import Home from "./Component/Home.jsx";
import Dynmic from "./Component/Dynmic.jsx";
import Login from "./Component/Login.jsx";
import Producted from "./Component/Producted.jsx";
import Dashbord from "./Component/Dashbord.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // those are childrean inside of app this is (outlate  )
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/about/:id",
        element: <Dynmic />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        element: <Producted />,
        children: [
          {
            path: "/dashbord",
            element: <Dashbord />,
          },
          {
            path: "/product",
            element: <Product />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
