import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import dataFromBD from '../../utils/data';
import Loading from './Loading';

const ItemListContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(dataFromBD);
            }, 2000);
        });

        getData.then(res => setData(res));
    })

    return (
        <>
            {data.length ?
                <div className="productCatalog" id="productCatalog">
                    <div className="gridCatalog">
                        <ItemList data={data} />
                    </div>
                </div>
                : <Loading />}
        </>
    );
};

export default ItemListContainer;
