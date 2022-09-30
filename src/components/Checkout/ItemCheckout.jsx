import React from 'react';

const ItemCheckout = ({ product }) => {
    return (
        <div className="itemcheckout__container">
            <div className="itemcheckout__container--img">
                <img src={product.img} alt={'Imagen libro ' + product.title} />
            </div>
            <div className="itemcheckout__container--info">
                <p className="itemcheckout__title">{product.title}</p>
                <p className="itemcheckout__cantidad">Cantidad: {product.quantity}</p>
                <p className="itemcheckout__price">${product.price}</p>
            </div>
        </div>
    );
};

export default ItemCheckout;
