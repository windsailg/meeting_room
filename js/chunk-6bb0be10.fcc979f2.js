(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bb0be10"],{"498a":function(e,t,r){"use strict";var a=r("23e7"),s=r("58a8").trim,n=r("c8d2");a({target:"String",proto:!0,forced:n("trim")},{trim:function(){return s(this)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var a=r("1d80"),s=r("5899"),n="["+s+"]",i=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),c=function(e){return function(t){var r=String(a(t));return 1&e&&(r=r.replace(i,"")),2&e&&(r=r.replace(o,"")),r}};e.exports={start:c(1),end:c(2),trim:c(3)}},6135:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("Navbar"),r("div",{staticClass:"py-5 container text-left"},[r("AdminNavbar"),r("h1",{staticClass:"mt-5 mb-4"},[e._v("使用者管理")]),r("div",{staticClass:"row col-md-6 mt-4 mb-4"},[r("div",[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newUsername,expression:"newUsername"}],staticClass:"form-control",attrs:{type:"name",name:"username","aria-describedby":"emailHelp",placeholder:"輸入使用者名稱"},domProps:{value:e.newUsername},on:{input:function(t){t.target.composing||(e.newUsername=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword,expression:"newPassword"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"輸入使用者密碼"},domProps:{value:e.newPassword},on:{input:function(t){t.target.composing||(e.newPassword=t.target.value)}}})]),r("button",{staticClass:"btn btn-info mr-2",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.createUser(t)}}},[e._v(" 新增使用者 ")])])]),r("div",{staticClass:"row card-deck"},e._l(e.users,(function(t){return r("div",{key:t.id,staticClass:"col-md-3 mb-4"},[r("div",{staticClass:"card opacity__background frosted__glass"},[r("div",{staticClass:"card-body"},[r("form",[r("div",{staticClass:"form-group "},[r("label",{attrs:{for:"username"}},[e._v("Username")]),t.isEditing?r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"name",name:"username","aria-describedby":"emailHelp",placeholder:"輸入使用者名稱"},domProps:{value:t.username},on:{input:function(r){r.target.composing||e.$set(t,"username",r.target.value)}}}):r("h3",{staticClass:"card-title"},[e._v(e._s(t.username))])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),t.isEditing?r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"輸入使用者密碼"},domProps:{value:t.password},on:{input:function(r){r.target.composing||e.$set(t,"password",r.target.value)}}}):r("h3",{staticClass:"card-title"},[e._v(e._s(t.password))])]),t.isEditing?r("button",{staticClass:"btn btn-success btn-sm mr-2",on:{click:function(r){return r.preventDefault(),r.stopPropagation(),e.updateUser({id:t.id,username:t.username,password:t.password})}}},[e._v(" 儲存 ")]):r("button",{staticClass:"btn btn-info btn-sm mr-2",on:{click:function(r){return r.preventDefault(),r.stopPropagation(),e.toggleEdit(t.id)}}},[e._v(" 修改 ")]),t.isEditing?r("button",{staticClass:"btn btn-info btn-sm mr-2",on:{click:function(r){return r.preventDefault(),r.stopPropagation(),e.toggleCancel(t.id)}}},[e._v(" 取消 ")]):e._e(),r("button",{staticClass:"btn btn-warning btn-sm",on:{click:function(r){return r.preventDefault(),r.stopPropagation(),e.deleteUser(t.id)}}},[e._v(" 刪除 ")])])])])])})),0)],1)],1)},s=[],n=r("1da1"),i=r("5530"),o=(r("96cf"),r("d81d"),r("498a"),r("d178")),c=r("7d03"),u=r("0ebf"),l=r("2f62"),d={computed:Object(i["a"])({},Object(l["b"])(["currentUser","isAuthenticated"])),name:"AdminUsers",components:{Navbar:o["a"],AdminNavbar:c["a"]},data:function(){return{users:{},newUsername:"",newPassword:""}},methods:{fetchData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.currentUser){t.next=4;break}return console.log("name or password error"),t.abrupt("return");case 4:return t.next=6,u["a"].getUsers();case 6:if(r=t.sent,200===r.status){t.next=9;break}throw new Error(r.statusText);case 9:e.users=r.data,e.users=r.data.map((function(e){return Object(i["a"])(Object(i["a"])({},e),{},{isEditing:!1,nameCatched:"",passwordCatched:""})})),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()},toggleEdit:function(e){this.users=this.users.map((function(t){return t.id===e?Object(i["a"])(Object(i["a"])({},t),{},{isEditing:!t.isEditing,nameCatched:t.username,passwordCatched:t.password}):t}))},toggleCancel:function(e){this.users=this.users.map((function(t){return t.id===e?Object(i["a"])(Object(i["a"])({},t),{},{username:t.nameCatched,password:t.passwordCatched,isEditing:!1}):t}))},updateUser:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=e.id,s=e.username,n=e.password,r.prev=1,s.trim()){r.next=4;break}return r.abrupt("return",alert("名稱不得為空"));case 4:return r.next=6,u["a"].updateUser({id:a,username:s,password:n});case 6:if(o=r.sent,200===o.status){r.next=9;break}throw new Error(o.statusText);case 9:t.users=t.users.map((function(e){return e.id===a?Object(i["a"])(Object(i["a"])({},e),{},{isEditing:!1}):e})),r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](1),console.log(r.t0);case 15:case"end":return r.stop()}}),r,null,[[1,12]])})))()},createUser:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.newUsername.trim()&&e.newPassword.trim()){t.next=3;break}return t.abrupt("return",alert("名稱或密碼不得為空"));case 3:return t.next=5,u["a"].getUser({username:e.newUsername});case 5:if(r=t.sent,!r.data.length){t.next=8;break}return t.abrupt("return",alert("使用者名稱已被使用，請更換其他名稱"));case 8:return t.next=10,u["a"].createUser({username:e.newUsername,password:e.newPassword});case 10:if(a=t.sent,201===a.status){t.next=13;break}throw new Error(a.statusText);case 13:e.newUsername="",e.newPassword="",e.fetchData(),t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](0),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,18]])})))()},deleteUser:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,e){r.next=3;break}return r.abrupt("return",alert("操作錯誤"));case 3:return r.next=5,u["a"].getUserReserve({UserId:e});case 5:if(a=r.sent,200===a.status){r.next=8;break}throw new Error(a.statusText);case 8:if(!a.data.length){r.next=10;break}return r.abrupt("return",alert("該使用已建立預定資訊，無法刪除"));case 10:return r.next=12,u["a"].deleteUser({id:e});case 12:if(s=r.sent,200===s.status){r.next=15;break}throw new Error(s.statusText);case 15:t.fetchData(),r.next=21;break;case 18:r.prev=18,r.t0=r["catch"](0),console.log(r.t0);case 21:case"end":return r.stop()}}),r,null,[[0,18]])})))()}},created:function(){this.newUsername="",this.newPassword="",this.fetchData()}},m=d,p=r("2877"),f=Object(p["a"])(m,a,s,!1,null,null,null);t["default"]=f.exports},"7d03":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"nav"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link active",attrs:{to:"/admin/rooms"}},[e._v(" 會議室管理 ")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link ",attrs:{to:"/admin/users"}},[e._v("使用者管理")])],1)])},s=[],n={name:"AdminNavbar"},i=n,o=r("2877"),c=Object(o["a"])(i,a,s,!1,null,null,null);t["a"]=c.exports},c8d2:function(e,t,r){var a=r("d039"),s=r("5899"),n="​᠎";e.exports=function(e){return a((function(){return!!s[e]()||n[e]()!=n||s[e].name!==e}))}}}]);
//# sourceMappingURL=chunk-6bb0be10.fcc979f2.js.map