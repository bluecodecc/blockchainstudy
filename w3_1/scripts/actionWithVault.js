const { ethers, network } = require("hardhat");
const mytokenmMetadata = require(`../deployments/${network.name}/MyToken.json`);
const vaultmMetadata = require(`../deployments/${network.name}/Vault.json`);
async function main() {
    let [account1, account2] = await ethers.getSigners();
    let myToken = await ethers.getContractAt(mytokenmMetadata.contractName, mytokenmMetadata.address);
    let vault = await ethers.getContractAt(vaultmMetadata.contractName, vaultmMetadata.address);
    console.log(account1.address + " 余额 : " + (await myToken.balanceOf(account1.address)).toString());
    console.log(account1.address + " 存款 : " + (await vault.deposited(account1.address)).toString());
    console.log(account2.address + " 存款 : " + (await vault.deposited(account2.address)).toString());
    console.log(account1.address + "已经授权" + (await myToken.allowance(account1.address, vault.address)).toString() + " 额度给" + vault.address);
    console.log("账户" + account1.address + "继续授权vault合约1000额度");
    await myToken.approve(vault.address, 1000);
    console.log(account1.address + "已经授权" + (await myToken.allowance(account1.address, vault.address)).toString() + " 额度给" + vault.address);
    console.log("将" + account1.address + "账户中 1000额度存入" + vault.address + "合约的" + account2.address);
    await vault.deposite(account2.address, 1000);
    console.log(vault.address + " 余额 : " + (await myToken.balanceOf(vault.address)).toString());
    console.log(account1.address + " 余额 : " + (await myToken.balanceOf(account1.address)).toString());
    console.log(account1.address + " 存款 : " + (await vault.deposited(account1.address)).toString());
    console.log(account2.address + " 存款 : " + (await vault.deposited(account2.address)).toString());
    console.log(account2.address + " 余额 : " + (await myToken.balanceOf(account2.address)).toString());
    console.log("提取" + account2.address + "1000F存款");
    await vault.connect(account2).withdraw(1000);
    console.log(account2.address + " 存款 : " + (await vault.deposited(account2.address)).toString());
    console.log(account2.address + " 余额 : " + (await myToken.balanceOf(account2.address)).toString());
    console.log(vault.address + " 余额 : " + (await myToken.balanceOf(vault.address)).toString());
}
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });