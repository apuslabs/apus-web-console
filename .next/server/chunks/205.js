"use strict";
exports.id = 205;
exports.ids = [205];
exports.modules = {

/***/ 70225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ useForm)
});

// EXTERNAL MODULE: ./node_modules/rc-field-form/lib/index.js
var lib = __webpack_require__(91230);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./node_modules/compute-scroll-into-view/dist/index.js
const t=t=>"object"==typeof t&&null!=t&&1===t.nodeType,e=(t,e)=>(!e||"hidden"!==t)&&("visible"!==t&&"clip"!==t),n=(t,n)=>{if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){const o=getComputedStyle(t,null);return e(o.overflowY,n)||e(o.overflowX,n)||(t=>{const e=(t=>{if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}})(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)})(t)}return!1},o=(t,e,n,o,i,l,r,d)=>l<t&&r>e||l>t&&r<e?0:l<=t&&d<=n||r>=e&&d>=n?l-t-o:r>e&&d<n||l<t&&d>n?r-e+i:0,i=t=>{const e=t.parentElement;return null==e?t.getRootNode().host||null:e},dist_l=(e,l)=>{var r,d,s,h;if("undefined"==typeof document)return[];const{scrollMode:c,block:f,inline:u,boundary:a,skipOverflowHiddenElements:g}=l,m="function"==typeof a?a:t=>t!==a;if(!t(e))throw new TypeError("Invalid target");const p=document.scrollingElement||document.documentElement,w=[];let W=e;for(;t(W)&&m(W);){if(W=i(W),W===p){w.push(W);break}null!=W&&W===document.body&&n(W)&&!n(document.documentElement)||null!=W&&n(W,g)&&w.push(W)}const H=null!=(d=null==(r=window.visualViewport)?void 0:r.width)?d:innerWidth,b=null!=(h=null==(s=window.visualViewport)?void 0:s.height)?h:innerHeight,{scrollX:v,scrollY:y}=window,{height:E,width:M,top:x,right:I,bottom:C,left:R}=e.getBoundingClientRect();let T="start"===f||"nearest"===f?x:"end"===f?C:x+E/2,V="center"===u?R+M/2:"end"===u?I:R;const k=[];for(let t=0;t<w.length;t++){const e=w[t],{height:n,width:i,top:l,right:r,bottom:d,left:s}=e.getBoundingClientRect();if("if-needed"===c&&x>=0&&R>=0&&C<=b&&I<=H&&x>=l&&C<=d&&R>=s&&I<=r)return k;const h=getComputedStyle(e),a=parseInt(h.borderLeftWidth,10),g=parseInt(h.borderTopWidth,10),m=parseInt(h.borderRightWidth,10),W=parseInt(h.borderBottomWidth,10);let B=0,D=0;const L="offsetWidth"in e?e.offsetWidth-e.clientWidth-a-m:0,S="offsetHeight"in e?e.offsetHeight-e.clientHeight-g-W:0,X="offsetWidth"in e?0===e.offsetWidth?0:i/e.offsetWidth:0,Y="offsetHeight"in e?0===e.offsetHeight?0:n/e.offsetHeight:0;if(p===e)B="start"===f?T:"end"===f?T-b:"nearest"===f?o(y,y+b,b,g,W,y+T,y+T+E,E):T-b/2,D="start"===u?V:"center"===u?V-H/2:"end"===u?V-H:o(v,v+H,H,a,m,v+V,v+V+M,M),B=Math.max(0,B+y),D=Math.max(0,D+v);else{B="start"===f?T-l-g:"end"===f?T-d+W+S:"nearest"===f?o(l,d,n,g,W+S,T,T+E,E):T-(l+n/2)+S/2,D="start"===u?V-s-a:"center"===u?V-(s+i/2)+L/2:"end"===u?V-r+m+L:o(s,r,i,a,m+L,V,V+M,M);const{scrollLeft:t,scrollTop:h}=e;B=Math.max(0,Math.min(h+B/Y,e.scrollHeight-n/Y+S)),D=Math.max(0,Math.min(t+D/X,e.scrollWidth-i/X+L)),T+=h-B,V+=t-D}k.push({el:e,top:B,left:D})}return k};//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/scroll-into-view-if-needed/dist/index.js
const dist_o=e=>!1===e?{block:"end",inline:"nearest"}:(e=>e===Object(e)&&0!==Object.keys(e).length)(e)?e:{block:"start",inline:"nearest"};function dist_t(t,n){if(!t.isConnected||!(e=>{let o=e;for(;o&&o.parentNode;){if(o.parentNode===document)return!0;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode}return!1})(t))return;if((e=>"object"==typeof e&&"function"==typeof e.behavior)(n))return n.behavior(dist_l(t,n));const r="boolean"==typeof n||null==n?void 0:n.behavior;for(const{el:i,top:a,left:l}of dist_l(t,dist_o(n)))i.scroll({top:a,left:l,behavior:r})}//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/antd/es/form/util.js
// form item name black list.  in form ,you can use form.id get the form item element.
// use object hasOwnProperty will get better performance if black list is longer.
const formItemNameBlackList = ['parentNode'];
// default form item id prefix.
const defaultItemNamePrefixCls = 'form_item';
function toArray(candidate) {
  if (candidate === undefined || candidate === false) return [];
  return Array.isArray(candidate) ? candidate : [candidate];
}
function getFieldId(namePath, formName) {
  if (!namePath.length) {
    return undefined;
  }
  const mergedId = namePath.join('_');
  if (formName) {
    return `${formName}_${mergedId}`;
  }
  const isIllegalName = formItemNameBlackList.includes(mergedId);
  return isIllegalName ? `${defaultItemNamePrefixCls}_${mergedId}` : mergedId;
}
/**
 * Get merged status by meta or passed `validateStatus`.
 */
function getStatus(errors, warnings, meta, defaultValidateStatus, hasFeedback, validateStatus) {
  let status = defaultValidateStatus;
  if (validateStatus !== undefined) {
    status = validateStatus;
  } else if (meta.validating) {
    status = 'validating';
  } else if (errors.length) {
    status = 'error';
  } else if (warnings.length) {
    status = 'warning';
  } else if (meta.touched || hasFeedback && meta.validated) {
    // success feedback should display when pass hasFeedback prop and current value is valid value
    status = 'success';
  }
  return status;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/form/hooks/useForm.js




function toNamePathStr(name) {
  const namePath = toArray(name);
  return namePath.join('_');
}
function useForm(form) {
  const [rcForm] = (0,lib.useForm)();
  const itemsRef = react_.useRef({});
  const wrapForm = react_.useMemo(() => form !== null && form !== void 0 ? form : Object.assign(Object.assign({}, rcForm), {
    __INTERNAL__: {
      itemRef: name => node => {
        const namePathStr = toNamePathStr(name);
        if (node) {
          itemsRef.current[namePathStr] = node;
        } else {
          delete itemsRef.current[namePathStr];
        }
      }
    },
    scrollToField: function (name) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const namePath = toArray(name);
      const fieldId = getFieldId(namePath, wrapForm.__INTERNAL__.name);
      const node = fieldId ? document.getElementById(fieldId) : null;
      if (node) {
        dist_t(node, Object.assign({
          scrollMode: 'if-needed',
          block: 'nearest'
        }, options));
      }
    },
    getFieldInstance: name => {
      const namePathStr = toNamePathStr(name);
      return itemsRef.current[namePathStr];
    }
  }), [form, rcForm]);
  return [wrapForm];
}

/***/ })

};
;