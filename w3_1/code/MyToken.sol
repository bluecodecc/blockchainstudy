// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./ERC20.sol";

contract MyToken is ERC20 {
    address owner;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        owner = msg.sender;
    }

    //代币的所有者可以增发代币
    function mint(address account, uint256 amount) external onlyOwner {
        _mint(account, amount);
    }
    modifier onlyOwner() {
        require(msg.sender == owner, "");
        _;
    }
}
