const { artifacts, network } = require("hardhat");
const { writeAbiAddr } = require("./saveContractInfo");

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    
    writeAbiAddr((await artifacts.readArtifact("Counter")),counter.address,network.name);
    console.log("Counter address:", counter.address);

    console.log("default counter", (await counter.counter()).toString());

    console.log("counter before count", (await counter.counter()).toString());
    await counter.count();
    console.log("counter after count", (await counter.counter()).toString());
    
    console.log("counter before add 10", (await counter.counter()).toString());
    await counter.add(10);
    console.log("counter after add 10", (await counter.counter()).toString());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });