import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, getFirestore, doc } from 'firebase/firestore';
import Loading2 from '../Loading/Loading2';

const ItemDetailContainer = () => {
    // USESTATE DATA
    const [data, setData] = useState({});

    // USEPARAMS IDITEM
    const { idItem } = useParams();

    // USESTATE LOADING
    const [isLoading, setIsLoading] = useState(true);

    // TRAE EL PRODUCTO DE FIREBASE SEGUN ID
    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', idItem);
        getDoc(queryDoc)
            .then((res) => setData({ id: res.id, ...res.data(setIsLoading(false)) }));
    }, [idItem]);
    return <>{isLoading ? <Loading2 /> : <ItemDetail item={data} />}</>;
};

export default ItemDetailContainer;
