import React from 'react';
import Item from './Item';

function ItemList({ data }) {
    /*     function fisherYatesShuffle(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1)); //random index
            [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
        }
    }

    fisherYatesShuffle(data); */
    return (
        <>
            {data.map((item) => (
                <Item
                    key={item.id}
                    title={item.title}
                    author={item.author}
                    price={item.price}
                    img={item.img}
                    id={item.id}
                    /* stock={item.stock} */
                />
            ))}
        </>
    );
}

export default ItemList;
