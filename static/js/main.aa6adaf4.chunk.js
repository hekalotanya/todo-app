(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{70:function(e,t,o){},71:function(e,t,o){},73:function(e,t,o){},79:function(e,t,o){"use strict";o.r(t);var n=o(24),a=o.n(n),i=o(15),s=o(5),c=o(43),r=o(32),d=o(33),l=o(56),p=o(54),u=o(0),m=(o(70),[{id:1,title:"delectus aut",completed:!0,description:"delectus aut autem"},{id:2,title:"quis ut nam",completed:!1,description:"quis ut nam facilis et officia qui"}]),j=(o(71),o(50)),h=o.n(j),b=o(2),f=function(e){var t=e.todo;return Object(b.jsxs)("div",{className:h()("todo",{checked:t.completed}),children:[Object(b.jsx)("h2",{children:t.title}),Object(b.jsx)("span",{children:t.description})]})},O=(o(73),o(114)),v=function(e){var t=e.preparedTodos,o=e.deleteTodo,n=e.completeTodo;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsxs)("div",{className:"todoWrap",children:[Object(b.jsx)(f,{todo:e}),Object(b.jsxs)("div",{className:"buttons_nav",children:[Object(b.jsx)(O.a,{variant:e.completed?"outlined":"contained",className:"button",onClick:function(){return n(e.id)},children:e.completed?"uncomplete":"complete"}),Object(b.jsx)(O.a,{variant:"contained",className:"button",color:"error",onClick:function(){return o(e.id)},children:"Delete"})]})]},e.id)}))})},T=o(113),g=function(e){Object(l.a)(o,e);var t=Object(p.a)(o);function o(){var e;Object(r.a)(this,o);for(var n=arguments.length,a=new Array(n),d=0;d<n;d++)a[d]=arguments[d];return(e=t.call.apply(t,[this].concat(a))).state={title:"",description:"",preparedTodos:[]},e.deleteTodo=function(t){e.setState((function(e){var o=e.preparedTodos.filter((function(e){return e.id!==t}));return localStorage.setItem("todos",JSON.stringify(o)),{preparedTodos:o}}))},e.completeTodo=function(t){e.setState((function(e){var o=e.preparedTodos.map((function(e){return e.id===t?Object(c.a)(Object(c.a)({},e),{},{completed:!e.completed}):e}));return localStorage.setItem("todos",JSON.stringify(o)),{preparedTodos:o}}))},e.handleChange=function(t){var o=t.target,n=o.name,a=o.value;e.setState(Object(s.a)({},n,a))},e.submit=function(t){if(t.preventDefault(),e.state.description.trim().length>0&&e.state.title.trim().length>0){var o={id:Date.now(),title:e.state.title,completed:!1,description:e.state.description};e.setState((function(e){return localStorage.setItem("todos",JSON.stringify([].concat(Object(i.a)(e.preparedTodos),[o]))),{preparedTodos:[].concat(Object(i.a)(e.preparedTodos),[o]),title:"",description:""}}))}},e}return Object(d.a)(o,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("todos"),t=[];e&&(t=JSON.parse(e)),this.setState(t.length&&!this.state.preparedTodos.length?{preparedTodos:t}:{preparedTodos:m})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{className:"title",children:"Todo App"}),Object(b.jsxs)("form",{className:"input_form",onSubmit:this.submit,children:[Object(b.jsx)(T.a,{type:"text",value:this.state.title,name:"title",id:"title",onChange:this.handleChange,className:"input",required:!0,variant:"outlined",label:"Title"}),Object(b.jsx)(T.a,{type:"text",value:this.state.description,name:"description",id:"description",onChange:this.handleChange,className:"input",required:!0,variant:"outlined",label:"Description"}),Object(b.jsx)(O.a,{type:"submit",variant:"contained",className:"button_submit",children:"Add todo"})]}),Object(b.jsxs)("div",{className:"todos_list",children:[Object(b.jsx)("h2",{className:"todos_title",children:"Todos"}),Object(b.jsx)(v,{preparedTodos:this.state.preparedTodos,deleteTodo:this.deleteTodo,completeTodo:this.completeTodo})]})]})}}]),o}(u.Component),x=g;a.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.aa6adaf4.chunk.js.map