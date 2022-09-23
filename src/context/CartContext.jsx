import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
const CartContext = React.createContext('');
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
    const [cart, setCart] = useState(cartFromLocalStorage);
    console.log(cart);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const [goToCart, setGoToCart] = useState(false);
    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
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
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const clearCart = () => {
        setCart([]);
        alert('Gracias por tu compra');
    };

    const deleteOne = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(
                cart.map((product) => {
                    return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product;
                })
            );
        }
    };

    const hayCantidad = (stock) => (cart.find((product) => product.quantity < stock) ? true : false);

    const isInCart = (id) => (cart.find((product) => product.id === id) ? true : false);

    const removeProduct = (id) => {
        setCart(cart.filter((product) => product.id !== id));
    };

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    };

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
