(this["webpackJsonpclass-26-solution"]=this["webpackJsonpclass-26-solution"]||[]).push([[0],{10:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},37:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(19),a=n(20),r=n(24),s=n(23),i=n(1),u=n.n(i),j=n(21),o=n.n(j),l=n(4),b=n.n(l),O=n(8),d=n(3),x=(n(30),n(10),n(0));function h(){return Object(x.jsx)("header",{children:Object(x.jsx)("h1",{children:"RESTy"})})}function f(){return Object(x.jsx)("footer",{children:"\xa9 2018"})}n(32);function p(e){var t=e.handleApiCall,n=Object(i.useState)("Get"),c=Object(d.a)(n,2),a=c[0],r=c[1],s=Object(i.useState)("https://pokeapi.co/api/v2/pokemon"),u=Object(d.a)(s,2),j=u[0],o=u[1],l=Object(i.useState)(!1),b=Object(d.a)(l,2),O=b[0],h=b[1],f=Object(i.useState)(""),p=Object(d.a)(f,2),m=p[0],v=p[1],g=Object(i.useState)(!1),k=Object(d.a)(g,2),w=k[0],S=k[1],y=function(e){e.preventDefault(),r(e.target.id),console.log(a)},C=function(e){e.preventDefault(),h(!O),r(e.target.id)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={method:a,url:j};S(!w),t(n,m,w)},"date-testid":"submit",children:[Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"URL: "}),Object(x.jsx)("input",{name:"url",type:"text",onChange:function(e){e.preventDefault(),o(e.target.value),console.log(j)}}),Object(x.jsx)("button",{type:"submit","data-testid":"butt",children:"GO!"})]}),Object(x.jsxs)("label",{className:"methods",children:[Object(x.jsx)("button",{id:"get",onClick:y,children:"GET"}),Object(x.jsx)("button",{id:"post",onClick:C,children:"POST"}),Object(x.jsx)("button",{id:"put",onClick:C,children:"PUT"}),Object(x.jsx)("button",{id:"delete",onClick:y,children:"DELETE"})]}),"//"," ",O&&Object(x.jsx)("textarea",{name:"postAndPut",rows:"10",cols:"35",onChange:function(e){e.preventDefault(),v(e.target.value)}})]})})}var m=n(22),v=n.n(m),g=(n(36),n(37),function(){return Object(x.jsx)("div",{className:"loading_spinner-wrap",children:Object(x.jsxs)("svg",{className:"loading_spinner",width:"150",height:"100",viewBox:"0 0 60 20",xmlns:"http://www.w3.org/2000/svg",children:[Object(x.jsx)("circle",{cx:"7",cy:"15",r:"4"}),Object(x.jsx)("circle",{cx:"30",cy:"15",r:"4"}),Object(x.jsx)("circle",{cx:"53",cy:"15",r:"4"})]})})});var k=function(e){return Object(x.jsx)("section",{className:"result",children:Object(x.jsx)("pre",{children:e.data?Object(x.jsx)(v.a,{data:e}):Object(x.jsx)(g,{})})})},w=n(9),S=n.n(w);function y(){var e=Object(i.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)({}),r=Object(d.a)(a,2),s=r[0],j=r[1],o=Object(i.useState)({}),l=Object(d.a)(o,2),m=l[0],v=l[1],g=Object(i.useState)(!1),w=Object(d.a)(g,2),y=w[0],C=w[1],E=Object(i.useState)(""),D=Object(d.a)(E,2),T=D[0],N=D[1],_=function(){var e=Object(O.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(t),N(n),v({root:t.url,cache_control:"string public",age:"86400",s_maxage:"86400"});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(i.useEffect)(Object(O.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={body:T},!s.url){e.next=13;break}if(c(null),"get"!=s.method){e.next=9;break}return e.next=6,S.a.get(s.url);case 6:n=e.sent,e.next=12;break;case 9:return e.next=11,S.a.post(s.url,t.body);case 11:n=e.sent;case 12:c(n.data);case 13:case"end":return e.stop()}}),e)}))),[s.method,s.url]),console.log(),Object(i.useEffect)((function(){setTimeout((function(){C(!y)}),5e3)}),[n]),Object(x.jsxs)(u.a.Fragment,{children:[Object(x.jsx)(h,{}),Object(x.jsxs)("div",{className:"div1","data-testid":"url",children:[" ",s.method," ",s.url]}),Object(x.jsx)(p,{handleApiCall:_}),Object(x.jsx)(k,{data:n,header:m,state:y}),Object(x.jsx)(f,{})]})}var C=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(x.jsx)(y,{})}}]),n}(u.a.Component),E=document.getElementById("root");o.a.render(Object(x.jsx)(C,{}),E)}},[[56,1,2]]]);
//# sourceMappingURL=main.41d3ba4a.chunk.js.map