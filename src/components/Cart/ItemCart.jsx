import React from 'react';
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({ product }) => {
    const { removeProduct, addProduct, deleteOne } = useCartContext();

    const sumarCantidad = () => {
        if (product.quantity < product.stock) {
            addProduct(product, 1);
        } else {
            alert('No hay stock');
        }
    };
    const restarCantidad = () => {
        if (product.quantity > 1) {
            deleteOne(product, -1);
        }
    };
    return (
        <div className="cart__table--product">
            <div className="cart__1">
                <button onClick={() => removeProduct(product.id)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
                <img src={product.img} alt="" />
            </div>
            <div className="contenedor__infocarrito">
                <div className="cart__1--2">
                    <p>{product.title}</p>
                </div>
                <div className="cart__2">
                    <span>Precio:</span>
                    <p>${product.price}</p>
                </div>
                <div className="cart__3">
                    <button onClick={restarCantidad}>
                        <i className="fa-solid fa-minus"></i>
                    </button>
                    <p>{product.quantity}</p>
                    <button onClick={sumarCantidad}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div className="cart__4">
                    <span>Subtotal:</span>
                    <p>${product.price * product.quantity}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemCart;
