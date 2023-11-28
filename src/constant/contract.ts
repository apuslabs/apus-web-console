export const MARKET_CONTRACT = {
	address: '0x4501A814e7CA2A4fA3D2281F23B8173d4bAF893C',
	abi: [
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "clients",
			"outputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "url",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "minFee",
					"type": "uint256"
				},
				{
					"internalType": "uint8",
					"name": "maxZkEvmInstance",
					"type": "uint8"
				},
				{
					"internalType": "uint8",
					"name": "curInstance",
					"type": "uint8"
				},
				{
					"internalType": "enum ApusData.ClientStatus",
					"name": "stat",
					"type": "uint8"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "clientID",
					"type": "uint256"
				}
			],
			"name": "dispatchTaskToClient",
			"outputs": [
				{
					"internalType": "bool",
					"name": "success",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getAvilableClientCount",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getClientCount",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getLowestN",
			"outputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"components": [
						{
							"internalType": "address",
							"name": "owner",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "id",
							"type": "uint256"
						},
						{
							"internalType": "string",
							"name": "url",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "minFee",
							"type": "uint256"
						},
						{
							"internalType": "uint8",
							"name": "maxZkEvmInstance",
							"type": "uint8"
						},
						{
							"internalType": "uint8",
							"name": "curInstance",
							"type": "uint8"
						},
						{
							"internalType": "enum ApusData.ClientStatus",
							"name": "stat",
							"type": "uint8"
						}
					],
					"internalType": "struct ApusData.ClientConfig",
					"name": "cf",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "clientID",
					"type": "uint256"
				}
			],
			"name": "getProverConfig",
			"outputs": [
				{
					"components": [
						{
							"internalType": "address",
							"name": "owner",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "id",
							"type": "uint256"
						},
						{
							"internalType": "string",
							"name": "url",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "minFee",
							"type": "uint256"
						},
						{
							"internalType": "uint8",
							"name": "maxZkEvmInstance",
							"type": "uint8"
						},
						{
							"internalType": "uint8",
							"name": "curInstance",
							"type": "uint8"
						},
						{
							"internalType": "enum ApusData.ClientStatus",
							"name": "stat",
							"type": "uint8"
						}
					],
					"internalType": "struct ApusData.ClientConfig",
					"name": "cf",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				}
			],
			"name": "getUserClients",
			"outputs": [
				{
					"components": [
						{
							"internalType": "address",
							"name": "owner",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "id",
							"type": "uint256"
						},
						{
							"internalType": "string",
							"name": "url",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "minFee",
							"type": "uint256"
						},
						{
							"internalType": "uint8",
							"name": "maxZkEvmInstance",
							"type": "uint8"
						},
						{
							"internalType": "uint8",
							"name": "curInstance",
							"type": "uint8"
						},
						{
							"internalType": "enum ApusData.ClientStatus",
							"name": "stat",
							"type": "uint8"
						}
					],
					"internalType": "struct ApusData.ClientConfig[]",
					"name": "",
					"type": "tuple[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"components": [
						{
							"internalType": "address",
							"name": "owner",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "id",
							"type": "uint256"
						},
						{
							"internalType": "string",
							"name": "url",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "minFee",
							"type": "uint256"
						},
						{
							"internalType": "uint8",
							"name": "maxZkEvmInstance",
							"type": "uint8"
						},
						{
							"internalType": "uint8",
							"name": "curInstance",
							"type": "uint8"
						},
						{
							"internalType": "enum ApusData.ClientStatus",
							"name": "stat",
							"type": "uint8"
						}
					],
					"internalType": "struct ApusData.ClientConfig",
					"name": "cf",
					"type": "tuple"
				}
			],
			"name": "joinMarket",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "marketCapacity",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "clientID",
					"type": "uint256"
				}
			],
			"name": "offlineClient",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "clientID",
					"type": "uint256"
				}
			],
			"name": "releaseTaskToClient",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_as",
					"type": "address"
				}
			],
			"name": "setTask",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	],
}

