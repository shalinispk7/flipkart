import React from 'react'
import electronics from '../../Assets/img/best-electronics-1.jpeg'
import electronic from '../../Assets/img/download.jpeg'
import books from '../../Assets/img/books.jpeg'
import phone from '../../Assets/img/phone.jpeg'

import { Link, useParams } from 'react-router-dom'
import BestProductCard from './BestProductCard'
import Grocery from '../../Assets/data/Grocery'
import Books from '../../Assets/data/Books'
import Mobile from '../../Assets/data/Mobile'
import HomeAndFurniture from '../../Assets/data/Home&Furniture'
import Electronics from '../../Assets/data/Eletronics'

const BestProducts = () => {
  return (
    <div className='container'>
      <Link to={'/productPage/electronics'} className='text-decoration-none'>
        <div className='d-flex row'>
          <div className='w-5 h-5 col-lg-3'>
            <h2 className='text-center fs-4 text-black'>Best of Electronics</h2>
            <img src={electronic} />
          </div>
          {/* products  */}
          <div className='d-flex col-lg-9 overflow-x-scroll'>
            {Electronics.map((e, index) => {
              return <BestProductCard key={index} value={e} />
            })}
          </div>
        </div>
      </Link>
      <Link to={'/productPage/books'} className='text-decoration-none'>
        <div className='d-flex row'>
          <div className='w-5 h-5 col-lg-3'>
            <h2 className='text-center fs-4 text-black'>Best of Books</h2>
            <img src={books} />
          </div>
          {/* products  */}
          <div className='d-flex col-lg-9 overflow-x-scroll'>
            {Books.map((e, index) => {
              return <BestProductCard key={index} value={e} />
            })}
          </div>
        </div>
      </Link>
      <Link to={'/productPage/mobile'} className='text-decoration-none'>
        <div className='d-flex row'>
          <div className='w-5 h-5 col-lg-3'>
            <h2 className='text-center fs-4 text-black'>
              Best of mobile phones
            </h2>
            <img src={phone} />
          </div>
          {/* products  */}
          <div className='d-flex col-lg-9 overflow-x-scroll'>
            {Mobile.map((e, index) => {
              return <BestProductCard key={index} value={e} />
            })}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BestProducts
