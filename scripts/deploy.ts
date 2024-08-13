import { ethers } from "hardhat";

async function main() {
  try {
    const FakeProductDetection = await ethers.getContractFactory("FakeProductDetection");
    console.log("Deploying FakeProductDetection...");
    const fakeProductDetection = await FakeProductDetection.deploy();
    await fakeProductDetection.waitForDeployment();
    console.log("FakeProductDetection deployed to:", await fakeProductDetection.getAddress());
  } catch (error) {
    console.error("Error during deployment:", error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });