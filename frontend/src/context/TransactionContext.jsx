
import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TransactionContext = createContext(null);

export const useTransactions = () => useContext(TransactionContext);

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useLocalStorage('intentSwapTransactions', []);

  const addTransaction = (tx) => {
    const newTx = {
      ...tx,
      timestamp: new Date().toISOString(),
      status: 'Completed', // Or could be 'Pending' initially
    };
    setTransactions(prevTxs => [newTx, ...prevTxs]);
  };

  const clearTransactions = () => {
    setTransactions([]);
  };

  const value = {
    transactions,
    addTransaction,
    clearTransactions,
  };

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};
