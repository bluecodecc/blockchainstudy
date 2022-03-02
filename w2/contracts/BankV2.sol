//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract Bank {
    address payable public owner;
    address payable public winner;
    mapping(address=>uint) public balances;
    uint internal startTime;
    uint internal duration1;
    uint internal duration2;
    bool internal ownerWithdaw;
    bool internal winnerWithdraw;
    constructor() {
        owner = payable(msg.sender);
        winner = owner;
    }
    receive() external payable {
        if(startTime >= block.timestamp || startTime + duration1 < block.timestamp) {
            return;
        }
        balances[msg.sender] += msg.value;
        if(msg.sender != winner && balances[msg.sender] >= balances[winner]) {
            winner = payable(msg.sender);
        }
    }
    function init(uint _startTime, uint _duration1, uint _duration2) public onlyOwner {
        require(startTime + duration1  +duration2 < block.timestamp);
        startTime = _startTime;
        duration1 = _duration1;
        duration2 = _duration2;
    }
    function withdraw() external checkWithdraw {
        if(ownerWithdaw || winnerWithdraw) {
            ownerWithdaw = true;
            winnerWithdraw = true;
            payable(msg.sender).transfer(address(this).balance);
            return;
        }
        if(msg.sender == owner) {
            ownerWithdaw = true;
        }else {
            winnerWithdraw = true;
        }
        payable(msg.sender).transfer(address(this).balance / 2);

    }
    function transfer() public payable {
        require(msg.value > 0,"transfer amount must be greater than 0");
        balances[msg.sender] += msg.value;

    }
    function contractBalance() public view returns(uint) {
        return address(this).balance;
    }
    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }
    modifier onlyWinner(){
        require(msg.sender == winner);
        _;
    }
    modifier checkWithdraw() {
        require(msg.sender == owner && !ownerWithdaw || msg.sender == winner && !winnerWithdraw);
        _;
    }
}
