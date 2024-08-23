(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[118],{5846:function(e,t,n){e.exports=n(414)},4058:function(e,t,n){"use strict";n.d(t,{d:function(){return f},f:function(){return c}});var r=n(6006),o=n(3562),u=n(3858),l=n(961),i=n(8496),a=n(2810);let s=(0,r.createContext)(null);function c(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)(()=>function(e){let n=(0,o.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),u=(0,r.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return r.createElement(s.Provider,{value:u},e.children)},[t])]}let f=Object.assign((0,a.yV)(function(e,t){let n=(0,u.M)(),{id:o=`headlessui-description-${n}`,...c}=e,f=function e(){let t=(0,r.useContext)(s);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),d=(0,i.T)(t);(0,l.e)(()=>f.register(o),[o,f.register]);let p={ref:d,...f.props,id:o};return(0,a.sY)({ourProps:p,theirProps:c,slot:f.slot||{},defaultTag:"p",name:f.name||"Description"})}),{})},9538:function(e,t,n){"use strict";n.d(t,{p:function(){return R}});var r,o,u,l=n(6006),i=n(3562),a=n(3858),s=n(1795),c=n(8496),f=n(546),d=n(4373),p=n(9325),m=n(3432),h=n(2810);let v=null!=(u=l.startTransition)?u:function(e){e()};var g=n(8277),y=((r=y||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),b=((o=b||{})[o.ToggleDisclosure=0]="ToggleDisclosure",o[o.CloseDisclosure=1]="CloseDisclosure",o[o.SetButtonId=2]="SetButtonId",o[o.SetPanelId=3]="SetPanelId",o[o.LinkPanel=4]="LinkPanel",o[o.UnlinkPanel=5]="UnlinkPanel",o);let E={0:e=>({...e,disclosureState:(0,p.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},w=(0,l.createContext)(null);function S(e){let t=(0,l.useContext)(w);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,S),t}return t}w.displayName="DisclosureContext";let P=(0,l.createContext)(null);P.displayName="DisclosureAPIContext";let k=(0,l.createContext)(null);function T(e,t){return(0,p.E)(t.type,E,e,t)}k.displayName="DisclosurePanelContext";let C=l.Fragment,O=h.AN.RenderStrategy|h.AN.Static,R=Object.assign((0,h.yV)(function(e,t){let{defaultOpen:n=!1,...r}=e,o=(0,l.useRef)(null),u=(0,c.T)(t,(0,c.h)(e=>{o.current=e},void 0===e.as||e.as===l.Fragment)),a=(0,l.useRef)(null),s=(0,l.useRef)(null),d=(0,l.useReducer)(T,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:s,panelRef:a,buttonId:null,panelId:null}),[{disclosureState:v,buttonId:g},y]=d,b=(0,i.z)(e=>{y({type:1});let t=(0,m.r)(o);if(!t||!g)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(g):t.getElementById(g);null==n||n.focus()}),E=(0,l.useMemo)(()=>({close:b}),[b]),S=(0,l.useMemo)(()=>({open:0===v,close:b}),[v,b]);return l.createElement(w.Provider,{value:d},l.createElement(P.Provider,{value:E},l.createElement(f.up,{value:(0,p.E)(v,{0:f.ZM.Open,1:f.ZM.Closed})},(0,h.sY)({ourProps:{ref:u},theirProps:r,slot:S,defaultTag:C,name:"Disclosure"}))))}),{Button:(0,h.yV)(function(e,t){let n=(0,a.M)(),{id:r=`headlessui-disclosure-button-${n}`,...o}=e,[u,f]=S("Disclosure.Button"),p=(0,l.useContext)(k),m=null!==p&&p===u.panelId,v=(0,l.useRef)(null),y=(0,c.T)(v,t,m?null:u.buttonRef),b=(0,h.Y2)();(0,l.useEffect)(()=>{if(!m)return f({type:2,buttonId:r}),()=>{f({type:2,buttonId:null})}},[r,f,m]);let E=(0,i.z)(e=>{var t;if(m){if(1===u.disclosureState)return;switch(e.key){case g.R.Space:case g.R.Enter:e.preventDefault(),e.stopPropagation(),f({type:0}),null==(t=u.buttonRef.current)||t.focus()}}else switch(e.key){case g.R.Space:case g.R.Enter:e.preventDefault(),e.stopPropagation(),f({type:0})}}),w=(0,i.z)(e=>{e.key===g.R.Space&&e.preventDefault()}),P=(0,i.z)(t=>{var n;(0,d.P)(t.currentTarget)||e.disabled||(m?(f({type:0}),null==(n=u.buttonRef.current)||n.focus()):f({type:0}))}),T=(0,l.useMemo)(()=>({open:0===u.disclosureState}),[u]),C=(0,s.f)(e,v),O=m?{ref:y,type:C,onKeyDown:E,onClick:P}:{ref:y,id:r,type:C,"aria-expanded":0===u.disclosureState,"aria-controls":u.linkedPanel?u.panelId:void 0,onKeyDown:E,onKeyUp:w,onClick:P};return(0,h.sY)({mergeRefs:b,ourProps:O,theirProps:o,slot:T,defaultTag:"button",name:"Disclosure.Button"})}),Panel:(0,h.yV)(function(e,t){let n=(0,a.M)(),{id:r=`headlessui-disclosure-panel-${n}`,...o}=e,[u,i]=S("Disclosure.Panel"),{close:s}=function e(t){let n=(0,l.useContext)(P);if(null===n){let n=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("Disclosure.Panel"),d=(0,h.Y2)(),p=(0,c.T)(t,u.panelRef,e=>{v(()=>i({type:e?4:5}))});(0,l.useEffect)(()=>(i({type:3,panelId:r}),()=>{i({type:3,panelId:null})}),[r,i]);let m=(0,f.oJ)(),g=null!==m?(m&f.ZM.Open)===f.ZM.Open:0===u.disclosureState,y=(0,l.useMemo)(()=>({open:0===u.disclosureState,close:s}),[u,s]);return l.createElement(k.Provider,{value:u.panelId},(0,h.sY)({mergeRefs:d,ourProps:{ref:p,id:r},theirProps:o,slot:y,defaultTag:"div",features:O,visible:g,name:"Disclosure.Panel"}))})})},8277:function(e,t,n){"use strict";n.d(t,{R:function(){return o}});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},3928:function(e,t,n){"use strict";n.d(t,{r:function(){return b}});var r=n(6006),o=n(3562),u=n(8807),l=n(3858),i=n(1795),a=n(8496),s=n(5106),c=n(4373),f=n(2810),d=n(4058),p=n(8277),m=n(961);let h=(0,r.createContext)(null),v=Object.assign((0,f.yV)(function(e,t){let n=(0,l.M)(),{id:o=`headlessui-label-${n}`,passive:u=!1,...i}=e,s=function e(){let t=(0,r.useContext)(h);if(null===t){let t=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),c=(0,a.T)(t);(0,m.e)(()=>s.register(o),[o,s.register]);let d={ref:c,...s.props,id:o};return u&&("onClick"in d&&(delete d.htmlFor,delete d.onClick),"onClick"in i&&delete i.onClick),(0,f.sY)({ourProps:d,theirProps:i,slot:s.slot||{},defaultTag:"label",name:s.name||"Label"})}),{}),g=(0,r.createContext)(null);g.displayName="GroupContext";let y=r.Fragment,b=Object.assign((0,f.yV)(function(e,t){let n=(0,l.M)(),{id:d=`headlessui-switch-${n}`,checked:m,defaultChecked:h=!1,onChange:v,name:y,value:b,form:E,...w}=e,S=(0,r.useContext)(g),P=(0,r.useRef)(null),k=(0,a.T)(P,t,null===S?null:S.setSwitch),[T,C]=function(e,t,n){let[u,l]=(0,r.useState)(n),i=void 0!==e,a=(0,r.useRef)(i),s=(0,r.useRef)(!1),c=(0,r.useRef)(!1);return!i||a.current||s.current?i||!a.current||c.current||(c.current=!0,a.current=i,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(s.current=!0,a.current=i,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[i?e:u,(0,o.z)(e=>(i||l(e),null==t?void 0:t(e)))]}(m,v,h),O=(0,o.z)(()=>null==C?void 0:C(!T)),R=(0,o.z)(e=>{if((0,c.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),O()}),D=(0,o.z)(e=>{e.key===p.R.Space?(e.preventDefault(),O()):e.key===p.R.Enter&&function(e){var t,n;let r=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(r){for(let t of r.elements)if(t!==e&&("INPUT"===t.tagName&&"submit"===t.type||"BUTTON"===t.tagName&&"submit"===t.type||"INPUT"===t.nodeName&&"image"===t.type)){t.click();return}null==(n=r.requestSubmit)||n.call(r)}}(e.currentTarget)}),N=(0,o.z)(e=>e.preventDefault()),x=(0,r.useMemo)(()=>({checked:T}),[T]),I={id:d,ref:k,role:"switch",type:(0,i.f)(e,P),tabIndex:0,"aria-checked":T,"aria-labelledby":null==S?void 0:S.labelledby,"aria-describedby":null==S?void 0:S.describedby,onClick:R,onKeyUp:D,onKeyPress:N},A=(0,u.G)();return(0,r.useEffect)(()=>{var e;let t=null==(e=P.current)?void 0:e.closest("form");t&&void 0!==h&&A.addEventListener(t,"reset",()=>{C(h)})},[P,C]),r.createElement(r.Fragment,null,null!=y&&T&&r.createElement(s._,{features:s.A.Hidden,...(0,f.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,form:E,checked:T,name:y,value:b})}),(0,f.sY)({ourProps:I,theirProps:w,slot:x,defaultTag:"button",name:"Switch"}))}),{Group:function(e){var t;let[n,u]=(0,r.useState)(null),[l,i]=function(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)(()=>function(e){let n=(0,o.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),u=(0,r.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return r.createElement(h.Provider,{value:u},e.children)},[t])]}(),[a,s]=(0,d.f)(),c=(0,r.useMemo)(()=>({switch:n,setSwitch:u,labelledby:l,describedby:a}),[n,u,l,a]);return r.createElement(s,{name:"Switch.Description"},r.createElement(i,{name:"Switch.Label",props:{htmlFor:null==(t=c.switch)?void 0:t.id,onClick(e){n&&("LABEL"===e.currentTarget.tagName&&e.preventDefault(),n.click(),n.focus({preventScroll:!0}))}}},r.createElement(g.Provider,{value:c},(0,f.sY)({ourProps:{},theirProps:e,defaultTag:y,name:"Switch.Group"}))))},Label:v,Description:d.d})},8807:function(e,t,n){"use strict";n.d(t,{G:function(){return u}});var r=n(6006),o=n(650);function u(){let[e]=(0,r.useState)(o.k);return(0,r.useEffect)(()=>()=>e.dispose(),[e]),e}},3562:function(e,t,n){"use strict";n.d(t,{z:function(){return u}});var r=n(6006),o=n(1485);let u=function(e){let t=(0,o.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},3858:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r,o=n(6006),u=n(28),l=n(961),i=n(1405);let a=null!=(r=o.useId)?r:function(){let e=(0,i.H)(),[t,n]=o.useState(e?()=>u.O.nextId():null);return(0,l.e)(()=>{null===t&&n(u.O.nextId())},[t]),null!=t?""+t:void 0}},961:function(e,t,n){"use strict";n.d(t,{e:function(){return u}});var r=n(6006),o=n(28);let u=(e,t)=>{o.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},1485:function(e,t,n){"use strict";n.d(t,{E:function(){return u}});var r=n(6006),o=n(961);function u(e){let t=(0,r.useRef)(e);return(0,o.e)(()=>{t.current=e},[e]),t}},1795:function(e,t,n){"use strict";n.d(t,{f:function(){return l}});var r=n(6006),o=n(961);function u(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function l(e,t){let[n,l]=(0,r.useState)(()=>u(e));return(0,o.e)(()=>{l(u(e))},[e.type,e.as]),(0,o.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&l("button")},[n,t]),n}},1405:function(e,t,n){"use strict";n.d(t,{H:function(){return l}});var r,o=n(6006),u=n(28);function l(){let e;let t=(e="undefined"==typeof document,(0,(r||(r=n.t(o,2))).useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[l,i]=o.useState(u.O.isHandoffComplete);return l&&!1===u.O.isHandoffComplete&&i(!1),o.useEffect(()=>{!0!==l&&i(!0)},[l]),o.useEffect(()=>u.O.handoff(),[]),!t&&l}},8496:function(e,t,n){"use strict";n.d(t,{T:function(){return i},h:function(){return l}});var r=n(6006),o=n(3562);let u=Symbol();function l(e,t=!0){return Object.assign(e,{[u]:t})}function i(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,o.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[u]))?void 0:n}},5106:function(e,t,n){"use strict";n.d(t,{A:function(){return u},_:function(){return l}});var r,o=n(2810),u=((r=u||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let l=(0,o.yV)(function(e,t){var n;let{features:r=1,...u}=e,l={ref:t,"aria-hidden":(2&r)==2||(null!=(n=u["aria-hidden"])?n:void 0),style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&r)==4&&(2&r)!=2&&{display:"none"}}};return(0,o.sY)({ourProps:l,theirProps:u,slot:{},defaultTag:"div",name:"Hidden"})})},546:function(e,t,n){"use strict";n.d(t,{ZM:function(){return l},oJ:function(){return i},up:function(){return a}});var r,o=n(6006);let u=(0,o.createContext)(null);u.displayName="OpenClosedContext";var l=((r=l||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function i(){return(0,o.useContext)(u)}function a({value:e,children:t}){return o.createElement(u.Provider,{value:e},t)}},4373:function(e,t,n){"use strict";function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},4339:function(e,t,n){"use strict";function r(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}n.d(t,{A:function(){return r}})},650:function(e,t,n){"use strict";n.d(t,{k:function(){return function e(){let t=[],n={addEventListener:(e,t,r,o)=>(e.addEventListener(t,r,o),n.add(()=>e.removeEventListener(t,r,o))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return n.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return(0,r.Y)(()=>{t.current&&e[0]()}),n.add(()=>{t.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(t){let n=e();return t(n),this.add(()=>n.dispose())},add:e=>(t.push(e),()=>{let n=t.indexOf(e);if(n>=0)for(let e of t.splice(n,1))e()}),dispose(){for(let e of t.splice(0))e()}};return n}}});var r=n(670)},28:function(e,t,n){"use strict";n.d(t,{O:function(){return l}});var r=Object.defineProperty,o=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t,n)=>(o(e,"symbol"!=typeof t?t+"":t,n),n);let l=new class{constructor(){u(this,"current",this.detect()),u(this,"handoffState","pending"),u(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},9325:function(e,t,n){"use strict";function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}n.d(t,{E:function(){return r}})},670:function(e,t,n){"use strict";function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}n.d(t,{Y:function(){return r}})},3432:function(e,t,n){"use strict";n.d(t,{r:function(){return o}});var r=n(28);function o(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},2810:function(e,t,n){"use strict";n.d(t,{AN:function(){return a},Y2:function(){return d},l4:function(){return s},oA:function(){return v},sY:function(){return c},yV:function(){return h}});var r,o,u=n(6006),l=n(4339),i=n(9325),a=((r=a||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((o=s||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:u=!0,name:l,mergeRefs:a}){a=null!=a?a:p;let s=m(t,e);if(u)return f(s,n,r,l,a);let c=null!=o?o:0;if(2&c){let{static:e=!1,...t}=s;if(e)return f(t,n,r,l,a)}if(1&c){let{unmount:e=!0,...t}=s;return(0,i.E)(e?0:1,{0:()=>null,1:()=>f({...t,hidden:!0,style:{display:"none"}},n,r,l,a)})}return f(s,n,r,l,a)}function f(e,t={},n,r,o){let{as:i=n,children:a,refName:s="ref",...c}=g(e,["unmount","static"]),f=void 0!==e.ref?{[s]:e.ref}:{},d="function"==typeof a?a(t):a;"className"in c&&c.className&&"function"==typeof c.className&&(c.className=c.className(t));let p={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(i===u.Fragment&&Object.keys(v(c)).length>0){if(!(0,u.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(c).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,l.A)(null==e?void 0:e.className(...t),c.className):(0,l.A)(null==e?void 0:e.className,c.className);return(0,u.cloneElement)(d,Object.assign({},m(d.props,v(g(c,["ref"]))),p,f,{ref:o(d.ref,f.ref)},t?{className:t}:{}))}return(0,u.createElement)(i,Object.assign({},g(c,["ref"]),i!==u.Fragment&&f,i!==u.Fragment&&p),d)}function d(){let e=(0,u.useRef)([]),t=(0,u.useCallback)(t=>{for(let n of e.current)null!=n&&("function"==typeof n?n(t):n.current=t)},[]);return(...n)=>{if(!n.every(e=>null==e))return e.current=n,t}}function p(...e){return e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}function m(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let o of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...r)}}});return t}function h(e){var t;return Object.assign((0,u.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function v(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function g(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}},2283:function(e,t,n){"use strict";var r=n(6006);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",clipRule:"evenodd"}))});t.Z=o},3743:function(e,t,n){"use strict";var r=n(6006);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",clipRule:"evenodd"}))});t.Z=o}}]);