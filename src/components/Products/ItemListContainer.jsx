import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import customFetch from '../../utils/customFetch';
import dataFromBD from '../../utils/data';

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        customFetch(2000, dataFromBD)
            .then((datos) => setData(dataFromBD))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {data.map((item) => (
                <ItemList 
                key={item.id}  
                title={item.title}
                author={item.author}
                price={item.price}
                img={item.img}
                /* stock={item.stock} */
                />
            ))}
        </>
    );
};

export default ItemListContainer;
