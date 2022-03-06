# 第二周作业
## W2_1作业
- [x] 编写⼀个[Bank合约](./contracts/Bank.sol)，[部署到Ropston网络](https://ropsten.etherscan.io/tx/0x4349b5c81fd8578207ef5735775a0ab99d0c20a49c263c829813c0b7c4b6ca1c)
- [x] 通过 Metamask 向Bank合约转账ETH
    [第一笔转账交易](https://ropsten.etherscan.io/tx/0xc8613ca52e50b6f063e89acf127c0da4e389c23c0414b8605f61b4d25b826d05)
    [第二笔转账交易](https://ropsten.etherscan.io/tx/0xeb6a9a797db918a6c01b3d1f03d695a8559c02f64c54b6a15c67e6800258c0fe)
- [x] 在Bank合约记录每个地址转账⾦额
- [x] 编写Bank合约withdraw(), 实现提取出所有的ETH
    使用[withdraw.js脚本](./scripts/withdraw.js)和合约交互
    [提取合约存储的ETH交易](https://ropsten.etherscan.io/tx/0x6ad244e5a816fac8d9be0f9e59fa782eb136ed7fe24a0d6cd290c483b5140bd8)

## W2_2作业
- [x] 编写合约[Score](./contracts/Score.sol)，⽤于记录学⽣（地址）分数
   - [x] 仅有⽼师（⽤modifier权限控制）可以添加和修改学⽣分数
   - [x] 分数不可以⼤于 100
- [x] 编写合约[Teacher](./contracts/Teacher.sol) 作为⽼师，通过[ IScore](./contracts/IScore.sol)接⼝调⽤修改学⽣分数
[部署Teacher合约交易](https://ropsten.etherscan.io/tx/0xc0022325de9d784b04f98394c1a1275ac51eb0c6905fd5a916a739cc6e076ef8)
[部署Score合约交易](https://ropsten.etherscan.io/tx/0xeae3b099d1655ec94e90ebfcc9b530a8064a953871f709df705f8f11d185e379)
使用[action.js脚本](./scripts/action.js)和合约交互[修改分数交易](https://ropsten.etherscan.io/tx/0x9ff69337fbacfc9c5815bf6282ead4737f7db1bff945de2d25ad0d1c51d9e58f)
