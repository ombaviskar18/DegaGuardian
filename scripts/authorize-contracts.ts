import { ethers } from "hardhat";

async function main() {
  console.log("🔐 Authorizing contracts to use DToken...");
  
  const [deployer] = await ethers.getSigners();
  console.log("Using account:", deployer.address);
  
  // Contract addresses from deployment
  const dTokenAddress = "0x5e5eEE029C1bC9311caC8547149178dD63B86071";
  const contractAddresses = {
    DomainManagement: "0x2835A0c3A302b9cD1FB4bB89F4e42014dc429273",
    ContractAnalysis: "0x4E68Ca3Cf7B7317ab758e8Be73EEF3a711945742",
    SocialAnalysis: "0xc3C8624a650747BE5be7579e4145E314ECAD0e1C",
    Tokenomics: "0xb18D8fB3Ed2916752F67082Efac91a6d03105468",
    Monitoring: "0x8F98e14bCa9B0F65048712278Dd8e0a9b1dbbb11",
    Universal: "0x65E13C1Ec7B7ddcf18244a1db9F604b7da5d1D2F"
  };
  
  const DToken = await ethers.getContractFactory("DToken");
  const dToken = DToken.attach(dTokenAddress);
  
  // Authorize each contract
  for (const [name, address] of Object.entries(contractAddresses)) {
    try {
      console.log(`\n🔐 Authorizing ${name}...`);
      const tx = await dToken.authorizeContract(address, true, {
        gasPrice: ethers.utils.parseUnits("25", "gwei") // Higher gas price
      });
      await tx.wait();
      console.log(`✅ ${name} authorized successfully`);
    } catch (error) {
      console.log(`❌ Failed to authorize ${name}:`, error.message);
    }
  }
  
  console.log("\n🎉 Authorization process completed!");
}

main().catch((error) => {
  console.error("❌ Authorization failed:", error);
  process.exitCode = 1;
});
