(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{167:function(e,t){},169:function(e,t){},180:function(e,t){},182:function(e,t){},207:function(e,t){},209:function(e,t){},210:function(e,t){},215:function(e,t){},217:function(e,t){},223:function(e,t){},225:function(e,t){},244:function(e,t){},256:function(e,t){},259:function(e,t){},262:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(131),s=n.n(a),r=n(13),i=n(3),l=n(0);var o=function(){return Object(l.jsx)("div",{className:"container micontenedor",children:Object(l.jsx)("h1",{children:"Home prueba"})})},j=n(28),b=n(29),d=n(10),m=n(41),h=n.n(m),u=n(163);var x=function(){var e=Object(c.useState)({nombre:"",email:"","contrase\xf1a":""}),t=Object(d.a)(e,2),n=t[0],a=t[1];function s(e){var t=e.target,n=t.name,c=t.value;a((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(j.a)({},n,c))}))}return Object(l.jsxs)("div",{className:"container micontenedor",children:[Object(l.jsx)("h1",{children:"Registro"}),Object(l.jsx)("p",{children:"A continuaci\xf3n, puedes registrarte aqu\xed!"}),Object(l.jsx)("main",{class:"form-signin",children:Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{class:"form-floating",children:[Object(l.jsx)("input",{onChange:s,name:"nombre",value:n.name,type:"text",class:"form-control",id:"floatingInput",placeholder:"name@example.com"}),Object(l.jsx)("label",{for:"floatingInput",children:"Nombre"})]}),Object(l.jsxs)("div",{class:"form-floating",children:[Object(l.jsx)("input",{onChange:s,name:"email",value:n.email,type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com"}),Object(l.jsx)("label",{for:"floatingInput",children:"Email address"})]}),Object(l.jsxs)("div",{class:"form-floating mb-3",children:[Object(l.jsx)("input",{onChange:s,name:"contrase\xf1a",value:n.contrase\u00f1a,type:"password",class:"form-control",id:"floatingPassword",placeholder:"Password"}),Object(l.jsx)("label",{for:"floatingPassword",children:"Password"})]}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),n.contrase\u00f1a=u.hashSync(n.contrase\u00f1a,10);var t={nombre:n.nombre,email:n.email,"contrase\xf1a":n.contrase\u00f1a};h.a.post("/registrar",t)},class:"w-100 btn btn-lg btn-primary",type:"submit",children:"Registrar"}),Object(l.jsx)("p",{class:"mt-5 mb-3 text-muted",children:"\xa9 2017\u20132021"})]})})]})},O=n(68);var f=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)("div",{className:"container micontenedor",children:[Object(l.jsx)("h1",{children:"Dashboard"}),Object(l.jsx)("input",{type:"file",onChange:function(e){!function(e){new Promise((function(t,n){var c=new FileReader;c.readAsArrayBuffer(e),c.onload=function(e){var n=e.target.result,c=O.a(n,{type:"buffer"}),a=c.SheetNames[0],s=c.Sheets[a],r=O.b.sheet_to_json(s);t(r)},c.onerror=function(e){n(e)}})).then((function(e){console.log(e),a(e)}))}(e.target.files[0])}}),Object(l.jsxs)("table",{class:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Item"}),Object(l.jsx)("th",{scope:"col",children:"Description"})]})}),Object(l.jsx)("tbody",{children:n.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:e.Item}),Object(l.jsx)("td",{children:e.Description})]},e.Item)}))})]})]})};var p=function(){var e=Object(c.useState)({email:"","contrase\xf1a":""}),t=Object(d.a)(e,2),n=t[0],a=t[1];function s(e){var t=e.target,n=t.name,c=t.value;a((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(j.a)({},n,c))}))}return Object(l.jsxs)("div",{className:"container micontenedor",children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsx)("p",{children:"A continuaci\xf3n, puedes iniciar sesi\xf3n aqu\xed!"}),Object(l.jsx)("main",{class:"form-signin",children:Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{class:"form-floating",children:[Object(l.jsx)("input",{onChange:s,name:"email",value:n.email,type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com"}),Object(l.jsx)("label",{for:"floatingInput",children:"Email address"})]}),Object(l.jsxs)("div",{class:"form-floating mb-3",children:[Object(l.jsx)("input",{onChange:s,name:"contrase\xf1a",value:n.contrase\u00f1a,type:"password",class:"form-control",id:"floatingPassword",placeholder:"Password"}),Object(l.jsx)("label",{for:"floatingPassword",children:"Password"})]}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault();var t={email:n.email,"contrase\xf1a":n.contrase\u00f1a};h.a.post("/login",t)},class:"w-100 btn btn-lg btn-primary",type:"submit",children:"Login"}),Object(l.jsx)("p",{class:"mt-5 mb-3 text-muted",children:"\xa9 2017\u20132021"})]})})]})};var v=function(){return Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",element:Object(l.jsx)(o,{})}),Object(l.jsx)(i.a,{path:"/login",element:Object(l.jsx)(p,{})}),Object(l.jsx)(i.a,{path:"/registro",element:Object(l.jsx)(x,{})}),Object(l.jsx)(i.a,{path:"/dashboard",element:Object(l.jsx)(f,{})})]})};var g=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("header",{className:"d-flex justify-content-center py-3",children:Object(l.jsxs)("ul",{className:"nav nav-pills",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/",class:"nav-link active","aria-current":"page",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/login",class:"nav-link","aria-current":"page",children:"Login"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/registro",class:"nav-link",children:"Registro"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/dashboard",class:"nav-link",children:"Dashboard"})})]})})})})};var y=function(){return Object(l.jsx)("footer",{children:Object(l.jsx)("div",{class:"container",children:Object(l.jsxs)("footer",{class:"py-3 my-4",children:[Object(l.jsxs)("ul",{class:"nav justify-content-center border-bottom pb-3 mb-3",children:[Object(l.jsx)("li",{class:"nav-item",children:Object(l.jsx)(r.b,{to:"#",class:"nav-link px-2 text-muted",children:"Home"})}),Object(l.jsx)("li",{class:"nav-item",children:Object(l.jsx)(r.b,{to:"/registro",class:"nav-link px-2 text-muted",children:"Registro"})})]}),Object(l.jsx)("p",{class:"text-center text-muted",children:"\xa9 2021 Company, Inc"})]})})})};var w=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{}),Object(l.jsx)(v,{}),Object(l.jsx)(y,{})]})})};s.a.render(Object(l.jsx)(w,{}),document.getElementById("root"))}},[[262,1,2]]]);
//# sourceMappingURL=main.4068d828.chunk.js.map