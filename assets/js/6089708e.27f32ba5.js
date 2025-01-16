"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[6812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=d(n),k=r,v=m["".concat(p,".").concat(k)]||m[k]||u[k]||i;return n?a.createElement(v,l(l({ref:t},o),{},{components:n})):a.createElement(v,l({ref:t},o))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(5773),r=(n(7294),n(3905));const i={id:"ima_core.EventBusImpl",title:"Class: EventBusImpl",sidebar_label:"@ima/core.EventBusImpl",custom_edit_url:null},l=void 0,s={unversionedId:"api/classes/ima_core.EventBusImpl",id:"api/classes/ima_core.EventBusImpl",title:"Class: EventBusImpl",description:"@ima/core.EventBusImpl",source:"@site/../docs/api/classes/ima_core.EventBusImpl.md",sourceDirName:"api/classes",slug:"/api/classes/ima_core.EventBusImpl",permalink:"/api/classes/ima_core.EventBusImpl",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.EventBusImpl",title:"Class: EventBusImpl",sidebar_label:"@ima/core.EventBusImpl",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.EventBus",permalink:"/api/classes/ima_core.EventBus"},next:{title:"@ima/core.Execution",permalink:"/api/classes/ima_core.Execution"}},p={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_allListenersTargets",id:"_alllistenerstargets",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_listeners",id:"_listeners",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"_window",id:"_window",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Accessors",id:"accessors",level:2},{value:"$dependencies",id:"dependencies",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"fire",id:"fire",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"listen",id:"listen",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"listenAll",id:"listenall",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"unlisten",id:"unlisten",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"unlistenAll",id:"unlistenall",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-9",level:4}],o={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".EventBusImpl"),(0,r.kt)("p",null,"Helper for custom events."),(0,r.kt)("p",null,"It offers public methods for firing custom events and two methods for\ncatching events (e.g. inside view components)."),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBus"},(0,r.kt)("inlineCode",{parentName:"a"},"EventBus"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"EventBusImpl"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new EventBusImpl"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"window"),")"),(0,r.kt)("p",null,"Initializes the custom event helper."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"window")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/classes/ima_core.Window"},(0,r.kt)("inlineCode",{parentName:"a"},"Window"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The IMA window helper.")))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBus"},"EventBus"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBus#constructor"},"constructor")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/event/EventBusImpl.ts#L54"},"packages/core/src/event/EventBusImpl.ts:54")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"_alllistenerstargets"},"_","allListenersTargets"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"_","allListenersTargets"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"WeakMap"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"EventTarget"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AllListenersWeakMap"),">"),(0,r.kt)("p",null,"Map of event targets to listeners executed on all IMA.js event bus\nevents."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/event/EventBusImpl.ts#L42"},"packages/core/src/event/EventBusImpl.ts:42")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_listeners"},"_","listeners"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"_","listeners"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"WeakMap"),"<",(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core#eventbuslistener"},(0,r.kt)("inlineCode",{parentName:"a"},"EventBusListener")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ListenersWeakMap"),">"),(0,r.kt)("p",null,"Map of listeners provided to the public API of this event bus to a\nmap of event targets to a map of event names to actual listeners\nbound to the native API."),(0,r.kt)("p",null,'The "listen all" event listeners are not registered in this map.'),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/event/EventBusImpl.ts#L36"},"packages/core/src/event/EventBusImpl.ts:36")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_window"},"_","window"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"_","window"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Window"},(0,r.kt)("inlineCode",{parentName:"a"},"Window"))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/event/EventBusImpl.ts#L28"},"packages/core/src/event/EventBusImpl.ts:28")),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"dependencies"},"$dependencies"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"$dependencies"),"(): typeof ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Window"},(0,r.kt)("inlineCode",{parentName:"a"},"Window")),"[]"),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,"typeof ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Window"},(0,r.kt)("inlineCode",{parentName:"a"},"Window")),"[]"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/event/EventBusImpl.ts#L45"},"packages/core/src/event/EventBusImpl.ts:45")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"fire"},"fire"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"fire"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"eventTarget"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"eventName"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBusImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"EventBusImpl"))),(0,r.kt)("p",null,"Fires a new custom event of the specified name, carrying the provided\ndata."),(0,r.kt)("p",null,"Note that this method does not prevent the event listeners to modify the\ndata in any way. The order in which the event listeners will be executed\nis unspecified and should not be relied upon."),(0,r.kt)("p",null,"Note that the default options are\n",(0,r.kt)("inlineCode",{parentName:"p"},"{ bubbles: true, cancelable: true }"),", which is different from the\ndefault values used in the native custom events\n(",(0,r.kt)("inlineCode",{parentName:"p"},"{ bubbles: false, cancelable: false }"),")."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventTarget")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"EventTarget")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The event target at which the event will be dispatched (e.g. element/document/window).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventName")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the event to fire.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data to pass to the event listeners.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/modules/ima_core#eventbusoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"EventBusOptions"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The override of the default options passed to the constructor of the custom event fired by this event bus. The default options passed to the custom event constructor are ",(0,r.kt)("inlineCode",{parentName:"td"},"{ bubbles: true, cancelable: true }"),".")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBusImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"EventBusImpl"))),(0,r.kt)("p",null,"This custom event bus."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"Thrown if the provided event target cannot be used to\nfire the event."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/Event"},"https://developer.mozilla.org/en-US/docs/Web/API/Event/Event")),(0,r.kt)("h4",{id:"overrides-1"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBus"},"EventBus"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBus#fire"},"fire")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/event/EventBusImpl.ts#L66"},"packages/core/src/event/EventBusImpl.ts:66")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"listen"},"listen"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"listen"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"eventTarget"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"eventName"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listener"),"): ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBusImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"EventBusImpl"))),(0,r.kt)("p",null,"Registers the provided event listener to be executed when the specific\ncustom event is fired by the same implementation of the event bus and\npasses through the specified event target."),(0,r.kt)("p",null,"When the specified event is fired, the event listener will be executed\nwith the event passed as the first argument."),(0,r.kt)("p",null,"The order in which the event listeners will be executed is unspecified\nand should not be relied upon."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventTarget")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"EventTarget")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The event target at which the listener should listen for the specified event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventName")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the event to listen for.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"listener")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/modules/ima_core#eventbuslistener"},(0,r.kt)("inlineCode",{parentName:"a"},"EventBusListener"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The event listener to register.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBusImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"EventBusImpl"))),(0,r.kt)("p",null,"This event bus."),(0,r.kt)("h4",{id:"overrides-2"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBus"},"EventBus"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBus#listen"},"listen")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/event/EventBusImpl.ts#L127"},"packages/core/src/event/EventBusImpl.ts:127")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"listenall"},"listenAll"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"listenAll"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"eventTarget"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listener"),"): ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBusImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"EventBusImpl"))),(0,r.kt)("p",null,"Registers the provided event listener to be executed when any custom\nevent is fired using the same implementation of the event bus and passes\nthrough the specified event target."),(0,r.kt)("p",null,"When the specified event is fired, the event listener will be executed\nwith the event passed as the first argument."),(0,r.kt)("p",null,"The order in which the event listeners will be executed is unspecified\nand should not be relied upon."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventTarget")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"EventTarget")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The event target at which the listener should listen for all event bus events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"listener")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/modules/ima_core#eventbuslistener"},(0,r.kt)("inlineCode",{parentName:"a"},"EventBusListener"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The event listener to register.")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBusImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"EventBusImpl"))),(0,r.kt)("p",null,"This event bus."),(0,r.kt)("h4",{id:"overrides-3"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBus"},"EventBus"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBus#listenall"},"listenAll")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/event/EventBusImpl.ts#L99"},"packages/core/src/event/EventBusImpl.ts:99")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unlisten"},"unlisten"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"unlisten"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"eventTarget"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"eventName"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listener"),"): ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBusImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"EventBusImpl"))),(0,r.kt)("p",null,"Removes the provided event listener from the set of event listeners\nexecuted when the specified custom event fired by the same\nimplementation passes through the specified event target."),(0,r.kt)("p",null,"The method has no effect if the listener is not registered for the\nspecified event at the specified event target."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventTarget")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"EventTarget")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The event target at which the listener is listening for the event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventName")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the event listened for.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"listener")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/modules/ima_core#eventbuslistener"},(0,r.kt)("inlineCode",{parentName:"a"},"EventBusListener"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The event listener to deregister.")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBusImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"EventBusImpl"))),(0,r.kt)("p",null,"This event bus."),(0,r.kt)("h4",{id:"overrides-4"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBus"},"EventBus"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBus#unlisten"},"unlisten")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/event/EventBusImpl.ts#L222"},"packages/core/src/event/EventBusImpl.ts:222")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unlistenall"},"unlistenAll"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"unlistenAll"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"eventTarget"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listener"),"): ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBusImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"EventBusImpl"))),(0,r.kt)("p",null,"Removes the provided event listener from the set of event listeners\nexecuted when the any custom event fired by the same implementation\npasses through the specified event target."),(0,r.kt)("p",null,"The method has no effect if the listener is not registered at the\nspecified event target."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventTarget")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"EventTarget")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The event target at which the event listener listens for events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"listener")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/modules/ima_core#eventbuslistener"},(0,r.kt)("inlineCode",{parentName:"a"},"EventBusListener"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The event listener to deregister.")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBusImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"EventBusImpl"))),(0,r.kt)("p",null,"This event bus."),(0,r.kt)("h4",{id:"overrides-5"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBus"},"EventBus"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.EventBus#unlistenall"},"unlistenAll")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/event/EventBusImpl.ts#L181"},"packages/core/src/event/EventBusImpl.ts:181")))}u.isMDXComponent=!0}}]);