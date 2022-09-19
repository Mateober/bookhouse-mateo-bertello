import React from 'react';

const Cart = () => {
    return (
        <>
            <div className="cart__page0">
                <h2 className="cart__title">CARRITO DE COMPRAS</h2>
                <div className="cart__page">
                    <div className="cart__table">
                        <div className="cart__table--header">
                            <p className="col1">PRODUCTO</p>
                            <p className="col2">PRECIO</p>
                            <p className="col3">CANTIDAD</p>
                            <p className="col4">SUBTOTAL</p>
                        </div>
                        <div className="cart__table--body">
                            <div className="cart__table--product">
                                <div className="cart__1">
                                    <button>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                    <img src="https://i.postimg.cc/wvYB1Z42/al-final-los-dos-mueren.jpg" alt="" />
                                </div>
                                <div className="contenedor__infocarrito">
                                    <div className="cart__1--2">
                                        <p>AL FINAL MUEREN LOS DOSss sss ssssssss ssss sss sss sss ssss</p>
                                    </div>
                                    <div className="cart__2">
                                        <span>Precio:</span>
                                        <p>$3490</p>
                                    </div>
                                    <div className="cart__3">
                                        <button>
                                            <i className="fa-solid fa-minus"></i>
                                        </button>
                                        <p>1</p>
                                        <button>
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                    <div className="cart__4">
                                        <span>Subtotal:</span>
                                        <p>$3490</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>







                    <div className="buy__menu">
                        <div className="prueba">
                            <div className="buy__menu--1">
                                <h2>RESUMEN DE COMPRA</h2>
                            </div>
                            <div className="buy__menu--2">
                                <p>¿Tenés un código de descuento?</p>
                            </div>
                            <div className="buy__menu--3">
                                <p>¿Tenés una Gift Card?</p>
                            </div>
                            <div className="buy__menu--4">
                                <p>SUBTOTAL</p>
                                <p>$3490</p>
                            </div>
                            <div className="buy__menu--5">
                                <p>TOTAL</p>
                                <p>$3490</p>
                            </div>
                            <div className="buy__menu--6">
                                <button>INICIAR PAGO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
