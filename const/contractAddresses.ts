/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { BitindiTestnet } from "@thirdweb-dev/chains";
export const NETWORK = BitindiTestnet;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0xa7A78394B57e6eE23802407c680b31f63074E2BC";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0xAdACE01cf30F5e9Cc106Ea1BA6545d328cEc45A0";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use testnet.bitindiscan to view transactions on the Bitindi testnet.
export const ETHERSCAN_URL = "https://testnet.bitindiscan.com";
