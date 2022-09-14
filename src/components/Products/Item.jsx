import React from 'react';
import { Link } from 'react-router-dom';
import scrollTopOnClick from '../../utils/scrollTopOnClick';

const Item = ({ title, author, price, img, id, category }) => {
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
                <button className="btn-buy">
                    <i className="fa-solid fa-cart-shopping"></i>Comprar
                </button>
            </div>
        </div>
    );
};

export default Item;
