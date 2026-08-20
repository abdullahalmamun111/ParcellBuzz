import React from 'react'
import { Outlet } from 'react-router'
import Home from '../Home/Home/Home'
import Footer from '../Footer/Footer'
import Navbar from '../Components/Navbar'

export const Rootlayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Rootlayout

