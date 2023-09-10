import { useState } from 'react';
import './country.css'
import Countrydetail from '../countrydetail/Countrydetail';

const Country = ({country,handleVisitedCountries}) => {
   const {name,flags,population,area,cca3}=country
   const [visited,setVisited]=useState(false)
   const handleVisited=()=>{
    setVisited(!visited);
   }

//    const passWithParam=()=>{
//     handleVisitedCountries(country)
//    }

   const passWithParam=()=>handleVisitedCountries(country)
   
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color:visited?'red':'black'}}>Name: {name.common}</h3>
            <img src={flags.png}/>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={passWithParam}>Mark Visited</button>
            <br></br>
            <button onClick={handleVisited}>{visited?'Visited':'Going'}</button>
            {visited && 'I have visited this country'}
            <hr/>
            <Countrydetail country={country}/>
        </div>
    );
};

export default Country;