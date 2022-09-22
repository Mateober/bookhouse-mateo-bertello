import React from 'react';
import { Link } from 'react-router-dom';
import scrollTopOnClick from '../../utils/scrollTopOnClick';
import { useCartContext } from '../../context/CartContext';

const Item = ({ title, author, price, img, id, category, item, stock }) => {
    const { addProduct } = useCartContext();
    //! FALTA LIMITAR ONADD SEGUN EL STOCK
    const onAdd = () => {
        addProduct(item, 1);
    };

    return (
        <div className="product__container">
            <img src={img} alt="Libro" />
            <div className="product__container--title">
                <p className="title__book">{title}</p>
                <p className="autor__book">{author}</p>
                <p className="price__book">${price}</p>
            </div>
            <div className="product__container--options">
                <Link onClick={scrollTopOnClick} to={`/item/${category}/${id}`}>
                    <button className="btn-details">
                        <i className="fa-solid fa-eye"></i>Detalles
                    </button>
                </Link>
                {stock === 0 ? (
                    <button className="btn-buy-sinstock">
                        <i className="fa-solid fa-cart-shopping"></i>Sin stock
                    </button>
                ) : (
                    <button onClick={onAdd} className="btn-buy">
                        <i className="fa-solid fa-cart-shopping"></i>Comprar
                    </button>
                )}
            </div>
        </div>
    );
};

export default Item;
