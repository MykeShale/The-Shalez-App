"use strict";
exports.id = 34;
exports.ids = [34];
exports.modules = {

/***/ 7034:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* binding */ we)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event.js
var use_event = __webpack_require__(2264);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-controllable.js
function use_controllable_T(l,r,c){let[i,s]=(0,react_.useState)(c),e=l!==void 0,t=(0,react_.useRef)(e),u=(0,react_.useRef)(!1),d=(0,react_.useRef)(!1);return e&&!t.current&&!u.current?(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!e&&t.current&&!d.current&&(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[e?l:i,(0,use_event/* useEvent */.z)(n=>(e||s(n),r==null?void 0:r(n)))]}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-disposables.js
var use_disposables = __webpack_require__(8060);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-id.js
var use_id = __webpack_require__(6304);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var use_resolve_button_type = __webpack_require__(986);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var use_sync_refs = __webpack_require__(1464);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/internal/hidden.js
var internal_hidden = __webpack_require__(9042);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/bugs.js
var bugs = __webpack_require__(5410);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/form.js
function e(i={},s=null,t=[]){for(let[r,n]of Object.entries(i))o(t,f(s,r),n);return t}function f(i,s){return i?i+"["+s+"]":s}function o(i,s,t){if(Array.isArray(t))for(let[r,n]of t.entries())o(i,f(s,r.toString()),n);else t instanceof Date?i.push([s,t.toISOString()]):typeof t=="boolean"?i.push([s,t?"1":"0"]):typeof t=="string"?i.push([s,t]):typeof t=="number"?i.push([s,`${t}`]):t==null?i.push([s,""]):e(t,s,i)}function form_p(i){var t,r;let s=(t=i==null?void 0:i.form)!=null?t:i.closest("form");if(s){for(let n of s.elements)if(n!==i&&(n.tagName==="INPUT"&&n.type==="submit"||n.tagName==="BUTTON"&&n.type==="submit"||n.nodeName==="INPUT"&&n.type==="image")){n.click();return}(r=s.requestSubmit)==null||r.call(s)}}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/render.js
var render = __webpack_require__(1147);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/description/description.js
var description = __webpack_require__(1858);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/keyboard.js
var keyboard = __webpack_require__(1550);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var use_iso_morphic_effect = __webpack_require__(3652);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/label/label.js
let d=(0,react_.createContext)(null);function u(){let a=(0,react_.useContext)(d);if(a===null){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}return a}function F(){let[a,t]=(0,react_.useState)([]);return[a.length>0?a.join(" "):void 0,(0,react_.useMemo)(()=>function(e){let s=(0,use_event/* useEvent */.z)(r=>(t(l=>[...l,r]),()=>t(l=>{let n=l.slice(),p=n.indexOf(r);return p!==-1&&n.splice(p,1),n}))),o=(0,react_.useMemo)(()=>({register:s,slot:e.slot,name:e.name,props:e.props}),[s,e.slot,e.name,e.props]);return react_.createElement(d.Provider,{value:o},e.children)},[t])]}let A="label";function h(a,t){let i=(0,use_id/* useId */.M)(),{id:e=`headlessui-label-${i}`,passive:s=!1,...o}=a,r=u(),l=(0,use_sync_refs/* useSyncRefs */.T)(t);(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>r.register(e),[e,r.register]);let n={ref:l,...r.props,id:e};return s&&("onClick"in n&&(delete n.htmlFor,delete n.onClick),"onClick"in o&&delete o.onClick),(0,render/* render */.sY)({ourProps:n,theirProps:o,slot:r.slot||{},defaultTag:A,name:r.name||"Label"})}let v=(0,render/* forwardRefWithAs */.yV)(h),B=Object.assign(v,{});

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/switch/switch.js
let b=(0,react_.createContext)(null);b.displayName="GroupContext";let Y=react_.Fragment;function Z(s){var d;let[n,p]=(0,react_.useState)(null),[c,f]=F(),[r,h]=(0,description/* useDescriptions */.f)(),l=(0,react_.useMemo)(()=>({switch:n,setSwitch:p,labelledby:c,describedby:r}),[n,p,c,r]),T={},y=s;return react_.createElement(h,{name:"Switch.Description"},react_.createElement(f,{name:"Switch.Label",props:{htmlFor:(d=l.switch)==null?void 0:d.id,onClick(t){n&&(t.currentTarget.tagName==="LABEL"&&t.preventDefault(),n.click(),n.focus({preventScroll:!0}))}}},react_.createElement(b.Provider,{value:l},(0,render/* render */.sY)({ourProps:T,theirProps:y,defaultTag:Y,name:"Switch.Group"}))))}let ee="button";function te(s,n){let p=(0,use_id/* useId */.M)(),{id:c=`headlessui-switch-${p}`,checked:f,defaultChecked:r=!1,onChange:h,name:l,value:T,form:y,...d}=s,t=(0,react_.useContext)(b),u=(0,react_.useRef)(null),g=(0,use_sync_refs/* useSyncRefs */.T)(u,n,t===null?null:t.setSwitch),[o,a]=use_controllable_T(f,h,r),S=(0,use_event/* useEvent */.z)(()=>a==null?void 0:a(!o)),D=(0,use_event/* useEvent */.z)(e=>{if((0,bugs/* isDisabledReactIssue7711 */.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),S()}),C=(0,use_event/* useEvent */.z)(e=>{e.key===keyboard/* Keys.Space */.R.Space?(e.preventDefault(),S()):e.key===keyboard/* Keys.Enter */.R.Enter&&form_p(e.currentTarget)}),L=(0,use_event/* useEvent */.z)(e=>e.preventDefault()),x=(0,react_.useMemo)(()=>({checked:o}),[o]),v={id:c,ref:g,role:"switch",type:(0,use_resolve_button_type/* useResolveButtonType */.f)(s,u),tabIndex:0,"aria-checked":o,"aria-labelledby":t==null?void 0:t.labelledby,"aria-describedby":t==null?void 0:t.describedby,onClick:D,onKeyUp:C,onKeyPress:L},G=(0,use_disposables/* useDisposables */.G)();return (0,react_.useEffect)(()=>{var w;let e=(w=u.current)==null?void 0:w.closest("form");e&&r!==void 0&&G.addEventListener(e,"reset",()=>{a(r)})},[u,a]),react_.createElement(react_.Fragment,null,l!=null&&o&&react_.createElement(internal_hidden/* Hidden */._,{features:internal_hidden/* Features.Hidden */.A.Hidden,...(0,render/* compact */.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,form:y,checked:o,name:l,value:T})}),(0,render/* render */.sY)({ourProps:v,theirProps:d,slot:x,defaultTag:ee,name:"Switch"}))}let ne=(0,render/* forwardRefWithAs */.yV)(te),re=Z,we=Object.assign(ne,{Group:re,Label:B,Description:description/* Description */.d});


/***/ })

};
;