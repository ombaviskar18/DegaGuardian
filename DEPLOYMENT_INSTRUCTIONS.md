# DegaGuardian - Ethereum Sepolia Deployment Instructions

## 🚀 Quick Deployment Steps

### 1. Set up Environment Variables
Create a `.env` file in the root directory:

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

### 2. Get Sepolia Testnet ETH
- **Faucet 1**: https://sepoliafaucet.com/
- **Faucet 2**: https://faucet.quicknode.com/ethereum/sepolia
- **Faucet 3**: https://www.alchemy.com/faucets/ethereum-sepolia

### 3. Deploy Contracts
```bash
# Install dependencies
npm install

# Compile contracts
npx hardhat compile

# Deploy to Sepolia
npm run deploy:sepolia
```

### 4. Update Contract Addresses
After deployment, update these files with the real addresses:

#### A. Update `contract-addresses.json`:
```json
{
  "DToken": "0x[REAL_ADDRESS]",
  "ContractAnalysis": "0x[REAL_ADDRESS]",
  "Tokenomics": "0x[REAL_ADDRESS]",
  "SocialAnalysis": "0x[REAL_ADDRESS]",
  "Monitoring": "0x[REAL_ADDRESS]",
  "Universal": "0x[REAL_ADDRESS]",
  "DomainManagement": "0x[REAL_ADDRESS]",
  "Network": {
    "name": "Ethereum Sepolia",
    "rpcUrl": "https://sepolia.infura.io/v3/YOUR_INFURA_KEY",
    "chainId": 11155111,
    "currency": "ETH",
    "explorer": "https://sepolia.etherscan.io",
    "bridge": "https://bridge.ethereum.org",
    "isDefault": true
  }
}
```

#### B. Update `frontend/src/constants/contracts.ts`:
```typescript
export const SEPOLIA_GUARDIAN_CONTRACTS = {
  DToken: '0x[REAL_ADDRESS]',
  ContractAnalysis: '0x[REAL_ADDRESS]',
  Tokenomics: '0x[REAL_ADDRESS]',
  SocialAnalysis: '0x[REAL_ADDRESS]',
  Monitoring: '0x[REAL_ADDRESS]',
  Universal: '0x[REAL_ADDRESS]',
  DomainManagement: '0x[REAL_ADDRESS]',
} as const;
```

### 5. Test the Application
1. Start the frontend: `npm run dev --prefix ./frontend`
2. Connect MetaMask to Sepolia
3. Test each feature with 0.0001 ETH payment

## 💰 Payment Flow
- **All features require 0.0001 ETH payment**
- **Network**: Ethereum Sepolia (Chain ID: 11155111)
- **Currency**: ETH
- **Explorer**: https://sepolia.etherscan.io

## 🔧 Features Available
1. **Contract Analysis** - Analyze smart contract security
2. **Tokenomics Analysis** - Analyze token economics  
3. **Social Analysis** - Analyze social sentiment
4. **Monitoring Setup** - Set up price/volume monitoring
5. **Universal Messaging** - Send messages
6. **Domain Management** - Tokenize domains

## 📋 Contract Verification
After deployment, verify contracts on Etherscan:
```bash
npx hardhat verify --network sepolia CONTRACT_ADDRESS
```

## ✅ Success Indicators
- All contracts deployed successfully
- Frontend connects to Sepolia network
- 0.0001 ETH payments work for all features
- Transactions appear on Sepolia Etherscan
