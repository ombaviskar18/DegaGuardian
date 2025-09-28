# Quick Deployment Guide - DegaGuardian to Sepolia

## 🚀 Step 1: Set up Environment Variables

Create a `.env` file in the root directory with:

```bash
# Replace with your actual private key (without 0x prefix)
PRIVATE_KEY=your_actual_private_key_here

# Using public Sepolia RPC (no API key needed)
SEPOLIA_RPC_URL=https://rpc.sepolia.org

# Optional: For contract verification
ETHERSCAN_API_KEY=your_etherscan_api_key_here
```

## 🚀 Step 2: Get Sepolia Testnet ETH

Get testnet ETH from these faucets:
- https://sepoliafaucet.com/
- https://faucet.quicknode.com/ethereum/sepolia
- https://www.alchemy.com/faucets/ethereum-sepolia

## 🚀 Step 3: Deploy Contracts

```bash
# Make sure you're in the SonicGuardian directory
cd SonicGuardian

# Deploy to Sepolia
npm run deploy:sepolia
```

## 🚀 Step 4: Copy Real Addresses

After successful deployment, copy the real addresses from the console output and update:

1. **contract-addresses.json**
2. **frontend/src/constants/contracts.ts**

## 🚀 Step 5: Test the Application

```bash
# Start frontend
npm run dev --prefix ./frontend
```

## ✅ Expected Output

You should see something like:
```
🎉 DEPLOYMENT COMPLETE!
====================
Network: Ethereum Sepolia (Chain ID: 11155111)
RPC URL: https://rpc.sepolia.org
Currency: ETH

📋 Contract Addresses:
DToken: 0x[REAL_ADDRESS]
ContractAnalysis: 0x[REAL_ADDRESS]
Tokenomics: 0x[REAL_ADDRESS]
SocialAnalysis: 0x[REAL_ADDRESS]
Monitoring: 0x[REAL_ADDRESS]
Universal: 0x[REAL_ADDRESS]
DomainManagement: 0x[REAL_ADDRESS]
```

## 💰 Payment Flow
- All features require **0.0001 ETH** payment
- Network: **Ethereum Sepolia** (Chain ID: 11155111)
- Explorer: https://sepolia.etherscan.io
