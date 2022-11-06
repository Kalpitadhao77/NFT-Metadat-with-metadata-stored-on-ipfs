const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {

  const metadataURL = "ipfs://QmckN6EcYxEfTnS2Yddjx53sv3poCwbgW7XkA7A5U4avXK/";

  const Humanoids = await ethers.getContractFactory("Humanoids");

  const deployedHumanoids = await Humanoids.deploy(metadataURL);

  await deployedHumanoids.deployed();

  // print the address of the deployed contract
  console.log("Humanoids Contract Address:", deployedHumanoids.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });