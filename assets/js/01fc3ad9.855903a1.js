"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[7300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(5773),a=(n(7294),n(3905));const o={id:"ima_core.RouterEvents",title:"Enumeration: RouterEvents",sidebar_label:"@ima/core.RouterEvents",custom_edit_url:null},i=void 0,l={unversionedId:"api/enums/ima_core.RouterEvents",id:"api/enums/ima_core.RouterEvents",title:"Enumeration: RouterEvents",description:"@ima/core.RouterEvents",source:"@site/../docs/api/enums/ima_core.RouterEvents.md",sourceDirName:"api/enums",slug:"/api/enums/ima_core.RouterEvents",permalink:"/api/enums/ima_core.RouterEvents",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.RouterEvents",title:"Enumeration: RouterEvents",sidebar_label:"@ima/core.RouterEvents",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.RouteNames",permalink:"/api/enums/ima_core.RouteNames"},next:{title:"@ima/core.StateEvents",permalink:"/api/enums/ima_core.StateEvents"}},s={},u=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"AFTER_HANDLE_ROUTE",id:"after_handle_route",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"AFTER_LOADING_ASYNC_ROUTE",id:"after_loading_async_route",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"BEFORE_HANDLE_ROUTE",id:"before_handle_route",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"BEFORE_LOADING_ASYNC_ROUTE",id:"before_loading_async_route",level:3},{value:"Defined in",id:"defined-in-3",level:4}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".RouterEvents"),(0,a.kt)("p",null,"Events constants, which is firing to app."),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.kt)("h3",{id:"after_handle_route"},"AFTER","_","HANDLE","_","ROUTE"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"AFTER","_","HANDLE","_","ROUTE")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"$IMA.$Router.afterHandleRoute"')),(0,a.kt)("p",null,"Router fire event ",(0,a.kt)("inlineCode",{parentName:"p"},"$IMA.$Router.afterHandleRoute")," after page\nmanager handle the route. Event's data contain\n",(0,a.kt)("inlineCode",{parentName:"p"},"{response: Object<string, *>, params: Object<string, string>"),",\nroute: ima.core.router.AbstractRoute, path: string, options: Object<string, *>}}.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," is page render result. The ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," is current\npath, the ",(0,a.kt)("inlineCode",{parentName:"p"},"params")," are params extracted from path, the\n",(0,a.kt)("inlineCode",{parentName:"p"},"route")," is handle route for path and the ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," is route\nadditional options."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/router/RouterEvents.ts#L26"},"packages/core/src/router/RouterEvents.ts:26")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"after_loading_async_route"},"AFTER","_","LOADING","_","ASYNC","_","ROUTE"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"AFTER","_","LOADING","_","ASYNC","_","ROUTE")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"$IMA.$Router.afterLoadingAsyncRoute"')),(0,a.kt)("p",null,"Event fired when router finishes loading of async view\nand controller. If both are sync this is never fired."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/router/RouterEvents.ts#L38"},"packages/core/src/router/RouterEvents.ts:38")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"before_handle_route"},"BEFORE","_","HANDLE","_","ROUTE"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"BEFORE","_","HANDLE","_","ROUTE")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"$IMA.$Router.beforeHandleRoute"')),(0,a.kt)("p",null,"Router fire event ",(0,a.kt)("inlineCode",{parentName:"p"},"$IMA.$Router.beforeHandleRoute")," before page\nmanager handle the route. Event's data contain\n",(0,a.kt)("inlineCode",{parentName:"p"},"{ params: Object<string, string>"),", route: ima.core.router.AbstractRoute,\npath: string, options: Object<string, *>}}. The ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," is current\npath, the ",(0,a.kt)("inlineCode",{parentName:"p"},"params")," are params extracted from path, the\n",(0,a.kt)("inlineCode",{parentName:"p"},"route")," is handle route for path and the ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," is route\nadditional options."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/router/RouterEvents.ts#L14"},"packages/core/src/router/RouterEvents.ts:14")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"before_loading_async_route"},"BEFORE","_","LOADING","_","ASYNC","_","ROUTE"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"BEFORE","_","LOADING","_","ASYNC","_","ROUTE")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"$IMA.$Router.beforeLoadingAsyncRoute"')),(0,a.kt)("p",null,"Fired right before loading view and controller when either\nview or controller is async (or both)."),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/router/RouterEvents.ts#L32"},"packages/core/src/router/RouterEvents.ts:32")))}d.isMDXComponent=!0}}]);