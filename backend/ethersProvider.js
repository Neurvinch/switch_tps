const {ethers} = require("ethers")
require("dotenv").config();

// const ABI = require("../switch-pay/src/contracts/StreamPay.json")

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY,provider);

const contractABI = [
    "function createStream(address recipient, uint256 ratePerSecond, uint256 duration) external payable",
  "function withdraw(uint256 streamId) external",
  "event StreamCreated(uint256 streamId, address sender, address recipient, uint256 rate)",
  "event Withdraw(uint256 streamId, uint256 amount)"
];




  
