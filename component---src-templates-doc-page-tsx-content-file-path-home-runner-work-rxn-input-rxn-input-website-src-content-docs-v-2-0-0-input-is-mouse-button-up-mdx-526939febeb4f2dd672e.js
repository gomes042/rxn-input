"use strict";(self.webpackChunkrxn_input_website=self.webpackChunkrxn_input_website||[]).push([[641],{259:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Zo:function(){return f},ah:function(){return d}});var i=n(7294);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=i.createContext({});function d(e){var t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):a(a({},t),e)}),[t,e])}var l={};function f(e){var t=e.components,n=e.children,r=e.disableParentContext,o=d(t);return r&&(o=t||l),i.createElement(c.Provider,{value:o},n)}},915:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(259),i=n(7294);function o(e){return i.createElement(i.Fragment)}var a=function(e){void 0===e&&(e={});var t=Object.assign({},(0,r.ah)(),e.components).wrapper;return t?i.createElement(t,e,i.createElement(o,e)):o()},c=n(9012),d=n(6823),l=n(3619);function f(e){var t=e.pageContext,n=e.children,o=t,a=(0,l.Z)().height;return console.log(o),console.log(d),i.createElement(i.Fragment,null,i.createElement(c.Z,{SelectedPage:"DOCS",MobileExtraTopBar:i.createElement("h1",null,"Test test")},i.createElement("div",{style:{position:"fixed",height:a-72,top:72,width:250,overflowY:"scroll",overflowX:"hidden"}},i.createElement("div",{style:{marginTop:45}},Object.keys(d["v2.0.0"]).map((function(e){return i.createElement("ul",null,i.createElement("h3",null,e),d["v2.0.0"][e].map((function(e){var t;return i.createElement("li",null,(null==e||null===(t=e.frontmatter)||void 0===t?void 0:t.title)||"test")})))})))),i.createElement("div",{style:{marginLeft:"22rem",marginTop:100}},n&&i.createElement(i.Fragment,null,i.createElement("h1",{style:{fontSize:"3rem",margin:0,marginBottom:"2rem",padding:0}},o.frontmatter.title),i.createElement(r.Zo,{components:{p:function(e){var t=e.children;return i.createElement("p",{style:{color:"rgba(148, 163, 184, 1)"}},t)},code:function(e){var t=e.children;return i.createElement("p",{style:{width:"fit-content",minWidth:"20rem",background:"rgba(5, 2, 24, 0.42)",padding:"1rem",borderRadius:"0.1rem"}},t)}}},n)))))}function u(e){return i.createElement(f,e,i.createElement(a,e))}},3619:function(e,t,n){var r=n(7294);t.Z=function(){var e=(0,r.useState)({width:0,height:0}),t=e[0],n=e[1];return(0,r.useEffect)((function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}},6823:function(e){e.exports=JSON.parse('{"v1.0.0":{"Testing":[{"id":"adea9f8a-2c1f-584d-9c20-55d6baf978e1","body":"\\r\\nTest Before A","frontmatter":{"title":"Before A"}},{"id":"b58751f1-3f18-5271-a355-efc7ce64f2e7","body":"\\r\\nTest A","frontmatter":{"title":"A"}}],"Data":[{"id":"84833c3c-90b4-5ab0-8124-a7fe4ab393f3","body":"","frontmatter":{"title":null}},{"id":"79b465d2-0533-57cf-ab2e-e63aa2cc54b2","body":"","frontmatter":{"title":null}},{"id":"97a88a30-b7a9-572f-b890-52ffbe3c6b14","body":"","frontmatter":{"title":null}},{"id":"ccdbbfbe-0e33-52b0-b5d3-038eb9968b37","body":"","frontmatter":{"title":null}},{"id":"59262ffb-8f54-5c18-a710-7d65b3b5efc2","body":"","frontmatter":{"title":null}},{"id":"554f8082-23f4-58d2-9302-a29c78256fb3","body":"","frontmatter":{"title":null}}]},"v2.0.0":{"Getting Started":[{"id":"89a64731-fc90-5091-8394-cc6365380b4d","body":"\\r\\nSo, let\'s get started...\\r\\n\\r\\n## Installing with NPM\\r\\n```\\r\\nnpm install rxn-input\\r\\n```\\r\\n\\r\\n## Installing with Yarn\\r\\n```\\r\\nyarn add rxn-input\\r\\n```","frontmatter":{"title":"Installation"}},{"id":"206db9f6-1774-58b5-b208-7abbdfcff0cd","body":"\\r\\nTest Setup Android","frontmatter":{"title":"Setup Android"}}],"Input":[{"id":"76b1c598-4ea3-5eee-be66-02329c1cbe2a","body":"","frontmatter":{"title":"getAxis"}},{"id":"0f3f91d8-e50c-5716-815f-829c7c25d981","body":"","frontmatter":{"title":"getAxisRaw"}},{"id":"11dba255-8f85-532b-b2f7-439549aec2bb","body":"","frontmatter":{"title":"isMouseButtonDown"}},{"id":"1b83baff-910a-504d-b9a9-93a0c417f1c6","body":"","frontmatter":{"title":"isMouseButtonUp"}}],"Hooks":[{"id":"8e216dcb-ab96-5c9c-a6dc-30ff04de8f52","body":"\\r\\nTest useMousePresent","frontmatter":{"title":"useMousePresent"}},{"id":"ab1e522d-496a-517f-b827-41a7ad9a0aa2","body":"\\r\\nTest useTouchPresent","frontmatter":{"title":"useTouchPresent"}}],"Listeners":[{"id":"7794d0e0-a149-5866-ad01-d51269748250","body":"\\r\\nTest KeyListener","frontmatter":{"title":"KeyListener"}},{"id":"e8647760-d4e9-536b-8cab-2c6da79a8055","body":"\\r\\nTeste MouseListener","frontmatter":{"title":"MouseListener"}},{"id":"a85cfc66-1a9d-57ea-b71d-dd7d56ba927a","body":"\\r\\nTest TouchListener","frontmatter":{"title":"TouchListener"}}]}}')}}]);
//# sourceMappingURL=component---src-templates-doc-page-tsx-content-file-path-home-runner-work-rxn-input-rxn-input-website-src-content-docs-v-2-0-0-input-is-mouse-button-up-mdx-526939febeb4f2dd672e.js.map