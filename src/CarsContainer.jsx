import React from 'react'
import Car from './Car'
import PropTypes from 'prop-types'

const CarsContainer = ({ cars, searchTerm, premium }) => {

    const filteredCars = cars.filter(car => {
        const matchesSearch = car.title.toLowerCase().includes(searchTerm.toLowerCase()) || car.brand.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesPremium = premium ? car.isPremium : true;
        return matchesSearch && matchesPremium;
    }).map(car => <Car key={car.id} car={car}></Car>)

    if(!filteredCars.length){
        return <p className='text-gray-600 text-lg mt-16 text-center'>No cars Found</p>
    }

    return (
        <div className='grid mt-6 md:grid-cols-2 gap-4 lg:grid-cols-3'>
            {
                filteredCars
            }
        </div>
    )
}

CarsContainer.propTypes = {
    cars: PropTypes.array.isRequired,
    searchTerm: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
}

export default CarsContainer