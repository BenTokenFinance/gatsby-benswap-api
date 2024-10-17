import Web3 from "web3";

const BSC_NODE_RPC = [
  "https://rpc.ankr.com/bsc/3e2f2ba3bd16222a04dd42e1662458647bcdadefaec664149d20438292db76c8"
];

const BSC_ARCHIVE_NODE_RPC = [
  "https://rpc.ankr.com/bsc/3e2f2ba3bd16222a04dd42e1662458647bcdadefaec664149d20438292db76c8",
];

export const getWeb3 = (archive = false): Web3 => {
  const provider: string = archive
    ? BSC_ARCHIVE_NODE_RPC[Math.floor(Math.random() * BSC_ARCHIVE_NODE_RPC.length)]
    : BSC_NODE_RPC[Math.floor(Math.random() * BSC_NODE_RPC.length)];

  return new Web3(new Web3.providers.HttpProvider(provider, { timeout: 30000 }));
};

export const getContract = (abi: any, address: string, archive = false) => {
  const web3: Web3 = getWeb3(archive);

  return new web3.eth.Contract(abi, address);
};

export const getLatestBlock = async (archive = false) => {
  const web3: Web3 = getWeb3(false);

  return web3.eth.getBlockNumber();
};
