import React from "react"
import SingleCountry from "./SingleCountry"
import 'bootstrap/dist/css/bootstrap.min.css';


function Dashboard(props) {
    return (
        <>
            {
                <div class="d-flex justify-content-evenly countries">
                    {
                        props.data.response.map((item) => {
                            return(<SingleCountry key={item.name} country_data={item} data={props.data} />)
                        })
                    }
                </div>
            }
        </>
    )
}

export default Dashboard