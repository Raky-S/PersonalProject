import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();


//fournit un espace data à l application
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// extrait les infos de l'espace data
export const useStateValue = () => useContext(StateContext);