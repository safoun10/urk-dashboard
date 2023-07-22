import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./layout/dashboard/Dashboard";
import Home from "./components/home/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Dashboard></Dashboard>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      }
    ]
	},
  {
    path : "*",
    element : <div className="unknown-page">404 - PAGE NOT FOUND</div>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
