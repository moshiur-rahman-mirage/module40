import CountryData from "../CountryData/CountryData";


export default function Countrydetail(props) {
    // const {country}=props
  return (
    <div>
        <CountryData {...props}/>
    </div>
  )
}
