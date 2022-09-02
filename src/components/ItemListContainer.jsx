import React from 'react';
import Libro from '../assets/harrypotter1.jpg';
import ItemCount from './ItemCount';

function ItemListContainer() {
    return (
        <div className="productCatalog" id="productCatalog">
            <div className="product__container">
                <img src={Libro} alt="Libro" />
                <div className="product__container--title">
                    <p className="title__book">Harry Potter y la piedra filosofal</p>
                    <p className="autor__book">Rowling, J.k.</p>
                    <p className="price__book">$4500</p>
                </div>
                <div className="product__container--quantity">
                    <ItemCount stock={5} initial={1}/>
                </div>
                <div className="product__container--options">
                    <button className="btn-details">
                        <i className="fa-solid fa-eye"></i>Detalles
                    </button>
                    <button className="btn-buy">
                        <i className="fa-solid fa-cart-shopping"></i>Comprar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;
