import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCheckout from './ItemCheckout';
import FormCheckout from './FormCheckout';
import GraciasCheckout from './GraciasCheckout';

const Checkout = () => {
    // CONTEXTO CARRO
    const { cart, totalPrice } = useCartContext();

    // USESTATE DE PAGINA GRACIAS POR COMPRAR (SETGRACIAS ESTA EN FORMCHECKOUT.JSX)
    const [showGracias, setShowGracias] = useState(false);

    // USESTATE DE CODIGO ID (SETGRACIAS ESTA EN GRA)
    const [orderId, setOrderId] = useState('');

    return (
        <div className="checkout__page">
            {showGracias ? (
                <GraciasCheckout orderId={orderId} />
            ) : (
                <>
                    <div className="checkout__title--container">
                        <Link to="/cart">
                            <p className="checkout__volver">
                                <i className="fa-solid fa-arrow-left"></i>Volver al carrito
                            </p>
                        </Link>
                        <div className="checkout__title">
                            <h2>DATOS PERSONALES</h2>
                            <span>Todos los datos con * son obligatorios</span>
                        </div>
                    </div>
                    <div className="checkout__container--general">
                        <FormCheckout setShowGracias={setShowGracias} setOrderId={setOrderId} />
                        <div className="checkout__menu">
                            <div className="container__checkout--menu">
                                <div className="checkout__menu--1">
                                    <h2>RESUMEN DE COMPRA</h2>
                                </div>
                                <div className="checkout__menu--2">
                                    {cart.map((product) => (
                                        <ItemCheckout key={product.id} product={product} />
                                    ))}
                                </div>
                                <div className="checkout__menu--3">
                                    <p>SUBTOTAL</p>
                                    <p>${totalPrice()}</p>
                                </div>
                                <div className="checkout__menu--4">
                                    <p>TOTAL</p>
                                    <p>${totalPrice()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Checkout;
