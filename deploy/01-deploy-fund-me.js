const { networkConfig } = require("../helper-hardhat-config");
const { network } = require("hardhat");

// hre = hardhat runtime environment
module.exports = async (hre) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  // const ethUsdPriceFeedAddress = networkConfig[chainId][ethUsdPriceFeed];

  await deploy("FundMe", {
    from: deployer,
    args: [],
    log: true,
  });
};
