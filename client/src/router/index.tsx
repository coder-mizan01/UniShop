import { createBrowserRouter } from "react-router-dom";

import Root from "../Root";

//component
import { homePages } from "../components/DemosArray";
import GetShopComponent from "../components/GetShopComponent"

//home page
import Home from "../pages/Home";
import Register from "../auth/Register";
import ActivateEmail from "../auth/ActivateEmail";
import Login from "../auth/Login";

export const router = createBrowserRouter([
    {            
  
        element: <Root />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/register",
            element : <Register />
          },
          {
            path: "/login",
            element: <Login />
          },
          {
            path : `/api/users/activate/:token`,
            element : <ActivateEmail/>,
          },
          //markets route
          ...homePages.names.map((homePage) => ({
            path: homePage,
            element: GetShopComponent(homePage),
          })),
          
        ]
    
      },
])