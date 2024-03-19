import React, { createContext, useReducer } from "react";
import BotReducer from "./BotReducer";
export const Context = createContext();
export const ContextProvider = (prop) => {
    const initialStep = [];
    const [state, dispatch] = useReducer(BotReducer, initialStep);
    console.log("context provider", state);
    return (
        <Context.Provider value={{ state, dispatch }}>
            {prop.children}
        </Context.Provider>
    );
}