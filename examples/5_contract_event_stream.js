const { ethers, JsonRpcProvider } = require("ethers");

const INFURA_ID = '422aef5d62b04755929ce2589d2f54e2'
const provider = new JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",

    "event Transfer(address indexed from, address indexed to, uint amount)"
];

const address = '0x3d9ec341f38AA8BA66bf2Bc6d3f4fb16d468B624'
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    console.log(contract)
    // const block = await provider.getBlockNumber()

    // const transferEvents = await contract.queryFilter('Transfer', block - 1, block)
    // console.log(transferEvents)
}

main()