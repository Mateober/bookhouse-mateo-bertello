import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import dataFromBD from '../../utils/data';
import Loading from './Loading';

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(dataFromBD);
            }, 2000);
        });

        getData.then(res => setData(res));
    })

    return <>
    {data.length ? <ItemDetail item={data[3]} /> : <Loading />}
    </>;
};

export default ItemDetailContainer;
