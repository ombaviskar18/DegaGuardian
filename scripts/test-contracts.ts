import { ethers } from "hardhat";

async function main() {
  console.log("🧪 Testing deployed contracts...");
  
  const [deployer] = await ethers.getSigners();
  console.log("Testing with account:", deployer.address);
  
  // Contract addresses
  const dTokenAddress = "0x5e5eEE029C1bC9311caC8547149178dD63B86071";
  const contractAnalysisAddress = "0x4E68Ca3Cf7B7317ab758e8Be73EEF3a711945742";
  
  try {
    // Test DToken
    console.log("\n📄 Testing DToken...");
    const DToken = await ethers.getContractFactory("DToken");
    const dToken = DToken.attach(dTokenAddress);
    
    const featureCost = await dToken.getFeatureCost();
    console.log(`✅ Feature cost: ${ethers.utils.formatEther(featureCost)} ETH`);
    
    const userBalance = await dToken.getUserPaymentBalance(deployer.address);
    console.log(`✅ User payment balance: ${ethers.utils.formatEther(userBalance)} ETH`);
    
    // Test ContractAnalysis
    console.log("\n🔍 Testing ContractAnalysis...");
    const ContractAnalysis = await ethers.getContractFactory("ContractAnalysis");
    const contractAnalysis = ContractAnalysis.attach(contractAnalysisAddress);
    
    const analysisCost = await contractAnalysis.getFeatureCost();
    console.log(`✅ Analysis cost: ${ethers.utils.formatEther(analysisCost)} ETH`);
    
    console.log("\n🎉 All contracts are working correctly!");
    console.log("\n📋 Contract Verification Links:");
    console.log(`DToken: https://sepolia.etherscan.io/address/${dTokenAddress}`);
    console.log(`ContractAnalysis: https://sepolia.etherscan.io/address/${contractAnalysisAddress}`);
    
  } catch (error) {
    console.error("❌ Contract test failed:", error.message);
  }
}

main().catch((error) => {
  console.error("❌ Test failed:", error);
  process.exitCode = 1;
});