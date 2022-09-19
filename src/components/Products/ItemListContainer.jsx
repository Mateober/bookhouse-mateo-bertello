import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import dataFromBD from '../../utils/data';
import Loading from './Loading';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { nameCategory } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    // Inicio useEffect
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(dataFromBD);
            }, 0);
        });
        if (nameCategory) {
            getData.then(res => setData(res.filter(item => item.category.name === nameCategory)));
        } else {
            getData.then((res) => setData(res));
        }

        const getIsLoading = new Promise((resolve) => {
            setTimeout(() => {
                resolve(false);
            }, 2000);
        });
        getIsLoading.then(res => setIsLoading(res));
    }, [nameCategory])
    // Fin useEffect
    return (
        <>
            { isLoading ? 
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
