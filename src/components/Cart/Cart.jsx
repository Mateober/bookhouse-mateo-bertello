import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import scrollTopOnClick from '../../utils/scrollTopOnClick';

const Cart = () => {
    // CONTEXT CARRO
    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <div className="cart__page0">
                    <h2 className="cart__title--sin">CARRITO DE COMPRAS</h2>
                    <div className="sinProductoCarro">
                        <p>No hay productos en el carrito</p>
                        <Link to="/">
                            <i className="fa-solid fa-arrow-left"></i>Volver al catalogo
                        </Link>
                    </div>
                </div>
            </>
        );
    }
    return (
        <div className="cart__page0">
            <div className="cart__title">
                <Link to="/"><p className="cart__volver"><i className="fa-solid fa-arrow-left"></i>Volver al catalogo</p></Link>
                <h2 className="cart__title">CARRITO DE COMPRAS</h2>
            </div>
            <div className="cart__page">
                <div className="cart__table">
                    <div className="cart__table--header">
                        <p className="col1">PRODUCTO</p>
                        <p className="col2">PRECIO</p>
                        <p className="col3">CANTIDAD</p>
                        <p className="col4">SUBTOTAL</p>
                    </div>
                    <div className="cart__table--body">
                        {cart.map((product) => (
                            <ItemCart key={product.id} product={product} />
                        ))}
                    </div>
                </div>
                <div className="buy__menu">
                    <div className="prueba">
                        <div className="buy__menu--1"><h2>RESUMEN DE COMPRA</h2></div>
                        <div className="buy__menu--2"><p>¿Tenés un código de descuento?</p></div>
                        <div className="buy__menu--3"><p>¿Tenés una Gift Card?</p></div>
                        <div className="buy__menu--4">
                            <p>SUBTOTAL</p>
                            <p>${totalPrice()}</p>
                        </div>
                        <div className="buy__menu--5">
                            <p>TOTAL</p>
                            <p>${totalPrice()}</p>
                        </div>
                        <div className="buy__menu--6">
                            <Link to="/cart/checkout"><button onClick={scrollTopOnClick}>INICIAR PAGO</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
