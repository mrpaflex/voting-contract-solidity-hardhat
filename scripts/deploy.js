const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const MyToken = await ethers.getContractFactory("FREECOIN");
  const myToken = await MyToken.deploy();

  console.log("oxygen deployed to:", myToken.address);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
