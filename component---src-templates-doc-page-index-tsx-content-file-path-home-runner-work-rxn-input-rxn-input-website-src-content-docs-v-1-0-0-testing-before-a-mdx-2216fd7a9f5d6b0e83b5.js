"use strict";(self.webpackChunkrxn_input_website=self.webpackChunkrxn_input_website||[]).push([[179],{259:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Zo:function(){return d},ah:function(){return l}});var i=n(7294);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=i.createContext({});function l(e){var t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):a(a({},t),e)}),[t,e])}var u={};function d(e){var t=e.components,n=e.children,r=e.disableParentContext,o=l(t);return r&&(o=t||u),i.createElement(c.Provider,{value:o},n)}},4965:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(259),i=n(7294);function o(e){var t=Object.assign({p:"p"},(0,r.ah)(),e.components);return i.createElement(t.p,null,"Test Before A")}var a=function(e){void 0===e&&(e={});var t=Object.assign({},(0,r.ah)(),e.components).wrapper;return t?i.createElement(t,e,i.createElement(o,e)):o(e)},c=n(9012),l=n(3619),u=n(9842),d=n(3409),s=n(858);function f(e){var t=e.pageContext,n=e.children,o=t,a=(0,s.Z)(d.Z.isDesktop),f=(0,l.Z)().height;return i.createElement(i.Fragment,null,i.createElement(c.Z,{SelectedPage:"DOCS",MobileExtraTopBar:i.createElement("h1",null,"Test test")},a&&i.createElement("div",{style:{position:"fixed",height:f-72,top:72,width:250,overflowY:"scroll",overflowX:"hidden"}},i.createElement("div",{style:{marginTop:45}},i.createElement(u.Z,null))),i.createElement("div",{style:{marginLeft:a?"22rem":void 0,marginTop:100}},n&&i.createElement(i.Fragment,null,i.createElement("h1",{style:{fontSize:"3rem",margin:0,marginBottom:"2rem",padding:0}},o.frontmatter.title),i.createElement(r.Zo,{components:{p:function(e){var t=e.children;return i.createElement("p",{style:{color:"rgba(148, 163, 184, 1)"}},t)},code:function(e){var t=e.children;return i.createElement("p",{style:{width:"fit-content",minWidth:"20rem",background:"rgba(5, 2, 24, 0.42)",padding:"1rem",borderRadius:"0.1rem"}},t)}}},n)))))}function m(e){return i.createElement(f,e,i.createElement(a,e))}},3619:function(e,t,n){var r=n(7294);t.Z=function(){var e=(0,r.useState)({width:0,height:0}),t=e[0],n=e[1];return(0,r.useEffect)((function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}},9842:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),i=n(1597),o=JSON.parse('{"o":{"Getting Started":[{"id":"89a64731-fc90-5091-8394-cc6365380b4d","body":"\\r\\nSo, let\'s get started...\\r\\n\\r\\n## Installing with NPM\\r\\n```\\r\\nnpm install rxn-input\\r\\n```\\r\\n\\r\\n## Installing with Yarn\\r\\n```\\r\\nyarn add rxn-input\\r\\n```","frontmatter":{"title":"Installation"}},{"id":"206db9f6-1774-58b5-b208-7abbdfcff0cd","body":"\\r\\nTest Setup Android","frontmatter":{"title":"Setup Android"}}],"Input":[{"id":"76b1c598-4ea3-5eee-be66-02329c1cbe2a","body":"","frontmatter":{"title":"getAxis"}},{"id":"0f3f91d8-e50c-5716-815f-829c7c25d981","body":"","frontmatter":{"title":"getAxisRaw"}},{"id":"11dba255-8f85-532b-b2f7-439549aec2bb","body":"","frontmatter":{"title":"isMouseButtonDown"}},{"id":"1b83baff-910a-504d-b9a9-93a0c417f1c6","body":"","frontmatter":{"title":"isMouseButtonUp"}}],"Hooks":[{"id":"8e216dcb-ab96-5c9c-a6dc-30ff04de8f52","body":"\\r\\nTest useMousePresent","frontmatter":{"title":"useMousePresent"}},{"id":"ab1e522d-496a-517f-b827-41a7ad9a0aa2","body":"\\r\\nTest useTouchPresent","frontmatter":{"title":"useTouchPresent"}}],"Listeners":[{"id":"7794d0e0-a149-5866-ad01-d51269748250","body":"\\r\\nTest KeyListener","frontmatter":{"title":"KeyListener"}},{"id":"e8647760-d4e9-536b-8cab-2c6da79a8055","body":"\\r\\nTeste MouseListener","frontmatter":{"title":"MouseListener"}},{"id":"a85cfc66-1a9d-57ea-b71d-dd7d56ba927a","body":"\\r\\nTest TouchListener","frontmatter":{"title":"TouchListener"}}]}}'),a=function(){return r.createElement(r.Fragment,null,Object.keys(o.o).map((function(e){return r.createElement("ul",{style:{listStyle:"none",padding:0,margin:0}},r.createElement("h3",null,e),o.o[e].map((function(e){var t;return r.createElement("li",null,r.createElement(i.Link,{style:{color:"#94A3B8"},to:"#"},(null==e||null===(t=e.frontmatter)||void 0===t?void 0:t.title)||"test"))})))})))},c=(0,r.memo)(a)}}]);
//# sourceMappingURL=component---src-templates-doc-page-index-tsx-content-file-path-home-runner-work-rxn-input-rxn-input-website-src-content-docs-v-1-0-0-testing-before-a-mdx-2216fd7a9f5d6b0e83b5.js.map