// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./IERC20.sol";

contract Vault {
    mapping(address => uint256) public deposited;
    address public immutable token;

    constructor(address _token) {
        token = _token;
    }

    function deposite(address account,uint256 amount) public {
        require(
            IERC20(token).transferFrom(msg.sender, address(this), amount),
            "transferFrom error"
        );
        deposited[account] += amount;
    }

    function withdraw(uint256 amount) public {
        require(deposited[msg.sender] >= amount);
        deposited[msg.sender]-= amount;
        require(IERC20(token).transfer(msg.sender, amount));
    }
}
