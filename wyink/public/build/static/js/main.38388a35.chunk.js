(this.webpackJsonpwyink=this.webpackJsonpwyink||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(16),s=c.n(r),i=(c(22),c(8)),l=c.p+"static/media/wyink-logo-8.f70a653c.png",j=c(0),o=function(){return Object(j.jsx)("div",{className:"nav-wrapper",children:Object(j.jsx)("nav",{className:"purple darken-4",children:Object(j.jsx)("div",{className:"container center",children:Object(j.jsx)("a",{href:"/",className:"center brand-logo",children:Object(j.jsx)("img",{className:"responsive-img center",src:l,alt:"wyink-logo",width:"100",height:"50"})})})})})},d=function(e){var t=e.searchQuery,c=Object(n.useState)(""),a=Object(i.a)(c,2),r=a[0],s=a[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("input",{onChange:function(e){return s(e.target.value)},type:"text",name:"search",id:"search"}),Object(j.jsx)("label",{htmlFor:"search",children:"Search"})]}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("button",{onClick:function(){t("https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&srsearch=".concat(r,"&format=json"))},className:"btn waves-effect waves-light purple darken-4 right col s12",children:"Search Article"})})]})},h=c(9),b=function(e){var t=e.data,c=e.getArticleContent;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{className:"purple-text text-darken-3",children:"Articles"}),Object(j.jsx)("div",{className:"row",children:t.map((function(e){return Object(j.jsxs)("div",{className:"card col s12 orange lighten-3 hoverable",children:[Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsx)("div",{className:"card-title activator",children:e.title}),Object(j.jsx)("span",{className:"truncate",children:e.timestamp})]}),Object(j.jsxs)("div",{className:"card-reveal purple darken-4",children:[Object(j.jsx)("div",{className:"card-title white-text center",children:e.title}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{dangerouslySetInnerHTML:{__html:e.snippet},className:"container white-text"}),Object(j.jsx)("div",{className:"container ",children:Object(j.jsx)(h.b,{to:"/content",onClick:function(t){!function(e,t){c(t)}(0,"https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&html&format=json&titles="+e.title.replace(" ","_"))},id:e.pageid,className:"right",children:"Read more"})})]})]},e.pageid)}))})]})},u=function(e){var t=e.articleData,c=(e.setArticleData,Object.values(t)[0]);return console.log(c),Object(j.jsxs)("div",{className:"container",id:"article-content",children:[Object(j.jsx)("button",{className:"btn-floating black medium left",children:Object(j.jsx)(h.b,{to:"/",children:Object(j.jsx)("i",{className:"material-icons",children:"arrow_back"})})}),Object(j.jsx)("div",{id:"top",children:Object(j.jsx)("a",{className:"black-text",href:"#top",children:Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:c.title}),Object(j.jsx)("div",{dangerouslySetInnerHTML:{__html:c.extract}})]})})})})]})},O=c(2);var x=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(i.a)(r,2),l=s[0],x=s[1],p=Object(n.useState)(!1),m=Object(i.a)(p,2),v=m[0],f=m[1],g=Object(n.useState)(null),N=Object(i.a)(g,2),w=N[0],k=N[1];return Object(j.jsxs)("div",{className:"app-content",children:[Object(j.jsx)(o,{}),Object(j.jsxs)(h.a,{children:[Object(j.jsxs)(O.a,{exact:!0,path:"/",children:[Object(j.jsx)(d,{searchQuery:function(e){fetch(e).then((function(e){if(!e.ok)throw Error("couldn't get results");return e.json()})).then((function(e){f(!1),a(e.query.search),k(null)})).catch((function(e){k(e),f(!1)}))}}),0!==c.length&&Object(j.jsx)(b,{error:w,pending:v,data:c,getArticleContent:function(e){fetch(e).then((function(e){if(!e.ok)throw Error("couldn't get results");return e.json()})).then((function(e){x(e.query.pages)})).catch((function(e){console.log(e)}))}})]}),Object(j.jsx)(O.c,{children:Object(j.jsx)(O.a,{path:"/content",children:l&&Object(j.jsx)(u,{articleData:l,setArticleData:x})})})]})]})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.38388a35.chunk.js.map