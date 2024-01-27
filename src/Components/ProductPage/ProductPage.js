import React from 'react'
import Header from '../Header/Header'
import ProductTitle from '../Banner/ProductTitle'
import Filter from './Filter'
import './ProductPage.css'
import ProductPageCard from './ProductPageCard'
import { Link, useParams } from 'react-router-dom'

const ProductPage = () => {
  const { category } = useParams()
  console.log(category)
  return (
    <>
      <Header />
      <ProductTitle />
      <section className=' mt-5'>
        <div className='container '>
          <div className='row'>
            <div className='col-lg-2'>
              <Filter />
            </div>

            <div className='col-lg-10 d-flex flex-wrap bg-light'>
              {/* sorting */}
              <div className='d-flex mb-2 col-lg-12'>
                <h2 className='fw-normal fs-3 pe-4'>Sort By:</h2>
                <h2 className='fw-normal fs-3 pe-4'>Popularity</h2>
                <h2 className='fw-normal fs-3 pe-4'>Price-Low to High</h2>
                <h2 className='fw-normal fs-3'>Price-High to Low</h2>
              </div>

              <ProductPageCard value={category} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductPage
