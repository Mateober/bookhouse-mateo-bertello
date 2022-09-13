import React from 'react';

function Carrito() {
    return (
        <div classNameName="contenedor__carrito">
            <div className="cart">
                <h2 className="cart-title">Tu Carrito</h2>
                <div className="cart-content">
                    <div className="cart-box">
                        <img src="https://i.postimg.cc/wvYB1Z42/al-final-los-dos-mueren.jpg" alt="" className="cart-img" />
                        <div className="detail-box">
                            <div className="cart-product-title">AL FINAL MUEREN LOS DOS</div>
                            <div className="cart-price">$3490</div>
                            <input type="number" value="1" className="cart-quantity" />
                        </div>
                        <i class="fa-solid fa-trash cart-remove"></i>
                    </div>
                    <div className="cart-box">
                        <img src="https://i.postimg.cc/wvYB1Z42/al-final-los-dos-mueren.jpg" alt="" className="cart-img" />
                        <div className="detail-box">
                            <div className="cart-product-title">AL FINAL MUEREN LOS DOS</div>
                            <div className="cart-price">$3490</div>
                            <input type="number" value="1" className="cart-quantity" />
                        </div>
                        <i class="fa-solid fa-trash cart-remove"></i>
                    </div>
                </div>
                <div className="total">
                    <div className="total-title">Total</div>
                    <div className="total-price">$0</div>
                </div>
                <button type="button" className="btn-buy-cart">
                    Pagá ahora
                </button>
                <i className="fa-solid fa-xmark cross-icon" id="close-cart"></i>
            </div>
        </div>
    );
}

export default Carrito;
