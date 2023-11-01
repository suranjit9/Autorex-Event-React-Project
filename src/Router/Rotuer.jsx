import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorePage/ErrorPage";
import Home from "../Leout/Home";
import Services from "../Leout/Component/Services/Services";
import About from "../Leout/Component/About/About";
import Contact from "../Leout/Component/Contact/Contact";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/Services',
            element:<Services/>
        },
        {
            path:'/About',
            element:<About/>
        },
        {
            path:'/Contact',
            element:<Contact/>
        }
      ]
    },
  ]);

  export default router;