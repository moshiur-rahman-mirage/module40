import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./countries.css"

const Countries = () => {
    // If our fetched data comes as array of object then useState will be empty array.
    const [countries, setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries]=useState([]);


    const handleVisitedCountries=(counties)=>{
        const newVisitedCountries=[...visitedCountries,counties];
        setVisitedCountries(newVisitedCountries)
        console.log(visitedCountries)
    }
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            // setCountries(data) is the way to set array data in state. today i have wasted lot of time
            // trying to solve this.
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h3>Countries Length {countries.length}</h3>
            <h5>Visited Countries {visitedCountries.length}</h5>
            <ul className="ul-list">
                {
                    visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
            <div className="country-container"> 
                {
                    //    countries.map(country=><Country/>)
                    countries.map((n) => <Country 
                    key={n.cca3} 
                    handleVisitedCountries={handleVisitedCountries}
                    country={n} />)
                }
            </div>
        </div>
    );
};

export default Countries;