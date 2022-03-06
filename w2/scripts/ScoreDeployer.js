// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { artifacts, network } = require("hardhat");
const { writeAbiAddr } = require("./saveContractInfo");
async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy
    const [account] = await ethers.getSigners();
    const Teacher = await ethers.getContractFactory("Teacher");
    const teacher = await Teacher.deploy(account.address);
    writeAbiAddr((await artifacts.readArtifact("Teacher")), teacher.address, network.name);
    console.log("Teacher deployed to:", teacher.address);
    console.log("Teacher contract owner :", await teacher.owner());
    const Score = await ethers.getContractFactory("Score");
    const score = await Score.deploy(teacher.address);
    writeAbiAddr((await artifacts.readArtifact("Score")), score.address, network.name);
    console.log("Score deployed to:", score.address);
    console.log("Score contract teacher :", await score.teacher());

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });