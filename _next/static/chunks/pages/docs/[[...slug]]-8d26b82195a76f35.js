(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[900],{1651:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return A},default:function(){return P}});var r={};n.r(r),n.d(r,{MDXContext:function(){return a},MDXProvider:function(){return m},useMDXComponents:function(){return v},withMDXComponents:function(){return l}});var o=n(9499),s=n(9008),i=n.n(s),u=n(7294),d=n(7105),c=n(2746);let a=u.createContext({});function l(e){return function(t){let n=v(t.components);return u.createElement(e,{...t,allComponents:n})}}function v(e){let t=u.useContext(a);return u.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let p={};function m({components:e,children:t,disableParentContext:n}){let r=v(e);return n&&(r=e||p),u.createElement(a.Provider,{value:r},t)}function f({compiledSource:e,frontmatter:t,scope:n,components:o={},lazy:s}){let[i,d]=(0,u.useState)(!s||"undefined"==typeof window);(0,u.useEffect)(()=>{if(s){let e=window.requestIdleCallback(()=>{d(!0)});return()=>window.cancelIdleCallback(e)}},[]);let a=(0,u.useMemo)(()=>{let o=Object.assign({opts:{...r,...c.c}},{frontmatter:t},n),s=Object.keys(o),i=Object.values(o),u=Reflect.construct(Function,s.concat(`${e}`));return u.apply(u,i).default},[n,e]);if(!i)return u.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let l=u.createElement(m,{components:o},u.createElement(a,null));return s?u.createElement("div",null,l):l}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var g=n(9521),y=n(2892),h=g.default.p.withConfig({displayName:"styled__P",componentId:"sc-1t3eq6u-0"})(["color:",";"],y.Z.BLUEBLOUSE),b=g.default.a.withConfig({displayName:"styled__A",componentId:"sc-1t3eq6u-1"})(["color:",";border-bottom:solid 1px ",";"],y.Z.ZIMABLUE,y.Z.ZIMABLUE),w=g.default.div.withConfig({displayName:"styled__Code",componentId:"sc-1t3eq6u-2"})(["width:25rem;padding:1rem;background-color:rgba(0,0,0,0.2);border-radius:0.2rem;font-size:1rem;color:",";"],y.Z.BLUEBLOUSE),x=n(5893),j={p:function(e){var t=e.children;return(0,x.jsx)(h,{children:t})},code:function(e){var t=e.children;return(0,x.jsx)(w,{children:t})},a:function(e){var t=e.children,n=e.href;return(0,x.jsx)(b,{href:n,children:t})}},O=function(e){var t,n=e.DocsData;return(0,x.jsx)("div",{style:{width:"100%",height:"98%",overflowY:"scroll"},children:(t=[],Object.keys(n).forEach(function(e){"v1.0.0"!=e&&Object.keys(n[e]).map(function(r,o){t.push((0,x.jsxs)("ul",{style:{margin:0,padding:0,marginBottom:"2rem",listStyle:"none"},children:[(0,x.jsx)("p",{style:{marginLeft:"0.5rem",marginTop:"0.5rem",fontSize:"1.2rem",fontWeight:800},children:r}),Object.keys(n[e][r]).map(function(t,n){return(0,x.jsx)("li",{children:(0,x.jsx)("p",{style:{margin:0,marginLeft:"0.5rem",fontSize:"0.95rem",color:y.Z.BLUEBLOUSE},children:t})},"".concat(e,"-").concat(r,"-").concat(t))})]},"".concat(e,"-").concat(r)))})}),t)})},k=(0,u.memo)(O),M=JSON.parse('{"v1.0.0":{"Testing":{"beforeA":{"slugs":["docs/v1.0.0/testing","docs/v1.0.0/testing/beforea"],"body":"---\\r\\ntitle: Before A\\r\\n---\\r\\n\\r\\nTest Before A","version":"v1.0.0","frontmatter":{"title":"Before A"}},"a":{"slugs":["docs/v1.0.0/testing/a"],"body":"---\\r\\ntitle: A\\r\\n---\\r\\n\\r\\nTest A","version":"v1.0.0","frontmatter":{"title":"A"}}},"Data":{"1":{"slugs":["docs/v1.0.0/data","docs/v1.0.0/data/1"],"body":"","version":"v1.0.0","frontmatter":{}},"2":{"slugs":["docs/v1.0.0/data/2"],"body":"","version":"v1.0.0","frontmatter":{}},"bTestingSomeTest":{"slugs":["docs/v1.0.0/data/btestingsometest"],"body":"","version":"v1.0.0","frontmatter":{}},"original":{"slugs":["docs/v1.0.0/data/original"],"body":"","version":"v1.0.0","frontmatter":{}},"somebodyOnceToldMe":{"slugs":["docs/v1.0.0/data/somebodyoncetoldme"],"body":"","version":"v1.0.0","frontmatter":{}},"testingSomeTest":{"slugs":["docs/v1.0.0/data/testingsometest"],"body":"","version":"v1.0.0","frontmatter":{}}}},"v2.0.0":{"Getting Started":{"Installation":{"slugs":["docs/","docs/getting-started","docs/getting-started/installation","docs/v2.0.0/getting-started","docs/v2.0.0/getting-started/installation"],"body":"---\\r\\ntitle: Installation\\r\\n---\\r\\n\\r\\nSo, let\'s get started...\\r\\n\\r\\n# Installing with NPM\\r\\n```bash\\r\\nnpm install rxn-input\\r\\n```\\r\\n\\r\\n# Installing with Yarn\\r\\n```bash\\r\\nyarn add rxn-input\\r\\n```\\r\\n\\r\\nAfter that, we need to setup the dependencies to use the project on [Android](docs/v2.0.0/getting-started/setup-android).","version":"v2.0.0","frontmatter":{"title":"Installation"}},"Setup Android":{"slugs":["docs/getting-started/setup-android","docs/v2.0.0/getting-started/setup-android"],"body":"---\\r\\ntitle: Setup Android\\r\\n---\\r\\n\\r\\nOnce you have installed rxn-input [(as described here)](docs/getting-started/installation), you need to manually add some code lines to get things working as expected.\\r\\n\\r\\nThe only thing you need to do is edit the file named ```MainActivity.java``` at your project root ```PROJECT_ROOT/android/app/src/main/java/.../.../MainActivity.java```\\r\\n\\r\\n```diff\\r\\npackage com.YOUR_APP;\\r\\n\\r\\n+ import android.util.Log;\\r\\n+ import android.view.KeyEvent;\\r\\n\\r\\n+ import com.rxninput.RXNInputModule;\\r\\n\\r\\npublic class MainActivity extends ReactActivity {\\r\\n\\r\\n+  @Override\\r\\n+  public boolean onKeyDown(int keyCode, KeyEvent event) {\\r\\n+    RXNInputModule.onKeyDownEvent(keyCode, event);\\r\\n+    super.onKeyDown(keyCode, event);\\r\\n+    return true;\\r\\n+  }\\r\\n\\r\\n+  @Override\\r\\n+  public boolean onKeyUp(int keyCode, KeyEvent event) {\\r\\n+    RXNInputModule.onKeyUpEvent(keyCode, event);\\r\\n+    super.onKeyDown(keyCode, event);\\r\\n+    return true;\\r\\n+ }\\r\\n\\r\\n  . . .\\r\\n```\\r\\n","version":"v2.0.0","frontmatter":{"title":"Setup Android"}}},"Input":{"getAxis":{"slugs":["docs/input","docs/input/getaxis","docs/v2.0.0/input","docs/v2.0.0/input/getaxis"],"body":"---\\r\\ntitle: getAxis\\r\\n---","version":"v2.0.0","frontmatter":{"title":"getAxis"}},"getAxisRaw":{"slugs":["docs/input/getaxisraw","docs/v2.0.0/input/getaxisraw"],"body":"---\\r\\ntitle: getAxisRaw\\r\\n---","version":"v2.0.0","frontmatter":{"title":"getAxisRaw"}},"isMouseButtonDown":{"slugs":["docs/input/ismousebuttondown","docs/v2.0.0/input/ismousebuttondown"],"body":"---\\r\\ntitle: isMouseButtonDown\\r\\n---","version":"v2.0.0","frontmatter":{"title":"isMouseButtonDown"}},"isMouseButtonUp":{"slugs":["docs/input/ismousebuttonup","docs/v2.0.0/input/ismousebuttonup"],"body":"---\\r\\ntitle: isMouseButtonUp\\r\\n---","version":"v2.0.0","frontmatter":{"title":"isMouseButtonUp"}}},"Hooks":{"useMousePresent":{"slugs":["docs/hooks","docs/hooks/usemousepresent","docs/v2.0.0/hooks","docs/v2.0.0/hooks/usemousepresent"],"body":"---\\r\\ntitle: useMousePresent\\r\\n---\\r\\n\\r\\nTest useMousePresent","version":"v2.0.0","frontmatter":{"title":"useMousePresent"}},"useTouchPresent":{"slugs":["docs/hooks/usetouchpresent","docs/v2.0.0/hooks/usetouchpresent"],"body":"---\\r\\ntitle: useTouchPresent\\r\\n---\\r\\n\\r\\nTest useTouchPresent","version":"v2.0.0","frontmatter":{"title":"useTouchPresent"}}},"Listeners":{"KeyListener":{"slugs":["docs/listeners","docs/listeners/keylistener","docs/v2.0.0/listeners","docs/v2.0.0/listeners/keylistener"],"body":"---\\r\\ntitle: KeyListener\\r\\n---\\r\\n\\r\\nTest KeyListener","version":"v2.0.0","frontmatter":{"title":"KeyListener"}},"MouseListener":{"slugs":["docs/listeners/mouselistener","docs/v2.0.0/listeners/mouselistener"],"body":"---\\r\\ntitle: MouseListener\\r\\n---\\r\\n\\r\\nTeste MouseListener","version":"v2.0.0","frontmatter":{"title":"MouseListener"}},"TouchListener":{"slugs":["docs/listeners/touchlistener","docs/v2.0.0/listeners/touchlistener"],"body":"---\\r\\ntitle: TouchListener\\r\\n---\\r\\n\\r\\nTest TouchListener","version":"v2.0.0","frontmatter":{"title":"TouchListener"}}}}}'),T=n(6554),E=n(2261);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var A=!0;function P(e){e.url;var t=e.doc,n=e.source,r=(0,T.Z)(E.Z.down("md"));return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i(),{children:(0,x.jsx)("title",{children:"RXN Input - Documentation"})}),(0,x.jsx)(d.Z,{SelectedPage:"DOCS",children:(0,x.jsxs)(d.b,{style:{marginTop:"7.5rem"},children:[!r&&(0,x.jsx)("div",{style:{position:"fixed",width:"15rem",height:"80vh"},children:(0,x.jsx)(k,{DocsData:M})}),(0,x.jsxs)("div",{style:{position:"absolute",marginLeft:r?void 0:"15rem",paddingLeft:r?void 0:"2rem"},children:[(0,x.jsx)("h1",{style:{fontSize:"3.2rem",marginTop:0},children:t.frontmatter.title}),(0,x.jsx)(f,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({components:j},n))]})]})})]})}},825:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/[[...slug]]",function(){return n(1651)}])},2746:function(e,t,n){let r=n(5893);e.exports.c=r}},function(e){e.O(0,[324,105,774,888,179],function(){return e(e.s=825)}),_N_E=e.O()}]);