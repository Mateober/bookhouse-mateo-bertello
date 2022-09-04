import React, {useState} from 'react';

function ItemCount({stockItems, initial}) {
    const [counter, setCounter] = useState(initial);
    const sumarClick = () => {
        setCounter(counter + 1);
    }
    const restarClick = () => {
        setCounter(counter - 1);
    }
    if (counter === stockItems + 1) {
        setCounter(stockItems);
    }
    if (counter === 0) {
        setCounter(initial);
    }

    const onAdd = () => {
        alert("Enviaste al carrito " + counter + " producto")
        setCounter(initial);
    }

    return (
        <>
            <button onClick={restarClick}><i className="fa-solid fa-minus"></i></button>
            <p>{counter}</p>
            <button onClick={sumarClick}><i className="fa-solid fa-plus"></i></button>
            <button onClick={onAdd}>comprar</button>
        </>
    )
}

export default ItemCount;