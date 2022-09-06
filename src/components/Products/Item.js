import React from 'react';
/* import ItemCount from "./ItemCount" */

const Item = ({ title, author, price, img, /* stock */ }) => {
    return (
        <div className="product__container">
            <img src={img} alt="Libro" />
            <div className="product__container--title">
                <p className="title__book">{title}</p>
                <p className="autor__book">{author}</p>
                <p className="price__book">${price}</p>
            </div>
{/*         <div className="product__container--quantity">
            <ItemCount stockItems={stock} initial={1}/>
        </div> */}
            <div className="product__container--options">
                <button className="btn-details">
                    <i className="fa-solid fa-eye"></i>Detalles
                </button>
                <button className="btn-buy">
                    <i className="fa-solid fa-cart-shopping"></i>Comprar
                </button>
            </div>
        </div>
    );
};

export default Item;