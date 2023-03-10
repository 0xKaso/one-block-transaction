const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Lock", function () {
  async function Contracts() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Vault = await ethers.getContractFactory("Vault");
    const vault = await Vault.deploy();

    const Multicall = await ethers.getContractFactory("Multicall");
    const multicall = await Multicall.deploy();

    return { vault, multicall, owner, otherAccount };
  }

  it("deploy success", async function () {
    const { vault, multicall } = await loadFixture(Contracts);

    console.log("🚀 ~ file: Lock.js:25 ~ multicall:", multicall.address);
    console.log("🚀 ~ file: Lock.js:25 ~ vault:", vault.address);
  });
});
