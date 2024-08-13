import { ethers } from "hardhat";

async function main() {
    // Get the ContractFactory
    const FakeProductDetection = await ethers.getContractFactory("FakeProductDetection");

    // Deploy the contract
    const fakeProductDetection = await FakeProductDetection.deploy();

    // Wait for the contract to be mined
    // await fakeProductDetection.deployTransaction.wait();

    //console.log(`FakeProductDetection deployed to: ${fakeProductDetection.address}`);
}

// Execute the deployment script
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
