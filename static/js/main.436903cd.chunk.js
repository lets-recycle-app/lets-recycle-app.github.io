(this.webpackJsonplets_recycle_app=this.webpackJsonplets_recycle_app||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),i=a.n(c),l=a(16),n=a.n(l),r=(a(23),a(24),a(8)),o=a(2);a(25);var u=function(){return Object(s.jsx)("header",{children:Object(s.jsx)("nav",{className:"navbar",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)(r.b,{to:"/",children:["\u267b ",Object(s.jsx)("span",{children:"Let's Recycle"})]}),Object(s.jsxs)("ul",{className:"navbar-nav",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(r.c,{to:"/",activeClassName:"active",children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(r.c,{to:"/about",activeClassName:"active",children:"About"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(r.c,{to:"/admin",activeClassName:"active",children:"Admin"})})]})]})})})};a(31);var j=function(){return Object(s.jsx)("footer",{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{children:"Place footer content here."})})})};var d=function(){return Object(s.jsxs)("div",{className:"side-column",children:[Object(s.jsx)("h3",{children:"This is side bar where you can post ads and extra content"}),Object(s.jsx)("p",{children:"Ex ex et illo similique libero et. Natus in quo quis suscipit est. Accusantium voluptatem perspiciatis saepe perspiciatis alias cum sit. Voluptas illo mollitia incidunt ipsam aliquam consequuntur. Distinctio iure sed alias illo libero dolore rerum veritatis. Est cumque est impedit aut. Corporis facilis ducimus esse tempora sit. Quia laudantium corrupti id odio voluptas culpa eos et. Quia illum nisi odio nihil. Molestias minima officiis nisi. Excepturi velit sed debitis. Aliquam alias labore dolores aut exercitationem omnis suscipit quis. Natus minima autem eos. Amet neque vel ex laborum recusandae assumenda."})]})},b=a(6),p=(a(32),a(37));function m(e){return Object(s.jsx)("span",{children:e.line})}var v=function(){var e=Object(c.useState)({value:""}),t=Object(b.a)(e,2),i=t[0],l=t[1],n=Object(c.useState)({value:""}),r=Object(b.a)(n,2),o=r[0],u=r[1],j=Object(c.useState)({value:""}),d=Object(b.a)(j,2),v=d[0],h=d[1],O=Object(c.useState)({value:""}),x=Object(b.a)(O,2),N=x[0],f=x[1],g=Object(c.useState)({value:""}),y=Object(b.a)(g,2),S=y[0],w=y[1],T=Object(c.useState)({value:""}),C=Object(b.a)(T,2),P=C[0],R=C[1],q=Object(c.useState)({value:""}),F=Object(b.a)(q,2),A=F[0],k=F[1],I=Object(c.useState)({value:""}),L=Object(b.a)(I,2),D=L[0],E=L[1],M=Object(c.useState)({value:""}),B=Object(b.a)(M,2),J=B[0],H=B[1],_=Object(c.useState)({msg:[]}),W=Object(b.a)(_,2),Q=W[0],Y=W[1];return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=function(e){var t=[];if(""===i.value&&(t.push("Please select Location Type"),l({value:"",css:"textRed"})),"private property"===i.value){""===o.value&&(t.push("Please enter your forename and surname."),u({value:"",css:"borderRed"}));var s=a(33);""!==v.value&&!0===s.validate(v.value)||(t.push("Please enter a valid email."),h({value:v.value,css:"borderRed"}))}return""===N.value&&(t.push("Please select appliance type."),f({value:"",css:"borderRed"})),""===S.value&&(t.push("Please enter house/building number."),w({value:"",css:"borderRed"})),""===P.value&&(t.push("Please enter street."),R({value:"",css:"borderRed"})),""===A.value&&(t.push("Please enter town or city."),k({value:"",css:"borderRed"})),""===D.value&&(t.push("Please enter postcode."),E({value:"",css:"borderRed"})),t}();if(t.length>0)Y({msg:t,css:"errorMsg"});else{var s=Object(p.a)();Y({msg:["Your request was sent. "+("private property"===i?"Your collection ID is: "+s+". Please keep it to manage your collection.":"")],css:"successMsg"});var c={id:s,datetime:(new Date).toISOString().substring(0,19).replace("T"," "),locationType:i.value,name:o.value,email:v.value,apliance:N.value,houseNo:S.value,street:P.value,town:A.value,postcode:D.value,item:N.value,notes:J.value,type:"collection"},n=[];localStorage.getItem("colRequest")&&(n=JSON.parse(localStorage.getItem("colRequest"))),n.push(c),localStorage.setItem("colRequest",JSON.stringify(n)),l({value:""}),u({value:""}),h({value:""}),f({value:""}),w({value:""}),R({value:""}),k({value:""}),E({value:""}),H({value:""})}},children:[Object(s.jsx)("div",{className:Q.css,children:Q.msg.map((function(e,t){return Object(s.jsx)(m,{line:e},t)}))}),Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsx)("label",{children:"Type of location"}),Object(s.jsxs)("div",{className:i.css,children:[Object(s.jsxs)("div",{className:"form-check-inline",children:[Object(s.jsx)("input",{type:"radio",name:"locationType",id:"inlineRadio1",onChange:function(e){l({value:e.target.value}),u({value:""}),h({value:""})},value:"public area",checked:"public area"===i.value}),Object(s.jsx)("label",{htmlFor:"inlineRadio1",children:"Public Area"})]}),Object(s.jsxs)("div",{className:"form-check-inline",children:[Object(s.jsx)("input",{type:"radio",name:"locationType",id:"inlineRadio2",value:"private property",onChange:function(e){return l({value:e.target.value})},checked:"private property"===i.value}),Object(s.jsx)("label",{htmlFor:"inlineRadio2",children:"Private Property "})]})]})]}),Object(s.jsxs)("div",{hidden:"private property"===i.value?"":"hidden",children:[Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsx)("label",{htmlFor:"inputName",children:"Full Name"}),Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"text",id:"inputName",name:"inputName",onChange:function(e){return u({value:e.target.value})},value:o.value,className:o.css})})]}),Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsx)("label",{htmlFor:"email",children:"Email"}),Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"text",id:"inputEmail",name:"inputEmail",onChange:function(e){return h({value:e.target.value})},value:v.value,className:v.css})})]})]}),Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsx)("label",{htmlFor:"inputAppliance",children:"Appliance Type"}),Object(s.jsx)("div",{children:Object(s.jsxs)("select",{id:"inputAppliance",name:"appliance",value:N.value,className:N.css,onChange:function(e){return f({value:e.target.value})},children:[Object(s.jsx)("option",{value:"",children:"Select..."}),Object(s.jsx)("option",{value:"washing machine",children:"Washing Machine"}),Object(s.jsx)("option",{value:"fridge",children:"Fridge"})]})})]}),Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsx)("label",{htmlFor:"inputHouseNo",children:"House/Building No"}),Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"text",id:"inputHouseNo",value:S.value,className:S.css,onChange:function(e){return w({value:e.target.value})}})})]}),Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsx)("label",{htmlFor:"inputStreet",children:"Street"}),Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"text",id:"inputStreet",value:P.value,className:P.css,onChange:function(e){return R({value:e.target.value})}})})]}),Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsx)("label",{htmlFor:"inputTown",children:"Town/City"}),Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"text",id:"inputTown",value:A.value,className:A.css,onChange:function(e){return k({value:e.target.value})}})})]}),Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsx)("label",{htmlFor:"inputPostcode",children:"Postcode"}),Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"text",id:"inputPostcode",value:D.value,className:D.css,onChange:function(e){return E({value:e.target.value})}})})]}),Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsxs)("label",{htmlFor:"inputNotes",children:["Notes",Object(s.jsx)("br",{}),Object(s.jsx)("small",{children:"Please describe location in detail. What is parking situation and access to the appliance?"})]}),Object(s.jsx)("div",{className:"textarea-wrapper",children:Object(s.jsx)("textarea",{id:"inputNotes",name:"inputNotes",value:J.value,className:J.css,onChange:function(e){return H({value:e.target.value})}})})]}),Object(s.jsx)("div",{className:"form-row text-right",children:Object(s.jsx)("button",{type:"submit",children:"Submit"})})]})};var h=function(){return Object(s.jsxs)("div",{className:"main-column",children:[Object(s.jsx)("h1",{children:"Report old house appliance"}),Object(s.jsx)("p",{children:"We recycle old house appliances. Let us know if you have one at home or spotted one dumped in public area."}),Object(s.jsx)("a",{href:"/about",children:"Learn more..."}),Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:"Fill in the form to request collection of a scrap appliance."})}),Object(s.jsx)(v,{})]})};a(34);var O=function(e){return Object(s.jsxs)("div",{className:"drivers-list-item",children:[Object(s.jsxs)("div",{className:"collection"===e.type?"box-head green":"box-head blue",children:[Object(s.jsx)("span",{className:"tick-box-icon",children:e.completed?"\u2611":"\u2610"}),e.houseNo," ",e.street,", ",e.town,", ",e.postcode,Object(s.jsx)("span",{className:"triangle",children:"\u25bc"})]}),Object(s.jsxs)("div",{className:"box-body",children:["Item: ",e.item,Object(s.jsx)("br",{}),"Location Type: ",e.locationType,Object(s.jsx)("br",{}),"Notes: ",e.notes,Object(s.jsx)("br",{}),"Status: ",e.completed?"completed":"not completed"]})]})};var x=function(){var e=[];localStorage.getItem("colRequest")&&(e=(e=JSON.parse(localStorage.getItem("colRequest"))).reverse());var t=e.concat([{id:1,datetime:"2020-12-17",type:"collection",completed:!0,houseNo:"123",street:"Some St",town:"Some Town",postcode:"ST1 2AB",item:"washing machine",locationType:"public area",notes:"in the back alley"},{id:2,datetime:"2020-12-17",type:"collection",completed:!1,houseNo:"45",street:"Some Other St",town:"Some Other Town",postcode:"ST2 3CD",item:"fridge",locationType:"private property",notes:""},{id:3,datetime:"2020-12-17",type:"collection",completed:!1,houseNo:"67",street:"Lorem Ipsum",town:"Dolor sit amet",postcode:"ABC 123",item:"dish washer",locationType:"private property",notes:"no parking in front"},{id:4,datetime:"2020-12-18",type:"collection",completed:!1,houseNo:"89",street:"Adipiscing",town:"Consectetur",postcode:"ABC 123",item:"dish washer",locationType:"private property",notes:"no parking in front"}]),a=Object(c.useState)(t),i=Object(b.a)(a,2),l=i[0];return i[1],Object(s.jsxs)("div",{className:"main-column",children:[Object(s.jsx)("h1",{children:"Latest requests are listed below."}),l.map((function(e){return Object(s.jsx)(O,{houseNo:e.houseNo,street:e.street,town:e.town,postcode:e.postcode,completed:e.completed,type:e.type,item:e.item,locationType:e.locationType,notes:e.notes},e.id)}))]})};var N=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(r.b,{to:"/admin/map",children:"Map"})}),Object(s.jsx)("li",{children:Object(s.jsx)(r.b,{to:"/admin/drivers-list",children:"Driver's list"})})]})})};var f=function(){return Object(s.jsx)(r.a,{children:Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(o.c,{children:[Object(s.jsxs)(o.a,{exact:!0,path:"/",children:[Object(s.jsx)(u,{}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(h,{}),Object(s.jsx)(d,{})]}),Object(s.jsx)(j,{})]}),Object(s.jsxs)(o.a,{path:"/about",children:[Object(s.jsx)(u,{}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"main-column",children:Object(s.jsx)("p",{children:"Lorem ispum dolor."})}),Object(s.jsx)(d,{})]}),Object(s.jsx)(j,{})]}),Object(s.jsxs)(o.a,{exact:!0,path:"/admin",children:[Object(s.jsx)(N,{}),Object(s.jsx)("p",{children:"Admin login goes here."})]}),Object(s.jsxs)(o.a,{path:"/admin/drivers-list",children:[Object(s.jsx)(N,{}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"main-column",children:Object(s.jsx)(x,{})})})]}),Object(s.jsxs)(o.a,{path:"/admin/map",children:[Object(s.jsx)(N,{}),Object(s.jsx)("div",{className:"map",children:"Map goes here."})]})]})})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),s(e),c(e),i(e),l(e)}))};n.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),g()}},[[35,1,2]]]);
//# sourceMappingURL=main.436903cd.chunk.js.map