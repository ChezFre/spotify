(this["webpackJsonpspotify-cra"]=this["webpackJsonpspotify-cra"]||[]).push([[0],{22:function(n,e,t){"use strict";t.d(e,"c",(function(){return s})),t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return u}));var a,r,i,c=t(5),o=t(6),s=Object(o.keyframes)(a||(a=Object(c.a)(["\n  from {\n    opacity: 0;\n    transform: translate3d(0, 10px, 0);\n  }\n"]))),l=Object(o.keyframes)(r||(r=Object(c.a)(["\n  from {\n    opacity: 0;\n  }\n"]))),u=Object(o.keyframes)(i||(i=Object(c.a)(["\n  from {\n    opacity: 0;\n    transform: scale3d(.95, .95, .95)\n  }\n"])))},24:function(n,e,t){"use strict";var a,r,i,c=t(10),o=t(35),s=t.n(o),l=t(43),u=t(2),d=t.n(u),p=t(37),b=t(5),f=t(6),g=t(22),h=Object(f.keyframes)(a||(a=Object(b.a)(["\n  20% {\n    border-radius: 40% 20% 80% 40%;\n  }\n\n\n  30% {\n    border-radius: 90% 30% 45% 95%;\n  }\n\n  40% {\n    border-radius: 45% 80% 40% 62%;\n    transform: rotate(80deg);\n  }\n\n  60% {\n    border-radius: 100% 10% 45% 29%;\n  }\n"]))),v=f.default.div(r||(r=Object(b.a)(["\n  text-align: center;\n  max-width: 600px;\n  margin: auto;\n\n  > * {\n    transform-origin: bottom center;\n  }\n\n  h1 {\n    animation: "," 0.5s ease-out both;\n  }\n\n  p {\n    opacity: 0.5;\n    line-height: 1.7;\n    animation: "," 0.5s 0.3s ease-out both;\n  }\n"])),g.c,g.c),m=f.default.div(i||(i=Object(b.a)(["\n  position: relative;\n  display: inline-block;\n\n  &::before,\n  &::after {\n    content: ",";\n    background-color: rgb(var(--spotify-brand));\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: block;\n    z-index: -1;\n    border-radius: 60% 50% 40% 50%;\n    width: 85%;\n    height: 85%;\n    mix-blend-mode: lighten;\n    margin: 5px auto 0;\n    animation: "," 8s infinite linear;\n    filter: blur(6px);\n  }\n\n  &::before {\n    background-color: rebeccapurple;\n    animation-duration: 11s;\n    animation-delay: -5s;\n    border-radius: 50% 80% 75% 40%;\n  }\n\n  svg {\n    color: ",";\n    border-radius: 50%;\n    width: 100px;\n    height: 100px;\n  }\n"])),(function(n){var e=n.type;return"initial"===e||"loading"===e?"''":void 0}),h,(function(n){var e=n.type;return"initial"===e||"loading"===e?"rgb(var(--spotify-black))":"rgb(var(--spotify-brand))"})),j=t(3),x=function(){var n=Object(l.a)(s.a.mark((function n(e){var a,r,i,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=e,n.next="error"===n.t0?3:"no-results"===n.t0?8:13;break;case 3:return n.next=5,t.e(3).then(t.bind(null,92));case 5:return a=n.sent,r=a.default,n.abrupt("return",Object(j.jsx)(r,{}));case 8:return n.next=10,t.e(4).then(t.bind(null,93));case 10:return i=n.sent,c=i.default,n.abrupt("return",Object(j.jsx)(c,{}));case 13:return n.abrupt("return",Object(j.jsx)(p.a,{}));case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();e.a=function(n){var e=n.type,t=void 0===e?"initial":e,a=n.title,r=n.message,i=n.className,o=d.a.useState(),p=Object(c.a)(o,2),b=p[0],f=p[1],g=Object(u.useRef)(!0);return Object(u.useEffect)((function(){return g.current=!0,function(){g.current=!1}}),[]),Object(u.useEffect)((function(){function n(){return(n=Object(l.a)(s.a.mark((function n(){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x(t);case 2:e=n.sent,g.current&&f(e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),b?Object(j.jsxs)(v,{className:i,children:[Object(j.jsx)(m,{type:t,children:b}),Object(j.jsx)("h1",{children:a}),r&&Object(j.jsx)("p",{"data-testid":"feedback__message",children:r})]}):null}},37:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var a=t(2);function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}function i(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=a.createElement("path",{d:"M133.562 74.472c-26.994-16.031-71.52-17.505-97.289-9.684-4.139 1.256-8.515-1.08-9.769-5.218a7.836 7.836 0 0 1 5.221-9.772C61.306 40.819 110.481 42.553 141.557 61a7.833 7.833 0 0 1 2.737 10.733c-2.208 3.722-7.019 4.949-10.732 2.739Zm-.884 23.744c-1.894 3.073-5.912 4.037-8.981 2.15-22.505-13.833-56.822-17.841-83.447-9.759a6.539 6.539 0 0 1-8.148-4.35 6.538 6.538 0 0 1 4.354-8.142c30.415-9.23 68.226-4.76 94.074 11.125 3.069 1.89 4.035 5.91 2.148 8.976Zm-10.247 22.803a5.215 5.215 0 0 1-7.177 1.737c-19.665-12.019-44.417-14.733-73.567-8.075a5.218 5.218 0 0 1-6.25-3.925 5.214 5.214 0 0 1 3.926-6.249c31.9-7.292 59.263-4.154 81.336 9.334a5.22 5.22 0 0 1 1.732 7.178ZM84.025.232C37.776.232.282 37.725.282 83.974c0 46.254 37.494 83.744 83.743 83.744 46.251 0 83.743-37.49 83.743-83.744 0-46.249-37.492-83.742-83.743-83.742Z",fill:"currentColor"});function o(n,e){var t=n.title,o=n.titleId,s=i(n,["title","titleId"]);return a.createElement("svg",r({viewBox:"0 0 168 168",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true",ref:e,"aria-labelledby":o},s),t?a.createElement("title",{id:o},t):null,c)}var s=a.forwardRef(o);t.p},53:function(n,e,t){"use strict";var a,r,i,c,o,s,l,u,d=t(10),p=t(2),b=t(54),f=t(5),g=t(6),h=t(22),v=Object(g.css)(a||(a=Object(f.a)(["\n  padding: 0;\n  appearance: none;\n  background: none;\n  border: 0;\n  color: var(--text-color);\n  text-align: left;\n  width: 100%;\n"]))),m=g.default.div(r||(r=Object(f.a)(["\n  ","\n"])),v),j=g.default.button(i||(i=Object(f.a)(["\n  ","\n\n  &:focus,\n  &:hover {\n    cursor: pointer;\n\n    > div {\n      transform: scale(0.98);\n    }\n\n    span:first-of-type {\n      color: var(--spotify-brand);\n    }\n  }\n"])),v),x=g.default.div(c||(c=Object(f.a)(['\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: 0.15s ease-out;\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n\n    box-shadow: 2.8px 2.8px 2.2px rgba(30, 215, 96, 0.02),\n      6.7px 6.7px 5.3px rgba(30, 215, 96, 0.028),\n      12.5px 12.5px 10px rgba(30, 215, 96, 0.035),\n      22.3px 22.3px 17.9px rgba(30, 215, 96, 0.042),\n      41.8px 41.8px 33.4px rgba(30, 215, 96, 0.05),\n      100px 100px 80px rgba(30, 215, 96, 0.07);\n  }\n']))),O=(g.default.div(o||(o=Object(f.a)(["\n  animation: "," 0.25s 0.25s both;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  place-items: center;\n  background-color: rgba(var(--spotify-white), 0.05);\n  color: rgb(var(--spotify-brand));\n\n  svg {\n    width: 40%;\n    height: 40%;\n  }\n"])),h.a),g.default.img(s||(s=Object(f.a)(["\n  width: 100%;\n  height: auto;\n  aspect-ratio: 1;\n  object-fit: cover;\n  object-position: center;\n  display: block;\n  transition: opacity 0.5s ease-out;\n  opacity: ",";\n"])),(function(n){return n.loaded?1:0}))),y=g.default.span(l||(l=Object(f.a)(["\n  display: block;\n  margin-top: var(--spacing-3);\n  font-weight: 600;\n  font-size: 1.4rem;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  transition: 0.15s ease-out;\n"]))),w=g.default.span(u||(u=Object(f.a)(["\n  display: block;\n  margin-top: var(--spacing-1);\n  font-weight: 600;\n  opacity: 0.5;\n"]))),k=t(3);e.a=function(n){var e=n.className,t=n.albumCount,a=n.image,r=n.name,i=n.onClick,c=Object(p.useState)(!1),o=Object(d.a)(c,2),s=o[0],l=o[1],u=Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(x,{children:[!s&&Object(k.jsx)(b.a,{}),Object(k.jsx)(O,{src:a,onLoad:function(){return l(!0)},loaded:s,width:"640",height:"640"})]}),Object(k.jsx)(y,{as:i?void 0:"h1",children:r}),Object(k.jsxs)(w,{"data-testid":"albumcount",children:[t," ",1===t?"album":"albums"]})]});return i?Object(k.jsx)(j,{onClick:i,className:e,children:u}):Object(k.jsx)(m,{className:e,children:u})}},54:function(n,e,t){"use strict";var a,r=t(37),i=t(5),c=t(6),o=t(22),s=c.default.div(a||(a=Object(i.a)(["\n  animation: "," 0.25s 0.5s both;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  place-items: center;\n  background-color: rgba(var(--spotify-white), 0.2);\n  color: rgb(var(--spotify-brand));\n\n  svg {\n    width: 40%;\n    height: 40%;\n  }\n"])),o.a),l=t(3);e.a=function(){return Object(l.jsx)(s,{"data-testid":"fallback",children:Object(l.jsx)(r.a,{})})}},75:function(n,e,t){"use strict";t.r(e);var a,r,i,c,o=t(2),s=t.n(o),l=t(55),u=t.n(l),d=t(85),p=t(87),b=t(84),f=t(5),g=t(6),h=t(56),v=Object(g.createGlobalStyle)(a||(a=Object(f.a)(["\n    ",'\n    \n    :root {\n        --spotify-black: 25, 20, 20;\n        --spotify-brand: 29, 185, 84;\n        --spotify-white: 255, 255, 255;\n\n        --text-color: rgb(var(--spotify-white));\n        --body-bg: rgb(var(--spotify-black));\n\n        --z-index-1: 10;\n        --z-index-2: 20;\n        --z-index-3: 30;\n        --z-index-4: 40;\n        --z-index-5: 50;\n        --z-index-6: 60;\n        --z-index-7: 70;\n        --z-index-8: 80;\n        --z-index-9: 90;\n        --z-index-10: 100;\n\n        --spacing-base: 4px;\n        --spacing-1: var(--spacing-base);\n        --spacing-2: calc(var(--spacing-base) * 2);\n        --spacing-3: calc(var(--spacing-base) * 3);\n        --spacing-4: calc(var(--spacing-base) * 4);\n        --spacing-5: calc(var(--spacing-base) * 5);\n        --spacing-6: calc(var(--spacing-base) * 6);\n        --spacing-7: calc(var(--spacing-base) * 7);\n        --spacing-8: calc(var(--spacing-base) * 8);\n        --spacing-9: calc(var(--spacing-base) * 9);\n        --spacing-10: calc(var(--spacing-base) * 10);\n        --spacing-11: calc(var(--spacing-base) * 11);\n        --spacing-12: calc(var(--spacing-base) * 12);\n        --spacing-13: calc(var(--spacing-base) * 13);\n        --spacing-14: calc(var(--spacing-base) * 14);\n        --spacing-15: calc(var(--spacing-base) * 15);\n        --spacing-16: calc(var(--spacing-base) * 16);\n    }\n\n    html {\n        box-sizing: border-box;\n        font-size: 62.5%;\n    }\n  \n    *, *:before, *:after {\n        box-sizing: inherit;\n    }\n\n    body {\n        color: var(--text-color);\n        background-color: var(--body-bg);\n\n        font-size: 1.6rem;\n        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n            sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n\n    input {\n        font-size: inherit;\n        font-family: inherit;\n    }\n\n    img {\n        display: block;\n        max-width: 100%;\n        height: auto;\n    }\n\n    #root {\n        min-height: 100vh;\n        display: grid;\n        ',"\n    }\n"])),h.normalize,(function(n){return n.fatalError?void 0:Object(g.css)(r||(r=Object(f.a)(["\n                grid-template-rows: 1fr min-content;\n                @media (min-width: 530px) {\n                  grid-template-rows: min-content 1fr;\n                }\n              "])))})),m=t(10),j=t(88),x=t(89),O=t(86),y=Object(O.a)(i||(i=Object(f.a)(["\n  query ($query: String!) {\n    queryArtists(byName: $query) {\n      name\n      id\n      image\n      albums {\n        name\n        image\n      }\n    }\n  }\n"]))),w=t(60),k=g.default.span(c||(c=Object(f.a)(["\n  &:not(:focus):not(:active) {\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n    height: 1px;\n    overflow: hidden;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n  }\n"])));function S(){return(S=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}function z(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var E=o.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),C=o.createElement("path",{d:"m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z",fill:"currentColor"});function Z(n,e){var t=n.title,a=n.titleId,r=z(n,["title","titleId"]);return o.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",focusable:"false","aria-hidden":"true",ref:e,"aria-labelledby":a},r),t?o.createElement("title",{id:a},t):null,E,C)}var I,P,q,A=o.forwardRef(Z),M=(t.p,g.default.form(I||(I=Object(f.a)(["\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n"])))),B=g.default.button(P||(P=Object(f.a)(["\n  position: absolute;\n  right: var(--spacing-5);\n  width: var(--spacing-7);\n  height: var(--spacing-7);\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  color: var(--text-color);\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  transition: 0.25s ease-out;\n"]))),N=g.default.input(q||(q=Object(f.a)(["\n  border: none;\n  background-color: transparent;\n  border-radius: calc(var(--spacing-11) / 2);\n  appearance: none;\n  -webkit-appearance: none;\n  font-family: inherit;\n  color: var(--text-color);\n  height: var(--spacing-11);\n  width: var(--spacing-11);\n  outline: none;\n  transition: 0.25s ease-out;\n  will-change: width;\n  padding: var(--spacing-2) var(--spacing-5);\n  background-color: rgba(var(--spotify-white), 0.1);\n  width: 100%;\n\n  @media (min-width: 530px) {\n    width: var(--spacing-11);\n    background-color: transparent;\n  }\n\n  &:hover {\n    background-color: rgba(var(--spotify-white), 0.1);\n  }\n\n  &:focus,\n  &:valid {\n    width: 100%;\n    background-color: rgba(var(--spotify-white), 0.1);\n    padding: var(--spacing-2) var(--spacing-5);\n    padding-right: var(--spacing-15);\n  }\n\n  &:not(:focus):invalid ~ button {\n    pointer-events: none;\n    right: 10px;\n  }\n\n  &:invalid ~ button {\n    pointer-events: none;\n  }\n\n  &:not(:focus) {\n    cursor: pointer;\n  }\n\n  &::-webkit-search-cancel-button {\n    display: none;\n  }\n"]))),R=t(3),V=function(n){var e=n.onSearch,t=Object(o.useState)(""),a=Object(m.a)(t,2),r=a[0],i=a[1],c=Object(o.useMemo)((function(){return Object(w.a)(e,350)}),[e]);Object(o.useEffect)((function(){return function(){c.cancel()}}),[]);return Object(R.jsxs)(M,{action:"/",method:"post",onSubmit:function(n){n.preventDefault(),c(r)},noValidate:!0,acceptCharset:"utf-8",role:"search",children:[Object(R.jsx)(N,{enterKeyHint:"search",type:"search",onChange:function(n){i(n.currentTarget.value),c(n.currentTarget.value)},required:!0,value:r}),Object(R.jsxs)(B,{type:"submit",children:[Object(R.jsx)(A,{}),Object(R.jsx)(k,{children:"Search"})]})]})};function H(){return(H=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}function F(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var L=o.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),D=o.createElement("path",{fill:"currentColor",d:"m10.828 12 4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"});function J(n,e){var t=n.title,a=n.titleId,r=F(n,["title","titleId"]);return o.createElement("svg",H({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,focusable:"false","aria-hidden":"true",ref:e,"aria-labelledby":a},r),t?o.createElement("title",{id:a},t):null,L,D)}var T,U=o.forwardRef(J),$=(t.p,g.default.button(T||(T=Object(f.a)(["\n  -webkit-appearance: none;\n  appearance: none;\n  background: none;\n  border: 0;\n  position: relative;\n  transition: 0.25s ease-out;\n  color: var(--spotify-white);\n  width: var(--spacing-11);\n  height: var(--spacing-11);\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: none;\n\n  svg {\n    display: block;\n  }\n\n  &:not([disabled]) {\n    &:hover,\n    &:focus {\n      cursor: pointer;\n      background-color: rgba(var(--spotify-white), 0.1);\n    }\n  }\n\n  &[disabled] {\n    opacity: 0.5;\n  }\n"])))),_=function(n){var e=n.onClick,t=n.disabled,a=void 0!==t&&t;return Object(R.jsxs)($,{onClick:e,disabled:a,children:[Object(R.jsx)(U,{}),Object(R.jsx)(k,{children:"Back to search results"})]})};function G(){return(G=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}function K(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var W=o.createElement("path",{d:"M137.532 76.477c-26.994-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 0 1 5.221-9.771c29.581-8.979 78.755-7.245 109.831 11.202a7.831 7.831 0 0 1 2.737 10.733c-2.208 3.722-7.019 4.949-10.732 2.739Zm-.884 23.744c-1.893 3.073-5.911 4.036-8.98 2.15-22.505-13.834-56.822-17.841-83.447-9.759-3.453 1.043-7.1-.904-8.148-4.35a6.538 6.538 0 0 1 4.353-8.143c30.416-9.229 68.226-4.759 94.074 11.126 3.069 1.89 4.035 5.91 2.148 8.976Zm-10.247 22.803a5.215 5.215 0 0 1-7.176 1.737c-19.666-12.019-44.418-14.734-73.568-8.075a5.217 5.217 0 0 1-6.249-3.925 5.212 5.212 0 0 1 3.925-6.249c31.9-7.293 59.264-4.154 81.337 9.334a5.22 5.22 0 0 1 1.731 7.178ZM87.996 2.237c-46.25 0-83.744 37.492-83.744 83.742 0 46.253 37.494 83.744 83.744 83.744 46.251 0 83.743-37.491 83.743-83.744 0-46.25-37.492-83.742-83.743-83.742Zm144.093 77.309c-14.459-3.448-17.034-5.868-17.034-10.952 0-4.805 4.524-8.037 11.25-8.037 6.52 0 12.984 2.455 19.763 7.509a.945.945 0 0 0 .715.174.933.933 0 0 0 .625-.386l7.06-9.952a.949.949 0 0 0-.18-1.288c-8.067-6.473-17.151-9.62-27.769-9.62-15.612 0-26.517 9.369-26.517 22.774 0 14.375 9.407 19.465 25.663 23.394 13.836 3.187 16.171 5.856 16.171 10.63 0 5.289-4.722 8.577-12.321 8.577-8.439 0-15.324-2.843-23.025-9.512a.997.997 0 0 0-.695-.226.94.94 0 0 0-.649.334l-7.916 9.421a.94.94 0 0 0 .093 1.313c8.961 7.999 19.98 12.225 31.872 12.225 16.823 0 27.694-9.193 27.694-23.42 0-12.024-7.184-18.674-24.8-22.958m75.073 16.115c0 10.153-6.254 17.238-15.209 17.238-8.853 0-15.531-7.407-15.531-17.238 0-9.83 6.678-17.238 15.531-17.238 8.811 0 15.209 7.248 15.209 17.238ZM294.95 65.286c-7.292 0-13.273 2.872-18.205 8.757v-6.624a.949.949 0 0 0-.947-.949h-12.946a.948.948 0 0 0-.946.949v73.602c0 .523.423.949.946.949h12.946a.949.949 0 0 0 .947-.949v-23.232c4.933 5.536 10.915 8.24 18.205 8.24 13.549 0 27.265-10.43 27.265-30.368 0-19.942-13.716-30.375-27.265-30.375Zm62.423 47.719c-9.281 0-16.278-7.457-16.278-17.344 0-9.928 6.755-17.134 16.064-17.134 9.341 0 16.385 7.457 16.385 17.351 0 9.927-6.801 17.127-16.171 17.127Zm0-47.719c-17.449 0-31.119 13.436-31.119 30.592 0 16.969 13.576 30.264 30.905 30.264 17.511 0 31.223-13.391 31.223-30.481 0-17.033-13.618-30.375-31.009-30.375Zm68.271 1.184h-14.247V51.904a.946.946 0 0 0-.945-.948h-12.945a.95.95 0 0 0-.95.948V66.47h-6.225a.946.946 0 0 0-.943.949v11.127c0 .522.421.948.943.948h6.225v28.792c0 11.635 5.791 17.534 17.212 17.534 4.644 0 8.497-.959 12.128-3.018a.945.945 0 0 0 .479-.821v-10.596a.951.951 0 0 0-1.372-.85c-2.494 1.255-4.905 1.834-7.6 1.834-4.153 0-6.007-1.885-6.007-6.112V79.494h14.247a.946.946 0 0 0 .944-.948V67.419a.946.946 0 0 0-.944-.949m49.637.057v-1.789c0-5.263 2.018-7.61 6.544-7.61 2.699 0 4.867.536 7.295 1.346a.946.946 0 0 0 1.245-.902v-10.91a.948.948 0 0 0-.669-.909c-2.565-.762-5.847-1.546-10.761-1.546-11.959 0-18.279 6.734-18.279 19.467v2.74h-6.22a.952.952 0 0 0-.95.948v11.184c0 .522.428.948.95.948h6.22v44.41c0 .523.422.948.944.948h12.946a.95.95 0 0 0 .949-.948v-44.41h12.088l18.517 44.398c-2.102 4.665-4.169 5.593-6.991 5.593-2.281 0-4.683-.681-7.139-2.025a.972.972 0 0 0-.754-.071.959.959 0 0 0-.56.512l-4.388 9.627a.941.941 0 0 0 .407 1.225c4.581 2.481 8.717 3.54 13.827 3.54 9.56 0 14.844-4.454 19.503-16.434l22.461-58.04a.946.946 0 0 0-.879-1.292h-13.478a.951.951 0 0 0-.897.636L513.405 106.6l-15.123-39.463a.943.943 0 0 0-.884-.61h-22.117m-28.776-.057h-12.947a.95.95 0 0 0-.948.949v56.485c0 .523.425.948.948.948h12.947a.95.95 0 0 0 .948-.948V67.419a.95.95 0 0 0-.948-.949m-6.408-25.719c-5.128 0-9.291 4.153-9.291 9.282 0 5.131 4.163 9.288 9.291 9.288 5.127 0 9.285-4.157 9.285-9.288 0-5.129-4.158-9.282-9.285-9.282m113.952 31.338h-2.372v3.025h2.372c1.184 0 1.891-.579 1.891-1.514 0-.984-.707-1.511-1.891-1.511Zm1.538 4.315 2.577 3.608h-2.173l-2.32-3.309h-1.994v3.309h-1.819v-9.563h4.265c2.221 0 3.683 1.136 3.683 3.05 0 1.568-.906 2.526-2.219 2.905Zm-2.02-9.138c-4.667 0-8.199 3.71-8.199 8.253 0 4.54 3.507 8.201 8.151 8.201 4.666 0 8.201-3.708 8.201-8.253 0-4.541-3.509-8.201-8.153-8.201Zm-.048 17.365c-5.124 0-9.111-4.115-9.111-9.112 0-4.998 4.039-9.159 9.159-9.159a9.074 9.074 0 0 1 9.111 9.107c0 4.997-4.036 9.164-9.159 9.164Z",fill:"#1ED760"});function Q(n,e){var t=n.title,a=n.titleId,r=K(n,["title","titleId"]);return o.createElement("svg",G({viewBox:"0 0 567 171",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true",ref:e,"aria-labelledby":a},r),t?o.createElement("title",{id:a},t):null,W)}var X,Y,nn,en,tn=o.forwardRef(Q),an=(t.p,g.default.header(X||(X=Object(f.a)(["\n  order: 1;\n  position: sticky;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #191414cc;\n  z-index: var(--z-index-9);\n  backdrop-filter: blur(7px);\n  align-items: center;\n  display: grid;\n  gap: var(--spacing-3);\n  padding: var(--spacing-4) var(--spacing-4);\n  grid-template-columns: min-content 1fr;\n\n  @media (min-width: 530px) {\n    order: unset;\n    top: 0;\n    grid-template-columns: min-content 1fr 300px;\n  }\n\n  @media (min-width: 920px) {\n    gap: var(--spacing-5);\n    grid-template-columns: 300px 1fr 300px;\n    padding: var(--spacing-4) var(--spacing-16);\n  }\n\n  > svg {\n    color: var(--spotify-brand);\n    max-width: 140px;\n    width: 100%;\n    place-self: center;\n\n    @media (max-width: 529px) {\n      grid-column: 1 / span 2;\n      grid-row: 1;\n    }\n\n    @media (min-width: 530px) and (max-width: 919px) {\n      place-self: flex-start;\n    }\n  }\n\n  form {\n    @media (max-width: 529px) {\n      grid-row: 2;\n      grid-column: span 2;\n    }\n  }\n\n  > button {\n    grid-row: 1;\n    grid-column: 1;\n  }\n"])))),rn=g.default.main(Y||(Y=Object(f.a)(["\n  margin-top: var(---spacing-10);\n  padding: var(--spacing-4) var(--spacing-4);\n  height: inherit;\n  display: grid;\n\n  @media (min-width: 920px) {\n    padding: var(--spacing-4) var(--spacing-16);\n  }\n"]))),cn=function(n){var e=n.onBackClick,t=n.backEnabled,a=void 0!==t&&t,r=n.handleSearch,i=n.children;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(an,{children:[Object(R.jsx)(_,{onClick:e,disabled:!a}),Object(R.jsx)(tn,{}),Object(R.jsx)(V,{onSearch:r})]}),Object(R.jsx)(rn,{children:i})]})},on=t(53),sn=t(22),ln=g.default.ul(nn||(nn=Object(f.a)(["\n  margin: 0;\n  padding: 0;\n  display: grid;\n  margin: auto;\n  list-style: none;\n  animation: "," 0.1s ease-out both;\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  gap: var(--spacing-6);\n\n  @media (min-width: 920px) {\n    gap: var(--spacing-8);\n    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  }\n\n  li {\n    width: 100%;\n  }\n"])),sn.c),un=function(n){var e=n.artists,t=n.selectArtist;return Object(R.jsxs)("section",{children:[Object(R.jsx)("h1",{children:"Artists"}),Object(R.jsx)(ln,{children:e.map((function(n){return Object(R.jsx)("li",{children:Object(R.jsx)(on.a,{albumCount:n.albums.length,image:n.image,name:n.name,onClick:function(){return t(n)}})},n.id)}))})]})},dn=t(24),pn=function(){return Object(R.jsx)(dn.a,{title:"Start searching",message:"Search for your favourite artist to discover their discography."})},bn=function(){return Object(R.jsx)(dn.a,{title:"Loading",message:"Hold on to your seat"})},fn=function(n){var e=n.message;return Object(R.jsx)(dn.a,{type:"error",title:"We've encountered an issue",message:e})},gn=Object(g.default)(dn.a)(en||(en=Object(f.a)(["\n  p {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 300px;\n  }\n"]))),hn=function(n){var e=n.query;return Object(R.jsx)(gn,{type:"no-results",title:"No results",message:e})},vn=Object(o.lazy)((function(){return t.e(5).then(t.bind(null,94))}));var mn,jn=function(){var n=Object(o.useState)(""),e=Object(m.a)(n,2),t=e[0],a=e[1],r=Object(o.useState)(),i=Object(m.a)(r,2),c=i[0],s=i[1],l=Object(j.a)(y,{variables:{query:t}}),u=Object(m.a)(l,2),d=u[0],p=u[1],b=p.loading,f=p.data,g=p.error;Object(x.a)("".concat(c?"".concat(c.name," | Artist"):"".concat(t?"".concat(t," | Overview"):"Overview")," | Spotify")),Object(o.useEffect)((function(){t&&d()}),[t,d]);var h=Object(o.useCallback)((function(){return t?b?Object(R.jsx)(bn,{}):g?Object(R.jsx)(fn,{message:g.message}):c?Object(R.jsx)(vn,{name:c.name,image:c.image,albums:c.albums}):(null===f||void 0===f?void 0:f.queryArtists.length)?Object(R.jsx)(un,{artists:null===f||void 0===f?void 0:f.queryArtists,selectArtist:s}):Object(R.jsx)(hn,{query:t}):Object(R.jsx)(pn,{})}),[t,b,g,c,null===f||void 0===f?void 0:f.queryArtists]);return Object(R.jsx)(cn,{onBackClick:function(){return s()},backEnabled:!!c,handleSearch:a,children:Object(R.jsx)(o.Suspense,{fallback:Object(R.jsx)("div",{}),children:h()})})},xn=new d.a({uri:"",cache:new p.a});mn=s.a.lazy((function(){return t.e(6).then(t.bind(null,91))})),u.a.render(Object(R.jsxs)(s.a.StrictMode,{children:[Object(R.jsx)(v,{fatalError:!!mn}),Object(R.jsx)(o.Suspense,{fallback:Object(R.jsx)("div",{}),children:mn?Object(R.jsx)(mn,{}):Object(R.jsx)(b.a,{client:xn,children:Object(R.jsx)(jn,{})})})]}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.d3a2d1ba.chunk.js.map