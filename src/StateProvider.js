import React,{ createContext, useContext, useReducer} from 'react'

export const StateContext = createContext();
export const useStateValue = () => useContext(StateContext);
export const StateProvider = ({ reducer, initialState, children }) => {
   return (
      <StateContext.provider value={useReducer(reducer,initialState)} >{children} </StateContext.provider>
   )
   };


