"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[7997],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>k});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},o=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),m=s(t),c=r,k=m["".concat(p,".").concat(c)]||m[c]||g[c]||i;return t?n.createElement(k,l(l({ref:a},o),{},{components:t})):n.createElement(k,l({ref:a},o))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var d={};for(var p in a)hasOwnProperty.call(a,p)&&(d[p]=a[p]);d.originalType=e,d[m]="string"==typeof e?e:r,l[1]=d;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4306:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=t(5773),r=(t(7294),t(3905));const i={id:"ima_core.PageHandlerRegistry",title:"Class: PageHandlerRegistry",sidebar_label:"@ima/core.PageHandlerRegistry",custom_edit_url:null},l=void 0,d={unversionedId:"api/classes/ima_core.PageHandlerRegistry",id:"api/classes/ima_core.PageHandlerRegistry",title:"Class: PageHandlerRegistry",description:"@ima/core.PageHandlerRegistry",source:"@site/../docs/api/classes/ima_core.PageHandlerRegistry.md",sourceDirName:"api/classes",slug:"/api/classes/ima_core.PageHandlerRegistry",permalink:"/api/classes/ima_core.PageHandlerRegistry",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.PageHandlerRegistry",title:"Class: PageHandlerRegistry",sidebar_label:"@ima/core.PageHandlerRegistry",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.PageHandler",permalink:"/api/classes/ima_core.PageHandler"},next:{title:"@ima/core.PageManager",permalink:"/api/classes/ima_core.PageManager"}},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_pageHandlers",id:"_pagehandlers",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_postManageHandlers",id:"_postmanagehandlers",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"_preManageHandlers",id:"_premanagehandlers",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"ExecutionMethod",id:"executionmethod",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"destroy",id:"destroy",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"handlePostManagedState",id:"handlepostmanagedstate",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"handlePreManagedState",id:"handlepremanagedstate",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"init",id:"init",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-8",level:4}],o={toc:s},m="wrapper";function g(e){let{components:a,...t}=e;return(0,r.kt)(m,(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".PageHandlerRegistry"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageHandler"},(0,r.kt)("inlineCode",{parentName:"a"},"PageHandler"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PageHandlerRegistry"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new PageHandlerRegistry"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"...pageHandlers"),")"),(0,r.kt)("p",null,"Creates an instance of HandlerRegistry and creates ",(0,r.kt)("inlineCode",{parentName:"p"},"SerialBatch"),"\ninstance for pre-handlers and post-handlers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Memberof"))),(0,r.kt)("p",null,"HandlerRegistry"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"...pageHandlers")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/classes/ima_core.PageHandler"},(0,r.kt)("inlineCode",{parentName:"a"},"PageHandler")),"[]")))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageHandler"},"PageHandler"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageHandler#constructor"},"constructor")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/f2ed725/packages/core/src/page/handler/PageHandlerRegistry.ts#L19"},"packages/core/src/page/handler/PageHandlerRegistry.ts:19")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"_pagehandlers"},"_","pageHandlers"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"_","pageHandlers"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageHandler"},(0,r.kt)("inlineCode",{parentName:"a"},"PageHandler")),"[]"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/f2ed725/packages/core/src/page/handler/PageHandlerRegistry.ts#L8"},"packages/core/src/page/handler/PageHandlerRegistry.ts:8")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_postmanagehandlers"},"_","postManageHandlers"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"_","postManageHandlers"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Execution"},(0,r.kt)("inlineCode",{parentName:"a"},"Execution"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/f2ed725/packages/core/src/page/handler/PageHandlerRegistry.ts#L10"},"packages/core/src/page/handler/PageHandlerRegistry.ts:10")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_premanagehandlers"},"_","preManageHandlers"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"_","preManageHandlers"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Execution"},(0,r.kt)("inlineCode",{parentName:"a"},"Execution"))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/f2ed725/packages/core/src/page/handler/PageHandlerRegistry.ts#L9"},"packages/core/src/page/handler/PageHandlerRegistry.ts:9")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"executionmethod"},"ExecutionMethod"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"ExecutionMethod"),": typeof ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.SerialBatch"},(0,r.kt)("inlineCode",{parentName:"a"},"SerialBatch"))," = ",(0,r.kt)("inlineCode",{parentName:"p"},"SerialBatch")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/f2ed725/packages/core/src/page/handler/PageHandlerRegistry.ts#L12"},"packages/core/src/page/handler/PageHandlerRegistry.ts:12")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"destroy"},"destroy"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"destroy"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Finalization callback, called when the page manager is being discarded.\nThis usually happens when the page is hot-reloaded at the client side."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"overrides-1"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageHandler"},"PageHandler"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageHandler#destroy"},"destroy")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/f2ed725/packages/core/src/page/handler/PageHandlerRegistry.ts#L87"},"packages/core/src/page/handler/PageHandlerRegistry.ts:87")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"handlepostmanagedstate"},"handlePostManagedState"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"handlePostManagedState"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"managedPage"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"previousManagedPage"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,r.kt)("p",null,"Executes the post-manage handlers with given arguments"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"managedPage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"ManagedPage"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"previousManagedPage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ManagedPage"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PageAction"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,r.kt)("h4",{id:"overrides-2"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageHandler"},"PageHandler"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageHandler#handlepostmanagedstate"},"handlePostManagedState")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/f2ed725/packages/core/src/page/handler/PageHandlerRegistry.ts#L72"},"packages/core/src/page/handler/PageHandlerRegistry.ts:72")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"handlepremanagedstate"},"handlePreManagedState"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"handlePreManagedState"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"managedPage"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nextManagedPage"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,r.kt)("p",null,"Executes the pre-manage handlers with given arguments"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"managedPage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"ManagedPage"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nextManagedPage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ManagedPage"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PageAction"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,r.kt)("h4",{id:"overrides-3"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageHandler"},"PageHandler"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageHandler#handlepremanagedstate"},"handlePreManagedState")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/f2ed725/packages/core/src/page/handler/PageHandlerRegistry.ts#L53"},"packages/core/src/page/handler/PageHandlerRegistry.ts:53")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"init"},"init"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"init"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Initializes the page handler."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"overrides-4"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageHandler"},"PageHandler"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageHandler#init"},"init")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/f2ed725/packages/core/src/page/handler/PageHandlerRegistry.ts#L28"},"packages/core/src/page/handler/PageHandlerRegistry.ts:28")))}g.isMDXComponent=!0}}]);