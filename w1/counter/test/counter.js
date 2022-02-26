const Counter = artifacts.require("Counter");

contract('Counter', (accounts) => {
  it('默认的计数器应该等于0', async () => {
    const counterInstance = await Counter.deployed();
    const defaultCounert = (await counterInstance.counter.call()).toNumber();
    assert.equal(0, defaultCounert, "默认计数器不等于0"); 
  });
  it('count函数逻辑是否正确', async () => {
    const account = accounts[0];
    const counterInstance = await Counter.deployed();
    const counterBefor = (await counterInstance.counter.call()).toNumber();
    await counterInstance.count({ from: account });
    const counterAfter = (await counterInstance.counter.call()).toNumber();
    assert.equal(counterBefor+1, counterAfter, "count步长不等于1或者溢出"); 
  });
});
