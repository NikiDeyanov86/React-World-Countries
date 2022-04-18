import React from 'react'
import '../Styles/Index.css'

function Error(props) {

    return (
        
        <div class="d-flex justify-content-center" id="error">
            <div class="alert alert-danger" role="alert">
                {props.message}
            </div>
        </div>
        
    )
}

export default Error