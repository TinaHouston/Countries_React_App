import React, {useEffect, useState} from 'react';
import CountrySelector from "../components/CountrySelector";
import CountryDetails from "../components/CountryDetails";

const CountryContainer = () => {
    
    const [country, setCountry] = useState({});

    const getCountry = () => {
        console.log("getting country info");
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(data => setCountry(data))
    }

    useEffect(() => {
       getCountry(); 
    }, [])

    return (
        <>
        <h1>This is the country container.</h1>
        <CountrySelector/>
        </>
    )
}

export default CountryContainer;