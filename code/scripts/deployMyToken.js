const { ethers } = require("hardhat");
const { writeAbiAddr } = require("./saveContractInfo");
async function main() {

    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy("Dogecoin", "DOGE");
    await myToken.deployed();
    await writeAbiAddr(await artifacts.readArtifact("MyToken"), myToken.address, network.name);
    console.log("MyToken deployed to:", myToken.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });