(this.webpackJsonplistadosuper=this.webpackJsonplistadosuper||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(4),o=c.n(n),s=c(14),i=c.n(s),a=(c(19),c(9)),r=(c(20),c(6)),d=Object(n.createContext)(null),l=c(13);c(21),c(26);l.a.initializeApp({apiKey:"AIzaSyAmxLPQJP-B1Hdff4c5hWnWYoXPF_o_lPs",authDomain:"listadosuper-6cfce.firebaseapp.com",projectId:"listadosuper-6cfce",storageBucket:"listadosuper-6cfce.appspot.com",messagingSenderId:"912098335718",appId:"1:912098335718:web:25e25a298e109827855427",measurementId:"G-1CPKXVG1JH"});var j=l.a.firestore();function h(e,t){j.collection("todo").doc(e).update(Object(r.a)({},t))}var u=function(e,t){return j.collection("todo").where("delete","==",e).limit(10).orderBy("status").onSnapshot((function(e){var c=e.docs.map((function(e){var t=e.data(),c=e.id;return Object(r.a)(Object(r.a)({},t),{},{id:c})}));t(c)}))},b=c(1);var m=function(){var e=Object(n.useContext)(d),t=e.todo,c=e.id,o=e.edit,s=e.setTodo,i=e.setEdit,a=e.setId,l=Object(n.useRef)();return Object(n.useEffect)((function(){l.current.focus()}),[c]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"header__h1",children:"LISTA"}),Object(b.jsx)("form",{className:"header__form",onSubmit:function(e){e.preventDefault(),o?(h(c,{detail:t.detail}),s(Object(r.a)(Object(r.a)({},t),{},{detail:""})),i(!1),a("")):(!function(e){j.collection("todo").add(e).then((function(e){console.log("Document successfully written!")})).catch((function(e){console.error("Error writing document: ",e)}))}(t),s(Object(r.a)(Object(r.a)({},t),{},{detail:""})))},children:Object(b.jsx)("input",{className:"header__input",type:"text",placeholder:"Escriba aqui...",onChange:function(e){s(Object(r.a)(Object(r.a)({},t),{},{detail:e.target.value}))},value:t.detail,ref:l})})]})};function O(e){var t=e.todo,c=e.header,o=void 0!==c&&c,s=t.id,i=t.detail,a=t.status,l=Object(n.useContext)(d),j=l.id,u=l.setId,m=l.todo,O=l.setEdit,v=l.setTodo,f=function(e){h(e,a?{status:!1}:{status:!0})},x=function(e){h(e,{delete:!0,status:!1}),O(!1),u(""),v(Object(r.a)(Object(r.a)({},m),{},{detail:""}))},p=function(e){h(e,{delete:!1})},w=function(e,t){e===j?(O(!1),u(""),v(Object(r.a)(Object(r.a)({},m),{},{detail:""}))):(O(!0),u(e),v(Object(r.a)(Object(r.a)({},m),{},{detail:t})))};return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsxs)("div",{className:"main__row main__row--header",children:[Object(b.jsxs)("label",{onClick:function(){return f(s)},className:"main__row-label",htmlFor:s,children:[Object(b.jsx)("div",{className:a?"main__row-checkbox-personalizado-checked":"main__row-checkbox-personalizado"}),Object(b.jsx)("p",{className:a?"main__row-p-through":"main__row-p",children:i})]}),Object(b.jsxs)("div",{children:[!1===t.delete&&Object(b.jsx)("svg",{onClick:function(){return w(s,i)},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"})}),t.delete?Object(b.jsx)("svg",{onClick:function(){return p(s)},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"})}):Object(b.jsx)("svg",{onClick:function(){return x(s)},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"})})]})]}):Object(b.jsxs)("div",{className:"main__row",children:[Object(b.jsxs)("label",{onClick:function(){return f(s)},className:"main__row-label",htmlFor:s,children:[Object(b.jsx)("div",{className:a?"main__row-checkbox-personalizado-checked":"main__row-checkbox-personalizado"}),Object(b.jsx)("p",{className:a?"main__row-p-through":"main__row-p",children:i})]}),Object(b.jsxs)("div",{children:[!1===t.delete&&Object(b.jsx)("svg",{onClick:function(){return w(s,i)},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"})}),t.delete?Object(b.jsx)("svg",{onClick:function(){return p(s)},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"})}):Object(b.jsx)("svg",{onClick:function(){return x(s)},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"})})]})]})})}var v=o.a.memo(O);function f(e){var t=e.setTodoActivo,c=e.todoActivo,n=e.listTodoActivos;return Object(b.jsxs)("div",{className:"main__row main__row--footer",children:[Object(b.jsxs)("div",{className:"main__row-items-footer",children:[" ",Object(b.jsx)("span",{className:"main__row-span-footer",children:"items left"})]}),Object(b.jsxs)("div",{className:"main__row-items-footer main__row-items-footer--center",children:[Object(b.jsx)("span",{onClick:function(){t(!0)},className:"main__row-span-footer-center",children:"Active"}),Object(b.jsx)("span",{onClick:function(){t(!1)},className:"main__row-span-footer-center",children:"Completed"})]}),Object(b.jsx)("div",{className:"main__row-items-footer",children:!!c&&Object(b.jsx)("span",{onClick:function(){n.forEach((function(e){j.collection("todo").doc(e.id).update({status:!1})}))},className:"main__row-span-footer",children:"Clear Completed"})})]})}function x(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],o=t[1],s=Object(n.useState)([]),i=Object(a.a)(s,2),r=i[0],d=i[1],l=Object(n.useState)(!1),j=Object(a.a)(l,2),h=j[0],m=j[1],O=Object(n.useState)(!0),x=Object(a.a)(O,2),p=x[0],w=x[1];return Object(n.useEffect)((function(){var e;return m(!0),p?(e=u(!1,o),m(!1)):(e=u(!0,d),m(!1)),function(){return e&&e()}}),[p]),Object(b.jsxs)(b.Fragment,{children:[!!h&&Object(b.jsx)("h1",{children:"CARGANDO..."}),c.length<=0&&!1===h&&Object(b.jsx)("h1",{children:"LISTADO VACIO...!"}),p?c.length<=1?c.map((function(e){return Object(b.jsx)(v,{todo:e,header:!0},e.id)})):c.map((function(e,t){return 0===t?Object(b.jsx)(v,{todo:e,header:!0},e.id):Object(b.jsx)(v,{todo:e,header:!1},e.id)})):r.length<=1?r.map((function(e){return Object(b.jsx)(v,{todo:e,header:!0},e.id)})):r.map((function(e,t){return 0===t?Object(b.jsx)(v,{todo:e,header:!0},e.id):Object(b.jsx)(v,{todo:e,header:!1},e.id)})),c.length>=0&&Object(b.jsx)(f,{todoActivo:p,setTodoActivo:w,listTodoActivos:c})]})}var p={delete:!1,detail:"",status:!1};var w=function(){var e=Object(n.useState)(p),t=Object(a.a)(e,2),c=t[0],o=t[1],s=Object(n.useState)(!1),i=Object(a.a)(s,2),r=i[0],l=i[1],j=Object(n.useState)(""),h=Object(a.a)(j,2),u=h[0],O=h[1];return Object(b.jsx)(d.Provider,{value:{todo:c,edit:r,id:u,setTodo:o,setEdit:l,setId:O},children:Object(b.jsxs)("section",{className:"container",children:[Object(b.jsx)("div",{className:"header",children:Object(b.jsx)(m,{})}),Object(b.jsx)("section",{className:"main",children:Object(b.jsx)(x,{})}),Object(b.jsx)("footer",{className:"footer",children:"Listado del super JyJ"})]})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,27)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),o(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(w,{}),document.getElementById("root")),_()}},[[25,1,2]]]);
//# sourceMappingURL=main.0da25d7f.chunk.js.map