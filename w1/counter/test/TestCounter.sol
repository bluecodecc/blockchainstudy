pragma solidity >=0.4.22 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Counter.sol";

contract TestCounter {

  function testInitialCounterUsingDeployedContract() public {
    Counter counter = Counter(DeployedAddresses.Counter());
    uint expected = 0;
    Assert.equal(counter.counter(), expected, "default counter should be 0");
  }

  function testInitialCounterWithNewCounter() public {
    Counter counter = new Counter();
    uint expected = 0;
    Assert.equal(counter.counter(), expected, "default counter should be 0");
  }

}
