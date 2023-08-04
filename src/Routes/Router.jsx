import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import SignUp from "../Page/SignUp/SignUp";
import Login from "../Page/Login/Login";
import AddPlayer from "../Page/AddPlayer/AddPlayer";
import MyPlayer from "../Page/MyPlayer/MyPlayer";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
            path: "/signUp",
            element: <SignUp></SignUp>
        },
        {
          path: "/addPlayer",
          element: <PrivateRoute><AddPlayer></AddPlayer></PrivateRoute>
        },
        {
          path: "/myPlayer",
          element: <PrivateRoute><MyPlayer></MyPlayer></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;