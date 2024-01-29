import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Trash, Power } from 'react-bootstrap-icons'
import { removeWishList } from '../../ReduxStore/wishListSlice'
import Header from '../Header/Header'
import { NavLink, useNavigate } from 'react-router-dom'
import empty from '../../Assets/img/empty.webp'
import { auth } from '../../utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { setUserInfo } from '../../ReduxStore/userSlice'
import { emptyItems } from '../../ReduxStore/productSlice'

const WishList = () => {
  const { wishList } = useSelector((store) => store.wishListStore)
  console.log(wishList)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUserInfo(null))
        navigate('/')
        dispatch(emptyItems())
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
  }
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-lg-4'>
            <button
              className='fw-bold fs-5 text-light border-0 px-3 bg-primary'
              onClick={() => {
                handleLogout()
              }}
            >
              <Power className='pe-2 fs-3' />
              logout
            </button>
          </div>

          {Object.keys(wishList).length > 0 ? (
            Object.keys(wishList).map((el) => {
              return (
                <div className='col-lg-8'>
                  {/* left */}
                  <div className='col-lg-4'>
                    <div
                      className='d-flex flex-column'
                      style={{ width: '45%' }}
                    >
                      <img className='w-100' src={wishList[el].img} />
                    </div>
                  </div>
                  {/* right details */}
                  <div className='col-lg-4'>
                    <div className='row d-flex justify-content-around align-items-center'>
                      <div className='col-lg-9'>
                        <div className='d-flex flex-column gap-2'>
                          <h2 className='fw-normal fs-5 '>
                            {wishList[el].name}
                          </h2>
                          <div
                            className='bg-success rounded-2'
                            style={{ width: 'fit-content' }}
                          >
                            <div className='d-flex align-items-center gap-2 p-1 text-light '>
                              <span
                                className='fw-normal'
                                style={{ fontSize: '1rem' }}
                              >
                                {wishList[el].rating}
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
                          </div>
                          <h2 className='fw-normal fs-5'>
                            Rs. {wishList[el].price}
                            <del className=' mx-3 text-secondary fw-bold fs-6'>
                              {' '}
                              Rs.{wishList[el].curetedprice}
                            </del>
                            <span className=' text-success '>
                              {(
                                ((wishList[el].curetedprice -
                                  wishList[el].price) /
                                  wishList[el].curetedprice) *
                                100
                              ).toFixed(2)}
                              %
                            </span>
                          </h2>
                          <h2 className='fw-normal fs-5 '>
                            Stock: {wishList[el].stock}
                          </h2>
                        </div>
                      </div>
                      <div className='col-lg-3'>
                        <div>
                          <Trash onClick={() => dispatch(removeWishList(el))} />
                          {/* <button
                          onClick={() => removeItem(el)}
                          className=' px-3 py-1 border border-danger rounded  fw-normal  text-dark '
                        >
                          Remove
                        </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* right side */}
                </div>
              )
            })
          ) : (
            <div className='col-lg-8'>
              <div className='d-flex flex-column justify-content-center align-items-center bg-light gap-6 p-4'>
                <div className='w-25'>
                  <img src={empty} className='w-100' alt='empty-logo' />
                </div>
                <h2>Sorry,Your wishlist is Empty!</h2>
                <NavLink to={'/'}>
                  <button className=' px-3 py-2 border border-light rounded  fw-bold  text-light bg-primary'>
                    Shop Now
                  </button>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default WishList
