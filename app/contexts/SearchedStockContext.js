import React, { createContext, useReducer } from "react";
import { reducer } from "../reducers/SearchedStockReducer";
export const SearchedStockContext = createContext();
import getSummaryData from '../jsons/get-summary.json';

const SearchedStockProvider = ({ children }) => {
  console.log('In SearchedStockProvider:');
  const [searchedStock, dispatch] = useReducer(reducer, 
  
  //initialState
    {
    symbol: 'AAPL',
    view: '5day',
    getSummary: getSummaryData,
    
    updateView: (view) => {},

    updateSymbol: (newSymbol) => {
      console.log('In SearchedStockProvider updateSymbol:', newSymbol);
      dispatch({ type: "UPDATE_SYMBOL", newSymbol });
    }
  });

  return (
    <SearchedStockContext.Provider value={{searchedStock, dispatch }}>
      {children}
    </SearchedStockContext.Provider>
  );
};

export default SearchedStockProvider;