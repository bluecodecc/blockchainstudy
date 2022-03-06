// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Bank {
    address payable public owner;
    mapping(address => uint256) public balances;

    constructor() {
        owner = payable(msg.sender);
    }

    //接受用户直接转账
    receive() external payable {
        balances[msg.sender] += msg.value;
    }

    //只有所有者可以提现
    function withdraw(uint256 amount) external onlyOwner {
        payable(msg.sender).transfer(amount);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "only owner can draw");
        _;
    }
}
