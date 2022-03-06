// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IScore {
    function updateScore(address student, uint8 score) external;
}
