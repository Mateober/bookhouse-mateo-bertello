import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where, getFirestore } from 'firebase/firestore';
import Loading from '../Loading/Loading';

const ItemListContainer = () => {
    // USESTATE DATA (ARRAY DE PRODUCTOS)
    const [data, setData] = useState([]);

    // USEPARAMAS NOMBRE DE CATEGORIA
    const { nameCategory } = useParams();

    // USESTATE LOADING
    const [isLoading, setIsLoading] = useState(true);

    // TRAE LOS PRODUCTOS DE FIREBASE, LOS DIVIDE SEGUN LA CATEGORIA O LOS TRAE A TODOS
    useEffect(() => {
        setIsLoading(true);
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (nameCategory) {
            const queryFilter = query(queryCollection, where('category.name', '==', nameCategory));
            getDocs(queryFilter)
				.then((res) => setData(res.docs.map((product) => ({ id: product.id, ...product.data(setIsLoading(false)) }))));
        } else {
            getDocs(queryCollection)
				.then((res) => setData(res.docs.map((product) => ({ id: product.id, ...product.data(setIsLoading(false)) }))));
        }
    }, [nameCategory]);
    return (
        <>
            {isLoading ? 
                <Loading />
             : 
                <div className="productCatalog" id="productCatalog">
                    <div className="gridCatalog">
                        <ItemList data={data} />
                    </div>
                </div>
            }
        </>
    );
};

export default ItemListContainer;
