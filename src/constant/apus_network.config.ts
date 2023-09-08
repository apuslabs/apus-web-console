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
                "contract_address": "0x1722177ded1C1F6988eDC7d9784528e77988F7ac",
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
                "contract_address": "0x8beFF99EE557f54426F8AFc2069A0d8D0fC9F789",
                "name": "helper_contract"
            }
        ],
        "public_to_private_keys": {
            "0x375958BFfEFe8df7FB6B829222C25c0c031C59C7": "0x75655f02cf2ecd5d129a57654ead739f57bd3bdcb740b50456e473868dc34d06",
            "0x51ABBC385AE0bD3c9247B999dc1c2146Fb6F2429": "0x78f28c9dd9a5251ca0f9afbaa2a9869996afb1b63cbc974685205c7ed307e57e",
            "0x56e48deBc4aff73d3fc226A9E71339b0fb44BDbb": "0xcad798b4b670c65d29b1cdb1e89380fce01ebb0521b78356cf60b1bb412ecdbe",
            "0x5942e7a28035c0154F2f9b1610CCe1D2E1F5D172": "0xd476f6cf3bbbc0d13fc6dced78a607a2dc39f77e6914a3438e44a1427b4b7d29",
            "0x81eCb14C77a8Fcc59040eDf6fab96F9Aa25cC6B8": "0x2abd656d876ca56e3ce9b71fad5344a38c55f46ce7d4297bc21e79167b0d075e",
            "0xB578D77875751EC84b6F2c22EF3c59086875db30": "0x1417acfc3c7f893e195d1c70db0549a7986d25fece3edf36560bfc6f918e9f7b",
            "0xB6f1e22d0788f2c48C443cd9965F6C3Ee43b6620": "0xac247b2559a58f80c8a069a920e586223f8d8fa4be462febc435c7c973391ce7",
            "0xCc84d0a4870177531195043bde99B38EB56132b3": "0xbed48bcd667635406eface910da6b0445c0e4661b559a1c7057cfa906d8815f7",
            "0xa1DBc763379e067b13fB444320Edf8521C94f423": "0xc97b0afe49279c0c9a15be6f7111a271d5d11fa54deeab2bcc31ebde14724b75",
            "0xaa6874eF9DB03b46BBd109DBA9da4B381E2Bb1AD": "0xf797724af80712ae67d2e4c3472f15f3e4409ebf6aee98cc11023b22425d9862"
        },
        "rpc_url": "http://9.tcp.cpolar.top:10861"
    }
} as const