import React from 'react';

const Car = (props) =>{
    return(
        <div>
        <h1>brand:{props.brand}</h1>
        <p>Year:<h1>{props.year}</h1></p>
        </div>
    )
}
export default Car;