import React from 'react'
import TVandAppliances from '../../Assets/data/TVandAppliances'

const BestProductCard = (props) => {
  return (
    <>
      <div className='d-flex flex-column justify-content-end align-items-center col-lg-4'>
        <div className=''>
          <img
            src={props.value.images[0].url}
            className='card-img-top w-100'
            style={{ height: '9rem' }}
          />
        </div>
        <span className='fs-6 text-dark py-2'>
          {props.value.specificaton[0].type}
        </span>
        {/* <span>{props.value.productDetails[0].Collection}</span> */}
      </div>
    </>
  )
}

export default BestProductCard
