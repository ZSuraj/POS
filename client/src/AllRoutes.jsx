import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home/Home"
import Orders from './Pages/Orders/Orders'
import Customers from './Pages/Customers/Customers'
import Menu from './Pages/Menu/Menu'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/customers' element={<Customers/>} />
        <Route path='/menu/starter' element={<Menu/>} />
        <Route path='/menu/rotis' element={<Menu/>} />
        <Route path='/menu/gravies' element={<Menu/>} />
        <Route path='/menu/pizza' element={<Menu/>} />
        <Route path='/menu/dessert' element={<Menu/>} />
        <Route path='/menu/soups' element={<Menu/>} />
        {/* <Route path='/menu/starter' element={<Starter/>} /> */}
    </Routes>
  )
}

export default AllRoutes