import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function SearchAndFilter(props) {
    const { search, filter } = props.data

  
    return (
        <>
            
        <input
            name="search"
            className="form-control me-2"
            type="search"
            value={search}
            onChange={props.filterCountries}
            placeholder="Search for a country..."
            aria-label="Search for a country...">
        </input>
            

        <select className="form-select" 
                name="filter"
                value={filter}
                onChange={props.filterCountries}
                aria-label="Select region"
        >

                <option 
                    defaultValue={"selected"}
                    hidden>Select region</option>
                <option
                    value="africa">Africa</option>
                <option
                    value="americas">America</option>
                <option
                    value="asia">Asia</option>
                <option
                    value="europe">Europe</option>
                <option
                    value="oceania">Oceania</option>
        </select>
    </>
    )
}

export default SearchAndFilter