export const TOKEN_CONTRACT = {
	address: '0x032de9842f0508fBcC06f66Ab341Fa48c360eaD0',
	abi: [
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_initialAmount",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "_tokenName",
					"type": "string"
				},
				{
					"internalType": "uint8",
					"name": "_decimalUnits",
					"type": "uint8"
				},
				{
					"internalType": "string",
					"name": "_tokenSymbol",
					"type": "string"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "_owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "_spender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "Approval",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "_from",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "_to",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "Transfer",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_owner",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "_spender",
					"type": "address"
				}
			],
			"name": "allowance",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "remaining",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "allowed",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [
				{
					"internalType": "bool",
					"name": "success",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_owner",
					"type": "address"
				}
			],
			"name": "balanceOf",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "balance",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "balances",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "decimals",
			"outputs": [
				{
					"internalType": "uint8",
					"name": "",
					"type": "uint8"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getRewardEpoch",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "epoch",
					"type": "uint256"
				}
			],
			"name": "mint",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "mintPerYear",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "name",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_prover",
					"type": "address"
				}
			],
			"name": "reward",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_reward",
					"type": "uint256"
				}
			],
			"name": "setRewardPerTask",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "symbol",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "totalSupply",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "transfer",
			"outputs": [
				{
					"internalType": "bool",
					"name": "success",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_from",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "_to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [
				{
					"internalType": "bool",
					"name": "success",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
}

export const TASK_CONTRACT = {
	address: '0x6332856d390BA618faC75550bEE1814eD033666a',
	abi: [
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_marketAddr",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "_tokenAddr",
					"type": "address"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "enum ApusData.TaskType",
					"name": "_tp",
					"type": "uint8"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "taskId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "bytes",
					"name": "data",
					"type": "bytes"
				}
			],
			"name": "eventPostTask",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "taskID",
					"type": "uint256"
				}
			],
			"name": "assignTask",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "taskID",
					"type": "uint256"
				}
			],
			"name": "dispatchTaskToClient",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getAssignedTaskCount",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getAvgProofTime",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getAvgReward",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "prover",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "clientId",
					"type": "uint256"
				}
			],
			"name": "getClientTasks",
			"outputs": [
				{
					"components": [
						{
							"internalType": "uint256",
							"name": "id",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "clientId",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "uniqID",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "assigner",
							"type": "address"
						},
						{
							"internalType": "bytes",
							"name": "input",
							"type": "bytes"
						},
						{
							"internalType": "enum ApusData.TaskType",
							"name": "_tp",
							"type": "uint8"
						},
						{
							"internalType": "enum ApusData.TaskStatus",
							"name": "_stat",
							"type": "uint8"
						},
						{
							"internalType": "bytes",
							"name": "result",
							"type": "bytes"
						},
						{
							"components": [
								{
									"internalType": "address",
									"name": "token",
									"type": "address"
								},
								{
									"internalType": "uint256",
									"name": "amount",
									"type": "uint256"
								}
							],
							"internalType": "struct ApusData.rewardInfo",
							"name": "reward",
							"type": "tuple"
						},
						{
							"internalType": "uint64",
							"name": "expiry",
							"type": "uint64"
						},
						{
							"internalType": "uint256",
							"name": "assignTime",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "proveTime",
							"type": "uint256"
						}
					],
					"internalType": "struct ApusData.Task[]",
					"name": "",
					"type": "tuple[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "numDays",
					"type": "uint256"
				}
			],
			"name": "getDailyTaskCount",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "",
					"type": "uint256[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getLatestTaskId",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "prover",
					"type": "address"
				}
			],
			"name": "getProverTasks",
			"outputs": [
				{
					"components": [
						{
							"internalType": "uint256",
							"name": "id",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "clientId",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "uniqID",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "assigner",
							"type": "address"
						},
						{
							"internalType": "bytes",
							"name": "input",
							"type": "bytes"
						},
						{
							"internalType": "enum ApusData.TaskType",
							"name": "_tp",
							"type": "uint8"
						},
						{
							"internalType": "enum ApusData.TaskStatus",
							"name": "_stat",
							"type": "uint8"
						},
						{
							"internalType": "bytes",
							"name": "result",
							"type": "bytes"
						},
						{
							"components": [
								{
									"internalType": "address",
									"name": "token",
									"type": "address"
								},
								{
									"internalType": "uint256",
									"name": "amount",
									"type": "uint256"
								}
							],
							"internalType": "struct ApusData.rewardInfo",
							"name": "reward",
							"type": "tuple"
						},
						{
							"internalType": "uint64",
							"name": "expiry",
							"type": "uint64"
						},
						{
							"internalType": "uint256",
							"name": "assignTime",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "proveTime",
							"type": "uint256"
						}
					],
					"internalType": "struct ApusData.Task[]",
					"name": "",
					"type": "tuple[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "enum ApusData.TaskType",
					"name": "_tp",
					"type": "uint8"
				},
				{
					"internalType": "uint256",
					"name": "uniqID",
					"type": "uint256"
				}
			],
			"name": "getTask",
			"outputs": [
				{
					"components": [
						{
							"internalType": "uint256",
							"name": "id",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "clientId",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "uniqID",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "assigner",
							"type": "address"
						},
						{
							"internalType": "bytes",
							"name": "input",
							"type": "bytes"
						},
						{
							"internalType": "enum ApusData.TaskType",
							"name": "_tp",
							"type": "uint8"
						},
						{
							"internalType": "enum ApusData.TaskStatus",
							"name": "_stat",
							"type": "uint8"
						},
						{
							"internalType": "bytes",
							"name": "result",
							"type": "bytes"
						},
						{
							"components": [
								{
									"internalType": "address",
									"name": "token",
									"type": "address"
								},
								{
									"internalType": "uint256",
									"name": "amount",
									"type": "uint256"
								}
							],
							"internalType": "struct ApusData.rewardInfo",
							"name": "reward",
							"type": "tuple"
						},
						{
							"internalType": "uint64",
							"name": "expiry",
							"type": "uint64"
						},
						{
							"internalType": "uint256",
							"name": "assignTime",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "proveTime",
							"type": "uint256"
						}
					],
					"internalType": "struct ApusData.Task",
					"name": "",
					"type": "tuple"
				},
				{
					"components": [
						{
							"internalType": "address",
							"name": "owner",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "id",
							"type": "uint256"
						},
						{
							"internalType": "string",
							"name": "url",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "minFee",
							"type": "uint256"
						},
						{
							"internalType": "uint8",
							"name": "maxZkEvmInstance",
							"type": "uint8"
						},
						{
							"internalType": "uint8",
							"name": "curInstance",
							"type": "uint8"
						},
						{
							"internalType": "enum ApusData.ClientStatus",
							"name": "stat",
							"type": "uint8"
						}
					],
					"internalType": "struct ApusData.ClientConfig",
					"name": "",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getTaskCount",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "hasResource",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "enum ApusData.TaskType",
					"name": "_tp",
					"type": "uint8"
				},
				{
					"internalType": "uint256",
					"name": "uniqID",
					"type": "uint256"
				},
				{
					"internalType": "bytes",
					"name": "input",
					"type": "bytes"
				},
				{
					"internalType": "uint64",
					"name": "expiry",
					"type": "uint64"
				},
				{
					"components": [
						{
							"internalType": "address",
							"name": "token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "amount",
							"type": "uint256"
						}
					],
					"internalType": "struct ApusData.rewardInfo",
					"name": "ri",
					"type": "tuple"
				}
			],
			"name": "postTask",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "enum ApusData.TaskType",
					"name": "_tp",
					"type": "uint8"
				},
				{
					"internalType": "uint256",
					"name": "uniqID",
					"type": "uint256"
				},
				{
					"internalType": "bytes",
					"name": "result",
					"type": "bytes"
				}
			],
			"name": "submitTask",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "tasks",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "clientId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "uniqID",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "assigner",
					"type": "address"
				},
				{
					"internalType": "bytes",
					"name": "input",
					"type": "bytes"
				},
				{
					"internalType": "enum ApusData.TaskType",
					"name": "_tp",
					"type": "uint8"
				},
				{
					"internalType": "enum ApusData.TaskStatus",
					"name": "_stat",
					"type": "uint8"
				},
				{
					"internalType": "bytes",
					"name": "result",
					"type": "bytes"
				},
				{
					"components": [
						{
							"internalType": "address",
							"name": "token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "amount",
							"type": "uint256"
						}
					],
					"internalType": "struct ApusData.rewardInfo",
					"name": "reward",
					"type": "tuple"
				},
				{
					"internalType": "uint64",
					"name": "expiry",
					"type": "uint64"
				},
				{
					"internalType": "uint256",
					"name": "assignTime",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "proveTime",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]
}