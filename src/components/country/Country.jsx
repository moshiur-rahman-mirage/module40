import './country.css'

const Country = ({country}) => {
   const {name,flags,population,area}=country
    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png}/>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;