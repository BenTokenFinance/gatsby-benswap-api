import Web3 from "web3";

const BSC_NODE_RPC = [
  "https://go.getblock.io/62d5fb3e97ef45d2a89b80db3be41929/"
];

const BSC_ARCHIVE_NODE_RPC = [
  "https://bsc-private-dataseed1.nariox.org/",
  "https://bsc-private-dataseed3.nariox.org/",
  "https://bsc-private-dataseed4.nariox.org/",
  "https://bsc-private-dataseed5.nariox.org/",
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
