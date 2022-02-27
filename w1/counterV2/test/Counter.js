const { expect } = require("chai");

describe("Counter contract", function () {

  let Counter;
  let hardhatCounter;

  beforeEach(async function () {
    Counter = await ethers.getContractFactory("Counter");
    hardhatCounter = await Counter.deploy();
  });

  describe("Deployment", function () {

    it("Should set the right default value", async function () {
      expect(await hardhatCounter.counter()).to.equal(0);
    });
  });

  describe("Transactions", function () {
    it("Should add one after you call count", async function () {
      const countBefor = (await hardhatCounter.counter()).toNumber();
      await hardhatCounter.count();
      const countAfter = (await hardhatCounter.counter()).toNumber();

      expect(countBefor + 1).to.equal(countAfter);
    });

    it("Should be correct the add method", async function () {
      const addBefor = (await hardhatCounter.counter()).toNumber();
      const addNum = 100;
      await hardhatCounter.add(addNum);
      const addAfter = (await hardhatCounter.counter()).toNumber();

      expect(addBefor + addNum).to.equal(addAfter);
    });

  });
});