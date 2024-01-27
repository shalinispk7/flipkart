import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Seller from '../Header/Seller'
import More from '../Header/More'
import Home from '../Home/Home'
import ProductPage from '../ProductPage/ProductPage'
import ProductDetails from '../ProductDetails/ProductDetails'
import Cart from '../Cart/Cart'
import CheckOutOrders from '../Orders/CheckOutOrders'

const RouterNavigation = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/productPage/:category' element={<ProductPage />}></Route>
        <Route path='/seller' element={<Seller />}></Route>
        <Route path='/more' element={<More />}></Route>
        <Route path='/productDetails/:id' element={<ProductDetails />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<CheckOutOrders />}></Route>
      </Routes>
    </>
  )
}

export default RouterNavigation
