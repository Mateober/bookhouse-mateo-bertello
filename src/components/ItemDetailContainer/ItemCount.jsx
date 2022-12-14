import React, { useState } from 'react';

function ItemCount({ stockItem, initial, onAdd, price }) {
    // USESTATE CONTADOR
    let [counter, setCounter] = useState(initial);

    // USESTATE STOCK
    let [stock, setStock] = useState(stockItem - 1);

    // SUMAR CANTIDAD COUNTER Y RESTA EL STOCK
    const sumarClick = () => {
        if (counter < stockItem) {
            setCounter(counter + 1);
            setStock(stock - 1);
        }
    };

    // RESTAR CANTIDAD COUNTER Y SUMA STOCK
    const restarClick = () => {
        if (counter > initial) {
            setCounter(counter - 1);
            setStock(stock + 1);
        }
    };

    return (
        <>
            {stockItem === 0 ? (
                <p className="sinStock">No hay stock</p>
            ) : (
                <>
                    <p className="details__precio">PRECIO</p>
                    <p className="details__price">${price}</p>
                    <div className="details__quantity">
                        <button onClick={restarClick}>
                            <i className="fa-solid fa-minus"></i>
                        </button>
                        <p>{counter}</p>
                        <button onClick={sumarClick}>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <p className="details__stock">{stock} disponibles</p>
                    <button onClick={() => onAdd(counter)} id="button__buy">
                        Comprar
                    </button>
                </>
            )}
        </>
    );
}

export default ItemCount;
