import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Seller from '../Header/Seller'
import More from '../Header/More'
import Home from '../Home/Home'
import ProductPage from '../ProductPage/ProductPage'

const RouterNavigation = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/productPage' element={<ProductPage />}></Route>
        <Route path='/seller' element={<Seller />}></Route>
        <Route path='/more' element={<More />}></Route>
        {/* <Route path='/' element={}></Route> */}
      </Routes>
    </>
  )
}

export default RouterNavigation
