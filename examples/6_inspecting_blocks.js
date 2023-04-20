const { ethers, JsonRpcProvider } = require("ethers");

const INFURA_ID = '422aef5d62b04755929ce2589d2f54e2'
const provider = new JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const main = async () => {
    const block = await provider.getBlockNumber()

    console.log(`\nBlock Number: ${block}\n`)

    const blockInfo = await provider.getBlock(block)

    console.log(blockInfo)

    const { transactions } = await provider.getBlockWithTransactions(block)
    console.log(transactions)
}

main()