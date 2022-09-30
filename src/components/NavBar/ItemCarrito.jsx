import React from 'react';
import { useCartContext } from '../../context/CartContext';

const ItemCarrito = ({ product }) => {
    // CONTEXT CARRO
    const { removeProduct } = useCartContext();
    return (
        <div className="cart-box">
            <img src={product.img} alt={'Imagen libro ' + product.title} className="cart-img" />
            <div className="detail-box">
                <div className="cart-product-title">{product.title}</div>
                <div className="cart-price">${product.price}</div>
                <p className="cart-quantity">Cantidad: {product.quantity}</p>
            </div>
            <i onClick={() => removeProduct(product.id)} className="fa-solid fa-trash cart-remove"></i>
        </div>
    );
};
export default ItemCarrito;
