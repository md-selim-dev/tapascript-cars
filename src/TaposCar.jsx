



import React, { useState } from "react";
import Header from "./Header";
import SearchContainer from "./SearchContainer";
import CarsContainer from "./CarsContainer";


const TaposCar = () => {

    const CARS = [
        { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
        { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
        { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
        { id: 4, title: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, isPremium: false },
        { id: 5, title: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, isPremium: true },
    ]

    const [searchTerm, setSearchTerm] = useState('');
    const [premium, setPremium] = useState(false);
    

    return (
        <>
            <Header></Header>
            <SearchContainer onPremium={setPremium} premium={premium} searchTerm={searchTerm} onSearchTerm={setSearchTerm}></SearchContainer>
            <CarsContainer premium={premium} searchTerm={searchTerm} cars={CARS}></CarsContainer>
        </>
    )
}

export default TaposCar;