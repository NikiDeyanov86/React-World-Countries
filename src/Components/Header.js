import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchAndFilter from './SearchAndFilter';

function Header(props) {

    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">React countries</a>
                
                <div class="d-flex">
                    <SearchAndFilter data={props.data} filterCountries={props.filterCountries}/>
                </div>
            </div>
        </nav>
    )
}

export default Header