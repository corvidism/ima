"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[9557],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=o(a),N=r,u=m["".concat(d,".").concat(N)]||m[N]||k[N]||i;return a?n.createElement(u,p(p({ref:t},s),{},{components:a})):n.createElement(u,p({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=N;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:r,p[1]=l;for(var o=2;o<i;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},6424:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=a(5773),r=(a(7294),a(3905));const i={id:"ima_core.HttpAgent",title:"Class: HttpAgent",sidebar_label:"@ima/core.HttpAgent",custom_edit_url:null},p=void 0,l={unversionedId:"api/classes/ima_core.HttpAgent",id:"api/classes/ima_core.HttpAgent",title:"Class: HttpAgent",description:"@ima/core.HttpAgent",source:"@site/../docs/api/classes/ima_core.HttpAgent.md",sourceDirName:"api/classes",slug:"/api/classes/ima_core.HttpAgent",permalink:"/api/classes/ima_core.HttpAgent",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.HttpAgent",title:"Class: HttpAgent",sidebar_label:"@ima/core.HttpAgent",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.GenericError",permalink:"/api/classes/ima_core.GenericError"},next:{title:"@ima/core.HttpAgentImpl",permalink:"/api/classes/ima_core.HttpAgentImpl"}},d={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"clearDefaultHeaders",id:"cleardefaultheaders",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"delete",id:"delete",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"get",id:"get",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getCacheKey",id:"getcachekey",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"invalidateCache",id:"invalidatecache",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"patch",id:"patch",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"post",id:"post",level:3},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"put",id:"put",level:3},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"setDefaultHeader",id:"setdefaultheader",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-8",level:4}],s={toc:o},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".HttpAgent"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.HttpAgent"},"HttpAgent")," defines unifying API for sending HTTP requests at\nboth client-side and server-side."),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"HttpAgent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.HttpAgentImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgentImpl"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.HttpAgentImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgentImpl"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new HttpAgent"),"()"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"cleardefaultheaders"},"clearDefaultHeaders"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"clearDefaultHeaders"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.HttpAgent"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgent"))),(0,r.kt)("p",null,"Clears all configured default headers."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.HttpAgent"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgent"))),(0,r.kt)("p",null,"This HTTP agent."),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/http/HttpAgent.ts#L214"},"packages/core/src/http/HttpAgent.ts:214")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"delete"},"delete"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"delete"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"B"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core#httpagentresponse"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgentResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"B"),">",">"),(0,r.kt)("p",null,"Sends an HTTP DELETE request to the specified URL, sending the provided\ndata as the request body. If an object is provided as the request data,\nthe data will be JSON-encoded. Sending other primitive non-string values\nas the request body is not supported."),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"B")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The URL to which the request should be made.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/modules/ima_core#unknownparameters"},(0,r.kt)("inlineCode",{parentName:"a"},"UnknownParameters"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data to send to the server as the request body.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/ima_core.HttpAgentRequestOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgentRequestOptions")),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional request options.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core#httpagentresponse"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgentResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"B"),">",">"),(0,r.kt)("p",null,"A promise that resolves to the\nresponse."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/http/HttpAgent.ts#L164"},"packages/core/src/http/HttpAgent.ts:164")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"get"},"get"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"get"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"B"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core#httpagentresponse"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgentResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"B"),">",">"),(0,r.kt)("p",null,"Sends an HTTP GET request to the specified URL, sending the provided\ndata as query parameters."),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"B")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The URL to which the request should be made.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/modules/ima_core#unknownparameters"},(0,r.kt)("inlineCode",{parentName:"a"},"UnknownParameters"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data to send to the server as query parameters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/ima_core.HttpAgentRequestOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgentRequestOptions")),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional request options.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core#httpagentresponse"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgentResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"B"),">",">"),(0,r.kt)("p",null,"A promise that resolves to the\nresponse."),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/http/HttpAgent.ts#L80"},"packages/core/src/http/HttpAgent.ts:80")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcachekey"},"getCacheKey"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getCacheKey"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"method"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Generates a cache key to use for identifying a request to the specified\nURL using the specified HTTP method, submitting the provided data."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"method")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The HTTP method used by the request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The URL to which the request is sent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/modules/ima_core#unknownparameters"},(0,r.kt)("inlineCode",{parentName:"a"},"UnknownParameters"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data associated with the request. These can be either the query parameters or request body data.")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The key to use for identifying such a request in the\ncache."),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/http/HttpAgent.ts#L184"},"packages/core/src/http/HttpAgent.ts:184")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"invalidatecache"},"invalidateCache"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"invalidateCache"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"method"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Method invalidate cache for given params"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"method")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/modules/ima_core#unknownparameters"},(0,r.kt)("inlineCode",{parentName:"a"},"UnknownParameters")))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/http/HttpAgent.ts#L191"},"packages/core/src/http/HttpAgent.ts:191")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"patch"},"patch"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"patch"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"B"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core#httpagentresponse"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgentResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"B"),">",">"),(0,r.kt)("p",null,"Sends an HTTP PATCH request to the specified URL, sending the provided\ndata as the request body. If an object is provided as the request data,\nthe data will be JSON-encoded. Sending other primitive non-string values\nas the request body is not supported."),(0,r.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"B")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The URL to which the request should be made.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/modules/ima_core#unknownparameters"},(0,r.kt)("inlineCode",{parentName:"a"},"UnknownParameters"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data to send to the server as the request body.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/ima_core.HttpAgentRequestOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgentRequestOptions")),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional request options.")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core#httpagentresponse"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgentResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"B"),">",">"),(0,r.kt)("p",null,"A promise that resolves to the\nresponse."),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/http/HttpAgent.ts#L143"},"packages/core/src/http/HttpAgent.ts:143")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"post"},"post"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"post"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"B"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core#httpagentresponse"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgentResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"B"),">",">"),(0,r.kt)("p",null,"Sends an HTTP POST request to the specified URL, sending the provided\ndata as the request body. If an object is provided as the request data,\nthe data will be JSON-encoded. Sending other primitive non-string values\nas the request body is not supported."),(0,r.kt)("h4",{id:"type-parameters-3"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"B")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The URL to which the request should be made.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/modules/ima_core#unknownparameters"},(0,r.kt)("inlineCode",{parentName:"a"},"UnknownParameters"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data to send to the server as the request body.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/ima_core.HttpAgentRequestOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgentRequestOptions")),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional request options.")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core#httpagentresponse"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgentResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"B"),">",">"),(0,r.kt)("p",null,"A promise that resolves to the\nresponse."),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/http/HttpAgent.ts#L101"},"packages/core/src/http/HttpAgent.ts:101")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"put"},"put"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"put"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"B"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core#httpagentresponse"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgentResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"B"),">",">"),(0,r.kt)("p",null,"Sends an HTTP PUT request to the specified URL, sending the provided\ndata as the request body. If an object is provided as the request data,\nthe data will be JSON-encoded. Sending other primitive non-string values\nas the request body is not supported."),(0,r.kt)("h4",{id:"type-parameters-4"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"B")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The URL to which the request should be made.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/modules/ima_core#unknownparameters"},(0,r.kt)("inlineCode",{parentName:"a"},"UnknownParameters"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data to send to the server as the request body.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/ima_core.HttpAgentRequestOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgentRequestOptions")),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional request options.")))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core#httpagentresponse"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgentResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"B"),">",">"),(0,r.kt)("p",null,"A promise that resolves to the\nresponse."),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/http/HttpAgent.ts#L122"},"packages/core/src/http/HttpAgent.ts:122")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setdefaultheader"},"setDefaultHeader"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setDefaultHeader"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"header"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.HttpAgent"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgent"))),(0,r.kt)("p",null,"Sets the specified header to be sent with every subsequent HTTP request,\nunless explicitly overridden by request options."),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"header")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the header.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The header value. To provide multiple values, separate them with commas (see ",(0,r.kt)("a",{parentName:"td",href:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.2"},"http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.2"),").")))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.HttpAgent"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgent"))),(0,r.kt)("p",null,"This HTTP agent."),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/http/HttpAgent.ts#L205"},"packages/core/src/http/HttpAgent.ts:205")))}k.isMDXComponent=!0}}]);