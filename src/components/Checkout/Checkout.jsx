import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCheckout from './ItemCheckout';
import FormCheckout from './FormCheckout';
import ThanksCheckout from './ThanksCheckout';
import scrollTopOnClick from '../../utils/scrollTopOnClick';

const Checkout = () => {
    // CONTEXTO CARRO
    const { cart, totalPrice } = useCartContext();

    // USESTATE DE PAGINA GRACIAS POR COMPRAR (SETGRACIAS ESTA EN FORMCHECKOUT.JSX)
    const [showThanks, setShowThanks] = useState(false);

    // USESTATE DE CODIGO ID (SETORDERID ESTA EN FORMCHECKOUT.JSX)
    const [orderId, setOrderId] = useState('');
    return (
        <div className="checkout__page">
            {showThanks ? 
                <ThanksCheckout orderId={orderId} />
            :  cart.length === 0 ? 
                <div className="sinProductoCarro">
                    <p>No hay productos</p>
                    <Link to="/" onClick={scrollTopOnClick}><i className="fa-solid fa-arrow-left"></i>Volver al catalogo</Link>
                </div>
            : 
                <>
                    <div className="checkout__title--container">
                        <Link to="/cart" onClick={scrollTopOnClick}>
                            <p className="checkout__volver"><i className="fa-solid fa-arrow-left"></i>Volver al carrito</p>
                        </Link>
                        <div className="checkout__title">
                            <h2>DATOS PERSONALES</h2>
                            <span>Todos los datos con * son obligatorios</span>
                        </div>
                    </div>
                    <div className="checkout__container--general">
                        <FormCheckout setShowThanks={setShowThanks} setOrderId={setOrderId} />
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
            }
        </div>
    );
};

export default Checkout;
