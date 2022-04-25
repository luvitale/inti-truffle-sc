const Voting = artifacts.require("Voting");

contract('Voting', (accounts) => {
  // Unit test to give a vote to Satoshi.
  // At the end, it must be verified that the number of votes
  // has increased as expected
  it("Vote Blockchain with the account 0", async () => {
    const votingInstance = await Voting.deployed();

    const BC_CANDIDATE = web3.utils.asciiToHex("BC");
    
    const votesBefore = (await votingInstance.getReceivedVotes(BC_CANDIDATE)).toNumber();
    await votingInstance.vote(BC_CANDIDATE, {from: accounts[0]});
    const votesAfter = (await votingInstance.getReceivedVotes(BC_CANDIDATE)).toNumber();

    assert.equal(
      votesAfter,
      votesBefore + 1,
      "The number of votes should have increased by 1"
    );
  });

  // Unit test that tries to give a vote to a non-existent candidate.
  // It must throw exception and enter the catch.
  it("Vote invalid candidate", async () => {
    const votingInstance = await Voting.deployed();

    const LV_CANDIDATE = web3.utils.asciiToHex("LV");

    await votingInstance.vote(LV_CANDIDATE, {from: accounts[0]})
      .then(_tx => assert.equal(true, false, "The vote should have failed"))
      .catch(_error => {});
  });
});
