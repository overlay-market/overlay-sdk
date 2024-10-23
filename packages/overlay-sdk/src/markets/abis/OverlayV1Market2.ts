export const OverlayV1Market2ABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oi',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'debt',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isLong',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oiAfterBuild',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oiSharesAfterBuild',
        type: 'uint256',
      },
    ],
    name: 'Build',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newDpUpperLimit',
        type: 'uint256',
      },
    ],
    name: 'CacheRiskCalc',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'collateral',
        type: 'uint256',
      },
    ],
    name: 'EmergencyWithdraw',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'mint',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oiAfterLiquidate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oiSharesAfterLiquidate',
        type: 'uint256',
      },
    ],
    name: 'Liquidate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fraction',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'mint',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oiAfterUnwind',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oiSharesAfterUnwind',
        type: 'uint256',
      },
    ],
    name: 'Unwind',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oiLong',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oiShort',
        type: 'uint256',
      },
    ],
    name: 'Update',
    type: 'event',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'microWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'macroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOverMicroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOverMacroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOneMacroWindowAgo',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'reserveOverMicroWindow',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasReserve',
            type: 'bool',
          },
        ],
        internalType: 'struct Oracle.Data',
        name: 'data',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'volume',
        type: 'uint256',
      },
    ],
    name: 'ask',
    outputs: [
      {
        internalType: 'uint256',
        name: 'ask_',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'microWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'macroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOverMicroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOverMacroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOneMacroWindowAgo',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'reserveOverMicroWindow',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasReserve',
            type: 'bool',
          },
        ],
        internalType: 'struct Oracle.Data',
        name: 'data',
        type: 'tuple',
      },
    ],
    name: 'backRunBound',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'microWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'macroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOverMicroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOverMacroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOneMacroWindowAgo',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'reserveOverMicroWindow',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasReserve',
            type: 'bool',
          },
        ],
        internalType: 'struct Oracle.Data',
        name: 'data',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'volume',
        type: 'uint256',
      },
    ],
    name: 'bid',
    outputs: [
      {
        internalType: 'uint256',
        name: 'bid_',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'collateral',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'leverage',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isLong',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'priceLimit',
        type: 'uint256',
      },
    ],
    name: 'build',
    outputs: [
      {
        internalType: 'uint256',
        name: 'positionId_',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'microWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'macroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOverMicroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOverMacroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOneMacroWindowAgo',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'reserveOverMicroWindow',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasReserve',
            type: 'bool',
          },
        ],
        internalType: 'struct Oracle.Data',
        name: 'data',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'cap',
        type: 'uint256',
      },
    ],
    name: 'capNotionalAdjustedForBounds',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'cap',
        type: 'uint256',
      },
    ],
    name: 'capOiAdjustedForCircuitBreaker',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint32',
            name: 'timestamp',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'window',
            type: 'uint32',
          },
          {
            internalType: 'int192',
            name: 'accumulator',
            type: 'int192',
          },
        ],
        internalType: 'struct Roller.Snapshot',
        name: 'snapshot',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'cap',
        type: 'uint256',
      },
    ],
    name: 'circuitBreaker',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'microWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'macroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOverMicroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOverMacroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOneMacroWindowAgo',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'reserveOverMicroWindow',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasReserve',
            type: 'bool',
          },
        ],
        internalType: 'struct Oracle.Data',
        name: 'data',
        type: 'tuple',
      },
    ],
    name: 'dataIsValid',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'dpUpperLimit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
    ],
    name: 'emergencyWithdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'factory',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'feed',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'microWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'macroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOverMicroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOverMacroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOneMacroWindowAgo',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'reserveOverMicroWindow',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasReserve',
            type: 'bool',
          },
        ],
        internalType: 'struct Oracle.Data',
        name: 'data',
        type: 'tuple',
      },
    ],
    name: 'frontRunBound',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[15]',
        name: '_params',
        type: 'uint256[15]',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isShutdown',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
    ],
    name: 'liquidate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'oiOverweight',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'oiUnderweight',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'timeElapsed',
        type: 'uint256',
      },
    ],
    name: 'oiAfterFunding',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'notional',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'midPrice',
        type: 'uint256',
      },
    ],
    name: 'oiFromNotional',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'oiLong',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'oiLongShares',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'oiShort',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'oiShortShares',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ov',
    outputs: [
      {
        internalType: 'contract IOverlayV1Token',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'params',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'positions',
    outputs: [
      {
        internalType: 'uint96',
        name: 'notionalInitial',
        type: 'uint96',
      },
      {
        internalType: 'uint96',
        name: 'debtInitial',
        type: 'uint96',
      },
      {
        internalType: 'int24',
        name: 'midTick',
        type: 'int24',
      },
      {
        internalType: 'int24',
        name: 'entryTick',
        type: 'int24',
      },
      {
        internalType: 'bool',
        name: 'isLong',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'liquidated',
        type: 'bool',
      },
      {
        internalType: 'uint240',
        name: 'oiShares',
        type: 'uint240',
      },
      {
        internalType: 'uint16',
        name: 'fractionRemaining',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'enum Risk.Parameters',
        name: 'name',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'setRiskParam',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'shutdown',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'snapshotMinted',
    outputs: [
      {
        internalType: 'uint32',
        name: 'timestamp',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'window',
        type: 'uint32',
      },
      {
        internalType: 'int192',
        name: 'accumulator',
        type: 'int192',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'snapshotVolumeAsk',
    outputs: [
      {
        internalType: 'uint32',
        name: 'timestamp',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'window',
        type: 'uint32',
      },
      {
        internalType: 'int192',
        name: 'accumulator',
        type: 'int192',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'snapshotVolumeBid',
    outputs: [
      {
        internalType: 'uint32',
        name: 'timestamp',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'window',
        type: 'uint32',
      },
      {
        internalType: 'int192',
        name: 'accumulator',
        type: 'int192',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'timestampUpdateLast',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'fraction',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'priceLimit',
        type: 'uint256',
      },
    ],
    name: 'unwind',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'update',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'microWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'macroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOverMicroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOverMacroWindow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'priceOneMacroWindowAgo',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'reserveOverMicroWindow',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasReserve',
            type: 'bool',
          },
        ],
        internalType: 'struct Oracle.Data',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;