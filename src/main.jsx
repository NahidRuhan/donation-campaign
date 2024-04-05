import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './components/home/Home.jsx';
import Layout from './Layout.jsx';
import Error from './components/error/Error.jsx';
import CardDetail from './components/home/CardDetail.jsx';
import Donation from './components/donation/Donation.jsx';
import Statistics from './components/statistics/Statistics.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/data.json')
      },
      {
        path: "/donation/:id",
        element: <CardDetail></CardDetail>,
        loader: ()=> fetch('/data.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: ()=> fetch('/data.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
