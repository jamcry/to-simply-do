!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){var o=n(1);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(3)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"* {\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100vh;\n}\n\nbody {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  font-family: 'Nunito', 'Roboto', 'Arial', sans-serif;\n  background: #f5f5f5;\n  background-image: radial-gradient( circle farthest-corner at 12.3% 19.3%, rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% );\n}\n\nh1 {\n  font-family: 'Montserrat', sans-serif;\n}\n\n.container {\n  box-sizing: border-box;\n  margin: auto;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  max-width: 75%;\n}\n\n@media screen and (max-width: 960px) {\n  .container {\n    max-width: 100%;\n  }\n}\n\n.sidebar {\n  flex-grow: 1;\n}\n.content {\n  flex-grow: 9999;\n  padding: .7rem;\n}\n.sidebar, .content {\n  box-sizing: border-box;\n  vertical-align: top;\n  background: #ddd;\n  border-radius: 5px;\n  margin: 5px;\n  background: rgba(200,200,200,.5);\n  box-shadow: 0 0 15px #444;\n}\n\n.sidebar {\n  width: 30%;  \n}\n\n.project-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.project-wrapper .new-project input {\n  display: block;\n}\n\n.project {\n  margin: auto;\n  padding: .6rem;\n  font-size: 1.4rem;\n  border-bottom: 1px solid #999;\n  background: #ccc;\n  background: rgba(50, 50, 250, .3);\n  border-left: 0px solid gray;\n  border-left: 0px solid rgba(50, 50, 250, .7);\n  transition: border-left-width .3s linear;\n  border-left-width: 0px;\n}\n.project-current {\n  border-left: 5px solid gray;\n  border-left: 5px solid rgba(50, 50, 250, .7);\n  background: rgba(50, 50, 250, .5);\n}\n\n.project:hover,\ninput.project:focus {\n  background: #bbb;\n  background: rgba(50, 50, 250, .5);\n  cursor: pointer;\n  border-left: solid gray;\n  border-left: solid rgba(50, 50, 250, .7);\n  border-left-width: 5px;\n  transition: border 0.3s linear;\n}\n\ninput {\n  font-family: 'Nunito', 'Roboto';\n}\n\ninput.project {\n  background: #eee;\n  width: 100%;\n  border: none;\n  border-top: 1px solid #777;\n  border-bottom: 1px solid #555;\n}\n\ninput.project:hover,\ninput.project:focus {\n  background: #fff;\n}\n\n.todos {\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n\n.todo {\n  margin-bottom: 5px;\n  padding-left: 25px;\n  padding-bottom: 15px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom: 1px solid gray;\n  font-family: 'Roboto', sans-serif;\n}\n.todo p {\n  padding-left: 10px;\n}\n.todo-checked {\n  color: #888;\n}\n.todo-checked h1 {\n  text-decoration: line-through;\n}\n.todo h1 {\n  display: flex;\n  font-family: 'Nunito', sans-serif;\n  font-size: 1.7rem;\n}\n.todo h1 input[type=\"checkbox\"] {\n  width: 1.5rem;\n  height: 1.7rem;\n  margin-right: .5rem;\n}\n.todo:hover {\n  background: rgba(0,0,0,.05);  \n}\n.action {\n  border: 1px solid #333;\n  border-radius: 7px;\n  background: #444;\n  color: #eee;\n  width: 75px;\n  height: 25px;\n}\n.action:hover {\n  font-weight: bold;\n  background: #666;\n}\n.new-todo {\n  border-bottom: 1px dotted #aaa;\n}\n.new-todo input[type=\"text\"],\n.new-todo input[type=\"datetime-local\"] {\n  width: 95%;\n  margin: auto;\n  margin-bottom: 1rem;\n  border: 1px solid black;\n  border-radius: 5px;\n  display: block;\n  padding: .6rem;\n  font-size: 1.7rem;\n}\n.new-todo label {\n  font-size: 1.2rem;\n  padding-left: 20px;\n  font-weight: bold;\n}\n.btn-new {\n  display: block;\n  border: none;\n  border-radius: 5px;\n  background: none;\n  color: #333;\n  font-size: 1.2rem;\n  font-weight: bold;\n  padding: .7rem;\n  cursor: pointer;\n  margin-left: auto;\n}\n.btn-new:hover {\n  text-decoration: underline;\n  color: #000;\n}\n\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(s=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),i=o.sources.map(function(t){return"/*# sourceURL=".concat(o.sourceRoot).concat(t," */")});return[n].concat(i).concat([r]).join("\n")}var s,a,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var s=0;s<t.length;s++){var a=t[s];null!=a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="(".concat(a[2],") and (").concat(n,")")),e.push(a))}},e}},function(t,e,n){var o,r,i={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var o=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),c=null,d=0,l=[],u=n(4);function h(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](o.parts[s]);for(;s<o.parts.length;s++)r.parts.push(j(o.parts[s],e))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(j(o.parts[s],e));i[o.id]={id:o.id,refs:1,parts:a}}}}function p(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}function f(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(t.insertAt.before,n);n.insertBefore(e,r)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return n.nc}();o&&(t.attrs.nonce=o)}return g(e,t.attrs),f(t,e),e}function g(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function j(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var s=d++;n=c||(c=m(e)),o=x.bind(null,n,s,!1),r=x.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),f(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=u(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),r=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){b(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return h(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var s=n[r];(a=i[s.id]).refs--,o.push(a)}t&&h(p(t,e),e);for(r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var y,v=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function x(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=v(e,r);else{var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){"use strict";n.r(e);n(0);var o=class{constructor(t,e,n,o,r){this.title=t,this.description=e,this.dueDate=n,this.priority=o,this.done=r}appendTo(t,e=null,n=null){const o=document.createElement("div");o.classList.add("todo"),console.log("THIS DONE!"),o.innerHTML=`\n    \n    <h1><input class="h1-checkbox check-done" type="checkbox"></input> ${this.title}</h1>\n    <p>${this.description}</p>\n    <p><i class="fa fa-clock"></i> Due: ${this.dueDate}</p>\n    <p><i class="fa fa-list-ul"></i> Priority: ${this.priority}</p>\n    <button class="action action-delete">Delete</button>\n    `;const r=o.querySelector(".check-done"),i=o.querySelector(".action-delete");this.done&&(o.classList.add("todo-checked"),r.checked=!0),e&&i.addEventListener("click",()=>e(this)),n&&r.addEventListener("change",t=>n(t,this,o)),t.appendChild(o)}};var r=class{constructor(t="New Project"){this.title=t,this.todos=[],this.todoCount=0}appendTo(t,e=null){const n=document.createElement("div");n.classList.add("project"),n.textContent=this.title,this.projectEl=n,e&&n.addEventListener("click",()=>e(this)),t.appendChild(n)}newTodo(t,e,n,r,i){const s=new o(t,e,n,r,i);return this.todos.push(s),this.todoCount+=1,s}removeTodo(t){let e=this.todos.filter(e=>e!==t);this.todos=e,this.todoCount-=1}};new class{constructor(){this.initDomElements(),this.addEventListeners(),this.bindFunctions(),this.currentProject=null,this.currentProjectEl={},this.projectData=[],this.renderDefaultContent(),this.checkLocalStorage()}initDomElements(){this.projects=document.querySelector(".projects"),this.todos=document.querySelector(".todos"),this.content=document.querySelector(".content"),this.contentTitle=document.querySelector("#content-title"),this.todoForm=document.querySelector(".new-todo"),this.newTodoTitle=this.todoForm.querySelector("#todo-title"),this.newTodoDesc=this.todoForm.querySelector("#todo-description"),this.newTodoDue=this.todoForm.querySelector("#todo-due"),this.newTodoImportant=this.todoForm.querySelector("#todo-important"),this.todoTitleInput=document.querySelector("#todo-title"),this.todoFormDetails=document.querySelector(".new-todo-details"),this.projectForm=document.querySelector(".new-project")}bindFunctions(){this.handleProjectClick=this.handleProjectClick.bind(this),this.handleTodoDelete=this.handleTodoDelete.bind(this),this.handleTodoFormSubmit=this.handleTodoFormSubmit.bind(this),this.handleTodoCheckboxChange=this.handleTodoCheckboxChange.bind(this)}addEventListeners(){this.todoForm.addEventListener("focusin",t=>{this.todoFormDetails.style.display="block"}),this.todoForm.addEventListener("submit",t=>{this.todoFormDetails.style.display="none",this.handleTodoFormSubmit(t)}),this.projectForm.addEventListener("submit",t=>{this.handleProjectFormSubmit(t)})}checkLocalStorage(){const t=function(t){const e=localStorage.getItem(t);return!!e&&JSON.parse(e)}("projectData");t&&this.deserializeProjectData(t)}deserializeProjectData(t){t.forEach(t=>{let e=new r(t.title);this.render(e),t.todoCount>0&&t.todos.forEach(t=>{let{title:n,description:o,dueDate:r,priority:i,done:s}=t;e.newTodo(n,o,r,i,s)}),this.projectData.push(e)})}createProject(t){const e=new r(t);let n=[...this.projectData,e];return this.updateProjectData(n),e}createTodo(t,e,n,o){let r=this.projectData.indexOf(this.currentProject),i=this.currentProject.newTodo(t,e,n,o);return[...this.projectData][r]=this.currentProject,localStorage.setItem("projectData",JSON.stringify(this.projectData)),i}handleProjectClick(t){this.renderProjectContent(t)}renderProjectContent(t){this.todoForm.style.display="block",0===t.todoCount&&this.todoTitleInput.focus(),this.setCurrentProject(t),this.contentTitle.textContent=this.currentProject.title,this.contentTitle.innerHTML=`\n      ${this.currentProject.title}\n      <button class="action action-delete del-project"><i class="fa fa-trash"></i></button>\n      <button class="action action-edit"><i class="fa fa-edit"></i></button>\n     `,this.contentTitle.querySelector(".del-project").addEventListener("click",()=>this.handleProjectDelete(this.currentProject)),this.todos.innerHTML="",t.todos.forEach(t=>this.render(t))}setCurrentProject(t){this.currentProjectEl.classList&&this.currentProjectEl.classList.remove("project-current"),this.currentProject=t,this.currentProjectEl=t.projectEl,this.currentProjectEl.classList.add("project-current")}updateProjectData(t){this.projectData=t,localStorage.setItem("projectData",JSON.stringify(t))}handleTodoDelete(t){if(confirm(`You are deleting the todo titled '${t.title}'!`)){let e=this.projectData.indexOf(this.currentProject),n=[...this.projectData];n[e].todos.filter(t=>t!=t),this.currentProject.removeTodo(t),this.todos.innerHTML="",this.currentProject.todos.forEach(t=>this.render(t)),this.updateProjectData(n)}}clearProjects(){this.projects.innerHTML=""}handleProjectDelete(t){confirm(`You are deleting the project titled '${t.title}' and its content!`)&&(this.updateProjectData(this.projectData.filter(e=>e!==t)),this.clearProjects(),this.projectData.forEach(t=>this.render(t)),this.renderDefaultContent())}handleTodoCheckboxChange(t,e,n){let o=this.projectData.indexOf(this.currentProject),r=this.projectData[o].todos.indexOf(e),i=[...this.projectData];t.target.checked&&!e.done?(e.done=!0,n.classList.add("todo-checked")):!t.target.checked&&e.done&&(e.done=!1,n.classList.remove("todo-checked")),i[o].todos[r]=e,this.updateProjectData(i)}getFormParams(){return{todoTitle:this.newTodoTitle.value,todoDesc:this.newTodoDesc.value,todoDue:this.newTodoDue.value,todoImportant:this.newTodoImportant.checked}}handleTodoFormSubmit(t){t.preventDefault();let{todoTitle:e,todoDesc:n,todoDue:o,todoImportant:r}=this.getFormParams();const i=r?"HIGH":"NORMAL",s=this.createTodo(e,n,o,i);this.todoForm.reset(),this.render(s)}handleProjectFormSubmit(t){t.preventDefault();const e=t.target.querySelector("#project-title").value;this.projectForm.reset();const n=this.createProject(e);this.render(n),this.renderProjectContent(n)}render(t){if(t instanceof r)t.appendTo(this.projects,this.handleProjectClick);else{if(!(t instanceof o))return!1;t.appendTo(this.todos,this.handleTodoDelete,this.handleTodoCheckboxChange)}}renderDefaultContent(){this.contentTitle.textContent="You Got2Do Something",this.todos.textContent="Start by opening or creating a project.",this.todoForm.style.display="none"}}}]);