import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import HomePage from "../pages/HomePage";
import DonationCampaign from "../pages/DonationCampaign";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"",
        element: <HomePage></HomePage>
      }
    ]
  },
  {
    path: "/donation",
    element: <DonationCampaign></DonationCampaign>
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>
  },
  {
    path: "/login",
    element: <h3>This is login page</h3>
  },
  {
    path: "/register",
    element: <h3>This is register page</h3>
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;