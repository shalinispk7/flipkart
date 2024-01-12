import React from 'react'
import Data from '../../Assets/data/Data'

const ProductPageCard = (props) => {
  console.log(Data.filter((e) => e.category === props.value))
  console.log(Data)
  console.log(props)
  return (
    <>
      {Data.filter((el) => el.category === props.value).map((e, index) => {
        return (
          <div key={index} className='col-lg-3 mb-3'>
            <div className='card'>
              <div className='text-decoration-none d-flex flex-column gap-2 align-items-center justify-content-center'>
                <div className='mt-3'>
                  <img
                    src={e.images[0].url}
                    className='card-img-top w-100'
                    style={{ height: '8rem' }}
                    alt='...'
                  />
                </div>
                <div className='card-body d-flex  flex-column gap-1 align-items-start justify-content-center'>
                  <h2 className='card-text text-black fw-normal fs-6'>
                    {/* {e.title} */}
                    {e.title?.length > 40
                      ? e.title.slice(0, 30) + '...'
                      : e.title}
                  </h2>

                  <div className='d-flex gap-1 align-items-center justify-content-center fs-6 bg-success text-white rounded-2 py-0 px-2'>
                    <span className='fw-normal' style={{ fontSize: '1rem' }}>
                      {e.ratings}
                    </span>
                    <svg
                      className='MuiSvgIcon-root MuiSvgIcon-fontSize24px css-jpbqk9 rating'
                      focusable='false'
                      aria-hidden='true'
                      viewBox='0 0 24 24'
                      data-testid='StarIcon'
                    >
                      <path d='M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'></path>
                    </svg>
                  </div>
                  <div>
                    <span>{e.rating} Ratings & </span>{' '}
                    <span>{e.numrev} Reviews</span>
                  </div>
                  <h2 className='d-flex gap-3 fw-normal fs-6 align-baseline text-black'>
                    ₹{e.price}
                    <del className='mx-2 text-black-50 fw-normal fs-6'>
                      ₹{e.cureted_price}
                    </del>
                    <span className='text-success align-baseline'>
                      {(
                        ((e.cureted_price - e.price) / e.cureted_price) *
                        100
                      ).toFixed(2)}
                      %
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ProductPageCard
