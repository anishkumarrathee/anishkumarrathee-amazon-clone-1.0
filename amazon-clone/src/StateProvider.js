import React, { createContext, useContext, useReducer} from "react";


//Preparing the data layer
export const StateContext = createContext();

//Wraping the app and providing the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pulling information from data layer
export const useStateValue = () => useContext(StateContext);