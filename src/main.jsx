import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';





const router = createBrowserRouter([
  {
    path :"/",
    element : <Home/>,
    
    // children:[
    //   {
    //     path:"ExpenseFixed",
    //     element: <ExpenseFixed/>
    //   },
    //   {
    //     path:"Track-Expense",
    //     element: <TableExpense/>
    //   },
    //   {
    //     path:"Category",
    //     element: <TableCategorys/>
    //   },
    //   {
    //     path:"Budget-Settings",
    //     element: <TableBudgetSettings/>
    //   },

    

    // ]
  }
],

);

ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 
);