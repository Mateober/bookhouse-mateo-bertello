import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCarrito from './ItemCarrito';

function Carrito({ claseCart, clickCerrarCart }) {
    const { cart, totalPrice } = useCartContext();
    if (cart.length === 0) {
        return (
            <div className="contenedor__carrito">
                <div className={claseCart}>
                    <h2 className="cart-title">Tu Carrito</h2>
                    <p className="carritoVacio">El carrito esta vacio</p>
                    <Link to="/">
                        <button onClick={clickCerrarCart} type="button" className="btn-buy-cart">
                            Volver a la tienda
                        </button>
                    </Link>
                    <i onClick={clickCerrarCart} className="fa-solid fa-xmark cross-icon" id="close-cart"></i>
                </div>
            </div>
        );
    }
    return (
        <div className="contenedor__carrito">
            <div className={claseCart}>
                <h2 className="cart-title">Tu Carrito</h2>
                <div className="cart-content">
                    {cart.map((product) => (
                        <ItemCarrito key={product.id} product={product} />
                    ))}
                </div>
                <div className="total">
                    <div className="total-title">Total</div>
                    <div className="total-price">${totalPrice()}</div>
                </div>
                <Link onClick={clickCerrarCart} to="/cart">
                    <button type="button" className="btn-buy-cart">
                        Finalizar Compra
                    </button>
                </Link>
                <i onClick={clickCerrarCart} className="fa-solid fa-xmark cross-icon" id="close-cart"></i>
            </div>
        </div>
    );
}

export default Carrito;
