import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import dataFromBD from '../../utils/data';
import Loading from './Loading';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { idCategory } = useParams();
    
    // Inicio useEffect
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(dataFromBD);
            }, 2000);
        });
        if (idCategory) {
            getData.then(res => setData(res.filter(item => item.category.categoryId === parseInt(idCategory))));
        } else {
            getData.then((res) => setData(res));
        }
    }, [idCategory])
    // Fin useEffect

<<<<<<< HEAD
=======
/*     const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
     const getIsLoading = new Promise((resolve) => {
        setTimeout(() => {
            resolve(false);
        }, 2000);
    });

    getIsLoading.then(res => setIsLoading(res));   
    }) */

>>>>>>> parent of f56702d (Primera Entrega del Proyecto Final ahora si)
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
