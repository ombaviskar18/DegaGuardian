import { ethers } from "hardhat";

async function main() {
  console.log("🔍 Debugging contract interaction...");
  
  const [deployer] = await ethers.getSigners();
  console.log("Using account:", deployer.address);
  
  const dTokenAddress = "0x5e5eEE029C1bC9311caC8547149178dD63B86071";
  const contractAnalysisAddress = "0x4E68Ca3Cf7B7317ab758e8Be73EEF3a711945742";
  
  try {
    // Get DToken contract
    const DToken = await ethers.getContractFactory("DToken");
    const dToken = DToken.attach(dTokenAddress);
    
    // Check if user has payment
    const hasPayment = await dToken.hasFeaturePayment(deployer.address);
    console.log(`✅ Has payment: ${hasPayment}`);
    
    if (!hasPayment) {
      console.log("💳 Making payment...");
      const cost = await dToken.getFeatureCost();
      const tx = await dToken.payForFeature({ value: cost });
      await tx.wait();
      console.log("✅ Payment completed");
    }
    
    // Get ContractAnalysis contract
    const ContractAnalysis = await ethers.getContractFactory("ContractAnalysis");
    const contractAnalysis = ContractAnalysis.attach(contractAnalysisAddress);
    
    // Try to call the function
    console.log("🔍 Calling requestContractAnalysis...");
    const tx = await contractAnalysis.requestContractAnalysis("0x1234567890123456789012345678901234567890");
    console.log(`✅ Transaction sent: ${tx.hash}`);
    
    const receipt = await tx.wait();
    console.log(`✅ Transaction confirmed in block: ${receipt.blockNumber}`);
    
    console.log("\n🎉 Contract interaction successful!");
    
  } catch (error) {
    console.error("❌ Contract interaction failed:", error.message);
    console.error("Full error:", error);
  }
}

main().catch((error) => {
  console.error("❌ Debug failed:", error);
  process.exitCode = 1;
});
