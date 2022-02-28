const {ethers, network} = require("hardhat");
const CONSTRACT_INFO = require(`../deployments/${network.name}/Counter.json`)
async function main() {
    let [owner] = await ethers.getSigners();
    let counter = await ethers.getContractAt("Counter",CONSTRACT_INFO.address,owner);
    await counter.count();
    console.log((await counter.counter()).toString());
}
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });