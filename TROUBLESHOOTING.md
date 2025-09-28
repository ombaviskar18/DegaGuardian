# 🔧 DegaGuardian Troubleshooting Guide

## ❌ **"Payment required: Please ensure you have 0.0001 ETH and approve the transaction" Error**

This error occurs when the payment flow fails. Here's how to fix it:

### ✅ **Step 1: Check Network Connection**
1. **Open MetaMask**
2. **Switch to Ethereum Sepolia network**
   - Click on network dropdown (top of MetaMask)
   - Select "Ethereum Sepolia" or add it if not present
   - Network details:
     - **Network Name**: Ethereum Sepolia
     - **RPC URL**: https://ethereum-sepolia.publicnode.com
     - **Chain ID**: 11155111
     - **Currency Symbol**: ETH
     - **Block Explorer**: https://sepolia.etherscan.io

### ✅ **Step 2: Get Sepolia Testnet ETH**
You need Sepolia ETH to pay the 0.0001 ETH fee. Get it from these faucets:

1. **Alchemy Faucet**: https://www.alchemy.com/faucets/ethereum-sepolia
2. **QuickNode Faucet**: https://faucet.quicknode.com/ethereum/sepolia
3. **Sepolia Faucet**: https://sepoliafaucet.com/

**Required Amount**: At least 0.001 ETH (to cover gas + 0.0001 ETH fee)

### ✅ **Step 3: Test the Application**
1. **Open**: http://localhost:5173
2. **Connect your wallet** (MetaMask)
3. **Go to any feature page** (Contract Analysis, Tokenomics, etc.)
4. **Enter a test address** and click analyze
5. **Approve the transaction** when MetaMask pops up

### ✅ **Step 4: Debug Steps**

#### **Check Wallet Connection:**
```javascript
// Open browser console (F12) and run:
console.log('MetaMask installed:', typeof window.ethereum !== 'undefined');
console.log('Current network:', await window.ethereum.request({method: 'eth_chainId'}));
console.log('Current account:', await window.ethereum.request({method: 'eth_accounts'}));
```

#### **Check Contract Interaction:**
Visit: http://localhost:5173/test
- Click "Test Connection" button
- Click "Test Payment" button
- Check for any error messages

### ✅ **Step 5: Common Issues & Solutions**

#### **Issue 1: "User rejected transaction"**
- **Solution**: Click "Confirm" in MetaMask when the transaction popup appears

#### **Issue 2: "Insufficient funds"**
- **Solution**: Get more Sepolia ETH from faucets

#### **Issue 3: "Network not supported"**
- **Solution**: Add Sepolia network to MetaMask manually

#### **Issue 4: "Contract not found"**
- **Solution**: Make sure you're on Sepolia network (Chain ID: 11155111)

### ✅ **Step 6: Verify Everything Works**

#### **Test Payment Flow:**
1. Go to Contract Analysis page
2. Enter any Ethereum address (e.g., `0x1234567890123456789012345678901234567890`)
3. Click "Analyze Contract"
4. MetaMask should pop up asking for 0.0001 ETH payment
5. Click "Confirm" in MetaMask
6. Wait for transaction confirmation
7. Analysis should proceed

#### **Expected Behavior:**
- ✅ MetaMask popup appears
- ✅ Shows 0.0001 ETH payment
- ✅ Transaction confirms on Sepolia
- ✅ Feature works after payment

### 🎯 **Contract Addresses (for reference)**
- **DToken**: `0x5e5eEE029C1bC9311caC8547149178dD63B86071`
- **ContractAnalysis**: `0x4E68Ca3Cf7B7317ab758e8Be73EEF3a711945742`
- **Tokenomics**: `0xb18D8fB3Ed2916752F67082Efac91a6d03105468`
- **SocialAnalysis**: `0xc3C8624a650747BE5be7579e4145E314ECAD0e1C`

### 🚀 **If Still Not Working**
1. **Clear browser cache** and reload
2. **Disconnect and reconnect** MetaMask
3. **Try a different browser**
4. **Check browser console** for detailed error messages

## ✅ **Success Indicators**
- MetaMask shows Sepolia network
- You have Sepolia ETH balance
- Transaction popup appears when using features
- Transaction confirms on Sepolia Etherscan
- Features work after payment
