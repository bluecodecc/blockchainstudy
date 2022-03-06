const { expect } = require("chai");

describe("测试Score合约", function() {

    let teacher;
    let score;

    beforeEach(async function() {
        let Teacher = await ethers.getContractFactory("Teacher");
        teacher = await Teacher.deploy();
        console.log("Teacher合约地址", teacher.address);
        let Score = await ethers.getContractFactory("Score");
        score = await Score.deploy(teacher.address);
        console.log("Score合约地址", score.address);
    });

    describe("部署", function() {

        it("score合约的teacher应该是Teacher地址", async function() {
            expect(await score.teacher()).to.equal(teacher.address);
        });
    });

    describe("交易", function() {
        it("teacher可以修改分数", async function() {
            const [account] = await ethers.getSigners();
            let add = 50;
            let defaultScore = await (score.scores(account.address));
            await teacher.updateScore(score.address, account.address, add);
            let updatedScore = await (score.scores(account.address));
            expect(defaultScore + add).to.equal(updatedScore);
        });
        // it("非teacher不可以修改分数", async function() {
        //     const [account] = await ethers.getSigners();
        //     let add = 50;
        //     let defaultScore = await (score.scores(account.address));
        //     await score.updateScore(account.address, add);
        //     let updatedScore = await (score.scores(account.address));
        //     expect(defaultScore + add).to.equal(updatedScore);
        // });
        // it("分数不可以超过100", async function() {
        //     const [account] = await ethers.getSigners();
        //     let add = 51;
        //     let defaultScore = await (score.scores(account.address));
        //     await teacher.updateScore(score.address, account.address, add);
        //     let updatedScore = await (score.scores(account.address));
        //     await teacher.updateScore(score.address, account.address, add);
        //     updatedScore = await (score.scores(account.address));
        //     expect(defaultScore + 2 * add).to.equal(updatedScore);
        // });
    });
});