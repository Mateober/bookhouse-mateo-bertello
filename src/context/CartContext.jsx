import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
const CartContext = React.createContext('');
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    // LOCAL STORAGE Y CARRO
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
    const [cart, setCart] = useState(cartFromLocalStorage);
    console.log(cart);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // AGREGAR PRODUCTO AL CARRO
    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            if (hayCantidad2(item.stock, quantity)) {
                if (hayCantidad(item.stock)) {
                    setCart(
                        cart.map((product) => {
                            return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product;
                        })
                    );
                } else {
                    alert('No hay stock');
                }
            } else {
                alert('No hay stock');
            }
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    // LIMPIAR CARRO
    const clearCart = () => {
        setCart([]);
    };

    // ELIMINA PRODUCTO DEL CARRO
    const removeProduct = (id) => {
        setCart(cart.filter((product) => product.id !== id));
    };

    // ELIMINA 1 CANTIDAD DE PRODUCTO DEL CARRO
    const deleteOne = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(
                cart.map((product) => {
                    return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product;
                })
            );
        }
    };

    // PREGUNTAR POR STOCK
    const hayCantidad2 = (stock, counter) => (cart.find((product) => stock - product.quantity >= counter) ? true : false);
    const hayCantidad = (stock) => (cart.find((product) => product.quantity < stock) ? true : false);

    // PREGUNTAR SI YA ESTA EN EL CARRO
    const isInCart = (id) => (cart.find((product) => product.id === id) ? true : false);

    // CALCULAR PRECIO FINAL
    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    };

    // CALCULAR EL TOTAL DE PRODUCTOS
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                clearCart,
                isInCart,
                removeProduct,
                addProduct,
                totalProducts,
                totalPrice,
                hayCantidad,
                deleteOne,
                cart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
