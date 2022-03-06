const { ethers, network } = require("hardhat");
const BANK_CONSTRACT_INFO = require(`../deployments/${network.name}/Bank.json`)
async function main() {
    let [owner] = await ethers.getSigners();
    let bankContract = await ethers.getContractAt(BANK_CONSTRACT_INFO.contractName, BANK_CONSTRACT_INFO.address, owner);
    console.log("before withdraw " + ethers.utils.formatUnits((await owner.getBalance()), 18));
    console.log((await bankContract.withdraw(ethers.utils.parseEther("0.2"))));
    console.log("after withdraw " + ethers.utils.formatUnits((await owner.getBalance()), 18));
}
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });