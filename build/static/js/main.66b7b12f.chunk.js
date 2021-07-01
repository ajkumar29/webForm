(this.webpackJsonpwebform=this.webpackJsonpwebform||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('{"title":"User Register Form","doneMessage":"Thank you. You will recieve an email shortly","pages":[{"title":"User","id":"user","fields":[{"label":"Name","id":"name","component":"textbox","required":true,"validation":{"type":"text"},"placeholderText":"Enter name"},{"label":"Role","id":"role","component":"dropdown","data":["Software engineer","Product owner","Scrum master","Testing engineer","Designer"],"placeholderText":"Please select your role","required":true},{"label":"Email","id":"email","component":"textbox","required":true,"validation":{"type":"email"},"placeholderText":"Enter email address"},{"label":"Password","id":"password","component":"textbox","required":true,"validation":{"type":"password","validRegex":"(?=.*\\\\d)(?=.*[a-z])(?=.*[A-Z]).{10,}","errorMessage":"Password must be atleast 10 characters. It must have atleast 1 number, 1 upper case and 1 lower case letter."},"placeholderText":"Create a password"}]},{"title":"Privacy","id":"privacy","fields":[{"component":"checkbox","id":"update-check","label":"Please check if you are happy to recieve updates from us."},{"component":"checkbox","id":"comms-check","label":"Please check if you are happy to receive communications from us."},{"component":"checkbox","id":"accurate-info-check","label":"Please check to confirm the information provided is accurate to the best of your knowledge","required":true}]}]}')},,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(5),o=c.n(a),i=(c(15),c(10)),s=c(2),l=c(4),d=(c(16),c(17),c(1));function u(e){var t=e.fieldProps,c=e.onChange,n=t.data,r=void 0===n?[]:n,a=t.label,o=t.placeholderText,i=void 0===o?"":o,l=t.required,u=t.id;return Object(d.jsxs)("div",{className:"dropdown",children:[Object(d.jsxs)("label",{htmlFor:"dropdown_".concat(u),children:[a,l&&"*"]}),Object(d.jsxs)("select",Object(s.a)(Object(s.a)({},l&&{required:!0}),{},{defaultValue:"",onChange:function(e){return c(e.target.value)},className:"custom-select",id:"dropdown_".concat(u),children:[Object(d.jsx)("option",{value:"",hidden:!0,disabled:!0,children:i}),r.map((function(e){return Object(d.jsx)("option",{value:e,children:e},"option_".concat(e))}))]}))]})}function b(e){var t=e.fieldProps,c=e.onChange,n=t.label,r=t.required,a=t.validation,o=void 0===a?{type:"text"}:a,i=t.placeholderText,l=void 0===i?"":i,u=t.id,b=o&&o.validRegex,m=o&&o.errorMessage;return Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsxs)("label",{htmlFor:"textbox_".concat(u),children:[n,r&&"*"]}),Object(d.jsx)("input",Object(s.a)(Object(s.a)({},r&&{required:!0}),{},{pattern:b,onChange:function(e){return c(e.target.value)},type:o.type,className:"form-control",id:"textbox_".concat(u),placeholder:l,title:m}))]})}c(19);function m(e){var t=e.fieldProps,c=e.onChange,n=t.id,r=t.required,a=t.label;return Object(d.jsxs)("div",{className:"form-check",children:[Object(d.jsx)("input",Object(s.a)(Object(s.a)({},r&&{required:!0}),{},{onChange:function(e){return c(e.target.checked)},className:"form-check-input",type:"checkbox",value:n,id:"checkbox_".concat(n)})),Object(d.jsxs)("label",{className:"form-check-label",htmlFor:"checkbox_".concat(n),children:[a,r&&"*"]})]})}function j(e){var t=e.id,c=e.fields,r=e.onSubmitClick,a=Object(n.useState)({}),o=Object(l.a)(a,2),i=o[0],j=o[1],f=function(e,t){var c=Object(s.a)({},i);c[t]=e,j(c)};return Object(n.useEffect)((function(){j({})}),[t]),Object(d.jsxs)("form",{className:"form needs-validation",onSubmit:function(e){return r(e,i)},children:[c.map((function(e){return function(e,t){var c=e.component,n=e.id;switch(c){case"textbox":return Object(d.jsx)(b,{fieldProps:e,onChange:function(e){return t(e,n)}},n);case"dropdown":return Object(d.jsx)(u,{fieldProps:e,onChange:function(e){return t(e,n)}},n);case"checkbox":return Object(d.jsx)(m,{fieldProps:e,onChange:function(e){return t(e,n)}},n)}}(e,f)})),Object(d.jsx)("div",{className:"submitButton",children:Object(d.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Submit"})})]})}c(20);var f=c(3);var p=Object(f.b)((function(e){return{formValues:e.formData.values}}))((function(e){var t=e.formValues,c=e.doneMessage,n=void 0===c?"Completed":c;return console.log(t),Object(d.jsxs)("div",{className:"donePage",children:[Object(d.jsx)("i",{className:"icon bi bi-check2-circle"}),Object(d.jsx)("br",{}),n]})}));c(25);function h(e){var t=e.selected,c=e.title,n=e.completed;return Object(d.jsx)("div",{className:"header".concat(t?" selected":"").concat(n?" completed":""),children:c})}c(26);var v="UPDATE";var x=Object(f.b)(null,(function(e){return{updateFormData:function(t){return e(function(e){return{type:v,values:e}}(t))}}}))((function(e){var t=e.form,c=e.updateFormData,r=t.title,a=t.pages,o=t.doneMessage,i=Object(n.useState)(0),u=Object(l.a)(i,2),b=u[0],m=u[1],f=Object(n.useState)(!1),v=Object(l.a)(f,2),x=v[0],O=v[1];return Object(d.jsxs)("div",{className:"formWizard",children:[Object(d.jsx)("div",{className:"formWizardTitle",children:r}),Object(d.jsx)("div",{className:"pageHeader",children:function(e){var t=e.map((function(t,c){return Object(d.jsx)(h,{title:t.title,selected:!x&&t.id===e[b].id,completed:x||c<b},t.id)}));return t.push(Object(d.jsx)(h,{title:"Done",selected:x,completed:!1},"donePage")),t}(a)}),Object(d.jsx)("div",{className:"formPage",children:x?Object(d.jsx)(p,{doneMessage:o}):Object(d.jsx)(j,{id:a[b].id,fields:a[b].fields,onSubmitClick:function(e,t){var n;e.preventDefault(),(n={})[a[b].id]=Object(s.a)({},t),c(n),b<a.length-1?m(b+1):O(!0)}})})]})}));var O=function(){return Object(d.jsx)(x,{form:i})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),a(e),o(e)}))},k=c(6),y={values:{}};var w=Object(k.a)({formData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object.assign({},e,{values:Object.assign({},e.values,t.values)});default:return e}}}),P=Object(k.b)(w);o.a.render(Object(d.jsx)(f.a,{store:P,children:Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O,{})})}),document.getElementById("root")),g()}],[[27,1,2]]]);
//# sourceMappingURL=main.66b7b12f.chunk.js.map