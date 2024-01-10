import React from 'react'
import electronics from '../../Assets/img/best-electronics-1.jpeg'
import electronic from '../../Assets/img/download.jpeg'
import TVandAppliances from '../../Assets/data/TVandAppliances'
import { Link } from 'react-router-dom'

const BestProducts = () => {
  return (
    <div className='container'>
      <Link to={'/productpage'}>
        <div className='d-flex row'>
          <div className='w-5 h-5 col-lg-3'>
            <h2 className='text-center'>Best of Electronics</h2>
            <img src={electronic} />
          </div>
          {/* products  */}
          <div className='d-flex col-lg-9 overflow-x-scroll'>
            <div className='d-flex flex-column justify-content-end align-items-center col-lg-4'>
              <div className='w-50 trans-img'>
                <img
                  src={TVandAppliances[0].images[0].url}
                  className='card-img-top w-100'
                  style={{ height: '9rem' }}
                />
              </div>
              <span>{TVandAppliances[0].specificaton[0].type}</span>
              <span>{TVandAppliances[0].productDetails[0].Collection}</span>
            </div>
            <div className='d-flex flex-column justify-content-end align-items-center col-lg-4'>
              <div className='w-50 trans-img'>
                <img
                  src={TVandAppliances[1].images[0].url}
                  className='card-img-top w-100'
                  style={{ height: '9rem' }}
                />
              </div>
              <span>{TVandAppliances[1].specificaton[0].type}</span>
              <span>{TVandAppliances[1].productDetails[0].Collection}</span>
            </div>
            <div className='d-flex flex-column justify-content-end align-items-center col-lg-4'>
              <div className='w-50 trans-img'>
                <img
                  src={TVandAppliances[2].images[0].url}
                  className='card-img-top w-100'
                  style={{ height: '9rem' }}
                />
              </div>
              <span>{TVandAppliances[2].specificaton[0].type}</span>
              <span>{TVandAppliances[2].productDetails[0].Collection}</span>
            </div>

            <div className='d-flex flex-column justify-content-end align-items-center col-lg-4'>
              <div className='w-50 trans-img'>
                <img
                  src={TVandAppliances[3].images[0].url}
                  className='card-img-top w-100'
                  style={{ height: '9rem' }}
                />
              </div>
              <span>{TVandAppliances[3].specificaton[0].type}</span>
              <span>{TVandAppliances[3].productDetails[0].Collection}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BestProducts
