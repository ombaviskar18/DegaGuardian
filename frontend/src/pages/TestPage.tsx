import React, { useState } from 'react';
import { contractService, switchToSepolia } from '../utils/contracts';

export function TestPage() {
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const testConnection = async () => {
    try {
      setStatus('Connecting wallet...');
      const connected = await contractService.connect();
      if (!connected) {
        setError('Failed to connect wallet');
        return;
      }

      setStatus('Switching to Sepolia...');
      const switched = await switchToSepolia();
      if (!switched) {
        setError('Failed to switch to Sepolia');
        return;
      }

      setStatus('Testing payment...');
      await contractService.ensurePaymentCredit();
      
      setStatus('Testing contract analysis...');
      const tx = await contractService.requestContractAnalysis('0x1234567890123456789012345678901234567890');
      
      setStatus(`Success! Transaction: ${tx.transactionHash}`);
      setError('');
    } catch (err: any) {
      setError(`Error: ${err.message}`);
      setStatus('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>DegaGuardian Test Page</h1>
      <button onClick={testConnection} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Test Payment Flow
      </button>
      
      {status && <p style={{ color: 'blue' }}>Status: {status}</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      <div style={{ marginTop: '20px' }}>
        <h3>Contract Addresses:</h3>
        <p>DToken: 0x5e5eEE029C1bC9311caC8547149178dD63B86071</p>
        <p>ContractAnalysis: 0x4E68Ca3Cf7B7317ab758e8Be73EEF3a711945742</p>
      </div>
    </div>
  );
}
