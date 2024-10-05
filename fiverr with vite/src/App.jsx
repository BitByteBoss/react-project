import React from "react"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero doloremque nulla iusto repellat exercitationem, enim quo minima recusandae nam aliquam eius quae reiciendis quaerat. Quis ab dolorem nesciunt exercitationem quibusdam?</h1>
        <Outlet />
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
