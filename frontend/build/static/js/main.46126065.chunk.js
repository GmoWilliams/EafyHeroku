(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{62:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(26),n=c.n(a),r=c(6),l=c(2),i=c(0);var o=function(){return Object(i.jsx)("div",{className:"container micontenedor",children:Object(i.jsx)("h1",{children:"Home prueba"})})},d=c(10),j=c(14),b=c(5),x=c(11),h=c.n(x);var m=function(){var e=Object(s.useState)({nombre:"",email:"","contrase\xf1a":""}),t=Object(b.a)(e,2),c=t[0],a=t[1];function n(e){var t=e.target,c=t.name,s=t.value;a((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(d.a)({},c,s))}))}return Object(i.jsxs)("div",{className:"container micontenedor",children:[Object(i.jsx)("h1",{children:"Registro"}),Object(i.jsx)("p",{children:"A continuaci\xf3n, puedes registrarte aqu\xed!"}),Object(i.jsx)("main",{class:"form-signin",children:Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{class:"form-floating",children:[Object(i.jsx)("input",{onChange:n,name:"nombre",value:c.name,type:"text",class:"form-control",id:"floatingInput",placeholder:"name@example.com"}),Object(i.jsx)("label",{for:"floatingInput",children:"Nombre"})]}),Object(i.jsxs)("div",{class:"form-floating",children:[Object(i.jsx)("input",{onChange:n,name:"email",value:c.email,type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com"}),Object(i.jsx)("label",{for:"floatingInput",children:"Email address"})]}),Object(i.jsxs)("div",{class:"form-floating mb-3",children:[Object(i.jsx)("input",{onChange:n,name:"contrase\xf1a",value:c.contrase\u00f1a,type:"password",class:"form-control",id:"floatingPassword",placeholder:"Password"}),Object(i.jsx)("label",{for:"floatingPassword",children:"Password"})]}),Object(i.jsx)("button",{onClick:function(e){e.preventDefault();var t={nombre:c.nombre,email:c.email,"contrase\xf1a":c.contrase\u00f1a};h.a.post("/registrar",t)},class:"w-100 btn btn-lg btn-primary",type:"submit",children:"Registrar"}),Object(i.jsx)("p",{class:"mt-5 mb-3 text-muted",children:"\xa9 2017\u20132021"})]})})]})};c(15);var O=function(){var e=Object(s.useState)([]),t=Object(b.a)(e,2),c=(t[0],t[1],Object(s.useState)(null)),a=Object(b.a)(c,2),n=(a[0],a[1],Object(s.useState)({item:"",description:"",um:"",productCode:""})),r=Object(b.a)(n,2),l=(r[0],r[1],0);return Object(i.jsxs)("div",{className:"container micontenedor",children:[Object(i.jsx)("h1",{children:"Dashboard"}),Object(i.jsx)("div",{class:"container",children:Object(i.jsxs)("div",{class:"row justify-content-around",children:[Object(i.jsxs)("div",{class:"col",children:[Object(i.jsx)("div",{class:"row align-items-center",children:Object(i.jsx)("h1",{class:"text-center",children:" Registro de Archivos"})}),Object(i.jsx)("div",{class:"row justify-content-center",children:Object(i.jsx)("div",{class:"col-md-auto",children:Object(i.jsx)("form",{action:"/subirExcel",method:"POST",enctype:"multipart/form-data",children:Object(i.jsxs)("div",{class:"form-group",children:[Object(i.jsx)("label",{for:"excel",children:"BrowseFile"}),Object(i.jsx)("input",{type:"file",class:"form-control",name:"excel",required:!0}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{class:"row justify-content-center",children:Object(i.jsx)("div",{class:"col-md-auto",children:Object(i.jsx)("input",{class:"btn btn-dark btn-lg",type:"submit",value:"Subir Excel"})})})]})})})})]}),Object(i.jsxs)("div",{class:"col",children:[Object(i.jsxs)("div",{class:"row justify-content-center",children:[Object(i.jsx)("div",{class:"col-md-auto",children:Object(i.jsx)("a",{href:"#myModal",class:"btn btn-dark btn-lg","data-bs-toggle":"modal",role:"button",onClick:function(){h.a.get("/recibirMovimientos").then((function(e){var t=e.data;l=t.map((function(e){return e.cantidad})).reduce((function(e,t){return e+t})),console.log(l),document.getElementById("textoBalance").innerText=l}))},children:"Generar Reporte 1"})}),Object(i.jsx)("div",{id:"myModal",class:"modal fade",children:Object(i.jsx)("div",{class:"modal-dialog",children:Object(i.jsxs)("div",{class:"modal-content",children:[Object(i.jsxs)("div",{class:"modal-header",children:[Object(i.jsx)("p",{class:"modal-title",children:"Tu Balance es:"}),Object(i.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"})]}),Object(i.jsxs)("div",{class:"modal-body",children:[Object(i.jsxs)("h5",{class:"modal-title",id:"textoBalance",children:["$+",l]}),Object(i.jsx)("p",{class:"text-secondary",children:Object(i.jsx)("small",{children:"Si existe algun error favor de comunicarse con soporte tecnico"})})]}),Object(i.jsx)("div",{class:"modal-footer",children:Object(i.jsx)("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",children:"OK"})})]})})})]}),Object(i.jsx)("div",{class:"row justify-content-center",children:Object(i.jsx)("div",{class:"col-md-auto",children:Object(i.jsx)("button",{class:"btn btn-dark btn-lg",children:"Generar Reporte 2"})})}),Object(i.jsx)("div",{class:"row justify-content-center",children:Object(i.jsx)("div",{class:"col-md-auto",children:Object(i.jsx)("button",{class:"btn btn-dark btn-lg",children:"Generar Reporte 3"})})})]})]})})]})};var u=function(){return Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/",element:Object(i.jsx)(o,{})}),Object(i.jsx)(l.a,{path:"/registro",element:Object(i.jsx)(m,{})}),Object(i.jsx)(l.a,{path:"/dashboard",element:Object(i.jsx)(O,{})})]})};var v=function(){return Object(i.jsx)("header",{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("header",{className:"d-flex justify-content-center py-3",children:[Object(i.jsxs)("ul",{className:"nav nav-tabs mb-3 ",id:"myTab",role:"tablist",children:[Object(i.jsx)("li",{class:"nav-item",children:Object(i.jsx)("a",{class:"nav-link","nav-link-color":"primary",id:"home-tab","data-toggle":"tab",href:"/",role:"tab","aria-controls":"home","aria-selected":"true",children:"Home"})}),Object(i.jsx)("li",{class:"nav-item",children:Object(i.jsx)("a",{class:"nav-link",id:"registro-tab","data-toggle":"tab",href:"/registro",role:"tab","aria-controls":"registro","aria-selected":"false",children:"Registro"})}),Object(i.jsx)("li",{class:"nav-item",children:Object(i.jsx)("a",{class:"nav-link",id:"dashboard-tab","data-toggle":"tab",href:"/dashboard",role:"tab","aria-controls":"dashboard","aria-selected":"false",children:"Dashboard"})})]}),Object(i.jsxs)("div",{class:"tab-content",children:[Object(i.jsx)("div",{class:"tab-pane fade show active",id:"",role:"tabpanel","aria-labelledby":"home-tab"}),Object(i.jsx)("div",{class:"tab-pane fade show active",id:"registro",role:"tabpanel","aria-labelledby":"registro-tab"}),Object(i.jsx)("div",{class:"tab-pane fade show active",id:"dashboard",role:"tabpanel","aria-labelledby":"dashboard-tab"})]})]})})})};var f=function(){return Object(i.jsx)("footer",{children:Object(i.jsx)("div",{class:"container",children:Object(i.jsxs)("footer",{class:"py-3 my-4",children:[Object(i.jsxs)("ul",{class:"nav justify-content-center border-bottom pb-3 mb-3",children:[Object(i.jsx)("li",{class:"nav-item",children:Object(i.jsx)(r.b,{to:"#",class:"nav-link px-2 text-muted",children:"Home"})}),Object(i.jsx)("li",{class:"nav-item",children:Object(i.jsx)(r.b,{to:"/registro",class:"nav-link px-2 text-muted",children:"Registro"})})]}),Object(i.jsx)("p",{class:"text-center text-muted",children:"\xa9 2021 Company, Inc"})]})})})};var p=function(){return Object(i.jsx)(r.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(v,{}),Object(i.jsx)(u,{}),Object(i.jsx)(f,{})]})})};n.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.46126065.chunk.js.map