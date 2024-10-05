import React from "react"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Featured from "./components/featured/Featured";
import Services from "./components/services/Services";
import Aboutus from "./components/aboutUs/Aboutus";

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Featured />
        <Services />
        <Aboutus />
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
