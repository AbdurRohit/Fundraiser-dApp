async function switchToHederaNetworkethers(ethers) {
  const network = "testnet";


console.log(`\n=======================================`);
const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

console.log(`- Switching network to the Hedera ${network}`);
let chainId;
if (network === "testnet") {
chainId = "0x128";
} else if (network === "previewnet") {
chainId = "0x129";
} else {
chainId = "0x127";
}

await window.ethereum.request({
method: "wallet_addEthereumChain",
params: [
  {
    chainName: `Hedera ${network}`,
    chainId: chainId,
    nativeCurrency: { name: "HBAR", symbol: "hh", decimals: 18 },
    rpcUrls: [`https://${network}.hashio.io/api`],
    blockExplorerUrls: [`https://hashscan.io/${network}/`],
  },
],
});
console.log("- Switched ✅");

console.log("- Connecting to wallet");
let selectedAccount;
await provider
.send("eth_requestAccounts", [])
.then((accounts) => {
  selectedAccount = accounts[0];
  console.log(`- Selected account: ${selectedAccount} `);
})
.catch((connectError) => {
  console.log(`- ${connectError.message.toString()}`);
  return;
});

return [selectedAccount, provider, network];
}

export {switchToHederaNetworkethers}
