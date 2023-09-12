exports.id = 847;
exports.ids = [847];
exports.modules = {

/***/ 1419:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 79332))

/***/ }),

/***/ 79332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DashboardLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14184);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89367);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14653);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* __next_internal_client_entry_do_not_use__ default auto */ 






function DashboardLayout({ children }) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const { isProvider } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_contexts_web3__WEBPACK_IMPORTED_MODULE_4__/* .web3Context */ .lr);
    useLoginGuard();
    const menus = isProvider ? [
        {
            label: "Market",
            href: "/console/dashboard/market"
        },
        {
            label: "Account",
            href: "/console/dashboard/account"
        },
        {
            label: "Billing",
            href: "/console/dashboard/billing"
        },
        {
            label: "Earning",
            href: "/console/dashboard/earning"
        },
        {
            label: "Instances",
            href: "/console/dashboard/instances"
        },
        {
            label: "Machines",
            href: "/console/dashboard/machines"
        }
    ] : [
        {
            label: "Market",
            href: "/console/dashboard/market"
        },
        {
            label: "Account",
            href: "/console/dashboard/account"
        },
        {
            label: "Billing",
            href: "/console/dashboard/billing"
        },
        {
            label: "Instances",
            href: "/console/dashboard/instances"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid grid-cols-1",
        style: {
            gridTemplateColumns: "15rem 1fr",
            height: "calc(100vh - 4rem)"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col p-5 border-0 border-r border-solid border-slate-200 w-60 gap-5",
                children: menus.map(({ label, href })=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: href,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("rounded bg-default text-main hover:text-primary hover:bg-light px-3 py-2 font-bold flex justify-between items-center", href === pathname && "text-primary bg-light"),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: label
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    color: "primary"
                                })
                            ]
                        })
                    }, label);
                })
            }),
            children
        ]
    });
}
function useLoginGuard() {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const { needLogin } = (0,_contexts_web3__WEBPACK_IMPORTED_MODULE_4__/* .useWeb3Context */ .Z_)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (pathname !== "/signin" && needLogin) {
            router.push("/console/signin");
        }
    }, [
        needLogin,
        pathname,
        router
    ]);
}


/***/ }),

/***/ 27180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/jax/work/apus-web-console/src/app/console/dashboard/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;