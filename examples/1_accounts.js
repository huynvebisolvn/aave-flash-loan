const { ethers, JsonRpcProvider } = require("ethers");

const INFURA_ID = '422aef5d62b04755929ce2589d2f54e2'
const provider = new JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const address = '0x3d9ec341f38AA8BA66bf2Bc6d3f4fb16d468B624'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${balance} ETH\n`)
}

main()

