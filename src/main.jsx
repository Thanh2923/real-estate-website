import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import App from './App.jsx'
import PropertyPage from './components/PropertyPage/PropertyPage.jsx';
import Register from './components/register/Register.jsx';
import Login from './components/login/Login.jsx';





const router = createBrowserRouter([
  {
    path :"/",
    element : <App/>,
    
    children:[
      {
        path:"/home",
        element: <Home/>
      },
      {
        path:"/dang-ky",
        element: <Register/>
      },
      {
        path:"/dang-nhap",
        element: <Login/>
      },
      {
        path:"/nha-ban-dat",
        element: <PropertyPage/>
      },
    ]
  

  }
],

);

ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 
);