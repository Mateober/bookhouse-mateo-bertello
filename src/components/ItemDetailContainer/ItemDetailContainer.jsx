import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import dataFromBD from '../../utils/data';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { idItem } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(dataFromBD);
            }, 2000);
        });
        getData.then(res => setData(res.find(item => item.id === parseInt(idItem))));
        
        const getIsLoading = new Promise((resolve) => {
            setTimeout(() => {
                resolve(false);
            }, 2000);
        });
        getIsLoading.then(res => setIsLoading(res));
    }, [idItem]);
    return <> { isLoading ? <Loading /> : <ItemDetail item={data} />}</>;
};

export default ItemDetailContainer;
