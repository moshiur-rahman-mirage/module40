
export default function CountryData({country}) {
  return (
    <div>
       <p>Name: {country.name.common}</p>
       <p>Continent: {country?.continents}</p>
       <p>{country.name?.official}</p>
       <p><b>Flag Description:</b>{country.flags?.alt}</p>
       <p>{country.startOfWeek}</p>
    </div>
  )
}
