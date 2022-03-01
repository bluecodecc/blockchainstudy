const { ethers, network } = require("hardhat");
const CONSTRACT_INFO = require(`../deployments/${network.name}/Counter.json`)
async function main() {
    let [owner] = await ethers.getSigners();
    let counter = await ethers.getContractAt("Counter", CONSTRACT_INFO.address, owner);
    await counter.count();
    console.log((await counter.counter()).toString());
}
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
// const Web3 = require("web3");
// //设置连接节点
// var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))
//     //通过getProtocolVersion获取客户端版本, 返回Promise
// web3.eth.getProtocolVersion().then(function(result) {
//     console.log(result)
// }).catch(function(err) {
//     console.log(err)
// });

// const Web3 = require("web3");
// let web3 = new Web3()
// console.log(web3.utils.unitMap)
//     // let map = web3.utils.unitMap
//     // for(let key in map){
//     //    console.log(key + ":" + map[key])
//     // }
//     // 其他单位转换为wei
// console.log(web3.utils.toWei('1', 'ether'))
// console.log(web3.utils.toWei('1', 'finney'))
// console.log(web3.utils.toWei('1', 'Gwei'))
//     // wei转换为其他单位
// console.log(web3.utils.fromWei(web3.utils.unitMap.ether, 'ether'))
// console.log(web3.utils.fromWei('1', 'finney'))
// console.log(web3.utils.fromWei('1', 'Gwei'))

// const Web3 = require("web3")
// const BigNumber = require("bignumber.js")
// let web3 = new Web3()
// const BN = web3.utils.BN
//     //参数可以是字符串、数字、BN、BigNumber
// let numString = '123456'
// let num = 123456
// let numHex = web3.utils.toHex(numString)
// console.log(numHex)
// console.log(web3.utils.toHex(123456))
// console.log(web3.utils.toHex(new BN(numString)))
// console.log(web3.utils.toHex(new BigNumber(numString)))
// let helloWorldString = 'Hello World'
// let helloWorldHex = web3.utils.toHex(helloWorldString)
// console.log(helloWorldHex)
//     // toBN转换为大整数, 参数接受字符串、十六进制和数字
// console.log(web3.utils.toBN(num).toString())
// console.log(web3.utils.toBN(numString).add(web3.utils.toBN(numString)).toString())
// console.log(web3.utils.toBN(numHex).toString())
//     // 数字和十六进制相互转换
// console.log(web3.utils.numberToHex(num))
// console.log(web3.utils.hexToNumberString(numHex))
// console.log(web3.utils.hexToNumber(numHex))
//     // UTF-8编码字符串和十六进制相互转换, 别名：hexToString、stringToHex
// console.log(web3.utils.hexToUtf8(helloWorldHex))
// console.log(web3.utils.utf8ToHex(helloWorldString))
//     // Ascii编码字符串和十六进制相互转换
// console.log(web3.utils.hexToAscii(helloWorldHex))
// console.log(web3.utils.asciiToHex(helloWorldString))
//     // 十六进制和字节数组相互转换
// let helloWorldBytes = web3.utils.hexToBytes(helloWorldHex)
// console.log(helloWorldBytes)
// console.log(web3.utils.bytesToHex(helloWorldBytes))

// const Web3 = require("web3")
// let web3 = new Web3(new Web3.providers.HttpProvider("https://eth-ropsten.alchemyapi.io/v2/B_HlSHxLbIDf9O1domMim_1KqStK-p69"));
// //合约地址
// let conctractAddr = "0x987ac907a8e9d043190c45bf4a42119c30da8967"
// web3.eth.getStorageAt(conctractAddr, 0).then(function(result) {
//     console.log(result);
//     console.log(web3.utils.hexToNumberString(result));
// }).catch(function(err) {
//     console.log(err)
// });