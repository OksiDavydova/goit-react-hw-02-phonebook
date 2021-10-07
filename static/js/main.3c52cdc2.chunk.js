(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={container:"Container_container__3c01i"}},18:function(e,t,n){},19:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),i=n.n(c),o=(n(18),n(13)),s=n(4),u=n(5),l=n(8),d=n(7),b=(n(19),n(2)),h=n.n(b),j=n(11),m=n.n(j),f=n(0);function p(e){var t=e.children;return Object(f.jsx)("div",{className:m.a.container,children:t})}var O=n(12),C=n(6),v={name:"",number:""},x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(C.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.addNewContact(e.state),e.reset()},e.reset=function(){e.setState(Object(O.a)({},v))},e.inputNameId=h.a.generate(),e.inputNumberId=h.a.generate(),e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{htmlFor:this.inputNameId,children:["Name:",Object(f.jsx)("input",{type:"text",onChange:this.handleChange,value:t,name:"name",id:this.inputNameId,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsxs)("label",{htmlFor:this.inputNumberId,children:["Number:",Object(f.jsx)("input",{type:"tel",onChange:this.handleChange,value:n,name:"number",id:this.inputNumberId,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(f.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(a.Component);function g(e){var t=e.contacts,n=e.handleDeleteContact;return Object(f.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(f.jsxs)("li",{children:[Object(f.jsxs)("p",{children:[a," ",Object(f.jsx)("span",{children:r})]}),Object(f.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})}function w(e){var t=e.value,n=e.onChange;return Object(f.jsx)("label",{children:Object(f.jsx)("input",{type:"text",value:t,onChange:n})})}var y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addNewContact=function(t){var n=t.name,a=t.number,r={id:h.a.generate(),name:n,number:a},c=e.state.contacts,i=n.toLowerCase();c.find((function(e){return e.name.toLowerCase()===i}))?alert("".concat(n," is already in contacts list")):c.find((function(e){return e.number===a}))?alert("".concat(a," is already in contacts list")):e.setState((function(e){var t=e.contacts;return{contacts:[].concat(Object(o.a)(t),[r])}}))},e.onChangeFilter=function(t){var n=t.currentTarget.value.trim();e.setState({filter:n})},e.getContacts=function(){var t=e.state,n=t.contacts,a=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},e.onDeleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(p,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(x,{addNewContact:this.addNewContact}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(w,{value:this.filter,onChange:this.onChangeFilter}),Object(f.jsx)(g,{contacts:this.getContacts(),handleDeleteContact:this.onDeleteContact})]})}}]),n}(a.Component),N=y;i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.3c52cdc2.chunk.js.map