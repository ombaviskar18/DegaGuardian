import React, { useState, useEffect } from 'react';
import { useWallet } from '../hooks/useWallet';

export function NetworkStatus() {
  const { account, decimalChainId } = useWallet();
  const [networkName, setNetworkName] = useState('');

  useEffect(() => {
    const getNetworkName = (chainId: number) => {
      switch (chainId) {
        case 11155111:
          return 'Ethereum Sepolia ✅';
        case 1:
          return 'Ethereum Mainnet ⚠️';
        case 137:
          return 'Polygon ⚠️';
        case 56:
          return 'BSC ⚠️';
        default:
          return `Unknown Network (${chainId}) ❌`;
      }
    };

    if (decimalChainId) {
      setNetworkName(getNetworkName(decimalChainId));
    }
  }, [decimalChainId]);

  const isCorrectNetwork = decimalChainId === 11155111;

  return (
    <div style={{
      padding: '10px',
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: isCorrectNetwork ? '#d4edda' : '#f8d7da',
      border: `1px solid ${isCorrectNetwork ? '#c3e6cb' : '#f5c6cb'}`,
      color: isCorrectNetwork ? '#155724' : '#721c24'
    }}>
      <strong>Network Status:</strong> {networkName}
      {!isCorrectNetwork && (
        <div style={{ marginTop: '5px', fontSize: '14px' }}>
          ⚠️ Please switch to Ethereum Sepolia network to use DegaGuardian features.
        </div>
      )}
      {account && (
        <div style={{ marginTop: '5px', fontSize: '12px' }}>
          Account: {account.slice(0, 6)}...{account.slice(-4)}
        </div>
      )}
    </div>
  );
}
