"use strict";(self.webpackChunkrxn_input_website=self.webpackChunkrxn_input_website||[]).push([[179],{259:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Zo:function(){return u},ah:function(){return d}});var o=n(7294);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=o.createContext({});function d(e){var t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):a(a({},t),e)}),[t,e])}var l={};function u(e){var t=e.components,n=e.children,r=e.disableParentContext,i=d(t);return r&&(i=t||l),o.createElement(c.Provider,{value:i},n)}},4965:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(259),o=n(7294);function i(e){var t=Object.assign({p:"p"},(0,r.ah)(),e.components);return o.createElement(t.p,null,"Test Before A")}var a=function(e){void 0===e&&(e={});var t=Object.assign({},(0,r.ah)(),e.components).wrapper;return t?o.createElement(t,e,o.createElement(i,e)):i(e)},c=n(9012),d=n(3619),l=n(9762),u=n(3409),s=n(858);function f(e){var t=e.pageContext,n=e.children,i=t,a=(0,s.Z)(u.Z.isDesktop),f=(0,d.Z)().height;return o.createElement(o.Fragment,null,o.createElement(c.Z,{SelectedPage:"DOCS",MobileExtraTopBar:o.createElement("h1",null,"Test test")},a&&o.createElement("div",{style:{position:"fixed",height:f-72,top:72,width:250,overflowY:"scroll",overflowX:"hidden"}},o.createElement("div",{style:{marginTop:45}},o.createElement(l.Z,null))),o.createElement("div",{style:{marginLeft:a?"22rem":void 0,marginTop:100}},n&&o.createElement(o.Fragment,null,o.createElement("h1",{style:{fontSize:"3rem",margin:0,marginBottom:"2rem",padding:0}},i.frontmatter.title),o.createElement(r.Zo,{components:{p:function(e){var t=e.children;return o.createElement("p",{style:{color:"rgba(148, 163, 184, 1)"}},t)},code:function(e){var t=e.children;return o.createElement("p",{style:{width:"fit-content",minWidth:"20rem",background:"rgba(5, 2, 24, 0.42)",padding:"1rem",borderRadius:"0.1rem"}},t)}}},n)))))}function m(e){return o.createElement(f,e,o.createElement(a,e))}},3619:function(e,t,n){var r=n(7294);t.Z=function(){var e=(0,r.useState)({width:0,height:0}),t=e[0],n=e[1];return(0,r.useEffect)((function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}},9762:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),o=n(1597),i=JSON.parse('{"o":{"Getting Started":[{"id":"89a64731-fc90-5091-8394-cc6365380b4d","body":"\\r\\nSo, let\'s get started...\\r\\n\\r\\n## Installing with NPM\\r\\n```\\r\\nnpm install rxn-input\\r\\n```\\r\\n\\r\\n## Installing with Yarn\\r\\n```\\r\\nyarn add rxn-input\\r\\n```","frontmatter":{"title":"Installation"}},{"id":"206db9f6-1774-58b5-b208-7abbdfcff0cd","body":"\\r\\nTest Setup Android","frontmatter":{"title":"Setup Android"}}],"Input":[{"id":"76b1c598-4ea3-5eee-be66-02329c1cbe2a","body":"","frontmatter":{"title":"getAxis"}},{"id":"0f3f91d8-e50c-5716-815f-829c7c25d981","body":"","frontmatter":{"title":"getAxisRaw"}},{"id":"11dba255-8f85-532b-b2f7-439549aec2bb","body":"","frontmatter":{"title":"isMouseButtonDown"}},{"id":"1b83baff-910a-504d-b9a9-93a0c417f1c6","body":"","frontmatter":{"title":"isMouseButtonUp"}}],"Hooks":[{"id":"8e216dcb-ab96-5c9c-a6dc-30ff04de8f52","body":"\\r\\nTest useMousePresent","frontmatter":{"title":"useMousePresent"}},{"id":"ab1e522d-496a-517f-b827-41a7ad9a0aa2","body":"\\r\\nTest useTouchPresent","frontmatter":{"title":"useTouchPresent"}}],"Listeners":[{"id":"7794d0e0-a149-5866-ad01-d51269748250","body":"\\r\\nTest KeyListener","frontmatter":{"title":"KeyListener"}},{"id":"e8647760-d4e9-536b-8cab-2c6da79a8055","body":"\\r\\nTeste MouseListener","frontmatter":{"title":"MouseListener"}},{"id":"a85cfc66-1a9d-57ea-b71d-dd7d56ba927a","body":"\\r\\nTest TouchListener","frontmatter":{"title":"TouchListener"}}]}}'),a=n(7166),c=a.default.ul.withConfig({displayName:"styled__Ul",componentId:"sc-a0m6rg-0"})(["list-style:none;padding:0;margin:0;font-weight:bold;& h3{font-size:1.2rem;margin:0;padding:0;margin-bottom:1.7rem;&:not(first-child){margin-top:1.7rem;}}"]),d=a.default.li.withConfig({displayName:"styled__Li",componentId:"sc-a0m6rg-1"})(["width:fit-content;margin-bottom:0.3rem;& p{margin:0;padding:0;color:#94a3b8;font-weight:normal;font-size:1.02rem;&::before{content:' ';margin-right:1.1rem;padding-bottom:0.2rem;padding-top:0.2rem;white-space:pre;background-color:#94a3b8;width:3rem;height:100%;}&:hover{color:#1cb0fa;&::before{background-color:#1cb0fa;}}&:nth-of-type(1){& p{&::before{border-radius:1rem 0px 0px 0px;}}}&:last-child{& p{&::before{border-radius:0rem 0px 0px 1rem;}}}}"]),l=function(e){return e.split(" ").join("-").toLowerCase()},u=function(){return r.createElement(r.Fragment,null,Object.keys(i.o).map((function(e){return r.createElement(c,{id:"docs-"+l(e),key:"docs-"+l(e)},r.createElement("h3",null,e),i.o[e].map((function(e,t){var n,i;return r.createElement(d,{key:"docs--"+l((null==e||null===(n=e.frontmatter)||void 0===n?void 0:n.title)||"?")+"_"+t},r.createElement(o.Link,{to:"#"},r.createElement("p",null,(null==e||null===(i=e.frontmatter)||void 0===i?void 0:i.title)||"?")))})))})))},s=(0,r.memo)(u)}}]);
//# sourceMappingURL=component---src-templates-doc-page-index-tsx-content-file-path-home-runner-work-rxn-input-rxn-input-website-src-content-docs-v-1-0-0-testing-before-a-mdx-c2bcf2496e3fff4c52ba.js.map