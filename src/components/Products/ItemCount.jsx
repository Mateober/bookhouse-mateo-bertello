import React, { useState } from 'react';

function ItemCount({ stockItem, initial, onAdd}) {
    let [counter, setCounter] = useState(initial);
    const sumarClick = () => {
        if (counter < stockItem) {
            setCounter(counter + 1);
        }
    };
    const restarClick = () => {
        if (counter > initial) {
            setCounter(counter - 1);
        }
    };

    if (stockItem === 0) {
        counter = 0;
    }

    return (
        <>
            <div className="details__quantity">
                <button onClick={restarClick}><i className="fa-solid fa-minus"></i></button>
                <p>{counter}</p>
                <button onClick={sumarClick}><i className="fa-solid fa-plus"></i></button>
            </div>
            <p className="details__stock">{stockItem} disponibles</p>
            <button onClick={()=>onAdd(counter)} id="button__buy">Comprar</button>
        </>
    );
}

export default ItemCount;
