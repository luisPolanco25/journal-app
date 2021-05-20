(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{156:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(31),o=a.n(c),i=a(13),l=a(8),u=a(22),s=a(61),m="[Auth] login",d="[Auth] logout",p="[UI] Set Error",f="[UI] Remove Error",b="[UI] Start Loading",v="[UI] Finish Loading",h="[Notes] New Note",E="[Active] Set Active Note",j="[Notes] Load Notes",g="[Notes] Update Saved Notes",y="[Notes] Delete Notes",_="[Notes] Logout Cleaning",O=a(45),w=a(5),N={notes:[],active:null},x={loading:!1,msgError:null},k="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,S=Object(u.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return{uid:t.payload.uid,name:t.payload.displayName};case d:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(w.a)(Object(w.a)({},e),{},{msgError:t.payload});case f:return Object(w.a)(Object(w.a)({},e),{},{msgError:null});case b:return Object(w.a)(Object(w.a)({},e),{},{loading:!0});case v:return Object(w.a)(Object(w.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(w.a)(Object(w.a)({},e),{},{active:Object(w.a)({},t.payload)});case h:return Object(w.a)(Object(w.a)({},e),{},{notes:[t.payload].concat(Object(O.a)(e.notes))});case j:return Object(w.a)(Object(w.a)({},e),{},{notes:Object(O.a)(t.payload)});case g:return Object(w.a)(Object(w.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case y:return Object(w.a)(Object(w.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case _:return Object(w.a)(Object(w.a)({},e),{},{notes:[],active:null});default:return e}}}),C=Object(u.e)(S,k(Object(u.a)(s.a))),I=a(9),L=a.n(I),A=a(12),M=a(20),P=a(7),W=a(34),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(i.a)(t,2),r=a[0],c=a[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},l=function(e){var t=e.target;c(Object(w.a)(Object(w.a)({},r),{},Object(W.a)({},t.name,t.value)))};return[r,l,o]},U=a(21),Y=a.n(U),R=a(29);a(158),a(74);R.a.initializeApp({apiKey:"AIzaSyAeWkt3Lybye4MDcSLjG2jLLf8j_BV6pcc",authDomain:"journal-app-3652b.firebaseapp.com",projectId:"journal-app-3652b",storageBucket:"journal-app-3652b.appspot.com",messagingSenderId:"211083913000",appId:"1:211083913000:web:37254040e5accc5c02d21d"});var z=R.a.firestore(),F=new R.a.auth.GoogleAuthProvider,B=function(e){return{type:p,payload:e}},G=function(){return{type:v}},T=function(){var e=Object(A.a)(L.a.mark((function e(t){var a,n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/desescti8/upload",(a=new FormData).append("upload_preset","journal-app"),a.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/desescti8/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.abrupt("return",null);case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(4),e.t0;case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(A.a)(L.a.mark((function e(t){var a,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.collection("".concat(t,"/journal/notes")).get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(w.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(e,t){return{type:E,payload:Object(w.a)({id:e},t)}},V=function(e,t){return{type:h,payload:Object(w.a)({id:e},t)}},X=function(e){return function(){var t=Object(A.a)(L.a.mark((function t(a){var n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q(e);case 2:n=t.sent,a(K(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},K=function(e){return{type:j,payload:e}},H=function(e){return function(){var t=Object(A.a)(L.a.mark((function t(a,n){var r,c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,e.url||delete e.url,delete(c=Object(w.a)({},e)).id,t.next=6,z.doc("".concat(r,"/journal/notes/").concat(e.id)).update(c);case 6:a(Q(e.id,c)),Y.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},Q=function(e,t){return{type:g,payload:{id:e,note:Object(w.a)({id:e},t)}}},Z=function(e){return{type:y,payload:e}},$=function(e,t){return function(a){return a({type:b}),R.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(ee(t.uid,t.displayName)),a(G())})).catch((function(e){a(G()),Y.a.fire("Error",e.message,"error")}))}},ee=function(e,t){return{type:m,payload:{uid:e,displayName:t}}},te=function(){return{type:d}},ae=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.ui.loading})),a=D({email:"any@email.com",password:"anyPassw0rd"}),n=Object(i.a)(a,2),c=n[0],o=n[1],u=c.email,s=c.password;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Login"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e($(u,s))},className:"animate__animated animate__fadeIn animate__faster"},r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:u,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:s,onChange:o}),r.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit",disabled:t},"Login"),r.a.createElement("div",{className:"auth__social-networks"},r.a.createElement("p",null,"Login with social networks"),r.a.createElement("div",{className:"google-btn",onClick:function(){e((function(e){R.a.auth().signInWithPopup(F).then((function(t){var a=t.user;e(ee(a.uid,a.displayName))}))}))}},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with google")))),r.a.createElement(M.b,{to:"/auth/register",className:"link"},"Create new account")))},ne=a(44),re=a.n(ne),ce=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.ui})).msgError,a=D({name:"AnyName",email:"any@email.com",password:"anyPassw0rd",password2:"anyPassw0rd"}),n=Object(i.a)(a,2),c=n[0],o=n[1],u=c.name,s=c.email,m=c.password,d=c.password2,p=function(){return re.a.isEmpty(u)?(e(B("Name is required")),!1):re.a.isEmail(s)?m!==d||m.length<5?(e(B("Passwords should be at least 6 characters and match")),!1):(e({type:f}),!0):(e(B("Email is not valid")),!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Register"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),p()&&e(function(e,t,a){return function(n){R.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(A.a)(L.a.mark((function e(t){var r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:a});case 3:n(ee(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){Y.a.fire("Error",e.message,"error")}))}}(s,m,u))},className:"animate__animated animate__fadeIn animate__faster"},t&&r.a.createElement("div",{className:"auth__alert-error"},t),r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:u,onChange:o}),r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:s,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:m,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:d,onChange:o}),r.a.createElement("button",{className:"btn btn-primary btn-block mb-5",type:"submit"},"Register"),r.a.createElement(M.b,{to:"/auth/login",className:"link"},"Already registered?")))},oe=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},r.a.createElement(P.d,null,r.a.createElement(P.b,{path:"/auth/login",component:ae}),r.a.createElement(P.b,{path:"/auth/register",component:ce}),r.a.createElement(P.a,{to:"/auth/login"}))))},ie=Object(n.createContext)(),le=a(35),ue=a.n(le),se=function(){var e=Object(n.useContext)(ie),t=e.screenWidth,a=e.setActivateMobileStyles,c=Object(l.b)(),o=Object(l.c)((function(e){return e.notes})).active,i=ue()(o.date);return r.a.createElement("div",{className:"notes__appbar"},r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-arrow-circle-left",onClick:function(){t<=645&&a(!0)}}),r.a.createElement("span",null,"".concat(i.format("MMMM Do, YYYY")))),r.a.createElement("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(e){var t=e.target.files[0];t&&c(function(e){return function(){var t=Object(A.a)(L.a.mark((function t(a,n){var r,c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().notes.active,Y.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,showConfirmButton:!1,willOpen:function(){Y.a.showLoading()}}),t.next=4,T(e);case 4:c=t.sent,r.url=c,a(H(r)),Y.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(t))}}),r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()}},"Picture"),r.a.createElement("button",{className:"btn",onClick:function(){c(H(o))}},"Save")))},me=function(){var e=Object(l.c)((function(e){return e.notes})).active,t=Object(l.b)(),a=D(e),c=Object(i.a)(a,3),o=c[0],u=c[1],s=c[2],m=o.body,d=o.title,p=o.id,f=Object(n.useRef)(e.id),b=Object(n.useContext)(ie),v=b.screenWidth,h=b.setActivateMobileStyles;Object(n.useEffect)((function(){e.id!==f.current&&(s(e),f.current=e.id)}),[e,s]),Object(n.useEffect)((function(){t(J(o.id,Object(w.a)({},o)))}),[o,t]);return r.a.createElement("div",{className:"notes__main-content"},r.a.createElement(se,null),r.a.createElement("div",{className:"notes__content"},r.a.createElement("input",{type:"text",placeholder:"An awesome title",className:"notes__title-input",autoComplete:"off",name:"title",value:d,onChange:u}),r.a.createElement("textarea",{placeholder:"What happened today",className:"notes__textarea",name:"body",value:m,onChange:u}),e.url&&r.a.createElement("div",{className:"notes__image"},r.a.createElement("img",{src:e.url,alt:"".concat(d," pic")}))),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){t(function(e){return function(){var t=Object(A.a)(L.a.mark((function t(a,n){var r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,t.next=3,z.doc("".concat(r,"/journal/notes/").concat(e)).delete();case 3:a(Z(e));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(p)),v<=645&&h(!0)}},"Delete"))},de=function(){return r.a.createElement("div",{className:"nothing__main-content"},r.a.createElement("p",null,"Select something",r.a.createElement("br",null),"or create an entry!"),r.a.createElement("i",{className:"far fa-star fa-4x mt-5"}))},pe=function(e){var t=e.id,a=e.date,c=e.title,o=e.body,i=e.url,u=ue()(a),s=Object(l.b)(),m=Object(n.useContext)(ie),d=m.screenWidth,p=m.setActivateMobileStyles;return r.a.createElement("div",{className:"journal__entry pointer animate__animated animate__backInRight",onClick:function(){s(J(t,{date:a,title:c,body:o,url:i})),d<=645&&p(!1)},tabIndex:"1"},i&&r.a.createElement("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"journal__entry-body"},r.a.createElement("p",{className:"journal__entry-title"},c),r.a.createElement("p",{className:"journal__entry-content"},"".concat(o.substring(0,40)).concat(o?"...":""))),r.a.createElement("div",{className:"journal__entry-date-box"},r.a.createElement("span",null,u.format("MMMM Do")),r.a.createElement("h4",null,u.format("YYYY"))))},fe=function(){var e=Object(l.c)((function(e){return e.notes})).notes;return r.a.createElement("div",{className:"journal__entries"},e.map((function(e){return r.a.createElement(pe,Object.assign({key:e.id},e))})))},be=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})),a=Object(n.useContext)(ie),c=a.screenWidth,o=a.activateMobileStyles,i=a.setActivateMobileStyles,u=t.name;return r.a.createElement("aside",{className:"journal__sidebar",style:!o&&c<=645?{display:"none"}:null},r.a.createElement("div",{className:"journal__sidebar-navbar"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement("i",{className:"far fa-moon"}),r.a.createElement("span",null," ",u)),r.a.createElement("button",{className:"btn",onClick:function(){e(function(){var e=Object(A.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.auth().signOut();case 2:t({type:_}),t(te());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Logout")),r.a.createElement("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(A.a)(L.a.mark((function e(t,a){var n,r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.prev=2,e.next=5,z.collection("".concat(n,"/journal/notes")).add(r);case 5:c=e.sent,t(J(c.id,r)),t(V(c.id,r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a){return e.apply(this,arguments)}}()),c<=645&&i(!1)},tabIndex:"1"},r.a.createElement("i",{className:"far fa-calendar-plus fa-5x"}),r.a.createElement("p",{className:"mt-5"},"New entry")),r.a.createElement(fe,null))},ve=function(){var e=Object(n.useContext)(ie),t=e.screenWidth,a=e.activateMobileStyles,c=Object(l.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster"},r.a.createElement(be,null),r.a.createElement("main",{style:a&&t<=645?{display:"none"}:null},c?r.a.createElement(me,null):r.a.createElement(de,null)))},he=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"_loading-container"},r.a.createElement("div",{id:"_box"},r.a.createElement("div",{id:"_loading"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("h1",{id:"_loading-text"},"Loading..."))))},Ee=a(36),je=function(e){var t=e.component,a=e.isLoggedIn,n=Object(Ee.a)(e,["component","isLoggedIn"]);return r.a.createElement(P.b,Object.assign({},n,{component:function(e){return a?r.a.createElement(t,e):r.a.createElement(P.a,{to:"/auth/login"})}}))},ge=function(e){var t=e.component,a=e.isLoggedIn,n=Object(Ee.a)(e,["component","isLoggedIn"]);return r.a.createElement(P.b,Object.assign({},n,{component:function(e){return a?r.a.createElement(P.a,{to:"/"}):r.a.createElement(t,e)}}))},ye=function(){var e=Object(l.b)(),t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(!1),s=Object(i.a)(u,2),m=s[0],d=s[1];return Object(n.useEffect)((function(){R.a.auth().onAuthStateChanged(function(){var t=Object(A.a)(L.a.mark((function t(a){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===a||void 0===a?void 0:a.uid)?(e(ee(a.uid,a.displayName)),d(!0),e(X(a.uid))):d(!1),o(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,o,d]),c?r.a.createElement(he,null):r.a.createElement(M.a,null,r.a.createElement("div",null,r.a.createElement(P.d,null,r.a.createElement(ge,{path:"/auth",component:oe,isLoggedIn:m}),r.a.createElement(je,{exact:!0,path:"/",component:ve,isLoggedIn:m}),r.a.createElement(P.a,{to:"/auth/login"}))))},_e=function(){var e=Object(n.useState)(window.innerWidth),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!0),u=Object(i.a)(o,2),s=u[0],m=u[1],d=function(){c(window.innerWidth)};return Object(n.useEffect)((function(){return window.addEventListener("resize",d),function(){return window.removeEventListener("resize",d)}}),[]),r.a.createElement(l.a,{store:C},r.a.createElement(ie.Provider,{value:{screenWidth:a,activateMobileStyles:s,setActivateMobileStyles:m}},r.a.createElement(ye,null)))};a(156);o.a.render(r.a.createElement(_e,null),document.getElementById("root"))},63:function(e,t,a){e.exports=a(157)}},[[63,1,2]]]);
//# sourceMappingURL=main.9e281d10.chunk.js.map