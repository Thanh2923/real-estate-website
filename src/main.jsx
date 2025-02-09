import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import App from './App.jsx'
import Register from './components/register/Register.jsx';
import Login from './components/login/Login.jsx';
import { HouseList } from './pages/HouseList.jsx';
import { ProjectPage } from './pages/ProjectPage.jsx';
import WikiBdsPage from './pages/WikiBsdPage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import ProductBdsPage from './pages/ProductBdsPage.jsx';

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
        element: <HouseList/>
      },
      {
        path:"/du-an",
        element: <ProjectPage/>
      },
      {
        path:"/wiki-bds",
        element: <WikiBdsPage/>
      },
      {
        path:"/tin-tuc",
        element: <NewsPage/>
      },

      {
        path:"/bds",
        element: <ProductBdsPage/>
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