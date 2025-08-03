import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({premium, onPremium}) => {
  
  return (
    <div className='flex gap-2'>
        <input 
        type="checkbox"
        checked={premium}
        onChange={(e) => onPremium(e.target.checked)}
         />
        <label>Show Premium Only</label>
    </div>
  )
}

Filter.propTypes = {
  premium: PropTypes.bool.isRequired,
  onPremium: PropTypes.func.isRequired,
}

export default Filter