(this.webpackJsonplets_recycle_app=this.webpackJsonplets_recycle_app||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},110:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},197:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),i=a.n(s),n=a(52),l=a.n(n),r=(a(99),a(100),a(18)),o=a(6);a(101);var u=function(){return Object(c.jsx)("header",{children:Object(c.jsx)("nav",{className:"navbar",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)(r.b,{to:"/",children:["\u267b ",Object(c.jsx)("span",{children:"Let's Recycle"})]}),Object(c.jsxs)("ul",{className:"navbar-nav",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.c,{to:"/",activeClassName:"active",children:"Home"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.c,{to:"/about",activeClassName:"active",children:"About"})})]})]})})})};a(107);var j=function(){return Object(c.jsx)("footer",{children:Object(c.jsxs)("div",{className:"container",children:["Copyright \xa9  ",(new Date).getFullYear()," Let's Recycle All Rights Reserved"]})})};var d=function(){return Object(c.jsxs)("div",{className:"side-column",children:[Object(c.jsx)("h3",{children:"This is side bar where you can post ads and extra content"}),Object(c.jsx)("p",{children:"Ex ex et illo similique libero et. Natus in quo quis suscipit est. Accusantium voluptatem perspiciatis saepe perspiciatis alias cum sit. Voluptas illo mollitia incidunt ipsam aliquam consequuntur. Distinctio iure sed alias illo libero dolore rerum veritatis. Est cumque est impedit aut. Corporis facilis ducimus esse tempora sit. Quia laudantium corrupti id odio voluptas culpa eos et. Quia illum nisi odio nihil. Molestias minima officiis nisi. Excepturi velit sed debitis. Aliquam alias labore dolores aut exercitationem omnis suscipit quis. Natus minima autem eos. Amet neque vel ex laborum recusandae assumenda."})]})};var b=function(){return Object(c.jsx)("header",{children:Object(c.jsx)("nav",{className:"navbar",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)(r.b,{to:"/",children:["\u267b ",Object(c.jsx)("span",{children:"Let's Recycle"})]})})})})};a(108);var m=function(){return Object(c.jsx)("div",{className:"side-column",children:Object(c.jsxs)("ul",{className:"admin-menu",children:[Object(c.jsx)("li",{className:"admin-menu-item",children:Object(c.jsx)(r.c,{exact:!0,to:"/admin",children:"Dashboard"})}),Object(c.jsx)("li",{className:"admin-menu-item",children:Object(c.jsx)(r.c,{to:"/admin/map",children:"Depot Map"})}),Object(c.jsx)("li",{className:"admin-menu-item",children:Object(c.jsx)(r.c,{to:"/admin/drivers-list",children:"Driver's list"})})]})})},p=(a(40),a(92),a(16)),v=(a(110),a(199));function h(e){return Object(c.jsx)("span",{children:e.line})}var O=function(){var e=Object(s.useState)({value:""}),t=Object(p.a)(e,2),i=t[0],n=t[1],l=Object(s.useState)({value:""}),r=Object(p.a)(l,2),o=r[0],u=r[1],j=Object(s.useState)({value:""}),d=Object(p.a)(j,2),b=d[0],m=d[1],O=Object(s.useState)({value:""}),x=Object(p.a)(O,2),N=x[0],g=x[1],f=Object(s.useState)({value:""}),y=Object(p.a)(f,2),S=y[0],w=y[1],T=Object(s.useState)({value:""}),C=Object(p.a)(T,2),R=C[0],P=C[1],A=Object(s.useState)({value:""}),F=Object(p.a)(A,2),q=F[0],_=F[1],D=Object(s.useState)({value:""}),E=Object(p.a)(D,2),k=E[0],I=E[1],L=Object(s.useState)({value:""}),B=Object(p.a)(L,2),H=B[0],J=B[1],M=Object(s.useState)({msg:[]}),W=Object(p.a)(M,2),K=W[0],Y=W[1];return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=function(e){var t=[];if(""===i.value&&(t.push("Please select Location Type"),n({value:"",css:"textRed"})),"private property"===i.value){""===o.value&&(t.push("Please enter your forename and surname."),u({value:"",css:"borderRed"}));var c=a(138);""!==b.value&&!0===c.validate(b.value)||(t.push("Please enter a valid email."),m({value:b.value,css:"borderRed"}))}return""===N.value&&(t.push("Please select appliance type."),g({value:"",css:"borderRed"})),""===S.value&&(t.push("Please enter house/building number."),w({value:"",css:"borderRed"})),""===R.value&&(t.push("Please enter street."),P({value:"",css:"borderRed"})),""===q.value&&(t.push("Please enter town or city."),_({value:"",css:"borderRed"})),""===k.value&&(t.push("Please enter postcode."),I({value:"",css:"borderRed"})),t}();if(t.length>0)Y({msg:t,css:"errorMsg"});else{var c=Object(v.a)(),s="private property"===i.value?"Your collection ID is: "+c+". Please keep it to manage your collection.":"";Y({msg:["Your request was sent. "+s],css:"successMsg"});var l={id:c,datetime:(new Date).toISOString().substring(0,19).replace("T"," "),locationType:i.value,name:o.value,email:b.value,apliance:N.value,houseNo:S.value,street:R.value,town:q.value,postcode:k.value,item:N.value,notes:H.value,type:"collection"};console.log(l);var r=[];localStorage.getItem("colRequest")&&(r=JSON.parse(localStorage.getItem("colRequest"))),r.push(l),localStorage.setItem("colRequest",JSON.stringify(r)),n({value:""}),u({value:""}),m({value:""}),g({value:""}),w({value:""}),P({value:""}),_({value:""}),I({value:""}),J({value:""})}},children:[Object(c.jsx)("div",{className:K.css,children:K.msg.map((function(e,t){return Object(c.jsx)(h,{line:e},t)}))}),Object(c.jsxs)("div",{className:"form-row",children:[Object(c.jsx)("label",{children:"Type of location"}),Object(c.jsxs)("div",{className:i.css,children:[Object(c.jsxs)("div",{className:"form-check-inline",children:[Object(c.jsx)("input",{type:"radio",name:"locationType",id:"inlineRadio1",onChange:function(e){n({value:e.target.value}),u({value:""}),m({value:""})},value:"public area",checked:"public area"===i.value}),Object(c.jsx)("label",{htmlFor:"inlineRadio1",children:"Public Area"})]}),Object(c.jsxs)("div",{className:"form-check-inline",children:[Object(c.jsx)("input",{type:"radio",name:"locationType",id:"inlineRadio2",value:"private property",onChange:function(e){return n({value:e.target.value})},checked:"private property"===i.value}),Object(c.jsx)("label",{htmlFor:"inlineRadio2",children:"Private Property "})]})]})]}),Object(c.jsxs)("div",{hidden:"private property"===i.value?"":"hidden",children:[Object(c.jsxs)("div",{className:"form-row",children:[Object(c.jsx)("label",{htmlFor:"inputName",children:"Full Name"}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{type:"text",id:"inputName",name:"inputName",onChange:function(e){return u({value:e.target.value})},value:o.value,className:o.css})})]}),Object(c.jsxs)("div",{className:"form-row",children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email"}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{type:"text",id:"inputEmail",name:"inputEmail",onChange:function(e){return m({value:e.target.value})},value:b.value,className:b.css})})]})]}),Object(c.jsxs)("div",{className:"form-row",children:[Object(c.jsx)("label",{htmlFor:"inputAppliance",children:"Appliance Type"}),Object(c.jsx)("div",{children:Object(c.jsxs)("select",{id:"inputAppliance",name:"appliance",value:N.value,className:N.css,onChange:function(e){return g({value:e.target.value})},children:[Object(c.jsx)("option",{value:"",children:"Select..."}),Object(c.jsx)("option",{value:"washing machine",children:"Washing Machine"}),Object(c.jsx)("option",{value:"fridge",children:"Fridge"})]})})]}),Object(c.jsxs)("div",{className:"form-row",children:[Object(c.jsx)("label",{htmlFor:"inputHouseNo",children:"House/Building No"}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{type:"text",id:"inputHouseNo",value:S.value,className:S.css,onChange:function(e){return w({value:e.target.value})}})})]}),Object(c.jsxs)("div",{className:"form-row",children:[Object(c.jsx)("label",{htmlFor:"inputStreet",children:"Street"}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{type:"text",id:"inputStreet",value:R.value,className:R.css,onChange:function(e){return P({value:e.target.value})}})})]}),Object(c.jsxs)("div",{className:"form-row",children:[Object(c.jsx)("label",{htmlFor:"inputTown",children:"Town/City"}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{type:"text",id:"inputTown",value:q.value,className:q.css,onChange:function(e){return _({value:e.target.value})}})})]}),Object(c.jsxs)("div",{className:"form-row",children:[Object(c.jsx)("label",{htmlFor:"inputPostcode",children:"Postcode"}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{type:"text",id:"inputPostcode",value:k.value,className:k.css,onChange:function(e){return I({value:e.target.value})}})})]}),Object(c.jsxs)("div",{className:"form-row",children:[Object(c.jsxs)("label",{htmlFor:"inputNotes",children:["Notes",Object(c.jsx)("br",{}),Object(c.jsx)("small",{children:"Please describe location in detail. What is parking situation and access to the appliance?"})]}),Object(c.jsx)("div",{className:"textarea-wrapper",children:Object(c.jsx)("textarea",{id:"inputNotes",name:"inputNotes",value:H.value,className:H.css,onChange:function(e){return J({value:e.target.value})}})})]}),Object(c.jsx)("div",{className:"form-row text-right",children:Object(c.jsx)("button",{type:"submit",children:"Submit"})})]})};var x=function(){return Object(c.jsxs)("div",{className:"main-column",children:[Object(c.jsx)("h1",{children:"Report old house appliance"}),Object(c.jsx)("p",{children:"We recycle old house appliances. Let us know if you have one at home or spotted one dumped in public area."}),Object(c.jsx)("a",{href:"/about",children:"Learn more..."}),Object(c.jsx)("p",{children:Object(c.jsx)("strong",{children:"Fill in the form to request collection of a scrap appliance."})}),Object(c.jsx)(O,{})]})};a(139);var N=function(e){return Object(c.jsxs)("div",{className:"drivers-list-item",children:[Object(c.jsxs)("div",{className:"collection"===e.type?"box-head green":"box-head blue",children:[Object(c.jsx)("span",{className:"tick-box-icon",children:e.completed?"\u2611":"\u2610"}),e.houseNo," ",e.street,", ",e.town,", ",e.postcode,Object(c.jsx)("span",{className:"triangle",children:"\u25bc"})]}),Object(c.jsxs)("div",{className:"box-body",children:["Reference no: ",e.id,Object(c.jsx)("br",{}),"Item: ",e.item,Object(c.jsx)("br",{}),"Location Type: ",e.locationType,Object(c.jsx)("br",{}),"Notes: ",e.notes,Object(c.jsx)("br",{}),"Status: ",e.completed?"completed":"not completed"]})]})};var g=function(){var e=[];localStorage.getItem("colRequest")&&(e=(e=JSON.parse(localStorage.getItem("colRequest"))).reverse());var t=e.concat([{id:1,datetime:"2020-12-17",type:"collection",completed:!0,houseNo:"123",street:"Some St",town:"Some Town",postcode:"ST1 2AB",item:"washing machine",locationType:"public area",notes:"in the back alley"},{id:2,datetime:"2020-12-17",type:"collection",completed:!1,houseNo:"45",street:"Some Other St",town:"Some Other Town",postcode:"ST2 3CD",item:"fridge",locationType:"private property",notes:""},{id:3,datetime:"2020-12-17",type:"collection",completed:!1,houseNo:"67",street:"Lorem Ipsum",town:"Dolor sit amet",postcode:"ABC 123",item:"dish washer",locationType:"private property",notes:"no parking in front"},{id:4,datetime:"2020-12-18",type:"collection",completed:!1,houseNo:"89",street:"Adipiscing",town:"Consectetur",postcode:"ABC 123",item:"dish washer",locationType:"private property",notes:"no parking in front"}]),a=Object(s.useState)(t),i=Object(p.a)(a,2),n=i[0];return i[1],Object(c.jsxs)("div",{className:"main-column",children:[Object(c.jsx)("h1",{children:"Latest requests are listed below."}),n.map((function(e){return Object(c.jsx)(N,{id:e.id,houseNo:e.houseNo,street:e.street,town:e.town,postcode:e.postcode,completed:e.completed,type:e.type,item:e.item,locationType:e.locationType,notes:e.notes},e.id)}))]})},f=(a(140),a(93)),y=a.n(f),S=function(){var e="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BING_API);return Object(c.jsx)("div",{children:Object(c.jsx)(y.a,{defaultCenter:["Prenton","Prenton","CH43 8TJ"],defaultZoom:14,apiKey:e,height:500,width:"100%",provider:"bing",routes:[{weight:.5,color:"blue",opacity:1,mode:"driving",locations:[[53.391139,-3.067504],[53.3915351035053,-3.0660256925716],[53.390091033141,-3.08463551155378],[53.39045,-3.061096],[53.388854,-3.059628],[53.390031,-3.058588],[53.392692,-3.084654],[53.396637,-3.083837],[53.392981,-3.084496],[53.397496,-3.079317],[53.36775,-3.046028],"Oxton"]},{weight:6,color:"red",opacity:.5,mode:"walking",locations:[[53.391139,-3.067504],[53.3915351035053,-3.0660256925716],[53.390091033141,-3.08463551155378],[53.39045,-3.061096],[53.388854,-3.059628],[53.390031,-3.058588],[53.392692,-3.084654],[53.396637,-3.083837],[53.392981,-3.084496],[53.397496,-3.079317],[53.36775,-3.046028],"Oxton"]}],type:"roadmap"})})};var w=function(){return Object(c.jsx)(r.a,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(o.c,{children:[Object(c.jsxs)(o.a,{exact:!0,path:"/",children:[Object(c.jsx)(u,{}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(x,{}),Object(c.jsx)(d,{})]}),Object(c.jsx)(j,{})]}),Object(c.jsxs)(o.a,{path:"/about",children:[Object(c.jsx)(u,{}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"main-column",children:Object(c.jsx)("p",{children:"Lorem ispum dolor."})}),Object(c.jsx)(d,{})]}),Object(c.jsx)(j,{})]}),Object(c.jsxs)(o.a,{exact:!0,path:"/admin",children:[Object(c.jsx)(b,{}),Object(c.jsxs)("div",{className:"admin-container",children:[Object(c.jsx)(m,{}),Object(c.jsx)("div",{className:"main-column",children:Object(c.jsx)("p",{children:"Sample Admin page"})})]}),Object(c.jsx)(j,{})]}),Object(c.jsxs)(o.a,{path:"/admin/drivers-list",children:[Object(c.jsx)(b,{}),Object(c.jsxs)("div",{className:"admin-container",children:[Object(c.jsx)(m,{}),Object(c.jsx)("div",{className:"main-column",children:Object(c.jsx)(g,{})})]}),Object(c.jsx)(j,{})]}),Object(c.jsxs)(o.a,{path:"/admin/map",children:[Object(c.jsx)(b,{}),Object(c.jsxs)("div",{className:"admin-container",children:[Object(c.jsx)(m,{}),Object(c.jsx)("div",{className:"main-column",children:Object(c.jsx)(S,{})})]}),Object(c.jsx)(j,{})]})]})})})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,200)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),i(e),n(e)}))};l.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),T()},99:function(e,t,a){}},[[197,1,2]]]);
//# sourceMappingURL=main.623ae90c.chunk.js.map