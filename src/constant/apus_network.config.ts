export const configRes = {
    "code": 200,
    "data": {
        "contract_info": [
            {
                "abi": [
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "constant": true,
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "register",
                        "outputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "addr",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "balance",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "providerBlockedFunds",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "recipientBlockedFunds",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "string",
                                        "name": "info",
                                        "type": "string"
                                    }
                                ],
                                "internalType": "struct AccountFactory.accountInfo",
                                "name": "accountinfo",
                                "type": "tuple"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "withdraw",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "cancellation",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "_info",
                                "type": "string"
                            }
                        ],
                        "name": "setProviderInfo",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "user",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "_stakeAmount",
                                "type": "uint256"
                            }
                        ],
                        "name": "onlineBlockedFund",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "user",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "_stakeAmount",
                                "type": "uint256"
                            }
                        ],
                        "name": "offlineUnBlockedFund",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "user",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "_stakeAmount",
                                "type": "uint256"
                            }
                        ],
                        "name": "rentBlockedFund",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "_recipient",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "_provider",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "_stakeAmount",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "_unBlockedAmount",
                                "type": "uint256"
                            }
                        ],
                        "name": "rentUnBlockedFund",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "stake",
                        "outputs": [],
                        "payable": true,
                        "stateMutability": "payable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "unstake",
                        "outputs": [],
                        "payable": true,
                        "stateMutability": "payable",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "_user",
                                "type": "address"
                            }
                        ],
                        "name": "isRegister",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "_addr",
                                "type": "address"
                            }
                        ],
                        "name": "getAccount",
                        "outputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "addr",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "balance",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "providerBlockedFunds",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "recipientBlockedFunds",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "string",
                                        "name": "info",
                                        "type": "string"
                                    }
                                ],
                                "internalType": "struct AccountFactory.accountInfo",
                                "name": "",
                                "type": "tuple"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "contract_address": "0x4aE0722d606eCb988F1720Fa6eA218850d705F53",
                "name": "account_contract"
            },
            {
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "_accountFactoryAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "constant": true,
                        "inputs": [],
                        "name": "account_contract",
                        "outputs": [
                            {
                                "internalType": "contract AccountFactory",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "a",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "b",
                                "type": "string"
                            }
                        ],
                        "name": "concatenateStrings",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "devices",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "id",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "enum DeviceStatus",
                                "name": "status",
                                "type": "uint8"
                            },
                            {
                                "internalType": "string",
                                "name": "machineId",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "serverInfo",
                                "type": "string"
                            },
                            {
                                "components": [
                                    {
                                        "internalType": "uint256",
                                        "name": "serverPrice",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "storagePrice",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "upbandWidth",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "downbandWidth",
                                        "type": "uint256"
                                    }
                                ],
                                "internalType": "struct Price",
                                "name": "price",
                                "type": "tuple"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "_deviceId",
                                "type": "uint256"
                            }
                        ],
                        "name": "getDevice",
                        "outputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "uint256",
                                        "name": "id",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "owner",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "enum DeviceStatus",
                                        "name": "status",
                                        "type": "uint8"
                                    },
                                    {
                                        "internalType": "string",
                                        "name": "machineId",
                                        "type": "string"
                                    },
                                    {
                                        "internalType": "string",
                                        "name": "serverInfo",
                                        "type": "string"
                                    },
                                    {
                                        "components": [
                                            {
                                                "internalType": "uint256",
                                                "name": "serverPrice",
                                                "type": "uint256"
                                            },
                                            {
                                                "internalType": "uint256",
                                                "name": "storagePrice",
                                                "type": "uint256"
                                            },
                                            {
                                                "internalType": "uint256",
                                                "name": "upbandWidth",
                                                "type": "uint256"
                                            },
                                            {
                                                "internalType": "uint256",
                                                "name": "downbandWidth",
                                                "type": "uint256"
                                            }
                                        ],
                                        "internalType": "struct Price",
                                        "name": "price",
                                        "type": "tuple"
                                    }
                                ],
                                "internalType": "struct deviceInfo",
                                "name": "",
                                "type": "tuple"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "_deviceId",
                                "type": "uint256"
                            }
                        ],
                        "name": "getLeaseByDeviceId",
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
                                        "name": "leaseId",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "startTime",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "expireTime",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "deviceId",
                                        "type": "uint256"
                                    }
                                ],
                                "internalType": "struct leaseInfo",
                                "name": "",
                                "type": "tuple"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "_leaseId",
                                "type": "uint256"
                            }
                        ],
                        "name": "getProviderBillingByLeaseId",
                        "outputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "user",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "id",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "leaseId",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "providerBlockedFund",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "recipientBlockedFunds",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "amount",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "enum billingStatus",
                                        "name": "status",
                                        "type": "uint8"
                                    },
                                    {
                                        "internalType": "enum billingType",
                                        "name": "billType",
                                        "type": "uint8"
                                    }
                                ],
                                "internalType": "struct billingInfo",
                                "name": "",
                                "type": "tuple"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "_leaseId",
                                "type": "uint256"
                            }
                        ],
                        "name": "getRecipientBillingByLeaseId",
                        "outputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "user",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "id",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "leaseId",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "providerBlockedFund",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "recipientBlockedFunds",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "amount",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "enum billingStatus",
                                        "name": "status",
                                        "type": "uint8"
                                    },
                                    {
                                        "internalType": "enum billingType",
                                        "name": "billType",
                                        "type": "uint8"
                                    }
                                ],
                                "internalType": "struct billingInfo",
                                "name": "",
                                "type": "tuple"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "leaseProvider",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "leaseId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "startTime",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "expireTime",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "deviceId",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "leaseRecipient",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "leaseId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "startTime",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "expireTime",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "deviceId",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [],
                        "name": "platformSharingRatio",
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
                        "constant": true,
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "providerBillings",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "user",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "id",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "leaseId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "providerBlockedFund",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "recipientBlockedFunds",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            },
                            {
                                "internalType": "enum billingStatus",
                                "name": "status",
                                "type": "uint8"
                            },
                            {
                                "internalType": "enum billingType",
                                "name": "billType",
                                "type": "uint8"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "_startTime",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "_endTime",
                                "type": "uint256"
                            },
                            {
                                "components": [
                                    {
                                        "internalType": "uint256",
                                        "name": "serverPrice",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "storagePrice",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "upbandWidth",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "downbandWidth",
                                        "type": "uint256"
                                    }
                                ],
                                "internalType": "struct Price",
                                "name": "_price",
                                "type": "tuple"
                            }
                        ],
                        "name": "providerStakeCalcute",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "recipientBillings",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "user",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "id",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "leaseId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "providerBlockedFund",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "recipientBlockedFunds",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            },
                            {
                                "internalType": "enum billingStatus",
                                "name": "status",
                                "type": "uint8"
                            },
                            {
                                "internalType": "enum billingType",
                                "name": "billType",
                                "type": "uint8"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "_startTime",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "_endTime",
                                "type": "uint256"
                            },
                            {
                                "components": [
                                    {
                                        "internalType": "uint256",
                                        "name": "serverPrice",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "storagePrice",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "upbandWidth",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "downbandWidth",
                                        "type": "uint256"
                                    }
                                ],
                                "internalType": "struct Price",
                                "name": "_price",
                                "type": "tuple"
                            }
                        ],
                        "name": "recipientStakeCalcute",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "_leaseId",
                                "type": "uint256"
                            }
                        ],
                        "name": "terminateLease",
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
                                        "name": "leaseId",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "startTime",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "expireTime",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "deviceId",
                                        "type": "uint256"
                                    }
                                ],
                                "internalType": "struct leaseInfo",
                                "name": "",
                                "type": "tuple"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "number",
                                "type": "uint256"
                            }
                        ],
                        "name": "uintToString",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "_deviceId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "_endTime",
                                "type": "uint256"
                            }
                        ],
                        "name": "rentServer",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "_leaseId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "_endTime",
                                "type": "uint256"
                            }
                        ],
                        "name": "RenewalLeaseServer",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "_leaseId",
                                "type": "uint256"
                            }
                        ],
                        "name": "terminateInstance",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "_machineId",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "_serverInfo",
                                "type": "string"
                            },
                            {
                                "components": [
                                    {
                                        "internalType": "uint256",
                                        "name": "serverPrice",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "storagePrice",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "upbandWidth",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "downbandWidth",
                                        "type": "uint256"
                                    }
                                ],
                                "internalType": "struct Price",
                                "name": "_price",
                                "type": "tuple"
                            },
                            {
                                "internalType": "uint256",
                                "name": "_startTime",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "_endTime",
                                "type": "uint256"
                            }
                        ],
                        "name": "onlineServer",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "_deviceId",
                                "type": "uint256"
                            }
                        ],
                        "name": "offlineServer",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "_limit",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "_offset",
                                "type": "uint256"
                            }
                        ],
                        "name": "listDevices",
                        "outputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "uint256",
                                        "name": "id",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "owner",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "enum DeviceStatus",
                                        "name": "status",
                                        "type": "uint8"
                                    },
                                    {
                                        "internalType": "string",
                                        "name": "machineId",
                                        "type": "string"
                                    },
                                    {
                                        "internalType": "string",
                                        "name": "serverInfo",
                                        "type": "string"
                                    },
                                    {
                                        "components": [
                                            {
                                                "internalType": "uint256",
                                                "name": "serverPrice",
                                                "type": "uint256"
                                            },
                                            {
                                                "internalType": "uint256",
                                                "name": "storagePrice",
                                                "type": "uint256"
                                            },
                                            {
                                                "internalType": "uint256",
                                                "name": "upbandWidth",
                                                "type": "uint256"
                                            },
                                            {
                                                "internalType": "uint256",
                                                "name": "downbandWidth",
                                                "type": "uint256"
                                            }
                                        ],
                                        "internalType": "struct Price",
                                        "name": "price",
                                        "type": "tuple"
                                    }
                                ],
                                "internalType": "struct deviceInfo[]",
                                "name": "_allDevices",
                                "type": "tuple[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "_provider",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "_limit",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "_offset",
                                "type": "uint256"
                            }
                        ],
                        "name": "listOwnDevices",
                        "outputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "uint256",
                                        "name": "id",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "owner",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "enum DeviceStatus",
                                        "name": "status",
                                        "type": "uint8"
                                    },
                                    {
                                        "internalType": "string",
                                        "name": "machineId",
                                        "type": "string"
                                    },
                                    {
                                        "internalType": "string",
                                        "name": "serverInfo",
                                        "type": "string"
                                    },
                                    {
                                        "components": [
                                            {
                                                "internalType": "uint256",
                                                "name": "serverPrice",
                                                "type": "uint256"
                                            },
                                            {
                                                "internalType": "uint256",
                                                "name": "storagePrice",
                                                "type": "uint256"
                                            },
                                            {
                                                "internalType": "uint256",
                                                "name": "upbandWidth",
                                                "type": "uint256"
                                            },
                                            {
                                                "internalType": "uint256",
                                                "name": "downbandWidth",
                                                "type": "uint256"
                                            }
                                        ],
                                        "internalType": "struct Price",
                                        "name": "price",
                                        "type": "tuple"
                                    }
                                ],
                                "internalType": "struct deviceInfo[]",
                                "name": "_ownDevices",
                                "type": "tuple[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [],
                        "name": "getAll",
                        "outputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "user",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "id",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "leaseId",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "providerBlockedFund",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "recipientBlockedFunds",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "amount",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "enum billingStatus",
                                        "name": "status",
                                        "type": "uint8"
                                    },
                                    {
                                        "internalType": "enum billingType",
                                        "name": "billType",
                                        "type": "uint8"
                                    }
                                ],
                                "internalType": "struct billingInfo[]",
                                "name": "",
                                "type": "tuple[]"
                            },
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "user",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "id",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "leaseId",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "providerBlockedFund",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "recipientBlockedFunds",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "amount",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "enum billingStatus",
                                        "name": "status",
                                        "type": "uint8"
                                    },
                                    {
                                        "internalType": "enum billingType",
                                        "name": "billType",
                                        "type": "uint8"
                                    }
                                ],
                                "internalType": "struct billingInfo[]",
                                "name": "",
                                "type": "tuple[]"
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
                                        "name": "leaseId",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "startTime",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "expireTime",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "deviceId",
                                        "type": "uint256"
                                    }
                                ],
                                "internalType": "struct leaseInfo[]",
                                "name": "",
                                "type": "tuple[]"
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
                                        "name": "leaseId",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "startTime",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "expireTime",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "deviceId",
                                        "type": "uint256"
                                    }
                                ],
                                "internalType": "struct leaseInfo[]",
                                "name": "",
                                "type": "tuple[]"
                            },
                            {
                                "components": [
                                    {
                                        "internalType": "uint256",
                                        "name": "id",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "owner",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "enum DeviceStatus",
                                        "name": "status",
                                        "type": "uint8"
                                    },
                                    {
                                        "internalType": "string",
                                        "name": "machineId",
                                        "type": "string"
                                    },
                                    {
                                        "internalType": "string",
                                        "name": "serverInfo",
                                        "type": "string"
                                    },
                                    {
                                        "components": [
                                            {
                                                "internalType": "uint256",
                                                "name": "serverPrice",
                                                "type": "uint256"
                                            },
                                            {
                                                "internalType": "uint256",
                                                "name": "storagePrice",
                                                "type": "uint256"
                                            },
                                            {
                                                "internalType": "uint256",
                                                "name": "upbandWidth",
                                                "type": "uint256"
                                            },
                                            {
                                                "internalType": "uint256",
                                                "name": "downbandWidth",
                                                "type": "uint256"
                                            }
                                        ],
                                        "internalType": "struct Price",
                                        "name": "price",
                                        "type": "tuple"
                                    }
                                ],
                                "internalType": "struct deviceInfo[]",
                                "name": "",
                                "type": "tuple[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "contract_address": "0x6fea9f16372A8691D5C44452291c7e7BBF0a4B93",
                "name": "helper_contract"
            }
        ],
        "public_to_private_keys": {
            "0x0dE70097283EAac8cf0F5304Ed69476A6Bf6af4E": "0xb7b0634364ecc2ade8709f6466209b48a74480e7ee45e7503c8af0bb38590a9d",
            "0x1a8E1BEBd5abc6E6ADc3dAC3aa73243fAEab64A7": "0xcb2c768529226aafee79fd9e74cf2d2f3e0c4136bfc00c3ffd68e7c62ecfc7b3",
            "0x2d8d84Fe38Bc6C5e749c1fF37560574Fd43BD10c": "0x3a3c956b38313f8cd437ae7078033aed2b28ccf77cc77683478957c936d8fbff",
            "0x4511aA6140EaD2A2696007E0235612913dA79a11": "0x26af05a026706fde3d52cbf009cc011066077166705f09c6045b995763e75fb0",
            "0x51e798442B19bB2b05Ba5235D3A9DA6b0A0b2a07": "0xf184fcd8e4610671542e1ce805c0745cfd2e5f08092ced8d4a98a9590d917fad",
            "0x629b96BeceaFF92e2537A6205Cb7F05D08D2dd0e": "0x4cdb9d6170babd19aa0beeff95ac3a9ad68b62434493bf8fc986689946535524",
            "0x7dDEC97027d2935dE14Be602969A07443B003fF9": "0xd6bb87bbf59582424eac39b4c013767ba386425bd94d7330d369b24ba35db22e",
            "0x896dEC362445F4b67AB7ED675c810e16d85C365c": "0xf782aa4fd090cb3c1e66d6186b7bad91f398a5c0b9631d45b7811323a7f85890",
            "0x99Ca0f373c7925171a8B6201b7afa7fc474dC63b": "0x7456c1dcc9cbf5321da072e4d8d4c0904df4126cda62c1711b437297da1ad232",
            "0xf2abcb4B4e18356F66fD96f7B6522c5D528AFA52": "0x8ca9f54c05602366971c8e8eb4fcab86db4f1c5e26a73548a924d49bb4713951"
        },
        "rpc_url": "http://2.tcp.cpolar.top:13434"
    }
} as const