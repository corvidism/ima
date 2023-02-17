"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[5497],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(k,l(l({ref:t},s),{},{components:a})):r.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5494:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(5773),n=(a(7294),a(3905));const i={id:"ima_core.AbstractExecution",title:"Class: AbstractExecution",sidebar_label:"@ima/core.AbstractExecution",custom_edit_url:null},l=void 0,o={unversionedId:"api/classes/ima_core.AbstractExecution",id:"api/classes/ima_core.AbstractExecution",title:"Class: AbstractExecution",description:"@ima/core.AbstractExecution",source:"@site/../docs/api/classes/ima_core.AbstractExecution.md",sourceDirName:"api/classes",slug:"/api/classes/ima_core.AbstractExecution",permalink:"/api/classes/ima_core.AbstractExecution",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.AbstractExecution",title:"Class: AbstractExecution",sidebar_label:"@ima/core.AbstractExecution",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.AbstractController",permalink:"/api/classes/ima_core.AbstractController"},next:{title:"@ima/core.AbstractExtension",permalink:"/api/classes/ima_core.AbstractExtension"}},p={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_jobs",id:"_jobs",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"_validateJob",id:"_validatejob",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"append",id:"append",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"execute",id:"execute",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-4",level:4}],s={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".AbstractExecution"),(0,n.kt)("p",null,"Basic implementation of the ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Execution"},"Execution")," interface. Provides the basic\nfunctionality for appending and validating jobs."),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Execution"},(0,n.kt)("inlineCode",{parentName:"a"},"Execution"))),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"AbstractExecution"))),(0,n.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.SerialBatch"},(0,n.kt)("inlineCode",{parentName:"a"},"SerialBatch"))))),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new AbstractExecution"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"jobs?"),")"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"jobs")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Job"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"[]"))))),(0,n.kt)("h4",{id:"overrides"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Execution"},"Execution"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Execution#constructor"},"constructor")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/f2ed725/packages/core/src/execution/AbstractExecution.ts#L15"},"packages/core/src/execution/AbstractExecution.ts:15")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"_jobs"},"_","jobs"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,n.kt)("strong",{parentName:"p"},"_","jobs"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Job"),"[]"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/f2ed725/packages/core/src/execution/AbstractExecution.ts#L13"},"packages/core/src/execution/AbstractExecution.ts:13")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"_validatejob"},"_","validateJob"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"_validateJob"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"job"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"Return ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," if the given job can be executed"),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"job")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Job"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/f2ed725/packages/core/src/execution/AbstractExecution.ts#L45"},"packages/core/src/execution/AbstractExecution.ts:45")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"append"},"append"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"append"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"jobs"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Adds a new job to be executed. The job is appended at the end of the\nlist of current jobs therefore is executed last."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"jobs")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Job")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"Job"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The jobs to be executed.")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"overrides-1"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Execution"},"Execution"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Execution#append"},"append")),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/f2ed725/packages/core/src/execution/AbstractExecution.ts#L24"},"packages/core/src/execution/AbstractExecution.ts:24")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"execute"},"execute"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"execute"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"...args"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,n.kt)("p",null,"Start executing collected jobs. In the end a ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," is returned\nwith a resulting value. On the returned ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," a ",(0,n.kt)("inlineCode",{parentName:"p"},"catch"),"\nmethod can be called to prevent any unwanted interruption."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"...args")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"unknown"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Arguments to be passed when executing jobs")))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,n.kt)("h4",{id:"overrides-2"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Execution"},"Execution"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Execution#execute"},"execute")),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/corvidism/ima/blob/f2ed725/packages/core/src/execution/AbstractExecution.ts#L35"},"packages/core/src/execution/AbstractExecution.ts:35")))}u.isMDXComponent=!0}}]);