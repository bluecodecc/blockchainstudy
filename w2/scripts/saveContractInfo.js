const fs = require('fs');
const path = require('path');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);

// for Hardhat deployment
async function writeAbiAddr(artifacts, addr, network) {
    const deployments = {};
    deployments["address"] = addr;
    deployments["contractName"] = artifacts.contractName;
    await writeLog(deployments, artifacts.contractName, network);

    const abis = {};
    abis["contractName"] = artifacts.contractName;
    abis["abi"] = artifacts.abi;

    const deploymentPath = path.resolve(__dirname, `../deployments/abi/${abis["contractName"]}.json`);
    await writeFileGrace(deploymentPath, abis);
}

// for Truffle deployment
async function writeAbis(artifacts, name, network) {
    const deployments = {};
    deployments["address"] = artifacts.address;
    deployments["contractName"] = artifacts.contractName;
    await writeLog(deployments, name, network);

    const abis = {};
    abis["contractName"] = artifacts.contractName;
    abis["abi"] = artifacts.abi;

    const deploymentPath = path.resolve(__dirname, `../deployments/abi/${abis["contractName"]}.json`);
    await writeFileGrace(deploymentPath, abis);
}

/**
 * 记录合约发布地址
 * @param {*} deployments json
 * @param {*} name 类型
 * @param {*} network 网络
 */
async function writeLog(deployments, name, network) {
    const deploymentPath = path.resolve(__dirname, `../deployments/${network}/${name}.json`);
    await writeFileGrace(deploymentPath, deployments);
    console.log(`Exported deployments into ${deploymentPath}`);
}


async function writeFileGrace(filePath, data) {
    let parentPath = path.resolve(filePath, "..");
    try {
        if (!fs.existsSync(parentPath)) {
            fs.mkdirSync(parentPath, { recursive: true })
        }
        await writeFile(filePath, JSON.stringify(data, null, 2), { flag: 'w' }, err => {});
    } catch (err) {
        console.error(err)
        return;
    }
}

module.exports = {
    writeLog,
    writeAbis,
    writeAbiAddr,
}