(this["webpackJsonpdynamic-pagination"]=this["webpackJsonpdynamic-pagination"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(16),s=n.n(i),o=(n(22),n(7)),r=n(4),l=(n(23),n(17)),u=n.n(l),j=n(2);var d=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=e[0],a=e[1],i=(Object(c.useRef)(n.length),Object(c.useState)(1)),s=Object(r.a)(i,2),l=s[0],d=s[1],b=Object(c.useState)(!0),m=Object(r.a)(b,2),h=m[0],O=m[1],f=Object(c.useState)(0),p=Object(r.a)(f,2),g=p[0],v=p[1];Object(c.useRef)(g),Object(c.useEffect)((function(){h&&u.a.get("https://jsonplaceholder.typicode.com/photos?_limit=12&_page=".concat(l)).then((function(t){a([].concat(Object(o.a)(n),Object(o.a)(t.data))),d((function(t){return t+1})),v(t.headers["x-total-count"])})).finally((function(){O(!1)}))}),[h]),Object(c.useEffect)((function(){return document.addEventListener("scroll",x),function(){document.removeEventListener("scroll",x)}}),[h]);var x=function(t){t.target.documentElement.scrollTop+window.innerHeight+100>t.target.documentElement.scrollHeight&&n.length<g&&O(!0)};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"container",children:n.map((function(t){return Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("img",{src:t.thumbnailUrl,alt:"photo"}),Object(j.jsx)("h4",{className:"title",children:t.title})]},t.id)}))}),Object(j.jsxs)("div",{className:"totalCount",children:["Items: ",n.length]})]})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.ed4a84cd.chunk.js.map