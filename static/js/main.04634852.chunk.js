(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{32:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(23),s=n.n(r),o=(n(32),n(3)),i=n(0),l=function(){var e=localStorage.getItem("access_token");return Object(i.jsxs)("nav",{className:"navbar",children:[Object(i.jsx)(o.b,{to:"/",children:Object(i.jsx)("h1",{children:"The Dojo Blog"})}),Object(i.jsxs)("div",{className:"links",children:[Object(i.jsx)(o.b,{to:"/",children:"Home"}),e?Object(i.jsx)(o.b,{to:"/create",children:"New Blog"}):Object(i.jsx)(o.b,{to:"/signup",children:"Signup"}),e?Object(i.jsx)(o.b,{to:"/logout",children:"Logout"}):Object(i.jsx)(o.b,{to:"/login",children:"Login"})]})]})},j=n(26),b=n.n(j);var u=function(e){var t=e.title,n=e.blogs;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{className:"blog-list-title",children:t}),n.map((function(e){return Object(i.jsx)("div",{className:"blog-preview",children:Object(i.jsxs)(o.b,{to:"/blog/".concat(e.id),children:[Object(i.jsx)("h2",{children:e.title}),Object(i.jsxs)("p",{className:"blog-author",children:["Written by ",e.author.first_name," ",e.author.last_name,", Published at ",b()(e.published).format("YYYY-MM-DD HH:MM:SS")]}),Object(i.jsx)("p",{className:"blog-excerpt",children:e.excerpt})]})},e.id)}))]})},d=n(4),h=n(27),O=n.n(h).a.create({baseURL:"http://42.192.171.98/",timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null}}),x=n(2),g=function(e){var t=Object(c.useState)(null),n=Object(d.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!0),o=Object(d.a)(s,2),i=o[0],l=o[1],j=Object(c.useState)(null),b=Object(d.a)(j,2),u=b[0],h=b[1],g=Object(x.f)();return Object(c.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal,headers:{"Content-Type":"application/json",Authorization:O.defaults.headers.Authorization}}).then((function(e){return e.ok||g.push("/login"),e.json()})).then((function(e){h(null),r(e),l(!1)})).catch((function(e){"AbortError"!==e.name&&(l(!1),h(e.message),r(null))})),function(){return t.abort()}}),[e,g]),{data:a,isPending:i,error:u}};var f=function(){var e=g(O.defaults.baseURL+"blog_api/blogs/"),t=e.data,n=e.isPending,c=e.error;return Object(i.jsxs)("div",{className:"home",children:[c&&Object(i.jsx)("div",{children:c}),n&&Object(i.jsx)("div",{children:"Loading . . ."}),t&&Object(i.jsx)(u,{blogs:t,title:"All Blogs"})]})};var p=function(){var e=g("http://localhost:8000/blogs"),t=e.data,n=e.isPending,c=e.error;return Object(i.jsxs)("div",{className:"home",children:[c&&Object(i.jsx)("div",{children:c}),n&&Object(i.jsx)("div",{children:"Loading . . ."}),t&&Object(i.jsx)(u,{blogs:t.filter((function(e){return"mario"===e.author})),title:"Blogs by Mario"})]})};var v=function(){var e=new Date;e.setHours(e.getHours()+8);var t=Object(c.useState)(""),n=Object(d.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(d.a)(s,2),l=o[0],j=o[1],b=Object(c.useState)(""),u=Object(d.a)(b,2),h=u[0],g=u[1],f=Object(c.useState)(e.toISOString().slice(0,-8)),p=Object(d.a)(f,2),v=p[0],m=p[1],S=Object(c.useState)("published"),w=Object(d.a)(S,2),k=w[0],y=w[1],L=Object(c.useState)("1"),C=Object(d.a)(L,2),N=C[0],A=C[1],_=Object(c.useState)("1"),B=Object(d.a)(_,2),D=B[0],I=B[1],P=Object(c.useState)(!1),T=Object(d.a)(P,2),z=T[0],E=T[1],q=Object(x.f)();return Object(i.jsxs)("div",{className:"create",children:[Object(i.jsx)("h2",{children:"Add a New Blog"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:a,excerpt:l,content:h,published:v,status:k,category:N,author:D};E(!0),fetch(O.defaults.baseURL+"blog_api/blogs/create/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:O.defaults.headers.Authorization},body:JSON.stringify(t)}).then((function(){E(!1),q.push("/")}))},children:[Object(i.jsx)("label",{children:"Blog Title:"}),Object(i.jsx)("input",{type:"text",required:!0,value:a,onChange:function(e){return r(e.target.value)}}),Object(i.jsx)("label",{children:"Blog Excerpt:"}),Object(i.jsx)("textarea",{rows:"3",required:!0,value:l,onChange:function(e){return j(e.target.value)}}),Object(i.jsx)("label",{children:"Blog Content:"}),Object(i.jsx)("textarea",{rows:"10",required:!0,value:h,onChange:function(e){return g(e.target.value)}}),Object(i.jsx)("label",{children:"Blog Published:"}),Object(i.jsx)("input",{type:"datetime-local",required:!0,value:v,onChange:function(e){return m(e.target.value)}}),Object(i.jsx)("label",{children:"Blog Status:"}),Object(i.jsxs)("select",{value:k,onChange:function(e){return y(e.target.value)},children:[Object(i.jsx)("option",{value:"published",children:"Published"}),Object(i.jsx)("option",{value:"draft",children:"Draft"})]}),Object(i.jsx)("label",{children:"Blog Category:"}),Object(i.jsxs)("select",{value:N,onChange:function(e){return A(e.target.value)},children:[Object(i.jsx)("option",{value:"1",children:"Literature"}),Object(i.jsx)("option",{value:"2",children:"WebDev"})]}),Object(i.jsx)("label",{children:"Blog Author:"}),Object(i.jsxs)("select",{value:D,onChange:function(e){return I(e.target.value)},children:[Object(i.jsx)("option",{value:"1",children:"Leonhard Euler"}),Object(i.jsx)("option",{value:"2",children:"Isaac Newton"}),Object(i.jsx)("option",{value:"3",children:"Carl Gauss"}),Object(i.jsx)("option",{value:"4",children:"Gottfried Leibniz"}),Object(i.jsx)("option",{value:"5",children:"Joseph-Louis Lagrange"}),Object(i.jsx)("option",{value:"6",children:"Rene Decartes"})]}),!z&&Object(i.jsx)("button",{children:"Submit"}),z&&Object(i.jsx)("button",{disabled:!0,children:"Adding Now . . ."})]})]})};var m=function(){var e=Object(x.g)().id,t=g(O.defaults.baseURL+"blog_api/blog/"+e),n=t.data,c=t.error,a=t.isPending,r=Object(x.f)();return Object(i.jsxs)("div",{className:"blog-detail",children:[a&&Object(i.jsx)("div",{children:"Loading . . ."}),c&&Object(i.jsx)("div",{children:c}),n&&Object(i.jsxs)("article",{children:[Object(i.jsx)("h2",{children:n.title}),Object(i.jsxs)("p",{children:["Written by ",Object(i.jsxs)(o.b,{to:"/".concat(n.author,"/blogs"),children:[n.author.first_name," ",n.author.last_name]})]}),Object(i.jsx)("div",{children:n.content}),Object(i.jsx)("button",{onClick:function(){fetch(O.defaults.baseURL+"blog_api/blog/"+n.id,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:O.defaults.headers.Authorization}}).then((function(){r.push("/")}))},children:"Delete"})]})]})},S=function(){return Object(i.jsx)("div",{className:"not-found",children:Object(i.jsxs)("p",{children:["The Page you are looking for does not exist. ",Object(i.jsx)(o.b,{to:"/",children:"Back Home"})]})})},w=function(){return Object(i.jsxs)("div",{className:"create",children:[Object(i.jsx)("h2",{children:"Who are we?"}),Object(i.jsx)("p",{children:"You should calmly walk away from a heated discussion when the words being traded cease being reasonable. Getting burned by someone\u2019s vitriol can only happen if they are successful enough to ensnare you in their little corner of the world."})]})};var k=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(d.a)(r,2),o=s[0],l=s[1],j=Object(c.useState)(!1),b=Object(d.a)(j,2),u=b[0],h=b[1],g=Object(x.f)();return Object(i.jsxs)("div",{className:"create",children:[Object(i.jsx)("h2",{children:"Login"}),Object(i.jsxs)("form",{children:[Object(i.jsx)("label",{children:"Username:"}),Object(i.jsx)("input",{type:"text",required:!0,value:n,onChange:function(e){return a(e.target.value)}}),Object(i.jsx)("label",{children:"Password:"}),Object(i.jsx)("input",{type:"password",required:!0,value:o,onChange:function(e){return l(e.target.value)}}),!u&&Object(i.jsx)("button",{onClick:function(e){e.preventDefault(),O.post("/api/token/",{username:n,password:o}).then((function(e){localStorage.setItem("access_token",e.data.access),localStorage.setItem("refresh_token",e.data.refresh),O.defaults.headers.Authorization="JWT "+localStorage.getItem("access_token"),h(!1),g.push("/"),window.location.reload()}))},children:"Login"}),u&&Object(i.jsx)("button",{disabled:!0,children:"Logging in Now . . ."})]})]})},y=function(){var e=Object(x.f)();return Object(c.useEffect)((function(){localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),O.defaults.headers.Authorization=null,e.push("/login"),window.location.reload()})),Object(i.jsx)("div",{children:"Logout"})};var L=function(){return Object(i.jsx)(o.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)(x.c,{children:[Object(i.jsx)(x.a,{exact:!0,path:"/",children:Object(i.jsx)(f,{})}),Object(i.jsx)(x.a,{path:"/mario/blogs",children:Object(i.jsx)(p,{})}),Object(i.jsx)(x.a,{path:"/create",children:Object(i.jsx)(v,{})}),Object(i.jsx)(x.a,{path:"/blog/:id",children:Object(i.jsx)(m,{})}),Object(i.jsx)(x.a,{path:"/about",children:Object(i.jsx)(w,{})}),Object(i.jsx)(x.a,{path:"/login",children:Object(i.jsx)(k,{})}),Object(i.jsx)(x.a,{path:"/logout",children:Object(i.jsx)(y,{})}),Object(i.jsx)(x.a,{path:"*",children:Object(i.jsx)(S,{})})]})})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(L,{})}),document.getElementById("root")),C()}},[[61,1,2]]]);
//# sourceMappingURL=main.04634852.chunk.js.map