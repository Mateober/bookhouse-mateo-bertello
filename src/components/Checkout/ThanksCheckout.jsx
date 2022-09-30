import React from 'react';
import Loading2 from '../Loading/Loading2';
import { Link } from 'react-router-dom';

const ThanksCheckout = ({ orderId }) => {
    return orderId === '' ? (
        <Loading2 />
    ) : (
        <div className="container__thanks">
            <h2>Gracias por confiar en nosotros</h2>
            <p>Tu codigo de compra es "<span>{orderId}</span>"</p>
            <Link to="/">
                <button>Volver al inicio</button>
            </Link>
        </div>
    );
};

export default ThanksCheckout;
