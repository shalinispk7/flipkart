import React from 'react'
import { useDispatch } from 'react-redux'
import { removeRating, setRating } from '../../ReduxStore/filterSlice'

const Filter = (props) => {
  const dispatch = useDispatch()
  const handleRating = (val) => {
    // console.log(val)//yentha rting click panromo antha value katum
    val.target.checked
      ? dispatch(setRating(val.target.value))
      : dispatch(removeRating(val.target.value))
  }
  return (
    <section>
      <div>
        <h2>FILTERS</h2>
        <h2 className='text-black fw-normal fs-6'>CUSTOMER RATINGS</h2>
        <div>
          <input
            type='checkbox'
            id='topping'
            name='topping'
            value='4'
            className='me-2'
            onChange={(e) => handleRating(e)}
          />
          4 & above
        </div>
        <div>
          <input
            type='checkbox'
            id='topping'
            name='topping'
            value='3'
            className='me-2'
            onChange={(e) => handleRating(e)}
          />
          3 & above
        </div>
        <div>
          <input
            type='checkbox'
            id='topping'
            name='topping'
            value='2'
            className='me-2'
            onChange={(e) => handleRating(e)}
          />
          2 & above
        </div>
        <div>
          <input
            type='checkbox'
            id='topping'
            name='topping'
            value='1'
            className='me-2'
            onChange={(e) => handleRating(e)}
          />
          1 & above
        </div>
      </div>
      <div className='mt-5'>
        <h2 className='text-black fw-normal fs-6'>DISCOUNT</h2>
        <p>50% or more</p>
        <p>40% or more</p>
        <p>30% or more</p>
        <p>20% or more</p>
        <p>10% or more</p>
      </div>
    </section>
  )
}

export default Filter
