import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchAndFilter from './SearchAndFilter';

function Header(props) {

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">React countries</a>
                
                <div className="d-flex">
                    <SearchAndFilter data={props.data} filterCountries={props.filterCountries}/>
                </div>
            </div>
        </nav>
    )
}

export default Header