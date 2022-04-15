import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar(props) {
    const { search } = props.data

    return (
        
        <input
            name="search"
            class="form-control me-2"
            type="search"
            value={search}
            onChange={props.fetchSearchData}
            placeholder="Search for a country..."
            aria-label="Search for a country...">
        </input>
            
    )
}

export default SearchBar
