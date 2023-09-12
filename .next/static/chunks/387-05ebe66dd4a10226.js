(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[387],{46601:function(){},24654:function(){},76687:function(e,n,t){"use strict";t.d(n,{Zk:function(){return T},Zm:function(){return l},bh:function(){return d},cG:function(){return p},e2:function(){return o},pC:function(){return y},q9:function(){return s},ql:function(){return m},sd:function(){return b},wt:function(){return f},zX:function(){return c}});var i=t(81269),a=t(2265),u=t(74548),r=t.n(u);let p="0x7592A188A064395E54b2E7fE01b5C5554569D111",s=[{inputs:[],name:"cancellation",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"_stakeAmount",type:"uint256"}],name:"offlineUnBlockedFund",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"_stakeAmount",type:"uint256"}],name:"onlineBlockedFund",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"register",outputs:[{components:[{internalType:"address",name:"addr",type:"address"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"providerBlockedFunds",type:"uint256"},{internalType:"uint256",name:"recipientBlockedFunds",type:"uint256"},{internalType:"string",name:"info",type:"string"}],internalType:"struct AccountFactory.accountInfo",name:"accountinfo",type:"tuple"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"_stakeAmount",type:"uint256"}],name:"rentBlockedFund",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_recipient",type:"address"},{internalType:"address",name:"_provider",type:"address"},{internalType:"uint256",name:"_stakeAmount",type:"uint256"},{internalType:"uint256",name:"_unBlockedAmount",type:"uint256"}],name:"rentUnBlockedFund",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_info",type:"string"}],name:"setProviderInfo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"stake",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"unstake",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_addr",type:"address"}],name:"getAccount",outputs:[{components:[{internalType:"address",name:"addr",type:"address"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"providerBlockedFunds",type:"uint256"},{internalType:"uint256",name:"recipientBlockedFunds",type:"uint256"},{internalType:"string",name:"info",type:"string"}],internalType:"struct AccountFactory.accountInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"isRegister",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"}],y="0x976DE5a7aa0304D9F2F4a90De3A8c7C00629206b",l=[{inputs:[{internalType:"uint256",name:"_deviceId",type:"uint256"}],name:"offlineServer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_machineId",type:"string"},{internalType:"string",name:"_serverInfo",type:"string"},{components:[{internalType:"uint256",name:"serverPrice",type:"uint256"},{internalType:"uint256",name:"storagePrice",type:"uint256"},{internalType:"uint256",name:"upbandWidth",type:"uint256"},{internalType:"uint256",name:"downbandWidth",type:"uint256"}],internalType:"struct Price",name:"_price",type:"tuple"},{internalType:"uint256",name:"_startTime",type:"uint256"},{internalType:"uint256",name:"_endTime",type:"uint256"}],name:"onlineServer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_leaseId",type:"uint256"},{internalType:"uint256",name:"_endTime",type:"uint256"}],name:"RenewalLeaseServer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_deviceId",type:"uint256"},{internalType:"uint256",name:"_endTime",type:"uint256"}],name:"rentServer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_leaseId",type:"uint256"}],name:"terminateInstance",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_leaseId",type:"uint256"}],name:"terminateLease",outputs:[{components:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"leaseId",type:"uint256"},{internalType:"uint256",name:"startTime",type:"uint256"},{internalType:"uint256",name:"expireTime",type:"uint256"},{internalType:"uint256",name:"deviceId",type:"uint256"}],internalType:"struct leaseInfo",name:"",type:"tuple"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_accountFactoryAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"account_contract",outputs:[{internalType:"contract AccountFactory",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"a",type:"string"},{internalType:"string",name:"b",type:"string"}],name:"concatenateStrings",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"devices",outputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"owner",type:"address"},{internalType:"enum DeviceStatus",name:"status",type:"uint8"},{internalType:"string",name:"machineId",type:"string"},{internalType:"string",name:"serverInfo",type:"string"},{components:[{internalType:"uint256",name:"serverPrice",type:"uint256"},{internalType:"uint256",name:"storagePrice",type:"uint256"},{internalType:"uint256",name:"upbandWidth",type:"uint256"},{internalType:"uint256",name:"downbandWidth",type:"uint256"}],internalType:"struct Price",name:"price",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAll",outputs:[{components:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"leaseId",type:"uint256"},{internalType:"uint256",name:"providerBlockedFund",type:"uint256"},{internalType:"uint256",name:"recipientBlockedFunds",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"enum billingStatus",name:"status",type:"uint8"},{internalType:"enum billingType",name:"billType",type:"uint8"}],internalType:"struct billingInfo[]",name:"",type:"tuple[]"},{components:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"leaseId",type:"uint256"},{internalType:"uint256",name:"providerBlockedFund",type:"uint256"},{internalType:"uint256",name:"recipientBlockedFunds",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"enum billingStatus",name:"status",type:"uint8"},{internalType:"enum billingType",name:"billType",type:"uint8"}],internalType:"struct billingInfo[]",name:"",type:"tuple[]"},{components:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"leaseId",type:"uint256"},{internalType:"uint256",name:"startTime",type:"uint256"},{internalType:"uint256",name:"expireTime",type:"uint256"},{internalType:"uint256",name:"deviceId",type:"uint256"}],internalType:"struct leaseInfo[]",name:"",type:"tuple[]"},{components:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"leaseId",type:"uint256"},{internalType:"uint256",name:"startTime",type:"uint256"},{internalType:"uint256",name:"expireTime",type:"uint256"},{internalType:"uint256",name:"deviceId",type:"uint256"}],internalType:"struct leaseInfo[]",name:"",type:"tuple[]"},{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"owner",type:"address"},{internalType:"enum DeviceStatus",name:"status",type:"uint8"},{internalType:"string",name:"machineId",type:"string"},{internalType:"string",name:"serverInfo",type:"string"},{components:[{internalType:"uint256",name:"serverPrice",type:"uint256"},{internalType:"uint256",name:"storagePrice",type:"uint256"},{internalType:"uint256",name:"upbandWidth",type:"uint256"},{internalType:"uint256",name:"downbandWidth",type:"uint256"}],internalType:"struct Price",name:"price",type:"tuple"}],internalType:"struct deviceInfo[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_deviceId",type:"uint256"}],name:"getDevice",outputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"owner",type:"address"},{internalType:"enum DeviceStatus",name:"status",type:"uint8"},{internalType:"string",name:"machineId",type:"string"},{internalType:"string",name:"serverInfo",type:"string"},{components:[{internalType:"uint256",name:"serverPrice",type:"uint256"},{internalType:"uint256",name:"storagePrice",type:"uint256"},{internalType:"uint256",name:"upbandWidth",type:"uint256"},{internalType:"uint256",name:"downbandWidth",type:"uint256"}],internalType:"struct Price",name:"price",type:"tuple"}],internalType:"struct deviceInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_deviceId",type:"uint256"}],name:"getLeaseByDeviceId",outputs:[{components:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"leaseId",type:"uint256"},{internalType:"uint256",name:"startTime",type:"uint256"},{internalType:"uint256",name:"expireTime",type:"uint256"},{internalType:"uint256",name:"deviceId",type:"uint256"}],internalType:"struct leaseInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_leaseId",type:"uint256"}],name:"getProviderBillingByLeaseId",outputs:[{components:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"leaseId",type:"uint256"},{internalType:"uint256",name:"providerBlockedFund",type:"uint256"},{internalType:"uint256",name:"recipientBlockedFunds",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"enum billingStatus",name:"status",type:"uint8"},{internalType:"enum billingType",name:"billType",type:"uint8"}],internalType:"struct billingInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_leaseId",type:"uint256"}],name:"getRecipientBillingByLeaseId",outputs:[{components:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"leaseId",type:"uint256"},{internalType:"uint256",name:"providerBlockedFund",type:"uint256"},{internalType:"uint256",name:"recipientBlockedFunds",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"enum billingStatus",name:"status",type:"uint8"},{internalType:"enum billingType",name:"billType",type:"uint8"}],internalType:"struct billingInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"leaseProvider",outputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"leaseId",type:"uint256"},{internalType:"uint256",name:"startTime",type:"uint256"},{internalType:"uint256",name:"expireTime",type:"uint256"},{internalType:"uint256",name:"deviceId",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"leaseRecipient",outputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"leaseId",type:"uint256"},{internalType:"uint256",name:"startTime",type:"uint256"},{internalType:"uint256",name:"expireTime",type:"uint256"},{internalType:"uint256",name:"deviceId",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_limit",type:"uint256"},{internalType:"uint256",name:"_offset",type:"uint256"}],name:"listDevices",outputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"owner",type:"address"},{internalType:"enum DeviceStatus",name:"status",type:"uint8"},{internalType:"string",name:"machineId",type:"string"},{internalType:"string",name:"serverInfo",type:"string"},{components:[{internalType:"uint256",name:"serverPrice",type:"uint256"},{internalType:"uint256",name:"storagePrice",type:"uint256"},{internalType:"uint256",name:"upbandWidth",type:"uint256"},{internalType:"uint256",name:"downbandWidth",type:"uint256"}],internalType:"struct Price",name:"price",type:"tuple"}],internalType:"struct deviceInfo[]",name:"_allDevices",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_provider",type:"address"},{internalType:"uint256",name:"_limit",type:"uint256"},{internalType:"uint256",name:"_offset",type:"uint256"}],name:"listOwnDevices",outputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"owner",type:"address"},{internalType:"enum DeviceStatus",name:"status",type:"uint8"},{internalType:"string",name:"machineId",type:"string"},{internalType:"string",name:"serverInfo",type:"string"},{components:[{internalType:"uint256",name:"serverPrice",type:"uint256"},{internalType:"uint256",name:"storagePrice",type:"uint256"},{internalType:"uint256",name:"upbandWidth",type:"uint256"},{internalType:"uint256",name:"downbandWidth",type:"uint256"}],internalType:"struct Price",name:"price",type:"tuple"}],internalType:"struct deviceInfo[]",name:"_ownDevices",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"platformSharingRatio",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"providerBillings",outputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"leaseId",type:"uint256"},{internalType:"uint256",name:"providerBlockedFund",type:"uint256"},{internalType:"uint256",name:"recipientBlockedFunds",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"enum billingStatus",name:"status",type:"uint8"},{internalType:"enum billingType",name:"billType",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_startTime",type:"uint256"},{internalType:"uint256",name:"_endTime",type:"uint256"},{components:[{internalType:"uint256",name:"serverPrice",type:"uint256"},{internalType:"uint256",name:"storagePrice",type:"uint256"},{internalType:"uint256",name:"upbandWidth",type:"uint256"},{internalType:"uint256",name:"downbandWidth",type:"uint256"}],internalType:"struct Price",name:"_price",type:"tuple"}],name:"providerStakeCalcute",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"recipientBillings",outputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"leaseId",type:"uint256"},{internalType:"uint256",name:"providerBlockedFund",type:"uint256"},{internalType:"uint256",name:"recipientBlockedFunds",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"enum billingStatus",name:"status",type:"uint8"},{internalType:"enum billingType",name:"billType",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_startTime",type:"uint256"},{internalType:"uint256",name:"_endTime",type:"uint256"},{components:[{internalType:"uint256",name:"serverPrice",type:"uint256"},{internalType:"uint256",name:"storagePrice",type:"uint256"},{internalType:"uint256",name:"upbandWidth",type:"uint256"},{internalType:"uint256",name:"downbandWidth",type:"uint256"}],internalType:"struct Price",name:"_price",type:"tuple"}],name:"recipientStakeCalcute",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"number",type:"uint256"}],name:"uintToString",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"pure",type:"function"}];function o(e){let[n,t]=(0,a.useState)(!1);return{stake:(n,a)=>new Promise((u,r)=>{e||r("contract is null"),t(!0);try{null==e||e.methods.stake().send({from:n,value:i.ZPm.utils.toWei(a,"ether")}).on("error",e=>{r(e)}).on("confirmation",e=>{e.receipt.status===BigInt(1)?u(e):r(e)})}catch(e){r(e)}finally{t(!1)}}),isStaking:n}}function m(e){let[n,t]=(0,a.useState)(!1);return{unstake:(n,a)=>new Promise((u,r)=>{e||r("contract is null"),t(!0);try{null==e||e.methods.unstake(i.ZPm.utils.toWei(a,"ether")).send({from:n}).on("error",e=>{r(e)}).on("confirmation",e=>{e.receipt.status===BigInt(1)?u(e):r(e)})}catch(e){r(e)}finally{t(!1)}}),isUnStaking:n}}function d(e){let[n,t]=(0,a.useState)(!1);return{rent:(n,i,a)=>new Promise((u,r)=>{e||r("contract is null"),t(!0);try{console.log(i,a.unix(),n),null==e||e.methods.rentServer(i,a.unix()).send({from:n}).on("error",e=>{r(e)}).on("confirmation",e=>{e.receipt.status===BigInt(1)?u(e):r(e)})}catch(e){r(e)}finally{t(!1)}}),isRenting:n}}function c(e){let[n,t]=(0,a.useState)(!1);return{renewal:(n,i,a)=>new Promise((u,r)=>{e||r("contract is null"),t(!0);try{console.log(i,a.unix(),n);let t=a.unix();console.log(i,t,n),null==e||e.methods.RenewalLeaseServer(i,t).send({from:n}).on("error",e=>{r(e)}).on("confirmation",e=>{e.receipt.status===BigInt(1)?u(e):r(e)})}catch(e){r(e)}finally{t(!1)}}),isRenewaling:n}}function T(e){let[n,t]=(0,a.useState)(!1);return{terminateLease:(n,i)=>new Promise((a,u)=>{e||u("contract is null"),t(!0);try{console.log(i,n),null==e||e.methods.terminateInstance(i).send({from:n}).on("error",e=>{u(e)}).on("confirmation",e=>{e.receipt.status===BigInt(1)?a(e):u(e)})}catch(e){u(e)}finally{t(!1)}}),isTerminating:n}}function f(e){let[n,t]=(0,a.useState)(!1);return{unList:(n,i)=>new Promise((a,u)=>{t(!0);try{console.log(i,n),null==e||e.methods.offlineServer(i).send({from:n}).on("error",e=>{u(e)}).on("confirmation",e=>{e.receipt.status===BigInt(1)?a(e):u(e)})}catch(e){u(e)}finally{t(!1)}}),isUnListing:n}}function b(e){let[n,t]=(0,a.useState)(!1);return{online:async(n,a,u,p,s)=>{try{t(!0);let y=i.ZPm.utils.toWei(p.server_price,"ether"),l=i.ZPm.utils.toWei(p.storage_price,"ether"),o=i.ZPm.utils.toWei(p.upband_width,"ether"),m=i.ZPm.utils.toWei(p.downband_width,"ether");return new Promise((t,i)=>{try{console.log(a,u,{serverPrice:y,storagePrice:l,upbandWidth:o,downbandWidth:m},n),null==e||e.methods.onlineServer(a,u,{serverPrice:y,storagePrice:l,upbandWidth:o,downbandWidth:m},r()().unix(),s.unix()).send({from:n}).on("error",e=>{i(e)}).on("confirmation",e=>{e.receipt.status===BigInt(1)?t(e):i(e)})}catch(e){i(e)}})}catch(e){return Promise.reject(e)}finally{t(!1)}},isOnlining:n}}},39411:function(e,n,t){"use strict";let i,a,u;t.d(n,{Z_:function(){return T},lr:function(){return d},vP:function(){return c}});var r=t(76687),p=t(2265),s=t(81269),y=t(42333),l=t(23157),o=t(71424),m=t(24033);let d=(0,p.createContext)(null),c=d.Provider;function T(){var e,n,t,d;let[c,T]=(0,p.useState)(!1),[f,b]=(0,p.useState)(""),[v,g]=(0,p.useState)("0."),h=(0,m.useRouter)(),w=(0,m.usePathname)(),{data:I,isLoading:_,mutate:P}=(0,y.ZP)(f?["/apus/account/info",{address:f}]:null,l.p,{onSuccess:e=>{200===e.code&&"/console/signin"===w&&h.push("/console/dashboard/market")}}),[k,M]=(0,p.useState)(!1);(0,p.useEffect)(()=>{void 0!==window.ethereum&&T(!0)},[]);let B=async e=>{if(void 0!==window.ethereum)try{let n=await window.ethereum.request({method:e?"eth_requestAccounts":"eth_accounts"});if(!(null==n?void 0:n.length))return{account:"",balance:"0"};let t=s.ZPm.utils.toChecksumAddress(n[0]);b(t);let i=await window.ethereum.request({method:"eth_getBalance",params:[t,"latest"]}),a=s.ZPm.utils.fromWei(i,"ether");return g(a),{account:t,balance:a}}catch(e){console.error(e)}return{account:"",balance:"0"}};(0,p.useEffect)(()=>(B(),window.ethereum.on("accountsChanged",e=>{B()}),()=>{window.ethereum.removeAllListeners("accountsChanged")}),[]);let S=(0,p.useCallback)(async()=>{if(i){M(!0);try{var e;let{account:n,balance:t}=await B(!0);if(0>=Number(t)){o.A.error("Your need to have some BNB to register");return}await (null===(e=a)||void 0===e?void 0:e.methods.register().send({from:n}).on("error",console.error).on("confirmation",e=>{if(e.receipt.status===BigInt(1)){var n,t;o.A.success("Sing up successfully"),null===(t=a)||void 0===t||null===(n=t.methods)||void 0===n||n.getAccount,P()}}))}catch(e){console.error(e)}finally{M(!1)}}},[P,h,i]);return{initWeb3:()=>{void 0===window.ethereum||i||(a=new(i=new window.Web3(window.ethereum)).eth.Contract(r.q9,r.cG),u=new i.eth.Contract(r.Zm,r.pC))},refreshAccount:B,hasMetamask:c,isLogin:(null==I?void 0:I.code)===200,needLogin:!_&&(null==I?void 0:I.code)===400,connectMetamask:S,account:f,web3:i,accountContract:a,helperContract:u,balance:v,accountInfo:{balance:s.ZPm.utils.fromWei((null==I?void 0:null===(e=I.data)||void 0===e?void 0:e.balance)||"0","ether"),recipient_blocked_funds:s.ZPm.utils.fromWei((null==I?void 0:null===(n=I.data)||void 0===n?void 0:n.recipient_blocked_funds)||"0","ether"),provider_blocked_funds:s.ZPm.utils.fromWei((null==I?void 0:null===(t=I.data)||void 0===t?void 0:t.provider_blocked_funds)||"0","ether")},isProvider:!!(null==I?void 0:null===(d=I.data)||void 0===d?void 0:d.info),isConnecting:k,refreshAccountInfo:P}}},23157:function(e,n,t){"use strict";t.d(n,{p:function(){return u}});var i=t(76548),a=t.n(i);let u=e=>{let n="";if("string"==typeof e)n=e;else{let[t,i]=e;n=t+"?"+a().stringify(i)}return fetch("http://1.117.58.173:8080"+n,{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>e.json())}}}]);