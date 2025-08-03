import React from 'react'
import PropTypes from 'prop-types'

const Search = ({searchTerm, onSearchTerm}) => {
    return (
        <input
            type="text"
            value={searchTerm}
            onChange={(e)=> searchTerm = onSearchTerm(e.target.value)}
            placeholder='Search cars...'
            className='border-2 border-gray-200 rounded-md p-1 w-full md:w-2/5' />
    )
}

Search.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onSearchTerm: PropTypes.func.isRequired,
}

export default Search