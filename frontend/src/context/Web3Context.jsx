
import React, { createContext, useState, useContext, useCallback } from 'react';
import { connectWallet as connectWalletApi } from '../lib/web3';

const Web3Context = createContext(null);

export const useWeb3 = () => useContext(Web3Context);

export const Web3Provider = ({ children }) => {
  const [wallet, setWallet] = useState({
    address: null,
    network: null,
    isConnected: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const connectWallet = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { address, network } = await connectWalletApi();
      setWallet({ address, network, isConnected: true });
    } catch (err) {
      setError(err.message || 'Failed to connect wallet.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const disconnectWallet = () => {
    setWallet({ address: null, network: null, isConnected: false });
  };

  const value = {
    ...wallet,
    isLoading,
    error,
    connectWallet,
    disconnectWallet,
  };

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
};
