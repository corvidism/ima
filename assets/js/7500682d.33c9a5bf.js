"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[9114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=p(n),N=r,c=k["".concat(o,".").concat(N)]||k[N]||s[N]||i;return n?a.createElement(c,d(d({ref:t},m),{},{components:n})):a.createElement(c,d({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=N;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[k]="string"==typeof e?e:r,d[1]=l;for(var p=2;p<i;p++)d[p]=n[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},1695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(5773),r=(n(7294),n(3905));const i={id:"ima_core.Environment",title:"Interface: Environment",sidebar_label:"@ima/core.Environment",custom_edit_url:null},d=void 0,l={unversionedId:"api/interfaces/ima_core.Environment",id:"api/interfaces/ima_core.Environment",title:"Interface: Environment",description:"@ima/core.Environment",source:"@site/../docs/api/interfaces/ima_core.Environment.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ima_core.Environment",permalink:"/api/interfaces/ima_core.Environment",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.Environment",title:"Interface: Environment",sidebar_label:"@ima/core.Environment",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.DispatcherEventsMap",permalink:"/api/interfaces/ima_core.DispatcherEventsMap"},next:{title:"@ima/core.GlobalImaObject",permalink:"/api/interfaces/ima_core.GlobalImaObject"}},o={},p=[{value:"Indexable",id:"indexable",level:2},{value:"Properties",id:"properties",level:2},{value:"$App",id:"app",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"$Debug",id:"debug",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"$Language",id:"language",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"$Resources",id:"resources",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-3",level:4},{value:"$Server",id:"server",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"$Version",id:"version",level:3},{value:"Defined in",id:"defined-in-5",level:4}],m={toc:p},k="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".Environment"),(0,r.kt)("p",null,"App environment for single env key."),(0,r.kt)("h2",{id:"indexable"},"Indexable"),(0,r.kt)("p",null,"\u25aa ","[key: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"app"},"$App"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"$App"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"$AppSettings")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/boot.ts#L61"},"packages/core/src/boot.ts:61")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"debug"},"$Debug"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"$Debug"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/boot.ts#L58"},"packages/core/src/boot.ts:58")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"language"},"$Language"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"$Language"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/boot.ts#L59"},"packages/core/src/boot.ts:59")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"resources"},"$Resources"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"$Resources"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"response"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/ima_core.Manifest"},(0,r.kt)("inlineCode",{parentName:"a"},"Manifest")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultResources"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/ima_core.Resources"},(0,r.kt)("inlineCode",{parentName:"a"},"Resources")),") => ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/ima_core.Resources"},(0,r.kt)("inlineCode",{parentName:"a"},"Resources"))),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultResources"),"): ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/ima_core.Resources"},(0,r.kt)("inlineCode",{parentName:"a"},"Resources"))),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"response")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"manifest")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/ima_core.Manifest"},(0,r.kt)("inlineCode",{parentName:"a"},"Manifest")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"defaultResources")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/ima_core.Resources"},(0,r.kt)("inlineCode",{parentName:"a"},"Resources")))))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/ima_core.Resources"},(0,r.kt)("inlineCode",{parentName:"a"},"Resources"))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/boot.ts#L62"},"packages/core/src/boot.ts:62")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"server"},"$Server"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"$Server"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cache")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"cacheKeyGenerator?"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"req"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Request"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ParamsDictionary"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ParsedQs"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">",">",") => ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"enabled"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," (",(0,r.kt)("inlineCode",{parentName:"td"},"req"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Request"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ParamsDictionary"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ParsedQs"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">",">",") => ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"entryTtl"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"maxEntries"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"unusedEntryTtl"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),"  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cache.cacheKeyGenerator?")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"req"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Request"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ParamsDictionary"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ParsedQs"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">",">",") => ",(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cache.enabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," (",(0,r.kt)("inlineCode",{parentName:"td"},"req"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Request"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ParamsDictionary"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ParsedQs"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">",">",") => ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cache.entryTtl")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cache.maxEntries")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cache.unusedEntryTtl")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"clusters")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"concurrency")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"host?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," (",(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters"),": { ",(0,r.kt)("inlineCode",{parentName:"td"},"environment"),": ",(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/ima_core.Environment"},(0,r.kt)("inlineCode",{parentName:"a"},"Environment"))," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"host"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"req"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Request"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ParamsDictionary"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ParsedQs"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">",">","  }) => ",(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"logger")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"formatting"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"dev"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"simple"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"JSON"'),"  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"logger.formatting")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"dev"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"simple"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"JSON"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"overloadConcurrency")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"protocol?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"http:"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"https:"')," ","|"," (",(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters"),": { ",(0,r.kt)("inlineCode",{parentName:"td"},"environment"),": ",(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/ima_core.Environment"},(0,r.kt)("inlineCode",{parentName:"a"},"Environment"))," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"protocol"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"req"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Request"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ParamsDictionary"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ParsedQs"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">",">","  }) => ",(0,r.kt)("inlineCode",{parentName:"td"},'"http:"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"https:"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"serveSPA")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"allow"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"blackList?"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"userAgent"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean"),"  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"serveSPA.allow")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"serveSPA.blackList?")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"userAgent"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"staticConcurrency")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"staticPath")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/boot.ts#L67"},"packages/core/src/boot.ts:67")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"version"},"$Version"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"$Version"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/boot.ts#L60"},"packages/core/src/boot.ts:60")))}s.isMDXComponent=!0}}]);