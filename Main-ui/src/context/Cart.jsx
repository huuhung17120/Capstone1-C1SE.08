import React, { useState, useEffect } from 'react';

const CartContext = React.createContext();

export const CartProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState();
    const addToCart = (product) => {
        alert('add success');
        setCartItems(cartItems.concat(product));
    }

    useEffect(() => {
        setTotal(cartItems.length);
    }, [cartItems.length]);

    return (
        <CartContext.Provider value={{
            cartItems: cartItems,
            addToCart: addToCart,
            setCartItems: setCartItems,
            total: total
        }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContext;