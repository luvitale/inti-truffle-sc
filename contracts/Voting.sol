// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Voting {
    mapping (bytes32 => uint8) private receivedVotes; // mapping that links number of votes with the candidate
    mapping (bytes32 => bool) private candidates; // mapping to know if a candidate is valid

    constructor(bytes32[] memory _candidatesName) {
        for(uint i = 0; i < _candidatesName.length; ++i) {
            candidates[_candidatesName[i]] = true;
        }
    }

    // Vote for a candidate
    function vote(bytes32 _candidate) public {
        require(candidateIsValid(_candidate));
        receivedVotes[_candidate]++;
    }

    // Check that a candidate exists
    function candidateIsValid(bytes32 _candidate) public view returns (bool) {
        return candidates[_candidate];
    }

    // Get the number of votes of a candidate
    function getReceivedVotes(bytes32 _candidate) public view returns (uint8) {
        require(candidateIsValid(_candidate));
        return receivedVotes[_candidate];
    }
}