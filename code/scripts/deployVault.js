const { ethers } = require("hardhat");
const { writeAbiAddr } = require("./saveContractInfo");
const metadata = require(`../deployments/${network.name}/MyToken.json`)

async function main() {

    const Vault = await ethers.getContractFactory("Vault");
    const vault = await Vault.deploy(metadata.address);
    await vault.deployed();
    await writeAbiAddr(await artifacts.readArtifact("Vault"), vault.address, network.name);
    console.log("Vault deployed to:", vault.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });