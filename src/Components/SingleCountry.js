import React from "react";
import '../Styles/Index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function SingleCountry(props) {
    const { name, flag, population, region, capital} = props.country_data

    return (
        <div className="country">  
            <img src={flag} alt={name} />
            <div class="d-flex flex-column">
                <h5>{name}</h5>
                <p><b>Population:</b> {population}</p>
                <p><b>Region:</b> {region}</p>
                <p><b>Capital:</b> {capital}</p>    
            </div>  
        </div>
    )
}

export default SingleCountry