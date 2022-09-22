import React from 'react';
import {useCartContext} from "../../context/CartContext"

function CartWidget() {
    const {totalProducts} = useCartContext()
    return (
        <span id="counter">{totalProducts() || ""}</span>
    )
}

export default CartWidget;