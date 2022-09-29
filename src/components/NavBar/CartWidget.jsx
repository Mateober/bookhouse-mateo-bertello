import React from 'react';
import {useCartContext} from "../../context/CartContext"

function CartWidget() {
    // CONTEXT CARRO
    const {totalProducts} = useCartContext()
    return (
        <span id="counter">{totalProducts() || ""}</span>
    )
}

export default CartWidget;