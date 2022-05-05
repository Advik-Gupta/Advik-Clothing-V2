import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

const addCartItem = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    
    if (existingCartItem) {
        return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => null,
    removeItemToCart: () => null,
    clearItemFromCart: () => null,
    cartCount: 0,
    cartTotal: 0
});

const CartActionTypes = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
};

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CartActionTypes.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            };

        case CartActionTypes.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: !state.isCartOpen
            };

        default:
            throw new Error(`Unhandled action type: ${type}`);
    }
}

export const CartProvider = ({ children }) => {
    const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newcartCount = newCartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0);

        dispatch(
            createAction(
                CartActionTypes.SET_CART_ITEMS, 
                { cartItems: newCartItems, cartCount: newcartCount, cartTotal: newCartTotal }
            )
        );
    }
    
    const setIsCartOpen = () => {
        dispatch(createAction(CartActionTypes.SET_IS_CART_OPEN))
    }
    
    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemToCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItems);
    }
    
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemToCart, clearItemToCart, cartTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}