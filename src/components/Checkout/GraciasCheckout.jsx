import React from 'react';

const GraciasCheckout = ({orderId}) => {
    return (
        <div>
            <h2>Gracias por confiar en nosotros</h2>
            <p>Tu codigo de compra es {orderId === "" ? "CARGANDO..." : orderId} </p>
        </div>
    );
};

export default GraciasCheckout;
