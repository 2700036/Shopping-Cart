import React, { createContext, useContext, useReducer } from 'react';
import products from '../products';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const initialState = { cart: [] };
function reducer(state, { type, payload }) {
  switch (type) {
    case 'ADD':
      return {
        ...state,
        cart: [...state.cart, products.find((p) => p.sku === payload)],
      };
    case 'REMOVE':
      const removeOne = (sku) => {
        const i = state.cart.findIndex((p) => p.sku === sku);
        return [...state.cart.slice(0, i), ...state.cart.slice(i + 1)];
      };
      return {
        ...state,
        cart:
          state.cart.filter((p) => p.sku === payload).length > 1
            ? removeOne(payload)
            : state.cart.filter((p) => p.sku !== payload),
      };
    case 'EMPTY':
      return { ...state, ...payload };

    default:
      return state;
  }
}

export const CartContextProvider = ({ children }) => {
  const [{ cart }, dispatch] = useReducer(reducer, initialState);

  const addItem = (sku) => {
    dispatch({ type: 'ADD', payload: sku });
  };
  const removeItem = (sku) => {
    dispatch({ type: 'REMOVE', payload: sku });
  };
  const groupCartItems = () => {
    return cart.reduce((acc, cur) => {
      const i = acc.findIndex((p) => p.sku === cur.sku);
      i >= 0 ? ++acc[i].quantity : acc.push({ ...cur, quantity: 1 });
      return acc;
    }, []);
  };

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        groupCartItems,
        // findItem: '',
        // totalPrice: '',
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
