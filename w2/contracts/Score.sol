// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import {IScore} from "./IScore.sol";

contract Score is IScore {
    mapping(address => uint8) public scores;
    address public teacher;

    constructor(address _teacher) {
        teacher = _teacher;
    }

    function updateScore(address student, uint8 score)
        external
        override
        onlyTeacher
        checkScore(student, score)
    {
        scores[student] = score;
    }

    modifier onlyTeacher() {
        require(msg.sender == teacher);
        _;
    }
    modifier checkScore(address student, uint8 score) {
        require(scores[student] + score <= 100);
        _;
    }
}
