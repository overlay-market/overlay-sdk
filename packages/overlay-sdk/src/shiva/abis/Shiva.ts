export const ShivaABI = [
  { "type": "constructor", "inputs": [], "stateMutability": "nonpayable" },
  {
    "type": "function",
    "name": "BUILD_ON_BEHALF_OF_TYPEHASH",
    "inputs": [],
    "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "BUILD_SINGLE_ON_BEHALF_OF_TYPEHASH",
    "inputs": [],
    "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "ONE",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "UNWIND_ON_BEHALF_OF_TYPEHASH",
    "inputs": [],
    "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "addFactory",
    "inputs": [
      { "name": "_factory", "type": "address", "internalType": "contract IOverlayV1Factory" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "authorizedFactories",
    "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "outputs": [{ "name": "", "type": "address", "internalType": "contract IOverlayV1Factory" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "build",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct ShivaStructs.Build",
        "components": [
          { "name": "ovlMarket", "type": "address", "internalType": "contract IOverlayV1Market" },
          { "name": "brokerId", "type": "uint32", "internalType": "uint32" },
          { "name": "isLong", "type": "bool", "internalType": "bool" },
          { "name": "collateral", "type": "uint256", "internalType": "uint256" },
          { "name": "leverage", "type": "uint256", "internalType": "uint256" },
          { "name": "priceLimit", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "name": "onBehalfOf",
        "type": "tuple",
        "internalType": "struct ShivaStructs.OnBehalfOf",
        "components": [
          { "name": "owner", "type": "address", "internalType": "address" },
          { "name": "deadline", "type": "uint48", "internalType": "uint48" },
          { "name": "nonce", "type": "uint256", "internalType": "uint256" },
          { "name": "signature", "type": "bytes", "internalType": "bytes" }
        ]
      }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "build",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct ShivaStructs.Build",
        "components": [
          { "name": "ovlMarket", "type": "address", "internalType": "contract IOverlayV1Market" },
          { "name": "brokerId", "type": "uint32", "internalType": "uint32" },
          { "name": "isLong", "type": "bool", "internalType": "bool" },
          { "name": "collateral", "type": "uint256", "internalType": "uint256" },
          { "name": "leverage", "type": "uint256", "internalType": "uint256" },
          { "name": "priceLimit", "type": "uint256", "internalType": "uint256" }
        ]
      }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "buildSingle",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct ShivaStructs.BuildSingle",
        "components": [
          { "name": "ovlMarket", "type": "address", "internalType": "contract IOverlayV1Market" },
          { "name": "brokerId", "type": "uint32", "internalType": "uint32" },
          { "name": "unwindPriceLimit", "type": "uint256", "internalType": "uint256" },
          { "name": "buildPriceLimit", "type": "uint256", "internalType": "uint256" },
          { "name": "collateral", "type": "uint256", "internalType": "uint256" },
          { "name": "leverage", "type": "uint256", "internalType": "uint256" },
          { "name": "previousPositionId", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "name": "onBehalfOf",
        "type": "tuple",
        "internalType": "struct ShivaStructs.OnBehalfOf",
        "components": [
          { "name": "owner", "type": "address", "internalType": "address" },
          { "name": "deadline", "type": "uint48", "internalType": "uint48" },
          { "name": "nonce", "type": "uint256", "internalType": "uint256" },
          { "name": "signature", "type": "bytes", "internalType": "bytes" }
        ]
      }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "buildSingle",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct ShivaStructs.BuildSingle",
        "components": [
          { "name": "ovlMarket", "type": "address", "internalType": "contract IOverlayV1Market" },
          { "name": "brokerId", "type": "uint32", "internalType": "uint32" },
          { "name": "unwindPriceLimit", "type": "uint256", "internalType": "uint256" },
          { "name": "buildPriceLimit", "type": "uint256", "internalType": "uint256" },
          { "name": "collateral", "type": "uint256", "internalType": "uint256" },
          { "name": "leverage", "type": "uint256", "internalType": "uint256" },
          { "name": "previousPositionId", "type": "uint256", "internalType": "uint256" }
        ]
      }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "cancelNonce",
    "inputs": [{ "name": "nonce", "type": "uint256", "internalType": "uint256" }],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "emergencyWithdraw",
    "inputs": [
      { "name": "market", "type": "address", "internalType": "contract IOverlayV1Market" },
      { "name": "positionId", "type": "uint256", "internalType": "uint256" },
      { "name": "owner", "type": "address", "internalType": "address" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getDigest",
    "inputs": [{ "name": "structHash", "type": "bytes32", "internalType": "bytes32" }],
    "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "initialize",
    "inputs": [
      { "name": "_ovlToken", "type": "address", "internalType": "address" },
      { "name": "_vaultFactory", "type": "address", "internalType": "address" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "marketAllowance",
    "inputs": [{ "name": "", "type": "address", "internalType": "contract IOverlayV1Market" }],
    "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "overlayMarketLiquidateCallback",
    "inputs": [{ "name": "positionId", "type": "uint256", "internalType": "uint256" }],
    "outputs": [],
    "stateMutability": "nonpayable"
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
    "name": "pause",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "paused",
    "inputs": [],
    "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "positionOwners",
    "inputs": [
      { "name": "", "type": "address", "internalType": "contract IOverlayV1Market" },
      { "name": "", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "proxiableUUID",
    "inputs": [],
    "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "removeFactory",
    "inputs": [
      { "name": "_factory", "type": "address", "internalType": "contract IOverlayV1Factory" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "rewardVault",
    "inputs": [],
    "outputs": [
      { "name": "", "type": "address", "internalType": "contract IBerachainRewardsVault" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "stakingToken",
    "inputs": [],
    "outputs": [{ "name": "", "type": "address", "internalType": "contract StakingToken" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "unpause",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "unwind",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct ShivaStructs.Unwind",
        "components": [
          { "name": "ovlMarket", "type": "address", "internalType": "contract IOverlayV1Market" },
          { "name": "brokerId", "type": "uint32", "internalType": "uint32" },
          { "name": "positionId", "type": "uint256", "internalType": "uint256" },
          { "name": "fraction", "type": "uint256", "internalType": "uint256" },
          { "name": "priceLimit", "type": "uint256", "internalType": "uint256" }
        ]
      },
      {
        "name": "onBehalfOf",
        "type": "tuple",
        "internalType": "struct ShivaStructs.OnBehalfOf",
        "components": [
          { "name": "owner", "type": "address", "internalType": "address" },
          { "name": "deadline", "type": "uint48", "internalType": "uint48" },
          { "name": "nonce", "type": "uint256", "internalType": "uint256" },
          { "name": "signature", "type": "bytes", "internalType": "bytes" }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "unwind",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct ShivaStructs.Unwind",
        "components": [
          { "name": "ovlMarket", "type": "address", "internalType": "contract IOverlayV1Market" },
          { "name": "brokerId", "type": "uint32", "internalType": "uint32" },
          { "name": "positionId", "type": "uint256", "internalType": "uint256" },
          { "name": "fraction", "type": "uint256", "internalType": "uint256" },
          { "name": "priceLimit", "type": "uint256", "internalType": "uint256" }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "upgradeTo",
    "inputs": [{ "name": "newImplementation", "type": "address", "internalType": "address" }],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "upgradeToAndCall",
    "inputs": [
      { "name": "newImplementation", "type": "address", "internalType": "address" },
      { "name": "data", "type": "bytes", "internalType": "bytes" }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "usedNonces",
    "inputs": [
      { "name": "", "type": "address", "internalType": "address" },
      { "name": "", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
    "stateMutability": "view"
  },
  {
    "type": "event",
    "name": "AdminChanged",
    "inputs": [
      { "name": "previousAdmin", "type": "address", "indexed": false, "internalType": "address" },
      { "name": "newAdmin", "type": "address", "indexed": false, "internalType": "address" }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "BeaconUpgraded",
    "inputs": [
      { "name": "beacon", "type": "address", "indexed": true, "internalType": "address" }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "FactoryAdded",
    "inputs": [
      { "name": "factory", "type": "address", "indexed": true, "internalType": "address" }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "FactoryRemoved",
    "inputs": [
      { "name": "factory", "type": "address", "indexed": true, "internalType": "address" }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Initialized",
    "inputs": [{ "name": "version", "type": "uint8", "indexed": false, "internalType": "uint8" }],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "MarketValidated",
    "inputs": [
      { "name": "market", "type": "address", "indexed": true, "internalType": "address" }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "NonceCancelled",
    "inputs": [
      { "name": "owner", "type": "address", "indexed": true, "internalType": "address" },
      { "name": "nonce", "type": "uint256", "indexed": false, "internalType": "uint256" }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Paused",
    "inputs": [
      { "name": "account", "type": "address", "indexed": false, "internalType": "address" }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ShivaBuild",
    "inputs": [
      { "name": "owner", "type": "address", "indexed": true, "internalType": "address" },
      { "name": "market", "type": "address", "indexed": true, "internalType": "address" },
      { "name": "performer", "type": "address", "indexed": false, "internalType": "address" },
      { "name": "positionId", "type": "uint256", "indexed": false, "internalType": "uint256" },
      { "name": "collateral", "type": "uint256", "indexed": false, "internalType": "uint256" },
      { "name": "leverage", "type": "uint256", "indexed": false, "internalType": "uint256" },
      { "name": "brokerId", "type": "uint32", "indexed": false, "internalType": "uint32" },
      { "name": "isLong", "type": "bool", "indexed": false, "internalType": "bool" }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ShivaEmergencyWithdraw",
    "inputs": [
      { "name": "owner", "type": "address", "indexed": true, "internalType": "address" },
      { "name": "market", "type": "address", "indexed": true, "internalType": "address" },
      { "name": "performer", "type": "address", "indexed": false, "internalType": "address" },
      { "name": "positionId", "type": "uint256", "indexed": false, "internalType": "uint256" }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ShivaStake",
    "inputs": [
      { "name": "owner", "type": "address", "indexed": true, "internalType": "address" },
      { "name": "amount", "type": "uint256", "indexed": false, "internalType": "uint256" }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ShivaUnstake",
    "inputs": [
      { "name": "owner", "type": "address", "indexed": true, "internalType": "address" },
      { "name": "amount", "type": "uint256", "indexed": false, "internalType": "uint256" }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ShivaUnwind",
    "inputs": [
      { "name": "owner", "type": "address", "indexed": true, "internalType": "address" },
      { "name": "market", "type": "address", "indexed": true, "internalType": "address" },
      { "name": "performer", "type": "address", "indexed": false, "internalType": "address" },
      { "name": "positionId", "type": "uint256", "indexed": false, "internalType": "uint256" },
      { "name": "fraction", "type": "uint256", "indexed": false, "internalType": "uint256" },
      { "name": "brokerId", "type": "uint32", "indexed": false, "internalType": "uint32" }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Unpaused",
    "inputs": [
      { "name": "account", "type": "address", "indexed": false, "internalType": "address" }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Upgraded",
    "inputs": [
      { "name": "implementation", "type": "address", "indexed": true, "internalType": "address" }
    ],
    "anonymous": false
  },
  { "type": "error", "name": "ExpiredDeadline", "inputs": [] },
  { "type": "error", "name": "InvalidNonce", "inputs": [] },
  { "type": "error", "name": "InvalidSignature", "inputs": [] },
  { "type": "error", "name": "MarketNotValid", "inputs": [] },
  { "type": "error", "name": "NotPositionOwner", "inputs": [] }
] as const;