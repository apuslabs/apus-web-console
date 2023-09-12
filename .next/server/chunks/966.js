"use strict";
exports.id = 966;
exports.ids = [966];
exports.modules = {

/***/ 52966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Qq: () => (/* binding */ MachineInstance),
  uY: () => (/* binding */ MarketInstance),
  jI: () => (/* binding */ TenantInstance)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/DeleteOutline.js
var DeleteOutline = __webpack_require__(95809);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/RefreshOutlined.js
var RefreshOutlined = __webpack_require__(32709);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/RouteOutlined.js
var RouteOutlined = __webpack_require__(83854);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/assets/icons/logo.svg
var logo = __webpack_require__(46890);
// EXTERNAL MODULE: ./node_modules/@mui/joy/node/index.js
var node = __webpack_require__(3044);
// EXTERNAL MODULE: ./src/components/AccountCard.tsx
var AccountCard = __webpack_require__(44750);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/components/CommonDialog.tsx


function CommonDialog({ title, children, open, setOpen, footer, onOK, onCancel }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(node.Modal, {
        open: open,
        onClose: ()=>setOpen(false),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.ModalDialog, {
            variant: "outlined",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pb-5 text-center w-full bg-accent font-semibold text-xl text-main",
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(node.Divider, {}),
                children,
                footer === undefined ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Box, {
                    sx: {
                        display: "flex",
                        gap: 1,
                        justifyContent: "flex-end",
                        pt: 2
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                            variant: "plain",
                            color: "neutral",
                            onClick: ()=>{
                                setOpen(false);
                                onCancel?.();
                            },
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                            variant: "solid",
                            color: "primary",
                            onClick: ()=>{
                                setOpen(false);
                                onOK?.();
                            },
                            children: "Confirm"
                        })
                    ]
                }) : footer
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/antd/lib/popconfirm/index.js
var popconfirm = __webpack_require__(47049);
// EXTERNAL MODULE: ./node_modules/web3/lib/esm/index.js + 459 modules
var esm = __webpack_require__(39810);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(83689);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
;// CONCATENATED MODULE: ./src/components/Instance.tsx













function MarketInstance(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(InstanceProto, {
            ...props.server_info,
            operation: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-secondary text-sm font-normal",
                        children: [
                            "from: ",
                            props.owner
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            esm/* default.utils.fromWei */.ZPm.utils.fromWei((props?.price?.server_price || 0) * 3600, "ether"),
                            "/hr"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                        className: "btn-primary-middle",
                        onClick: ()=>{
                            props.onRent(props);
                        },
                        children: "RENT"
                    })
                ]
            })
        })
    });
}
function MachineInstance(props) {
    const isOnlineOrRunning = props.status === 1 || props.status === 2;
    return /*#__PURE__*/ jsx_runtime_.jsx(InstanceProto, {
        ...props.server_info,
        operation: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                className: "btn-primary-middle",
                loading: props.isLoading,
                disabled: props.status === 3,
                onClick: (e)=>{
                    isOnlineOrRunning ? props.onUnList(props) : props.onList(props);
                },
                children: isOnlineOrRunning ? "UnList" : "List"
            })
        })
    });
}
function ConnectDialog({ open, setOpen, sshInfo, sshPassword }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(CommonDialog, {
        title: "Connect Instance",
        open: open,
        setOpen: setOpen,
        footer: null,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: " w-96 py-8 flex flex-col gap-2",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-main font-semibold text-lg text-center mb-2",
                    children: "Your SSH Connection Info"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(AccountCard/* default */.Z, {
                    account: sshInfo
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(AccountCard/* default */.Z, {
                    account: sshPassword
                })
            ]
        })
    });
}
function TenantInstance(props) {
    const [ConnectDialogOpen, setConnectDialogOpen] = (0,react_.useState)(false);
    const rentStart = dayjs_min_default().unix(props?.status?.lease_start);
    const rentExpires = dayjs_min_default().unix(props?.status?.lease_expire);
    let rentRemaining = rentExpires.diff(dayjs_min_default()(), "hour");
    let rentDuration = dayjs_min_default()().diff(rentStart, "hour");
    if (rentRemaining > 24) {
        rentRemaining = Math.floor(rentRemaining / 24) + "d";
    } else {
        rentRemaining = rentRemaining + "h";
    }
    if (rentDuration > 24) {
        rentDuration = Math.floor(rentDuration / 24) + "d";
    } else {
        rentDuration = rentDuration + "h";
    }
    const [terminating, setTerminating] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(InstanceProto, {
                ...props.info.server_info,
                operation: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                esm/* default.utils.fromWei */.ZPm.utils.fromWei((props?.info.price.server_price || 0) * 3600, "ether"),
                                "/hr"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(popconfirm/* default */.Z, {
                            title: "Delete the task",
                            description: "Are you sure to delete this task?",
                            onConfirm: ()=>{
                                setTerminating(true);
                                props.onTerminate(props).finally(()=>{
                                    setTerminating(false);
                                });
                            },
                            okButtonProps: {
                                danger: true
                            },
                            showCancel: false,
                            okText: "Delete",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                                variant: "outlined",
                                color: "primary",
                                loading: terminating,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(DeleteOutline/* default */.Z, {})
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                            variant: "outlined",
                            color: "primary",
                            onClick: ()=>{
                                props.onRenew(props);
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(RefreshOutlined/* default */.Z, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                            variant: "outlined",
                            color: "primary",
                            onClick: ()=>{
                                setConnectDialogOpen(true);
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(RouteOutlined/* default */.Z, {})
                        })
                    ]
                }),
                additionalInfo: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mt-3 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mb-1 text-main font-medium",
                            children: "Running Info"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex gap-2",
                            children: [
                                {
                                    label: "Age",
                                    value: rentDuration
                                },
                                {
                                    label: "Status",
                                    value: props?.status?.state || "N/A"
                                },
                                {
                                    label: "Remaining",
                                    value: rentRemaining
                                }
                            ].map(({ label, value }, index)=>{
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: " text-secondary",
                                            children: [
                                                label,
                                                ": "
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: " text-main font-medium",
                                            children: value
                                        })
                                    ]
                                }, index);
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ConnectDialog, {
                open: ConnectDialogOpen,
                setOpen: setConnectDialogOpen,
                sshInfo: props?.connection ? `ssh -p ${props?.connection.ssh_port} ${props?.connection.ssh_user_name}@${props?.connection.ssh_ip}` : "",
                sshPassword: props?.connection?.ssh_password || ""
            })
        ]
    });
}
function InstanceProto({ operation, additionalInfo, ...props }) {
    const { cpu, disk, gpu, guid, health, motherboard, network, owner, price, ram } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-5 py-3 px-4 bg-accent",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pb-3 flex justify-between items-center border-0 border-b border-solid border-slate-200 text-main font-bold text-xl",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex gap-4 items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: logo/* default */.Z.src,
                                width: 35,
                                height: 35,
                                alt: "logo icon"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    gpu?.count || 1,
                                    "X"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: gpu?.model || "N/A"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-base font-normal",
                                children: guid
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex gap-5 items-center",
                        children: operation
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pt-3 text-sm gap-1 flex flex-col",
                children: [
                    [
                        [
                            {
                                label: "TFLOPS",
                                value: gpu?.tflops || 0
                            },
                            {
                                label: "Max CUDA Version",
                                value: gpu?.maxCUDAVersion || "N/A"
                            },
                            {
                                label: "GPU RAM: ",
                                value: (gpu?.ram || 0) + "GB"
                            },
                            {
                                label: "GPU RAM Bandwidth",
                                value: (gpu?.ramBandwidth || 0) + "GB/s"
                            },
                            {
                                label: "Model",
                                value: gpu?.model || "N/A"
                            }
                        ],
                        [
                            {
                                label: "PCIE Version",
                                value: motherboard?.pcieVersion || "N/A"
                            },
                            {
                                label: "PCIE Number",
                                value: (motherboard?.pcieLanes || 0) + "x"
                            },
                            {
                                label: "PCIE bandwidth",
                                value: (motherboard?.pcieBandwidth || 0) + "GB/s"
                            },
                            {
                                label: "CPU Count",
                                value: cpu?.cores || 0
                            },
                            {
                                label: "CPU Model",
                                value: cpu?.model || "N/A"
                            }
                        ],
                        [
                            {
                                label: "RAM frequency",
                                value: (ram?.frequency || 0) + "Mhz"
                            },
                            {
                                label: "RAM Size",
                                value: (ram?.size || 0) + "GB"
                            },
                            {
                                label: "Up Bandwidth",
                                value: (network?.upBandwidth || 0) + "Mbps"
                            },
                            {
                                label: "Down Bandwidth",
                                value: (network?.downBandwidth || 0) + "Mbps"
                            },
                            {
                                label: "Port Numbers",
                                value: network?.ports || 0
                            }
                        ],
                        [
                            {
                                label: "Disk Type",
                                value: disk?.type || "N/A"
                            },
                            {
                                label: "Disk Size",
                                value: (disk?.size || 0) + "GB"
                            },
                            {
                                label: "Disk Read Bandwidth",
                                value: (disk?.readBandwidth || 0) + "MB/s"
                            },
                            {
                                label: "Disk Write Bandwidth",
                                value: (disk?.writeBandwidth || 0) + "MB/s"
                            }
                        ]
                    ].map((itemGroup, index)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex gap-2",
                            children: itemGroup.map(({ label, value }, index)=>{
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-80",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: " text-secondary",
                                            children: [
                                                label,
                                                ": "
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: " text-main font-medium",
                                            children: value
                                        })
                                    ]
                                }, index);
                            })
                        }, index);
                    }),
                    additionalInfo
                ]
            })
        ]
    });
}


/***/ })

};
;