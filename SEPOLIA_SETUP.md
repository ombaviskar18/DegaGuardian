# DegaGuardian - Ethereum Sepolia Setup Guide

## Quick Setup for Sepolia Deployment

### 1. Environment Variables
Create a `.env` file in the root directory with:

```bash
# Private key for deployment (without 0x prefix)
PRIVATE_KEY=your_private_key_here

# Infura API Key for Sepolia RPC
INFURA_API_KEY=your_infura_api_key_here

# Alternative Sepolia RPC URL (optional)
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY

# Etherscan API Key for contract verification
ETHERSCAN_API_KEY=your_etherscan_api_key_here
```

### 2. Get Sepolia ETH
- Get testnet ETH from: https://sepoliafaucet.com/
- Or use: https://faucet.quicknode.com/ethereum/sepolia

### 3. Deploy to Sepolia
```bash
npm run deploy:sepolia
```

### 4. Update Contract Addresses
After deployment, update the contract addresses in:
- `contract-addresses.json`
- `frontend/src/constants/contracts.ts`

## Features
- ✅ 0.0001 ETH fee per feature (already implemented)
- ✅ All contracts use DToken for ETH payments
- ✅ Sepolia network configuration
- ✅ Contract deployment script ready

## Contract Features Requiring 0.0001 ETH:
1. **Contract Analysis** - Analyze smart contract security
2. **Tokenomics Analysis** - Analyze token economics
3. **Social Analysis** - Analyze social sentiment
4. **Monitoring Setup** - Set up price/volume monitoring
5. **Universal Messaging** - Send messages
6. **Domain Management** - Tokenize domains

All features are now configured for Ethereum Sepolia with 0.0001 ETH fees!
