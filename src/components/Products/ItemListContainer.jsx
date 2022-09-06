import React, { useState, useEffect } from 'react';
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
        <div className="productCatalog" id="productCatalog">
            <div className="gridCatalog">
                <ItemList data={data} />
            </div>
        </div>
    );
};

export default ItemListContainer;
