import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where, getFirestore } from 'firebase/firestore';
import Loading from '../Loading/Loading';

export const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { nameCategory } = useParams();
    const [isLoading, setIsLoading] = useState(true);

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
