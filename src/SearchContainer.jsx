import React from 'react'
import Search from './Search'
import Filter from './Filter'

const SearchContainer = () => {
  return (
    <div className='flex md:items-center gap-4 flex-col md:flex-row'>
        <Search></Search>
        <Filter></Filter>
    </div>
  )
}

export default SearchContainer