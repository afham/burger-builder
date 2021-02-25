import React from 'react';
import Aux from '../../../hoc/HocAux';
const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return <li key = {igKey}><strong>{igKey}</strong> : {props.ingredients[igKey]}</li>
    });


    return (
        <Aux>
            <h3>Your Order Summary</h3>
            <p>Burger with following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>The total price is <b>{props.price.toFixed(2)}$</b> </p>
            <p>Continue to checkout</p>
        </Aux>

    );

};

export default orderSummary;