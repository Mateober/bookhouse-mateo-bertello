import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import dataFromBD from '../../utils/data';
import Loading from './Loading';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { nameCategory } = useParams();
    
    // Inicio useEffect
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(dataFromBD);
            }, 2000);
        });
        if (nameCategory) {
            getData.then(res => setData(res.filter(item => item.category.name === nameCategory)));
        } else {
            getData.then((res) => setData(res));
        }
    }, [nameCategory])
    // Fin useEffect

/*     const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
     const getIsLoading = new Promise((resolve) => {
        setTimeout(() => {
            resolve(false);
        }, 2000);
    });
    getIsLoading.then(res => setIsLoading(res));   
    }) */

    return (
        <>
            { data.length  ? 
                <div className="productCatalog" id="productCatalog">
                    <div className="gridCatalog">
                        <ItemList data={data} />
                    </div>
                </div>
             : 
                <Loading />
            }
        </>
    );

};

export default ItemListContainer;
