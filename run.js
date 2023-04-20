const { ethers } = require("ethers");

const INFURA_ID = '422aef5d62b04755929ce2589d2f54e2'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)
const address = '0x3d9ec341f38AA8BA66bf2Bc6d3f4fb16d468B624'

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
];
const contract = new ethers.Contract(address, ERC20_ABI, provider)


const main = async () => {
    const xx = await contract.populateTransaction()
    console.log(xx)
    // const balance = await provider.getBalance(address)
    // console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()
