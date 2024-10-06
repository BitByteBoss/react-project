import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/layout/Layout.jsx';
import Home from './components/home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
    {
      path: "/",
      element: <Home />,
    },
  ]
  },
  
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
