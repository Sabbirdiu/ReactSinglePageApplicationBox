import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
//Initial State

const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'salary', amount: 300 },
    { id: 3, text: 'book', amount: -20 },
    { id: 4, text: 'camera', amount: 150 },
  ],
};
// create context which use in diffent child component
export const GlobalContext = createContext(initialState);

// provider component which use in root component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: 'Delete_Transaction',
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: 'Add_Transaction',
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
