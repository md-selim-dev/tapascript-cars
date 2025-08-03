import React from 'react'
import Search from './Search'
import Filter from './Filter'
import PropTypes from 'prop-types'

const SearchContainer = ({ searchTerm, onSearchTerm, premium, onPremium }) => {

  return (
    <div className='flex md:items-center gap-4 flex-col md:flex-row'>
      <Search searchTerm={searchTerm} onSearchTerm={onSearchTerm}></Search>
      <Filter onPremium={onPremium} premium={premium}></Filter>
    </div>
  )
}

SearchContainer.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchTerm: PropTypes.func.isRequired,
  premium: PropTypes.bool.isRequired,
  onPremium: PropTypes.func.isRequired,
}

export default SearchContainer