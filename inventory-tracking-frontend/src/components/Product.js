import React from 'react';

function Product(props){
    
    return(
        <div>
        <h2>{props.productName}</h2>
        <p>Quantity: {props.quantity}</p>
        <p>Description: {props.description}</p>
        </div>
    )
}

export default Product;