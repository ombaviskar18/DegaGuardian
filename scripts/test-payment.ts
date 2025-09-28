import { ethers } from "hardhat";

async function main() {
  console.log("💰 Testing payment flow...");
  
  const [deployer] = await ethers.getSigners();
  console.log("Testing with account:", deployer.address);
  
  const dTokenAddress = "0x5e5eEE029C1bC9311caC8547149178dD63B86071";
  
  try {
    // Get DToken contract
    const DToken = await ethers.getContractFactory("DToken");
    const dToken = DToken.attach(dTokenAddress);
    
    console.log("\n📄 DToken Contract Info:");
    const featureCost = await dToken.getFeatureCost();
    console.log(`✅ Feature cost: ${ethers.utils.formatEther(featureCost)} ETH`);
    
    const userBalance = await dToken.getUserPaymentBalance(deployer.address);
    console.log(`✅ User payment balance: ${ethers.utils.formatEther(userBalance)} ETH`);
    
    // Test payment
    console.log("\n💳 Testing payment...");
    const tx = await dToken.payForFeature({ value: featureCost });
    console.log(`✅ Payment transaction sent: ${tx.hash}`);
    
    const receipt = await tx.wait();
    console.log(`✅ Payment confirmed in block: ${receipt.blockNumber}`);
    
    // Check balance after payment
    const newBalance = await dToken.getUserPaymentBalance(deployer.address);
    console.log(`✅ New payment balance: ${ethers.utils.formatEther(newBalance)} ETH`);
    
    // Test if user has payment
    const hasPayment = await dToken.hasFeaturePayment(deployer.address);
    console.log(`✅ Has feature payment: ${hasPayment}`);
    
    console.log("\n🎉 Payment flow test successful!");
    
  } catch (error) {
    console.error("❌ Payment test failed:", error.message);
  }
}

main().catch((error) => {
  console.error("❌ Test failed:", error);
  process.exitCode = 1;
});
