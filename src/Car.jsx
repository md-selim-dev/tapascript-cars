import React from 'react'
import PropTypes from 'prop-types'


const Car = ({ car }) => {
  const { title, brand, price, year, isPremium } = car;
  return (
    <div className='border shadow-md border-gray-200 rounded-lg p-4'>
      <h2 className='text-xl font-semibold my-2'>{title}</h2>
      <p><b>Brand: </b>{brand}</p>
      <p><b>Year: </b>{year}</p>
      <p><b>Price: $</b>{price}</p>
      <p><b>Premium: </b>{isPremium}</p>

    </div>
  )
}

Car.propTypes = {
  car: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired
  }).isRequired
}

export default Car