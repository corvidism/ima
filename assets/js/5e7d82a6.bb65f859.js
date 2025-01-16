"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[3108],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>v});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),l=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):d(d({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(p.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,v=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?t.createElement(v,d(d({ref:r},s),{},{components:n})):t.createElement(v,d({ref:r},s))}));function v(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,d=new Array(i);d[0]=m;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[c]="string"==typeof e?e:a,d[1]=o;for(var l=2;l<i;l++)d[l]=n[l];return t.createElement.apply(null,d)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3939:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=n(5773),a=(n(7294),n(3905));const i={id:"ima_core.RendererEvents",title:"Enumeration: RendererEvents",sidebar_label:"@ima/core.RendererEvents",custom_edit_url:null},d=void 0,o={unversionedId:"api/enums/ima_core.RendererEvents",id:"api/enums/ima_core.RendererEvents",title:"Enumeration: RendererEvents",description:"@ima/core.RendererEvents",source:"@site/../docs/api/enums/ima_core.RendererEvents.md",sourceDirName:"api/enums",slug:"/api/enums/ima_core.RendererEvents",permalink:"/api/enums/ima_core.RendererEvents",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.RendererEvents",title:"Enumeration: RendererEvents",sidebar_label:"@ima/core.RendererEvents",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.HttpStatusCode",permalink:"/api/enums/ima_core.HttpStatusCode"},next:{title:"@ima/core.RendererTypes",permalink:"/api/enums/ima_core.RendererTypes"}},p={},l=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"ERROR",id:"error",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"HYDRATE_ERROR",id:"hydrate_error",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"MOUNTED",id:"mounted",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"UNMOUNTED",id:"unmounted",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"UPDATED",id:"updated",level:3},{value:"Defined in",id:"defined-in-4",level:4}],s={toc:l},c="wrapper";function u(e){let{components:r,...n}=e;return(0,a.kt)(c,(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".RendererEvents"),(0,a.kt)("p",null,"Events constants, which is firing to app."),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.kt)("h3",{id:"error"},"ERROR"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ERROR")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"$IMA.$PageRenderer.error"')),(0,a.kt)("p",null,"PageRenderer fires event ",(0,a.kt)("inlineCode",{parentName:"p"},"$IMA.$PageRenderer.error")," when there is\nno _viewContainer in _renderToDOM method. Event's data contain\n",(0,a.kt)("inlineCode",{parentName:"p"},"{message: string}"),"."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/page/renderer/RendererEvents.ts#L31"},"packages/core/src/page/renderer/RendererEvents.ts:31")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hydrate_error"},"HYDRATE","_","ERROR"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"HYDRATE","_","ERROR")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"$IMA.$PageRenderer.hydrateError"')),(0,a.kt)("p",null,"Fired when problem occurs during hydratation."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/page/renderer/RendererEvents.ts#L36"},"packages/core/src/page/renderer/RendererEvents.ts:36")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"mounted"},"MOUNTED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"MOUNTED")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"$IMA.$PageRenderer.mounted"')),(0,a.kt)("p",null,"PageRenderer fires event ",(0,a.kt)("inlineCode",{parentName:"p"},"$IMA.$PageRenderer.mounted")," after\ncurrent page view is mounted to the DOM. Event's data contain\n",(0,a.kt)("inlineCode",{parentName:"p"},"{type: string}"),"."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/page/renderer/RendererEvents.ts#L10"},"packages/core/src/page/renderer/RendererEvents.ts:10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"unmounted"},"UNMOUNTED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"UNMOUNTED")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"$IMA.$PageRenderer.unmounted"')),(0,a.kt)("p",null,"PageRenderer fires event ",(0,a.kt)("inlineCode",{parentName:"p"},"$IMA.$PageRenderer.unmounted")," after current view is\nunmounted from the DOM. Event's data contain\n",(0,a.kt)("inlineCode",{parentName:"p"},"{type: string}"),"."),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/page/renderer/RendererEvents.ts#L24"},"packages/core/src/page/renderer/RendererEvents.ts:24")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"updated"},"UPDATED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"UPDATED")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"$IMA.$PageRenderer.updated"')),(0,a.kt)("p",null,"PageRenderer fires event ",(0,a.kt)("inlineCode",{parentName:"p"},"$IMA.$PageRenderer.updated")," after\ncurrent state is updated in the DOM. Event's data contain\n",(0,a.kt)("inlineCode",{parentName:"p"},"{state: Object<string, *>}"),"."),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/70684d4/packages/core/src/page/renderer/RendererEvents.ts#L17"},"packages/core/src/page/renderer/RendererEvents.ts:17")))}u.isMDXComponent=!0}}]);