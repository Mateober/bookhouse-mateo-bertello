import React from 'react';
import Item from './Item';

function ItemList({data}) {
    return (
        <>
            {data.map((item) => (
                <Item key={item.id}  
                title={item.title}
                author={item.author}
                price={item.price}
                img={item.img}
                /* stock={item.stock} */
                />
            ))}
        </>
    );    
}


export default ItemList;