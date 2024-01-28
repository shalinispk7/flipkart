import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { setCurrentPath } from '../../ReduxStore/userSlice'

const Header = () => {
  const { productsAdded } = useSelector((store) => store.productStore)
  const { userInfo } = useSelector((store) => store.userStore)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const handleLogin = () => {
    dispatch(setCurrentPath(location.pathname))
    navigate('/login')
  }

  return (
    <section className='bg-primary'>
      <div className='container'>
        <div className='row d-flex align-items-center'>
          <div className='col-lg-5'>
            <div className='row d-flex align-items-center'>
              <div className='col-lg-3'>
                <Link to={'/'} className='text-decoration-none'>
                  <span
                    href='#'
                    className='fs-5 text-white text-decoration-none fw-bold'
                  >
                    Flipkart
                  </span>
                  <h6 className='text-white fw-light fst-italic'>
                    Explore<span className='text-warning ps-1'>Plus</span>
                  </h6>
                </Link>
              </div>
              <div className='col-lg-9'>
                <div className='d-flex align-items-center justify-content-around gap-3 bg-light border-none'>
                  {/* <Search className='pe-1 ps-1 fw-bold fs-3' /> */}
                  <input
                    className='border-none outline-none form-control'
                    list='datalistOptions'
                    id='exampleDataList'
                    placeholder='search for products and more...'
                    type='text'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-7 text-light text-start'>
            <div className='row'>
              <div className='col-lg-3'>
                {userInfo ? (
                  userInfo.displayName
                ) : (
                  <button
                    className='text-primary border-0 px-3  fs-5 fw-bold d-flex align-items-center'
                    onClick={() => handleLogin()}
                  >
                    {/* <Person className='pe-2 fs-3' /> */}
                    Login
                  </button>
                )}
              </div>
              <div className='col-lg-4'>
                <Link to={'/seller'} className='text-decoration-none'>
                  <h2 className='fw-bold fs-5 text-light '>
                    {/* <InboxFill className='pe-2 fs-3' /> */}
                    Become a Seller
                  </h2>
                </Link>
              </div>
              <div className='col-lg-3'>
                <Link to={'/more'} className='text-decoration-none'>
                  <h2 className='fw-bold fs-5 text-light '>
                    {/* <CaretDownFill className='pe-2 fs-3' /> */}
                    More
                  </h2>
                </Link>
              </div>
              <div className='col-lg-2'>
                <Link to={'/cart'} className='text-decoration-none'>
                  <div className='fw-bold fs-5 text-light'>
                    {/* <img src={cart} className='pe-2' /> */}
                    Cart
                    <span> ({Object.keys(productsAdded).length})</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
