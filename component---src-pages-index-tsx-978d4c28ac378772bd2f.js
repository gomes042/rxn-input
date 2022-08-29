"use strict";(self.webpackChunkrxn_input_website=self.webpackChunkrxn_input_website||[]).push([[691],{8555:function(e){var t=function(e){};e.exports=function(e,n){for(var i=arguments.length,r=new Array(i>2?i-2:0),u=2;u<i;u++)r[u-2]=arguments[u];if(t(n),!e){var o;if(void 0===n)o=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=0;(o=new Error(n.replace(/%s/g,(function(){return String(r[a++])})))).name="Invariant Violation"}throw o.framesToPop=1,o}}},129:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(7294),r=n(1597),u="style-module--navItem--rjYGv",o=function(e){var t=e.TopBarSelected;return i.createElement("div",{id:"style-module--topNavBarRoot---nFJA"},i.createElement(r.rU,{to:"/",id:"style-module--topNavBarTitle--udWfK"},"RXN Input"),i.createElement(r.rU,{to:"/docs",style:{height:"100%",marginLeft:"5vmin"}},i.createElement("div",{"data-currentpage":"DOCS"===t,id:u},i.createElement("p",null,"Documentation"))),i.createElement(r.rU,{to:"/examples",style:{height:"100%",marginRight:"2.5vmin"}},i.createElement("div",{"data-currentpage":"EXAMPLES"===t,id:u},i.createElement("p",null,"Examples"))),i.createElement("div",{style:{marginLeft:"auto"}},i.createElement("a",{id:"style-module--githubIcon---QN3M",style:{display:"flex",height:"100%",alignSelf:"center",justifyContent:"center",alignItems:"center",marginRight:"3vmin"},href:"https://github.com/Luffos/rxn-input"},i.createElement("img",{style:{pointerEvents:"none",width:"3vmin",aspectRatio:"1"},src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICAgPHBhdGggZmlsbD0iI2ZmZiINCiAgICAgICAgZD0iTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MUM0LjQyMiAxOC4wNyAzLjYzMyAxNy43IDMuNjMzIDE3LjdjLTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxNy0xLjMwNS43Ni0xLjYwNS0yLjY2NS0uMy01LjQ2Ni0xLjMzMi01LjQ2Ni01LjkzIDAtMS4zMS40NjUtMi4zOCAxLjIzNS0zLjIyLS4xMzUtLjMwMy0uNTQtMS41MjMuMTA1LTMuMTc2IDAgMCAxLjAwNS0uMzIyIDMuMyAxLjIzLjk2LS4yNjcgMS45OC0uMzk5IDMtLjQwNSAxLjAyLjAwNiAyLjA0LjEzOCAzIC40MDUgMi4yOC0xLjU1MiAzLjI4NS0xLjIzIDMuMjg1LTEuMjMuNjQ1IDEuNjUzLjI0IDIuODczLjEyIDMuMTc2Ljc2NS44NCAxLjIzIDEuOTEgMS4yMyAzLjIyIDAgNC42MS0yLjgwNSA1LjYyNS01LjQ3NSA1LjkyLjQyLjM2LjgxIDEuMDk2LjgxIDIuMjIgMCAxLjYwNi0uMDE1IDIuODk2LS4wMTUgMy4yODYgMCAuMzE1LjIxLjY5LjgyNS41N0MyMC41NjUgMjIuMDkyIDI0IDE3LjU5MiAyNCAxMi4yOTdjMC02LjYyNy01LjM3My0xMi0xMi0xMiIgLz4NCjwvc3ZnPg=="}))))},a=(0,i.memo)(o),l=function(e){var t=e.children,n=e.TopBarSelected;return i.createElement(i.Fragment,null,i.createElement(a,{TopBarSelected:n}),i.createElement("div",{style:{display:"flex",flexDirection:"column"}},t,i.createElement("footer",{style:{width:"100%",alignSelf:"flex-end",backgroundColor:"gray"}},i.createElement("h1",null,"Luffos"))))},c=(0,i.memo)(l)},1161:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return h}});var i=n(7294);function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var u=n(8555),o=n.n(u),a=!("undefined"==typeof window||!window.document||!window.document.createElement),l={window:{fontScale:1,height:0,scale:1,width:0},screen:{fontScale:1,height:0,scale:1,width:0}},c={},d=a,M=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,i=[{key:"get",value:function(t){return d&&(d=!1,e._update()),o()(l[t],"No dimension set for key "+t),l[t]}},{key:"set",value:function(e){e&&(a?o()(!1,"Dimensions cannot be set in the browser"):(null!=e.screen&&(l.screen=e.screen),null!=e.window&&(l.window=e.window)))}},{key:"_update",value:function(){if(a){var e=window,t=e.document.documentElement;l.window={fontScale:1,height:t.clientHeight,scale:e.devicePixelRatio||1,width:t.clientWidth},l.screen={fontScale:1,height:e.screen.height,scale:e.devicePixelRatio||1,width:e.screen.width},Array.isArray(c.change)&&c.change.forEach((function(e){return e(l)}))}}},{key:"addEventListener",value:function(e,t){var n=this;return c[e]=c[e]||[],c[e].push(t),{remove:function(){n.removeEventListener(e,t)}}}},{key:"removeEventListener",value:function(e,t){Array.isArray(c[e])&&(c[e]=c[e].filter((function(e){return e!==t})))}}],(n=null)&&r(t.prototype,n),i&&r(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(){var e=(0,i.useState)((function(){return M.get("window")})),t=e[0],n=e[1];return(0,i.useEffect)((function(){function e(e){var t=e.window;null!=t&&n(t)}return M.addEventListener("change",e),n(M.get("window")),function(){M.removeEventListener("change",e)}}),[]),t}a&&window.addEventListener("resize",M._update,!1);var g=function(){var e=f(),t=e.width,n=e.height;return{vw:function(e){return function(e,t){return(t||M.get("window").width)*(e/100)}(e,t)},vh:function(e){return function(e,t){return(t||M.get("window").height)*(e/100)}(e,n)},vmin:function(e){return function(e,t,n){return Math.min((t||M.get("window").width)*(null!=e?e/100:1),(n||M.get("window").height)*(null!=e?e/100:1))}(e,t,n)},vmax:function(e){return function(e,t,n){return Math.max((t||M.get("window").width)*(null!=e?e/100:1),(n||M.get("window").height)*(null!=e?e/100:1))}(e,t,n)},percentage:function(e,t){return function(e,t){return t*e/100}(e,t)}}},s=n(129),m=function(){g().vmin;return i.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",top:0,overflow:"hidden"}},i.createElement("svg",{viewBox:"0 0 1440 500",xmlns:"http://www.w3.org/2000/svg"},i.createElement("defs",null,i.createElement("linearGradient",{id:"gradient",x1:"99%",y1:"60%",x2:"1%",y2:"40%"},i.createElement("stop",{offset:"20%",stopColor:"#000f49"}),i.createElement("stop",{offset:"90%",stopColor:"#5d4deb"}))),i.createElement("path",{d:"M 0,500 C 0,500 0,250 0,250 C 136.66666666666669,298.93333333333334 273.33333333333337,347.8666666666667 419,334 C 564.6666666666666,320.1333333333333 719.3333333333333,243.46666666666667 891,219 C 1062.6666666666667,194.53333333333333 1251.3333333333335,222.26666666666665 1440,250 C 2440,250 1440,500 1440,500 Z",stroke:"none",strokeWidth:"0",fill:"url(#gradient)",fillOpacity:"1",transform:"rotate(-180 720 250)"})))},w=(0,i.memo)(m),h=function(){var e=f(),t=(e.width,e.height,g()),n=t.vmin,r=t.vh;return i.createElement(i.Fragment,null,i.createElement(s.Z,null,i.createElement("div",{style:{width:"100%",height:r(100),backgroundColor:"#1b167b"}},i.createElement(w,null),i.createElement("div",{style:{position:"absolute",width:"100%",marginTop:n(15)}},i.createElement("div",{style:{marginLeft:n(20),marginRight:n(20),fontSize:n(3)}},i.createElement("h1",{style:{color:"white",whiteSpace:"nowrap"}},"Input Handler for ",i.createElement("br",null)," React and React Native"))))))},y=function(){return i.createElement("title",null,"RXNInput - Cross Platform Input Handler for React and React Native.")}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-978d4c28ac378772bd2f.js.map