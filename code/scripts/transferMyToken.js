const { ethers, network } = require("hardhat");
const metadata = require(`../deployments/${network.name}/MyToken.json`)
async function main() {
    let [account1, account2] = await ethers.getSigners();
    let myToken = await ethers.getContractAt(metadata.contractName, metadata.address);
    console.log("代币" + (await myToken.symbol()) + " 当前总发行数量 : " + (await myToken.balanceOf(account1.address)).toString());
    console.log(account1.address + " 余额 : " + (await myToken.balanceOf(account1.address)).toString());
    console.log(account2.address + " 余额 : " + (await myToken.balanceOf(account2.address)).toString());
    console.log("增发" + 10000000 + "数量的代币");
    await myToken.mint(account1.address, 10000000);
    console.log("代币" + (await myToken.symbol()) + " 当前总发行数量 : " + (await myToken.balanceOf(account1.address)).toString());
    console.log(account1.address + " 余额 : " + (await myToken.balanceOf(account1.address)).toString());
    console.log("转移5000000代币给" + account2.address);
    await myToken.transfer(account2.address, 5000000);
    console.log(account1.address + " 余额 : " + (await myToken.balanceOf(account1.address)).toString());
    console.log(account2.address + " 余额 : " + (await myToken.balanceOf(account2.address)).toString());

}
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });