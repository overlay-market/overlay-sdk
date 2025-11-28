export const LBSCABI = [
  {
    "type": "function",
    "name": "stableToken",
    "inputs": [],
    "outputs": [{ "name": "", "type": "address", "internalType": "contract IERC20Upgradeable" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "ovlToken",
    "inputs": [],
    "outputs": [{ "name": "", "type": "address", "internalType": "contract IOverlayV1Token" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "shiva",
    "inputs": [],
    "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalActiveCollateral",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalOutstandingDebt",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "nextLoanId",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "loans",
    "inputs": [{ "name": "loanId", "type": "uint256", "internalType": "uint256" }],
    "outputs": [
      { "name": "borrower", "type": "address", "internalType": "address" },
      { "name": "collateral", "type": "uint256", "internalType": "uint256" },
      { "name": "debt", "type": "uint256", "internalType": "uint256" },
      { "name": "createdAt", "type": "uint48", "internalType": "uint48" },
      { "name": "settled", "type": "bool", "internalType": "bool" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "previewBorrow",
    "inputs": [{ "name": "stableAmount", "type": "uint256", "internalType": "uint256" }],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "currentPrice",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "lossRecipient",
    "inputs": [],
    "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "maxPriceAge",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "twapOracle",
    "inputs": [],
    "outputs": [{ "name": "", "type": "address", "internalType": "contract IPancakeSwapV3TWAPOracle" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "twapPeriod",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint32", "internalType": "uint32" }],
    "stateMutability": "view"
  },
  {
    "type": "event",
    "name": "LoanOpened",
    "inputs": [
      { "name": "loanId", "type": "uint256", "indexed": true, "internalType": "uint256" },
      { "name": "borrower", "type": "address", "indexed": true, "internalType": "address" },
      { "name": "stableAmount", "type": "uint256", "indexed": false, "internalType": "uint256" },
      { "name": "ovlAmount", "type": "uint256", "indexed": false, "internalType": "uint256" },
      { "name": "price", "type": "uint256", "indexed": false, "internalType": "uint256" }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "LoanSettled",
    "inputs": [
      { "name": "loanId", "type": "uint256", "indexed": true, "internalType": "uint256" },
      { "name": "borrower", "type": "address", "indexed": true, "internalType": "address" },
      { "name": "ovlRepaid", "type": "uint256", "indexed": false, "internalType": "uint256" },
      { "name": "collateralReturned", "type": "uint256", "indexed": false, "internalType": "uint256" },
      { "name": "collateralSeized", "type": "uint256", "indexed": false, "internalType": "uint256" }
    ],
    "anonymous": false
  }
] as const
