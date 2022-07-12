import WalletConnectProvider from "@walletconnect/web3-provider";

export const provider = new WalletConnectProvider({
  rpc: {
    80001: "https://rpc-mumbai.maticvigil.com/",
    // 80001: "https://matic-mumbai.chainstacklabs.com/",
  },
  clientMeta: {
    name: "meshaApp",
    description: "Biggest airdrop is here! World ID example app.",
    url: "https://github.com/worldcoin/world-id-example-airdrop-dapp",
    icons: [
      document.head.querySelector<HTMLLinkElement>("link[rel~=icon]")!.href,
    ],
  },
});

export const CONTRACT_ADDRESS = "0x0D973cB26E5723A3299aFa9f7bd57f8550D871eC";
  // process.env.WLD_CONTRACT_ADDRESS || // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
  

export const CONTRACT_ABI = [
  // Function to claim the airdrop
  "function claim (address receiver, uint256 root, uint256 nullifierHash, uint256[8] calldata proof)",
];
