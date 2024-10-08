import { ChainId, Token } from "@pancakeswap-libs/sdk";

// BEP-20 addresses.
export const CAKE = "0x8173dDa13Fd405e5BcA84Bd7F64e58cAF4810A32";
export const WBNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
export const DEAD = "0x000000000000000000000000000000000000dEaD";
export const BLACKHOLE = "0x0000000000000000000000000000000000000000";

// Contract addresses.
export const CAKE_BNB_FARM = "0x47Cdc99BC15951fA65D9b0a078d571aFBC332A9a";
export const MASTERCHEF_CONTRACT = "0x03245d87295cd0783E1f10a2EA54F9E80B726aF8";
export const LOTTERY_CONTRACT = "0xea1FA5cb5d85148fF2f8a4bdD0a23de477843c86";
export const TEMPLE_CONTRACT = "0x5e5C3AEC925Ae281DAFe8Ca5777E7Ab021De755c";
export const MULTICALL_CONTRACT = "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb";

// PancakeSwap SDK Token.
export const CAKE_TOKEN = new Token(ChainId.MAINNET, CAKE, 18);
export const WBNB_TOKEN = new Token(ChainId.MAINNET, WBNB, 18);
export const CAKE_BNB_TOKEN = new Token(ChainId.MAINNET, CAKE_BNB_FARM, 18);
