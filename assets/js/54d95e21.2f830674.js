"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[5747],{7359:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/static-view-null-12294c9d858733d2999a6cc712166ca3.png"},8065:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/static-view-styling-our-form-0b8cf4b31368ef0ad49b2c44f2be15f0.png"},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1683:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(8944);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},6745:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(5773),o=n(7294),r=n(8944),i=n(2466),s=n(3620),l=n(1980),c=n(7392),p=n(12);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function u(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=u(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[l,c]=h({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,p.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),b=(()=>{const e=l??d;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,r]),tabValues:r}}var b=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==s&&(d(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:u},i,{className:(0,r.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",v.tabList)},o.createElement(g,(0,a.Z)({},e,t)),o.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},5475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(5773),o=(n(7294),n(3905)),r=n(6745),i=n(1683);const s={title:"Static View",description:"Tutorial > Static View"},l=void 0,c={unversionedId:"tutorial/static-view",id:"tutorial/static-view",title:"Static View",description:"Tutorial > Static View",source:"@site/../docs/tutorial/static-view.mdx",sourceDirName:"tutorial",slug:"/tutorial/static-view",permalink:"/tutorial/static-view",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/tutorial/static-view.mdx",tags:[],version:"current",lastUpdatedBy:"PS",lastUpdatedAt:1736752325,formattedLastUpdatedAt:"Jan 13, 2025",frontMatter:{title:"Static View",description:"Tutorial > Static View"},sidebar:"tutorial",previous:{title:"Introduction",permalink:"/tutorial/introduction"},next:{title:"Adding Some State",permalink:"/tutorial/adding-some-state"}},p={},d=[{value:"View Component",id:"view-component",level:2},{value:"Guestbook form &amp; SMACSS",id:"guestbook-form--smacss",level:3},{value:"Styling our form",id:"styling-our-form",level:3},{value:"Defining custom styles",id:"defining-custom-styles",level:4},{value:"Rendering the whole document",id:"rendering-the-whole-document",level:3},{value:"Notes on ES2015 modules and IMA.js namespaces",id:"notes-on-es2015-modules-and-imajs-namespaces",level:3}],u={toc:d},m="wrapper";function h(e){let{components:t,...s}=e;return(0,o.kt)(m,(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"./introduction"},"first part")," we went through introduction to IMA.js and initialized our first\napplication using ",(0,o.kt)("inlineCode",{parentName:"p"},"create-ima-app")," command. In the second part of the tutorial\nwe'll actually do some coding and prepare basic Views for our guest book application."),(0,o.kt)("h2",{id:"view-component"},"View Component"),(0,o.kt)("p",null,"Open up the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/page/home/HomeView.jsx")," file in your code editor. You will see a\nsingle ES2015 class named ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeView"),", extending the ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractComponent")," class\n(which in turn extends the\n",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/component-api.html"},(0,o.kt)("inlineCode",{parentName:"a"},"React.Component")),"\nclass). You can read more about components and views in the ",(0,o.kt)("a",{parentName:"p",href:"/basic-features/views-and-components"},"documentation"),"."),(0,o.kt)("p",null,"Now let's replace the contents of the file with a blank view:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { PageContext, AbstractComponent } from '@ima/react-page-renderer';\nimport React from 'react';\nimport './homeView.less';\n\nexport class HomeView extends AbstractComponent {\n  static get contextType() {\n    return PageContext;\n  }\n\n  render() {\n    return null;\n  }\n}\n"))),(0,o.kt)(i.Z,{value:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { usePageContext } from '@ima/react-page-renderer';\nimport './homeView.less';\n\nexport function HomeView() {\n  const _pageContext = usePageContext();\n\n  return null;\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"TypeScript: ")," With functional components we have to use ",(0,o.kt)("inlineCode",{parentName:"p"},"usePageContext()")," hook,\nthat provides us direct access to the IMA Page context. You can find more about the hooks provided by IMA at\n",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@ima/react-hooks"},"@ima/react-hooks"),".")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"There is also no need for any constructor or render method, so we do not have to worry about implementing the\n",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractComponent")," class to our functional component, and we can directly output the content with ",(0,o.kt)("inlineCode",{parentName:"p"},"return"),".")))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeView")," class defines the ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," method. Notice that our current\n",(0,o.kt)("inlineCode",{parentName:"p"},"HomeView")," class does not have the ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor()")," method, as the default\none provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractComponent")," class will do in this case."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor()")," is the class constructor (an object initializer, if you\nwill) that sets the component's initial properties (",(0,o.kt)("inlineCode",{parentName:"p"},"props"),") and context. The\n",(0,o.kt)("inlineCode",{parentName:"p"},"props")," object represents the properties set on our view component by the\ncode using it (",(0,o.kt)("em",{parentName:"p"},"the properties are set using the element attributes in JSX,\nyou can find our more about this\n",(0,o.kt)("a",{parentName:"em",href:"http://facebook.github.io/react/docs/getting-started.html"},"here")),'). The\ncontext is an object representing the "globals" for the React components in\nthe application. IMA.js uses the context to pass view utils to components,\nyou can find out more about it\n',(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/context.html"},"here"),"."),(0,o.kt)("p",null,"There's also static getter ",(0,o.kt)("inlineCode",{parentName:"p"},"contextType()")," which returns ",(0,o.kt)("inlineCode",{parentName:"p"},"PageContext"),", that\nby default provides the component access to global ",(0,o.kt)("inlineCode",{parentName:"p"},"$Utils")," object in the component context.\nThis object is very useful as we can bind custom helper methods to it in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"bind.js"),"file with the help of Object Container. But we'll talk about this a bit more\n",(0,o.kt)("a",{parentName:"p",href:"./fetching-data.md#dependency-injection"},"later in this tutorial")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," method creates and returns a React element that represents the\nview in the UI. Our ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," method returns ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," because our component does\nnot have a UI yet."),(0,o.kt)("p",null,"Now that we know our way around our component, let's replace the contents of\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," method with the following code:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"return <div className=\"l-home container\">Hello {'World'}!</div>;\n"))),(0,o.kt)(i.Z,{value:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"return <div className=\"l-home container\">Hello {'World'}!</div>;\n")))),(0,o.kt)("p",null,"The \"HTML\" code you see is actually an XML markup with JavaScript expressions\nembedded within curly braces. This markup is processed automatically by Babel's\nJSX transformer into ordinary JavaScript expressions creating React elements\n(React's virtual DOM allowing rendering at both the client and the server side).\nThis combination of JavaScript and XML is commonly referred to as JSX and you\ncan find out more about it\n",(0,o.kt)("a",{parentName:"p",href:"http://facebook.github.io/react/docs/jsx-in-depth.html"},"here"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," method must always return a React element (or a similar plain\nobject, or ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"), so it can be properly rendered at both the client and\nserver. Never attempt to create an actual DOM element in your view - your\napplication will most likely break! This is because your code is run at the\nserver first, where no DOM is available, and polyfilling it, while possible,\nwould introduce a large overhead. Additionally, since the UI is rendered using\nReact which modifies the DOM at the client side, any changes to the DOM you would\nmanage to make would likely be lost with the next update of the page's UI."),(0,o.kt)("p",null,"If everything went well you should see the following page when you refresh your browser:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7359).Z,width:"2400",height:"913"})),(0,o.kt)("h3",{id:"guestbook-form--smacss"},"Guestbook form & SMACSS"),(0,o.kt)("p",null,"Let's modify the return value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," method to look like this:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'return (\n      <div className="l-home container">\n        <h1>Guestbook</h1>\n\n        <div className="posting-form card">\n          <form action="" method="post">\n            <h5 className="card-header">Add a post</h5>\n            <div className="card-body">\n              <div className="form-group">\n                <label htmlFor="postForm-name">Name:</label>\n                <input\n                  id="postForm-name"\n                  className="form-control"\n                  type="text"\n                  name="author"\n                  placeholder="Your name"\n                />\n              </div>\n              <div className="form-group">\n                <label htmlFor="postForm-content">Post:</label>\n                <textarea\n                  id="postForm-content"\n                  className="form-control"\n                  name="content"\n                  placeholder="What would you like to tell us?"\n                />\n              </div>\n            </div>\n            <div className="card-footer">\n              <button type="submit" className="btn btn btn-outline-primary">\n                Submit\n                <div className="ripple-wrapper" />\n              </button>\n            </div>\n          </form>\n        </div>\n        <hr />\n        <div className="posts">\n          <h2>Posts</h2>\n          <div className="post card card-default">\n            <div className="card-body">Never mistake motion for action.</div>\n            <div className="post-author card-footer">Ernest Hemingway</div>\n          </div>\n          <div className="post card card-default">\n            <div className="card-body">\n              Quality means doing it right when no one is looking.\n            </div>\n            <div className="post-author card-footer">Henry Ford</div>\n          </div>\n          <div className="post card card-default">\n            <div className="card-body">\n              We are what we repeatedly do. Excellence, then, is not an act, but\n              a habit.\n            </div>\n            <div className="post-author card-footer">Aristotle</div>\n          </div>\n          <div className="post card card-default">\n            <div className="card-body">\n              Reality is merely an illusion, albeit a very persistent one.\n            </div>\n            <div className="post-author card-footer">Albert Einstein</div>\n          </div>\n        </div>\n      </div>\n    );\n'))),(0,o.kt)(i.Z,{value:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { usePageContext } from '@ima/react-page-renderer';\nimport './homeView.less';\n\nexport function HomeView() {\n  const _pageContext = usePageContext();\n\n  return (\n    <div className='l-home container'>\n      <h1>Guestbook</h1>\n\n      <div className='posting-form card'>\n        <form action='' method='post'>\n          <h5 className='card-header'>Add a post</h5>\n          <div className='card-body'>\n            <div className='form-group'>\n              <label htmlFor='postForm-name'>Name:</label>\n              <input\n                id='postForm-name'\n                className='form-control'\n                type='text'\n                name='author'\n                placeholder='Your name'\n              />\n            </div>\n            <div className='form-group'>\n              <label htmlFor='postForm-content'>Post:</label>\n              <textarea\n                id='postForm-content'\n                className='form-control'\n                name='content'\n                placeholder='What would you like to tell us?'\n              />\n            </div>\n          </div>\n          <div className='card-footer'>\n            <button type='submit' className='btn btn btn-outline-primary'>\n              Submit\n              <div className='ripple-wrapper' />\n            </button>\n          </div>\n        </form>\n      </div>\n      <hr />\n      <div className='posts'>\n        <h2>Posts</h2>\n        <div className='post card card-default'>\n          <div className='card-body'>Never mistake motion for action.</div>\n          <div className='post-author card-footer'>Ernest Hemingway</div>\n        </div>\n        <div className='post card card-default'>\n          <div className='card-body'>\n          Quality means doing it right when no one is looking.\n          </div>\n          <div className='post-author card-footer'>Henry Ford</div>\n        </div>\n        <div className='post card card-default'>\n          <div className='card-body'>\n          We are what we repeatedly do. Excellence, then, is not an act, but a\n          habit.\n          </div>\n          <div className='post-author card-footer'>Aristotle</div>\n        </div>\n        <div className='post card card-default'>\n          <div className='card-body'>\n          Reality is merely an illusion, albeit a very persistent one.\n          </div>\n          <div className='post-author card-footer'>Albert Einstein</div>\n        </div>\n      </div>\n    </div>\n  );\n}\n")))),(0,o.kt)("p",null,"Whoa, that's a lot of code! But don't worry, it's just a form we'll use to\nwrite new posts and some example posts. Notice the CSS class we put on the root\nelement though, ",(0,o.kt)("inlineCode",{parentName:"p"},"l-home"),". It is considered a good practice to add such a CSS\nclass on the root element of every React component and/or controller view. The\nCSS class name should be the slugified version of the React component's /\ncontroller's name, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAwesomeComponent")," would become\n",(0,o.kt)("inlineCode",{parentName:"p"},"my-awesome-component"),". Additionally, it is recommended to prefix the\ncontroller's name with ",(0,o.kt)("inlineCode",{parentName:"p"},"l-"),' (think "layout"), leading to ',(0,o.kt)("inlineCode",{parentName:"p"},"l-home")," for our\n",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," controller's view."),(0,o.kt)("p",null,"The main point of this practice is that it enables easy scoping of CSS rules\nthat should affect only the contents of the component and not the rest of the\npage, thus reducing the amount of possible conflicts in CSS declarations."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"l-")," prefix used in the case of controller views is added to prevent\npossible collisions with components that might share the same name, and to\nallow easy inclusion of single page-specific overrides for the UI of your\ncomponents that will not affect the rest of the pages in your application."),(0,o.kt)("p",null,"In general, it is recommended to organize your CSS code according to the\n",(0,o.kt)("a",{parentName:"p",href:"http://smacss.com/"},"SMACSS")," recommendation (Scalable and Modular Architecture\nfor CSS). Feel free to read through the page if you are not familiar with\nSMACSS yet, it won't take you long."),(0,o.kt)("h3",{id:"styling-our-form"},"Styling our form"),(0,o.kt)("p",null,"So let's make our guestbook look a little better. To achieve this, we'll\nuse the Bootstrap library. To make things simple,\nwe will just use the CDN-hosted CSS file, since we don't need any of Bootstrap's JS components in our example anyway."),(0,o.kt)("p",null,"In a real application, we strongly recommend you manage these dependencies yourself (for example through npm packages),\nand consider using a custom build that includes only the necessary CSS/JS."),(0,o.kt)("p",null,"First we need to include a few files to our page. Open the document component\n",(0,o.kt)("inlineCode",{parentName:"p"},"app/component/document/DocumentView.jsx")," (this is the UI component that renders the basic structure of the HTML document. You'll find more details about it in the ",(0,o.kt)("a",{parentName:"p",href:"#rendering-the-whole-document"},"Rendering the whole document")," section of this chapter).\nInsert the following code before the ",(0,o.kt)("inlineCode",{parentName:"p"},'<link rel="stylesheet" ...')," line to include\nthe Bootstrap CSS library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<link\n  rel="stylesheet"\n  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"\n  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"\n  crossOrigin="anonymous"\n/>\n')),(0,o.kt)("p",null,"This will save us a lot of effort with styling our UI."),(0,o.kt)("h4",{id:"defining-custom-styles"},"Defining custom styles"),(0,o.kt)("p",null,"Let's write some CSS to make our guestbook look even better. Open the\n",(0,o.kt)("inlineCode",{parentName:"p"},"app/less/globals.less")," file and add the following code to set up our\nlayout configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"@post-author-alignment: right;\n")),(0,o.kt)("p",null,"Next open the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/less/app.less")," file and add the following code below the existing one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"form {\n  margin-bottom: 0;\n}\n")),(0,o.kt)("p",null,"Now let's open the the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/page/home/homeView.less")," file and replace the\ncontents with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},".l-home {\n    margin-top: 2rem;\n\n    .post-author {\n        text-align: @post-author-alignment;\n        font-style: italic;\n        font-size: 85%;\n    }\n\n    .card {\n        margin-bottom: 2rem;\n    }\n}\n")),(0,o.kt)("p",null,"Go ahead and check the results in the browser. It sure does look a little\nbetter (you may have to reload the page, or event restart the dev server\nby hitting ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+C")," and then re-running the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev")," command if your\nbrowser cannot access the newly installed resources). In the end of this section\nyou should see something like this when you refresh your page."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8065).Z,width:"2400",height:"2400"})),(0,o.kt)("h3",{id:"rendering-the-whole-document"},"Rendering the whole document"),(0,o.kt)("p",null,"As you may have noticed, we didn't specify any ",(0,o.kt)("inlineCode",{parentName:"p"},"<html>")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"<body>")," element in\nour controller view, and yet the page rendered in the browser has them. So how\ndid this little piece of magic happen?"),(0,o.kt)("p",null,"As you may recall from the beginning of this tutorial, the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/component"),"\ndirectory contains components that are used in the application UI. There is one\nspecial component - the document component\n(",(0,o.kt)("inlineCode",{parentName:"p"},"app/component/document/DocumentView.jsx"),"). The document component handles\nrendering the basic structure of the HTML document like the ",(0,o.kt)("inlineCode",{parentName:"p"},"<html>")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"<body>")," elements."),(0,o.kt)("p",null,"Finally, the document component must render three elements, ",(0,o.kt)("inlineCode",{parentName:"p"},'<div id="page">'),",\n",(0,o.kt)("inlineCode",{parentName:"p"},'<script id="revivalSettings">')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'<script id="scripts">'),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#page")," - is a place where current view is rendered."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#revivalSettings")," - contains JavaScript code used to initialize the environment for your application at the client side."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#scripts")," - contains the JavaScript logic of your application.")),(0,o.kt)("p",null,"The order is important as this will allow your users\nto see the whole of the page content before the application is fully loaded in\nthe browser (remember, the content is first rendered at the server side)."),(0,o.kt)("p",null,"The one thing the document component does not render and is handled by IMA.js\nitself is the ",(0,o.kt)("inlineCode",{parentName:"p"},"<!doctype html>")," doctype at the beginning of the rendered page -\nthis is due to the limitations of the React library, but you don't need to\nconcern yourself with this very much."),(0,o.kt)("p",null,"Note that the document component is only used at the server-side, as the\napplication only updates the contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"#page")," element at the\nclient-side (and the page title and meta tags through the meta-manager, which\nwill not be covered by this tutorial, but you can learn more about its interface\nin the API ",(0,o.kt)("a",{parentName:"p",href:"/api/classes/ima_core.MetaManager"},"/api/meta/meta-meta-manager"),")."),(0,o.kt)("p",null,"For more information about ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentView")," and whole rendering process of IMA.js\napplication, ",(0,o.kt)("a",{parentName:"p",href:"/basic-features/rendering-process"},"take a look at the documentation"),"."),(0,o.kt)("h3",{id:"notes-on-es2015-modules-and-imajs-namespaces"},"Notes on ES2015 modules and IMA.js namespaces"),(0,o.kt)("p",null,"Starting with version 15 of IMA.js namespaces were deprecated in favor of ES2015\nmodules. Mainly because ES modules are now more widespread and have better support\nin many IDEs thus don't pose such a problem when it comes to refactoring."),(0,o.kt)("p",null,"Previously almost all of the JavaScript files in your IMA.js application included\na snippet of code like this one near the beginning:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import ns from 'ima/namespace';\n\nns.namespace('app.foo.bar');\n")),(0,o.kt)("p",null,"and ended with a line of code like this one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"ns.app.foo.bar.Baz = Baz;\n")),(0,o.kt)("p",null,"The first snippet imports the object that represents the root namespace for the\nclasses, constants and values in the application, and then ensures that the\nnamespace to which the class / constant / value will be bound exists by calling\n",(0,o.kt)("inlineCode",{parentName:"p"},"ns.namespace('namespace name goes here')"),". The second snippet binds the class,\nconstant or value created in the file to the namespace."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you're using version 15 and above")," you can safely remove deprecated namespaces\nand replace them with ES2015 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"},(0,o.kt)("inlineCode",{parentName:"a"},"import")),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export"},(0,o.kt)("inlineCode",{parentName:"a"},"export")),"."))}h.isMDXComponent=!0}}]);