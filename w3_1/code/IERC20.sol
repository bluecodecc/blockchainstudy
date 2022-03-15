// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    //代币名称
    function name() external view returns (string memory);
    //代币符号
    function symbol() external view returns (string memory);
    //代币小数点位数
    function decimals() external view returns (uint8);
    //总的发行量
    function totalSupply() external view returns (uint256);
    //获取account账户余额
    function balanceOf(address account) external view returns (uint256 balance);
    //向to地址转账
    function transfer(address to, uint256 amount)
        external
        returns (bool success);
    //从from向to转账，内部调用，用来执行代支付
    function transferFrom(
        address from,
        address to,
        uint256 value
    ) external returns (bool success);
    //授权spender的allowance额度
    function approve(address spender, uint256 amount)
        external
        returns (bool success);
    //获取owner授权给spender的allowance额度
    function allowance(address owner, address spender)
        external
        view
        returns (uint256 remaining);
    
    event Transfer(address indexed from, address indexed to, uint256 amount);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 amount
    );
}
