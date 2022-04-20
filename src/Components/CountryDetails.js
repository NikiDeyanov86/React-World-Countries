import React from 'react'
import { useParams, Link } from 'react-router-dom'
import '../Styles/Index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function CountryDetails(props) {
    const { name } = useParams()
    const [country, setCountry] = React.useState([])
    

    React.useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v2/name/${name}?fullText=true`)
                const country = await response.json()
                setCountry(country)
            } catch (e) {
                console.log(e)
            }

        }
        fetchCountry()
    }, [name])

    React.useEffect(() => {

    }, [country])
    return (
        <div className="container-fluid country_details">
            
                <div className="d-flex justify-content-center align-items-center flex-column">

                    {country &&
                        country.map(item => {
                            const { flag,
                                name,
                                numericCode,
                                population,
                                currencies,
                                region,
                                languages,
                                subregion,
                                capital, } = item

                            return (
                                <>
                                    <div className="d-flex justify-content-center align-items-center flex-column countryContainer" key={numericCode}>
                                        
                        
                                            <Link to='/'>
                                                <button type="button" className="btn btn-primary btn-lg" id="back_btn">Back</button>
                                            </Link>
                                        
                                        
                                        <img src={flag} alt={name} width="320px" height="240px"/>
                                        <section>
                                            <h1> {name}</h1>
                                            <div className="details">
                                                    <p><b>Population: </b>{population}</p>
                                                    <p><b>Capital: </b>{capital}</p>
                                                    <p><b>Located in: </b>{subregion}, {region}</p>
                                                    <p><b>Currency: </b>{currencies[0].code}</p>
                                                    <p><b>Most spoken language: </b>{languages[0].name}</p>
                                            </div>
                                        </section>
                                    </div>
                                </>)
                        })
                    }
                </div>
            
        </div>
    )
}

export default CountryDetails