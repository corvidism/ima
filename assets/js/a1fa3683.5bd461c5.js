"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[3401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(5773),o=(n(7294),n(3905));const r={title:"Middlewares",description:"Basic features > Routing > Middlewares"},i=void 0,l={unversionedId:"basic-features/routing/middlewares",id:"basic-features/routing/middlewares",title:"Middlewares",description:"Basic features > Routing > Middlewares",source:"@site/../docs/basic-features/routing/middlewares.md",sourceDirName:"basic-features/routing",slug:"/basic-features/routing/middlewares",permalink:"/basic-features/routing/middlewares",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/basic-features/routing/middlewares.md",tags:[],version:"current",lastUpdatedBy:"PS",lastUpdatedAt:1736752325,formattedLastUpdatedAt:"Jan 13, 2025",frontMatter:{title:"Middlewares",description:"Basic features > Routing > Middlewares"},sidebar:"docs",previous:{title:"Dynamic Routes",permalink:"/basic-features/routing/dynamic-routes"},next:{title:"Async Routing",permalink:"/basic-features/routing/async-routing"}},s={},c=[{value:"Function arguments",id:"function-arguments",level:2},{value:"params",id:"params",level:3},{value:"locals",id:"locals",level:3},{value:"route",id:"route",level:4},{value:"action",id:"action",level:4},{value:"next",id:"next",level:3},{value:"Execution order",id:"execution-order",level:2},{value:"Execution timeout",id:"execution-timeout",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Middlewares are simple functions that run before/after route handlers. They can be used to restrict access to certain set of routes or act based on parsed route params."),(0,o.kt)("p",null,"There are two types of middleware ",(0,o.kt)("strong",{parentName:"p"},"global")," and ",(0,o.kt)("strong",{parentName:"p"},"local"),". As the names suggest the first one is defined globally on the router instance using ",(0,o.kt)("inlineCode",{parentName:"p"},"use()")," method and the second type is bound to specific route and is defined in the route ",(0,o.kt)("inlineCode",{parentName:"p"},"options.middlewares")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=./app/config/routes.js",title:"./app/config/routes.js"},"// The imports are stripped for compactness.\nexport let init = (ns, oc, config) => {\n  const router = oc.get('$Router');\n\n  router\n    .use(async (params, locals) => {\n      console.log('Global middleware', params, locals, locals.route, locals.action);\n      locals.counter = 0;\n    });\n    .add('home', '/', HomeController, HomeView, {\n      middlewares: [\n        async (params, locals, next) => {\n          next({ counter: counter++ });\n        }\n      ]\n    })\n    .add(RouteNames.ERROR, '/error', ErrorController, ErrorView)\n    .add(RouteNames.NOT_FOUND, '/not-found', NotFoundController, NotFoundView);\n}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Since you have access to the object container (",(0,o.kt)("inlineCode",{parentName:"p"},"oc"),"), you can basically do anything you want in the middlewares."),(0,o.kt)("p",{parentName:"admonition"},"You can easily define authentication middlewares or access-restricting middlewares since throwing an error from the middleware is handled the same way as any other error in the application.")),(0,o.kt)("h2",{id:"function-arguments"},"Function arguments"),(0,o.kt)("p",null,"Each middleware can be ",(0,o.kt)("strong",{parentName:"p"},"async")," and the functions can use up to three arguments: ",(0,o.kt)("inlineCode",{parentName:"p"},"params"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"locals")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"next"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," specifically allows you to modify route params, ",(0,o.kt)("inlineCode",{parentName:"p"},"locals")," is used to pass data between middlewares and ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," callback provides additional"),(0,o.kt)("h3",{id:"params"},"params"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"object = {}"))),(0,o.kt)("p",null,"Contains route params extracted by the ",(0,o.kt)("strong",{parentName:"p"},"currently matched route handler"),". Can be empty if there was no route match before execution of concrete middleware."),(0,o.kt)("h3",{id:"locals"},"locals"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"RouteLocals = {}"))),(0,o.kt)("p",null,"Mutable object you can use to pass data between middlewares. It is passed across all middlewares, so anything you define here, is available in following middleware functions."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In addition to mutating the original object, you can also ",(0,o.kt)("strong",{parentName:"p"},"return object values from middlewares")," or pass them as an argument in the ",(0,o.kt)("inlineCode",{parentName:"p"},"next()")," function. These are then merged into the ",(0,o.kt)("inlineCode",{parentName:"p"},"locals")," upon it's execution."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async (params, locals) => {\n  locals.counter++;\n}\n\n// or\n\nasync (params, locals) => {\n  return { counter: counter++ };\n}\n\n// or\n\nasync (params, locals, next) => {\n  next({ counter: counter++ });\n}\n"))),(0,o.kt)("p",null,"Additionally it always contains following keys:"),(0,o.kt)("h4",{id:"route"},"route"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"AbstractRoute"))),(0,o.kt)("p",null,"Instance of currently matched route."),(0,o.kt)("h4",{id:"action"},"action"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"RouteAction = {}"))),(0,o.kt)("p",null,"An action object describing what triggered this routing (can be empty)."),(0,o.kt)("h3",{id:"next"},"next"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"(result?: object) => void"))),(0,o.kt)("p",null,"When called, this function (as the name suggest) allows you to continue with execution of other route handlers. Apart from other frameworks that use similar feature, when you define ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," argument in your middleware, ",(0,o.kt)("strong",{parentName:"p"},"you have to execute it in order to continue"),". Otherwise the router will not proceed any further even if the middleware function content finished it's execution."),(0,o.kt)("p",null,"This is intentional as it allows you to have more control over the middleware execution and gives you ability to stop the routing process completely."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This is can be usefull in situations when for example you want to do a redirect, which is synchronous but takes a while until the window is reloaded. Without stopping the middleware execution (by defining the ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," callback and not calling it), you could get a glimpse of Error Page that is rendered before the redirect takes places, because the router continued it's processing."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async (params, locals, next) => {\n  if (await oc.get('User').isLoggedIn()) {\n    // Continue normally\n    return next();\n  }\n\n  // Stop execution by not calling `next()` and do a redirect\n  oc.get('$Router').redirect('/');\n}\n"))),(0,o.kt)("h2",{id:"execution-order"},"Execution order"),(0,o.kt)("p",null,"Middleware functions are resolved ",(0,o.kt)("strong",{parentName:"p"},"from top to bottom sequentially"),". In case of the code above, when routing to ",(0,o.kt)("inlineCode",{parentName:"p"},"home")," route, following things would have happened:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Global middlewares")," defined above currently matched route are executed (in this case we have only one global middleware, defined above all routes)."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Params extraction")," from currently matched route handler (home) is executed."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Local route")," middlewares are executed (with newly extracted route params).")),(0,o.kt)("p",null,"In case of an ",(0,o.kt)("strong",{parentName:"p"},"error")," or not ",(0,o.kt)("strong",{parentName:"p"},"found page"),", the execution order is still ",(0,o.kt)("strong",{parentName:"p"},"the same"),", meaning the global and route middlewares are executed as with any other route."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"There's only one exception, since the ",(0,o.kt)("inlineCode",{parentName:"p"},"locals")," object is cleared to an empty object before route handling, if an error occurs during route handling and execution is internally passed to error handling (displaying error page), the locals object may retain values that were there for the previous route matching. However the ",(0,o.kt)("inlineCode",{parentName:"p"},"locals.route")," object will still be up to date and equal to currently routed route (error in this case).")),(0,o.kt)("h2",{id:"execution-timeout"},"Execution timeout"),(0,o.kt)("p",null,"To prevent middlewares from freezing the application, for example when the middlewares takes too long to execute, we've implemented execution timeout, which prevents them from running indefinitely."),(0,o.kt)("p",null,"You can ",(0,o.kt)("strong",{parentName:"p"},"customize the timeout value")," in app settings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./app/config/settings.js"',title:'"./app/config/settings.js"'},"export default (ns, oc, config) => {\n  return {\n    prod: {\n      $Router: {\n        middlewareTimeout: 30000, // ms\n      },\n    },\n  };\n};\n")))}p.isMDXComponent=!0}}]);