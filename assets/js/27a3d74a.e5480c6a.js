"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[1537],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(5773),i=(n(7294),n(3905));const a={id:"ima_core.AppEnvironment",title:"Interface: AppEnvironment",sidebar_label:"@ima/core.AppEnvironment",custom_edit_url:null},o=void 0,p={unversionedId:"api/interfaces/ima_core.AppEnvironment",id:"api/interfaces/ima_core.AppEnvironment",title:"Interface: AppEnvironment",description:"@ima/core.AppEnvironment",source:"@site/../docs/api/interfaces/ima_core.AppEnvironment.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ima_core.AppEnvironment",permalink:"/api/interfaces/ima_core.AppEnvironment",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.AppEnvironment",title:"Interface: AppEnvironment",sidebar_label:"@ima/core.AppEnvironment",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/cli.ImaConfigurationContext",permalink:"/api/interfaces/ima_cli.ImaConfigurationContext"},next:{title:"@ima/core.BootConfig",permalink:"/api/interfaces/ima_core.BootConfig"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"dev",id:"dev",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"prod",id:"prod",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"regression",id:"regression",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"test",id:"test",level:3},{value:"Defined in",id:"defined-in-3",level:4}],s={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".AppEnvironment"),(0,i.kt)("p",null,"App Environment structure, used in ./server/config/environment.js"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"dev"},"dev"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"dev"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"PartialObjectDeep"),"<",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/ima_core.Environment"},(0,i.kt)("inlineCode",{parentName:"a"},"Environment")),", {}",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/boot.ts#L118"},"packages/core/src/boot.ts:118")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"prod"},"prod"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"prod"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/ima_core.Environment"},(0,i.kt)("inlineCode",{parentName:"a"},"Environment"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/boot.ts#L117"},"packages/core/src/boot.ts:117")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"regression"},"regression"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"regression"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"PartialObjectDeep"),"<",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/ima_core.Environment"},(0,i.kt)("inlineCode",{parentName:"a"},"Environment")),", {}",">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/boot.ts#L120"},"packages/core/src/boot.ts:120")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"test"},"test"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"test"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"PartialObjectDeep"),"<",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/ima_core.Environment"},(0,i.kt)("inlineCode",{parentName:"a"},"Environment")),", {}",">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/boot.ts#L119"},"packages/core/src/boot.ts:119")))}d.isMDXComponent=!0}}]);