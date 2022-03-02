//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


contract Bank {
    address payable public owner;
    mapping(address=>uint) public balances;
    constructor() {
        owner = payable(msg.sender);
    }
    receive() external payable {
        balances[msg.sender] += msg.value;
    }
    function withdraw(uint amount) external {
        require(msg.sender == owner, "only owner can draw");
        payable(msg.sender).transfer(amount);
    }
}
