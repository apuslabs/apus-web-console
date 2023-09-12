(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4],{11863:function(e,t,r){"use strict";var o=r(26314);t.Z=void 0;var n=o(r(80984)),a=r(57437),i=(0,n.default)((0,a.jsx)("path",{d:"M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H9V4h9v12zM3 15v-2h2v2H3zm0-5.5h2v2H3v-2zM10 20h2v2h-2v-2zm-7-1.5v-2h2v2H3zM5 22c-1.1 0-2-.9-2-2h2v2zm3.5 0h-2v-2h2v2zm5 0v-2h2c0 1.1-.9 2-2 2zM5 6v2H3c0-1.1.9-2 2-2z"}),"CopyAll");t.Z=i},30402:function(e,t,r){"use strict";var o=r(26314);t.Z=void 0;var n=o(r(80984)),a=r(57437),i=(0,n.default)((0,a.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail");t.Z=i},80984:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=r(2954)},67822:function(e,t,r){"use strict";var o=r(2265);let n=o.createContext(void 0);t.Z=n},45999:function(e,t,r){"use strict";r.d(t,{ZP:function(){return H}});var o=r(20791),n=r(13428),a=r(2265),i=r(61380),l=r(95600),u=r(71516),c=r(92841),d=r(61450),p=r(587),s=r(86688);function f(e){return(0,s.d6)("MuiInput",e)}let v=(0,s.sI)("MuiInput",["root","input","formControl","focused","disabled","error","adornedStart","adornedEnd","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","sizeSm","sizeMd","sizeLg","variantPlain","variantOutlined","variantSoft","variantSolid","fullWidth","startDecorator","endDecorator"]);var h=r(30018),b=r(95137);let g=a.createContext(void 0);var y=r(55095),m=r(67822);let I=["aria-describedby","aria-label","aria-labelledby","autoComplete","autoFocus","className","defaultValue","disabled","error","id","name","onClick","onChange","onKeyDown","onKeyUp","onFocus","onBlur","placeholder","readOnly","required","type","value"];var C=r(57437);let x=["propsToForward","rootStateClasses","inputStateClasses","getRootProps","getInputProps","formControl","focused","error","disabled","fullWidth","size","color","variant","startDecorator","endDecorator","component","slots","slotProps"],O=e=>{let{disabled:t,fullWidth:r,variant:o,color:n,size:a}=e,u={root:["root",t&&"disabled",r&&"fullWidth",o&&`variant${(0,i.Z)(o)}`,n&&`color${(0,i.Z)(n)}`,a&&`size${(0,i.Z)(a)}`],input:["input"],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return(0,l.Z)(u,f,{})},w=(0,u.Z)("div")(({theme:e,ownerState:t})=>{var r,o,a,i,l;let u=null==(r=e.variants[`${t.variant}`])?void 0:r[t.color];return[(0,n.Z)({"--Input-radius":e.vars.radius.sm,"--Input-gap":"0.5rem","--Input-placeholderColor":"inherit","--Input-placeholderOpacity":.64,"--Input-decoratorColor":e.vars.palette.text.icon,"--Input-focused":"0","--Input-focusedThickness":e.vars.focus.thickness},"context"===t.color?{"--Input-focusedHighlight":e.vars.palette.focusVisible}:{"--Input-focusedHighlight":null==(o=e.vars.palette["neutral"===t.color?"primary":t.color])?void 0:o[500]},"sm"===t.size&&{"--Input-minHeight":"2rem","--Input-paddingInline":"0.5rem","--Input-decoratorChildHeight":"min(1.5rem, var(--Input-minHeight))","--Icon-fontSize":e.vars.fontSize.xl},"md"===t.size&&{"--Input-minHeight":"2.5rem","--Input-paddingInline":"0.75rem","--Input-decoratorChildHeight":"min(2rem, var(--Input-minHeight))","--Icon-fontSize":e.vars.fontSize.xl2},"lg"===t.size&&{"--Input-minHeight":"3rem","--Input-paddingInline":"1rem","--Input-gap":"0.75rem","--Input-decoratorChildHeight":"min(2.375rem, var(--Input-minHeight))","--Icon-fontSize":e.vars.fontSize.xl2},{"--Input-decoratorChildOffset":"min(calc(var(--Input-paddingInline) - (var(--Input-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Input-decoratorChildHeight)) / 2), var(--Input-paddingInline))","--_Input-paddingBlock":"max((var(--Input-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Input-decoratorChildHeight)) / 2, 0px)","--Input-decoratorChildRadius":"max(var(--Input-radius) - var(--variant-borderWidth, 0px) - var(--_Input-paddingBlock), min(var(--_Input-paddingBlock) + var(--variant-borderWidth, 0px), var(--Input-radius) / 2))","--Button-minHeight":"var(--Input-decoratorChildHeight)","--IconButton-size":"var(--Input-decoratorChildHeight)","--Button-radius":"var(--Input-decoratorChildRadius)","--IconButton-radius":"var(--Input-decoratorChildRadius)",boxSizing:"border-box"},"plain"!==t.variant&&{boxShadow:e.shadow.xs},{minWidth:0,minHeight:"var(--Input-minHeight)"},t.fullWidth&&{width:"100%"},{cursor:"text",position:"relative",display:"flex",paddingInline:"var(--Input-paddingInline)",borderRadius:"var(--Input-radius)"},e.typography[`body-${t.size}`],u,{backgroundColor:null!=(a=null==u?void 0:u.backgroundColor)?a:e.vars.palette.background.surface,"&:before":{boxSizing:"border-box",content:'""',display:"block",position:"absolute",pointerEvents:"none",top:0,left:0,right:0,bottom:0,zIndex:1,borderRadius:"inherit",margin:"calc(var(--variant-borderWidth, 0px) * -1)",boxShadow:"var(--Input-focusedInset, inset) 0 0 0 calc(var(--Input-focused) * var(--Input-focusedThickness)) var(--Input-focusedHighlight)"}}),{"&:hover":(0,n.Z)({},null==(i=e.variants[`${t.variant}Hover`])?void 0:i[t.color],{backgroundColor:null}),[`&.${v.disabled}`]:null==(l=e.variants[`${t.variant}Disabled`])?void 0:l[t.color],"&:focus-within::before":{"--Input-focused":"1"}}]}),S=(0,u.Z)("input")(({ownerState:e})=>({border:"none",minWidth:0,outline:0,padding:0,flex:1,color:"inherit",backgroundColor:"transparent",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontWeight:"inherit",lineHeight:"inherit",textOverflow:"ellipsis","&:-webkit-autofill":(0,n.Z)({paddingInline:"var(--Input-paddingInline)"},!e.startDecorator&&{marginInlineStart:"calc(-1 * var(--Input-paddingInline))",paddingInlineStart:"var(--Input-paddingInline)",borderTopLeftRadius:"calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",borderBottomLeftRadius:"calc(var(--Input-radius) - var(--variant-borderWidth, 0px))"},!e.endDecorator&&{marginInlineEnd:"calc(-1 * var(--Input-paddingInline))",paddingInlineEnd:"var(--Input-paddingInline)",borderTopRightRadius:"calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",borderBottomRightRadius:"calc(var(--Input-radius) - var(--variant-borderWidth, 0px))"}),"&::-webkit-input-placeholder":{color:"var(--Input-placeholderColor)",opacity:"var(--Input-placeholderOpacity)"},"&::-moz-placeholder":{color:"var(--Input-placeholderColor)",opacity:"var(--Input-placeholderOpacity)"},"&:-ms-input-placeholder":{color:"var(--Input-placeholderColor)",opacity:"var(--Input-placeholderOpacity)"},"&::-ms-input-placeholder":{color:"var(--Input-placeholderColor)",opacity:"var(--Input-placeholderOpacity)"}})),Z=(0,u.Z)("div")({"--Button-margin":"0 0 0 calc(var(--Input-decoratorChildOffset) * -1)","--IconButton-margin":"0 0 0 calc(var(--Input-decoratorChildOffset) * -1)","--Icon-margin":"0 0 0 calc(var(--Input-paddingInline) / -4)",display:"inherit",alignItems:"center",paddingBlock:"var(--unstable_InputPaddingBlock)",flexWrap:"wrap",marginInlineEnd:"var(--Input-gap)",color:"var(--Input-decoratorColor)",cursor:"initial"}),D=(0,u.Z)("div")({"--Button-margin":"0 calc(var(--Input-decoratorChildOffset) * -1) 0 0","--IconButton-margin":"0 calc(var(--Input-decoratorChildOffset) * -1) 0 0","--Icon-margin":"0 calc(var(--Input-paddingInline) / -4) 0 0",display:"inherit",alignItems:"center",marginInlineStart:"var(--Input-gap)",color:"var(--Input-decoratorColor)",cursor:"initial"}),P=(0,u.Z)(w,{name:"JoyInput",slot:"Root",overridesResolver:(e,t)=>t.root})({}),R=(0,u.Z)(S,{name:"JoyInput",slot:"Input",overridesResolver:(e,t)=>t.input})({}),j=(0,u.Z)(Z,{name:"JoyInput",slot:"StartDecorator",overridesResolver:(e,t)=>t.startDecorator})({}),k=(0,u.Z)(D,{name:"JoyInput",slot:"EndDecorator",overridesResolver:(e,t)=>t.endDecorator})({}),z=a.forwardRef(function(e,t){var r,i,l,u,s;let f=(0,c.Z)({props:e,name:"JoyInput"}),w=function(e,t){let r=a.useContext(m.Z),{"aria-describedby":i,"aria-label":l,"aria-labelledby":u,autoComplete:c,autoFocus:d,className:p,defaultValue:s,disabled:f,error:v,id:C,name:x,onClick:O,onChange:w,onKeyDown:S,onKeyUp:Z,onFocus:D,onBlur:P,placeholder:R,readOnly:j,required:k,type:z,value:H}=e,_=(0,o.Z)(e,I),{getRootProps:E,getInputProps:T,focused:B,error:W,disabled:M}=function(e){let t,r,o,i,l;let{defaultValue:u,disabled:c=!1,error:d=!1,onBlur:p,onChange:s,onFocus:f,required:v=!1,value:m,inputRef:I}=e,C=a.useContext(g);if(C){var x,O,w;t=void 0,r=null!=(x=C.disabled)&&x,o=null!=(O=C.error)&&O,i=null!=(w=C.required)&&w,l=C.value}else t=u,r=c,o=d,i=v,l=m;let{current:S}=a.useRef(null!=l),Z=a.useCallback(e=>{},[]),D=a.useRef(null),P=(0,b.Z)(D,I,Z),[R,j]=a.useState(!1);a.useEffect(()=>{!C&&r&&R&&(j(!1),null==p||p())},[C,r,R,p]);let k=e=>t=>{var r,o;if(null!=C&&C.disabled){t.stopPropagation();return}null==(r=e.onFocus)||r.call(e,t),C&&C.onFocus?null==C||null==(o=C.onFocus)||o.call(C):j(!0)},z=e=>t=>{var r;null==(r=e.onBlur)||r.call(e,t),C&&C.onBlur?C.onBlur():j(!1)},H=e=>(t,...r)=>{var o,n;if(!S){let e=t.target||D.current;if(null==e)throw Error((0,h.Z)(17))}null==C||null==(o=C.onChange)||o.call(C,t),null==(n=e.onChange)||n.call(e,t,...r)},_=e=>t=>{var r;D.current&&t.currentTarget===t.target&&D.current.focus(),null==(r=e.onClick)||r.call(e,t)};return{disabled:r,error:o,focused:R,formControlContext:C,getInputProps:(e={})=>{let a=(0,n.Z)({},{onBlur:p,onChange:s,onFocus:f},(0,y._)(e)),u=(0,n.Z)({},e,a,{onBlur:z(a),onChange:H(a),onFocus:k(a)});return(0,n.Z)({},u,{"aria-invalid":o||void 0,defaultValue:t,ref:P,value:l,required:i,disabled:r})},getRootProps:(t={})=>{let r=(0,y._)(e,["onBlur","onChange","onFocus"]),o=(0,n.Z)({},r,(0,y._)(t));return(0,n.Z)({},t,o,{onClick:_(o)})},inputRef:P,required:i,value:l}}({disabled:null!=f?f:null==r?void 0:r.disabled,defaultValue:s,error:v,onBlur:P,onClick:O,onChange:w,onFocus:D,required:null!=k?k:null==r?void 0:r.required,value:H}),F={[t.disabled]:M,[t.error]:W,[t.focused]:B,[t.formControl]:!!r,[p]:p},A={[t.disabled]:M};return(0,n.Z)({formControl:r,propsToForward:{"aria-describedby":i,"aria-label":l,"aria-labelledby":u,autoComplete:c,autoFocus:d,disabled:M,id:C,onKeyDown:S,onKeyUp:Z,name:x,placeholder:R,readOnly:j,type:z},rootStateClasses:F,inputStateClasses:A,getRootProps:E,getInputProps:T,focused:B,error:W,disabled:M},_)}(f,v),{propsToForward:S,rootStateClasses:Z,inputStateClasses:D,getRootProps:z,getInputProps:H,formControl:_,focused:E,error:T=!1,disabled:B,fullWidth:W=!1,size:M="md",color:F="neutral",variant:A="outlined",startDecorator:N,endDecorator:V,component:$,slots:U={},slotProps:q={}}=w,J=(0,o.Z)(w,x),L=null!=(r=null!=(i=e.error)?i:null==_?void 0:_.error)?r:T,K=null!=(l=null!=(u=e.size)?u:null==_?void 0:_.size)?l:M,{getColor:X}=(0,d.VT)(A),G=X(e.color,L?"danger":null!=(s=null==_?void 0:_.color)?s:F),Q=(0,n.Z)({},f,{fullWidth:W,color:G,disabled:B,error:L,focused:E,size:K,variant:A}),Y=O(Q),ee=(0,n.Z)({},J,{component:$,slots:U,slotProps:q}),[et,er]=(0,p.Z)("root",{ref:t,className:[Y.root,Z],elementType:P,getSlotProps:z,externalForwardedProps:ee,ownerState:Q}),[eo,en]=(0,p.Z)("input",(0,n.Z)({},_&&{additionalProps:{id:_.htmlFor,"aria-describedby":_["aria-describedby"]}},{className:[Y.input,D],elementType:R,getSlotProps:H,internalForwardedProps:S,externalForwardedProps:ee,ownerState:Q})),[ea,ei]=(0,p.Z)("startDecorator",{className:Y.startDecorator,elementType:j,externalForwardedProps:ee,ownerState:Q}),[el,eu]=(0,p.Z)("endDecorator",{className:Y.endDecorator,elementType:k,externalForwardedProps:ee,ownerState:Q});return(0,C.jsxs)(et,(0,n.Z)({},er,{children:[N&&(0,C.jsx)(ea,(0,n.Z)({},ei,{children:N})),(0,C.jsx)(eo,(0,n.Z)({},en)),V&&(0,C.jsx)(el,(0,n.Z)({},eu,{children:V}))]}))});var H=z},2954:function(e,t,r){"use strict";r.r(t),r.d(t,{createSvgIcon:function(){return o.Z}});var o=r(34752)},54440:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&e.push(i)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)o.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0!==(r=(function(){return n}).apply(t,[]))&&(e.exports=r)}()},2390:function(e,t,r){"use strict";var o=r(25809),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,a,i,l,u,c,d,p,s=!1;t||(t={}),i=t.debug||!1;try{if(u=o(),c=document.createRange(),d=document.getSelection(),(p=document.createElement("span")).textContent=e,p.ariaHidden="true",p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=n[t.format]||n.default;window.clipboardData.setData(o,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(p),c.selectNodeContents(p),d.addRange(c),!document.execCommand("copy"))throw Error("copy command was unsuccessful");s=!0}catch(o){i&&console.error("unable to copy using execCommand: ",o),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(o){i&&console.error("unable to copy using clipboardData: ",o),i&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",l=r.replace(/#{\s*key\s*}/g,a),window.prompt(l,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(c):d.removeAllRanges()),p&&document.body.removeChild(p),u()}return s}},22303:function(e,t,r){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=l(r(2265)),a=l(r(2390)),i=["text","onCopy","options","children"];function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){v(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(h,e);var t,r,l,u=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=f(h);if(t){var n=f(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return s(e)}(this,e)});function h(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,h);for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return v(s(e=u.call.apply(u,[this].concat(r))),"onClick",function(t){var r=e.props,o=r.text,i=r.onCopy,l=r.children,u=r.options,c=n.default.Children.only(l),d=(0,a.default)(o,u);i&&i(o,d),c&&c.props&&"function"==typeof c.props.onClick&&c.props.onClick(t)}),e}return r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=function(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,i),o=n.default.Children.only(t);return n.default.cloneElement(o,c(c({},r),{},{onClick:this.onClick}))}}],d(h.prototype,r),l&&d(h,l),Object.defineProperty(h,"prototype",{writable:!1}),h}(n.default.PureComponent);t.CopyToClipboard=h,v(h,"defaultProps",{onCopy:void 0,options:void 0})},86781:function(e,t,r){"use strict";var o=r(22303).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},25809:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],o=0;o<e.rangeCount;o++)r.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},26314:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);