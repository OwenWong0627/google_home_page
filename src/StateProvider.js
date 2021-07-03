import React, { useContext, useReducer, createContext } from 'react';

//sets up the state
export const StateContext = createContext();

// children is the parent component where the provided state can be used
// initialState is the initial state when the app loads
// reducer
export const StateProvider = ({ reducer, initialState, children }) => {
   return (
      <StateContext.Provider value={useReducer(reducer, initialState)}>
         {children}
      </StateContext.Provider>
   );
}

// a hook that allows us to actually access/use the 'context' state
// I put it in here, to avoid calling the useContext everytime I need to intereact with the state
// I can just import the useStateValue function to basically use it like a useState hook
export const useStateValue = () => useContext(StateContext);