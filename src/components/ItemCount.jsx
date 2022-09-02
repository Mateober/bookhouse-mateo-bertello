import React, {useState} from 'react';

function ItemCount({stock, initial}) {
    const [counter, setCounter] = useState(initial); // Es un hook
    const sumarClick = () => {
        setCounter(counter + 1);
    }
    const restarClick = () => {
        setCounter(counter - 1);
    }
    if (counter === stock + 1) {
        setCounter(stock);
    }
    if (counter === 0) {
        setCounter(initial);
    }

    const onAdd = () => {
        alert("Enviaste al carrito " + counter + " producto");
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