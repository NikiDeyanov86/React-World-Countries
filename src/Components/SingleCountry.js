import React from "react";
import '../Styles/Index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

function SingleCountry(props) {
    const { name, flag, population, region, capital} = props.country_data

    return (
        <div className="country">  
            <img src={flag} alt={name} />
            <div className="d-flex flex-column">
                <h5>{name}</h5>
                <p><b>Population:</b> {population}</p>
                <p><b>Region:</b> {region}</p>
                <p><b>Capital:</b> {capital}</p>
                <Link to={`/country/${name}`} >
                <button type="button" className="btn btn-outline-primary" id="more_btn">
                        <b>More</b>
                    </button>
                </Link>    
            </div>  
        </div>
    )
}

export default SingleCountry