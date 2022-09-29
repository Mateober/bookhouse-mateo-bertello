import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

function ItemDetail({ item }) {
    // CONTEXT CARRO
    const { addProduct } = useCartContext();

    // USESTATE BOTONES IR AL CARRO Y VOLVER
    const [goToCart, setGoToCart] = useState(false);
    
    // FUNCION DEL BOTON COMPRAR, AGREGA PRODUCTO AL CARRO
    const onAdd = (quantity) => {
        addProduct(item, quantity);
        setGoToCart(true);
    };
    
    return (
        <>
            <div className="description">
                <div className="description__img">
                    <img src={item.img} alt="" />
                </div>
                <div className="description__details">
                    <div className="details__authorfav">
                        <p className="details__author">{item.author}</p>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                    <p className="details__title">{item.title}</p>
                    <div className="details__idshare">
                        <p className="details__idshare--id">ID: {item.id}</p>
                        <p className="details__idshare--share">
                            Compartir<i className="fa-solid fa-share-nodes"></i>
                        </p>
                    </div>
                    {goToCart ? (
                        <>
                            <p className="details__precio">PRECIO</p>
                            <p className="details__price">${item.price}</p>
                            <div className="buttons">
                                <Link to="/cart">
                                    <button id="button__terminar">Ir al carrito<i className="fa-solid fa-arrow-right"></i></button>
                                </Link>
                                <Link to="/">
                                    <button id="button__volver"><i className="fa-solid fa-arrow-left"></i>Volver al catalogo</button>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <ItemCount initial={1} stockItem={item.stock} onAdd={onAdd} price={item.price} />
                    )}
                    <div className="mediodepago">
                        <p className="mediodepago__title">Medios de pago</p>
                        <p className="mediodepago__subtitle">Credito</p>
                        <img src="https://i.postimg.cc/bNnCSsgD/credito1americanexpress.png" alt="" />
                        <img src="https://i.postimg.cc/MZN3Gy7J/credito2visa.png" alt="" />
                        <img src="https://i.postimg.cc/wx7bHWsk/credito3mastercard.png" alt="" />
                        <img src="https://i.postimg.cc/sgRnYsHn/credito4cabal.png" alt="" />
                        <img src="https://i.postimg.cc/JtCGyDh5/credito5naranja.png" alt="" />
                        <p className="mediodepago__subtitle">Debito</p>
                        <img src="https://i.postimg.cc/k4ZVmh3Z/debito1cabal.png" alt="" />
                        <img src="https://i.postimg.cc/5yCXNqft/debito2mastecard.png" alt="" />
                        <img src="https://i.postimg.cc/XJXZt6hd/debito3visa.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="information__product">
                <div className="fichatecnica">
                    <p id="fichatecnica__title">Ficha Tecnica</p>
                    <div>
                        <p>Editorial: {item.details.editorial}</p>
                        <p>Paginas: {item.details.paginas}</p>
                        <p>Peso: {item.details.peso} kg.</p>
                        <p>ISBN: {item.details.ISBN}</p>
                        <p>Idioma: {item.details.idioma}</p>
                    </div>
                </div>
                <div className="sinopsis">
                    <p id="sinopsis__title">Sinopsis</p>
                    <div>
                        <p>{item.details.sinopsis}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;
