// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IScore} from "./IScore.sol";

contract Teacher {
    address public owner;

    constructor(address _owner) {
        owner = _owner;
    }

    function updateScore(
        address iScoreImpAddress,
        address student,
        uint8 score
    ) public onlyOwner {
        IScore iscoreImp = IScore(iScoreImpAddress);
        iscoreImp.updateScore(student, score);
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
}
