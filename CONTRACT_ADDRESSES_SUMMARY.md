# DegaGuardian - Ethereum Sepolia Contract Addresses

## 🚀 Main Contract Addresses (Update After Deployment)

### 1. **DToken Contract** (Payment System)
```
Address: 0x1234567890123456789012345678901234567890
Purpose: Handles 0.0001 ETH payments for all features
```

### 2. **ContractAnalysis Contract**
```
Address: 0x2345678901234567890123456789012345678901
Purpose: Smart contract security analysis
```

### 3. **Tokenomics Contract**
```
Address: 0x3456789012345678901234567890123456789012
Purpose: Token economics analysis
```

### 4. **SocialAnalysis Contract**
```
Address: 0x4567890123456789012345678901234567890123
Purpose: Social sentiment analysis
```

### 5. **Monitoring Contract**
```
Address: 0x5678901234567890123456789012345678901234
Purpose: Price/volume monitoring setup
```

### 6. **Universal Contract**
```
Address: 0x6789012345678901234567890123456789012345
Purpose: Cross-chain messaging
```

### 7. **DomainManagement Contract**
```
Address: 0x7890123456789012345678901234567890123456
Purpose: Domain tokenization
```

## 📋 Network Configuration
- **Network**: Ethereum Sepolia
- **Chain ID**: 11155111
- **Currency**: ETH
- **Explorer**: https://sepolia.etherscan.io
- **RPC**: https://sepolia.infura.io/v3/YOUR_INFURA_KEY

## 💰 Payment Flow
- **All features require 0.0001 ETH payment**
- **Payment handled by DToken contract**
- **Users must have Sepolia ETH in their wallet**

## 🔧 How to Update Addresses
1. Deploy contracts using `npm run deploy:sepolia`
2. Copy the real addresses from deployment output
3. Update `contract-addresses.json`
4. Update `frontend/src/constants/contracts.ts`
5. Restart frontend application

## ✅ Testing Checklist
- [ ] All contracts deployed successfully
- [ ] Frontend connects to Sepolia network
- [ ] 0.0001 ETH payments work for all features
- [ ] Transactions appear on Sepolia Etherscan
- [ ] All 6 features accessible and functional
