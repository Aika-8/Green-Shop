import { createContext, useReducer } from "react";
import { cards } from "../utils/constants/cards";
import { toast } from "react-toastify";
export const ProductsContext = createContext();
const initialState = {
  productsCatalog: cards,
  basket: [],
  searchQuery: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "addToBasketFromMain": {
      const existing = state.basket.find((item) => item.id === action.id);
      const product = state.productsCatalog.find(
        (item) => item.id === action.id
      );
      if (!product) return state;
      if (!existing) {
        return {
          ...state,
          basket: [
            ...state.basket,
            { ...product, totalPrice: product.price, amount: 1 },
          ],
        };
      }
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id
            ? {
                ...item,
                amount: item.amount + 1,
                totalPrice: item.totalPrice + product.price,
              }
            : item
        ),
      };
    }
    case "deleteFromBasket": {
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };
    }
    case "setSearchQuery":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "decrement":
      return {
        ...state,
        basket: state.basket.map((item) => {
          if (item.id === action.id && item.amount > 1) {
            return {
              ...item,
              amount: item.amount - 1,
              totalPrice: item.totalPrice - item.price,
            };
          }
          return item;
        }),
      };
    case "increment":
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id
            ? {
                ...item,
                amount: item.amount + 1,
                totalPrice: item.totalPrice + item.price,
              }
            : item
        ),
      };
    case "Order": {
      return {
        ...state,
        basket: [],
      };
    }
    default:
      return state;
  }
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToBasketFromMain = (id) => {
    dispatch({ type: "addToBasketFromMain", id });
  };
  const setSearchQuery = (query) => {
    dispatch({ type: "setSearchQuery", payload: query });
  };
  const increment = (id) => dispatch({ type: "increment", id });
  const decrement = (id) => dispatch({ type: "decrement", id });
  const deleteFromBasket = (id) => dispatch({ type: "deleteFromBasket", id });
  const clearBasket = (id) => {
    toast.success("The order was successfully created"), dispatch({ type: "Order", id });
  };
  return (
    <ProductsContext.Provider
      value={{
        state,
        addToBasketFromMain,
        setSearchQuery,
        increment,
        decrement,
        deleteFromBasket,
        clearBasket,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
