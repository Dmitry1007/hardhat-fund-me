const { assert, expect } = require("chai");
const { deployments, ethers } = require("hardhat");

describe("FundMe", async function () {
  let fundMe;
  let deployer;
  let mockV3Aggregator;
  beforeEach(async function () {
    // deploy FundMe contract using hardhat-deploy
    // const accounts = await ethers.getSigners();
    // const accountZero = accounts[0];
    deployer = (await getNamedAccounts()).deployer;
    await deployments.fixture(["all"]);
    fundMe = await ethers.getContract("FundMe", deployer);
    mockV3Aggregator = await ethers.getContract("MockV3Aggregator", deployer);
  });

  describe("constructor", async function () {
    it("should set the aggregator address correctly", async function () {
      const response = await fundMe.getPriceFeed();
      assert.equal(response, mockV3Aggregator.address);
    });
  });

  describe("fund", async function () {
    it("Fails if you don't send enough ETH", async function () {
      await expect(fundMe.fund()).to.be.reverted;
    });
  });
});
