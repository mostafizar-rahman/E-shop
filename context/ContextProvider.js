import { createContext, useReducer, useState } from "react";
import { CartReducer } from "./CartPeducer";


export const CONTEXT = createContext(null);
export const ContextProvider = ({ children }) => {
  const initialState = {
    cart:[]
  }
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CONTEXT.Provider value={{ state, dispatch }}>{children}</CONTEXT.Provider>
  );
};
