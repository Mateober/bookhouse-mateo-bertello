import React, {useState} from 'react';

function ItemCount({stockItem, initial}) {
    let [counter, setCounter] = useState(initial);
    const sumarClick = () => {
        if (counter < stockItem) {
            setCounter(counter + 1);
        }
    }
    const restarClick = () => {
        if (counter > initial) {
            setCounter(counter - 1);
        }
    }

    const onAdd = () => {
        if (counter > 0) {
            alert("Enviaste al carrito " + counter + " producto")
            setCounter(initial);
        } else {
            alert("No hay stock")
        }

    }

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
            <button onClick={onAdd} id="button__buy">Comprar</button>
        </>
    )
}

export default ItemCount;