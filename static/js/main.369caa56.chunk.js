(this["webpackJsonpreact-keep-notes"]=this["webpackJsonpreact-keep-notes"]||[]).push([[0],{57:function(e,t,n){},59:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(16),r=n.n(o),i=(n(57),n(58),n(8)),s=n(17),l=n(9),j=(n(59),function(e,t){var n=Object(c.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(c){return t}})),a=Object(i.a)(n,2),o=a[0],r=a[1];return Object(c.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(o))}),[e,o]),[o,r]}),d=n(81),u=[{id:Object(d.a)(),title:"Welcome To Keep Notes",description:"keep Notes is a free, open-source notes app for the web. It is a demo project only, and does not integrate with any database or cloud. Your notes are saved in local storage and will not be permanently persisted, but are available for download. You can create your note and update it whenever it needs.",created_at:"Sat July 03 2021",favourite_note:!1,trash:!1,editing:!1},{id:Object(d.a)(),title:"Features",description:"Plain text notes - take notes in an IDE-like environment that makes no assumptions Linked notes - use uuid syntax to link to notes within other notes Theme - light and dark mode available Search notes - easily search all notes No database - notes are only stored in the browser's local storage and are available for download and export to you alone Copy Note - You can copy your note with a single button No tracking or analytics - 'nuff said GitHub integration - self-hosted option is available for auto-syncing to a GitHub repository",created_at:"Sun July 27 2021",favourite_note:!1,trash:!1,editing:!1}],b=[{id:Object(d.a)(),title:"Scratchpad",description:"The easiest note to find.",editing:!1,created_at:"Wed July 28 2021"}],h=n(7),O=n(12),x=n(1),m=function(){return Object(x.jsxs)("div",{className:"sidebar",children:[Object(x.jsx)("br",{}),Object(x.jsxs)(s.b,{to:"/addNote",children:[" ",Object(x.jsx)(h.a,{icon:O.f,style:{marginRight:".5rem"}})," Add Note"]}),Object(x.jsxs)(s.b,{to:"/scratchPad",children:[Object(x.jsx)(h.a,{icon:O.b,style:{marginRight:".5rem"}})," Scratchpad"]}),Object(x.jsxs)(s.b,{to:"/",children:[Object(x.jsx)(h.a,{icon:O.h,style:{marginRight:".5rem"}})," Notes"]}),Object(x.jsxs)(s.b,{to:"/favourites",children:[Object(x.jsx)(h.a,{icon:O.g,style:{marginRight:".5rem"}})," Favourites"]}),Object(x.jsxs)(s.b,{to:"/trash",children:[Object(x.jsx)(h.a,{icon:O.i,style:{marginRight:".5rem"}})," Trash"]})]})},p=a.a.createContext(),f=n(83),g=n(49),v=n(80),y=n(50),k=function(e){return Object(x.jsx)("section",{className:"grid-container",children:Object(x.jsxs)(f.a.Container,{id:"left-tabs-example",defaultActiveKey:e.default,children:[Object(x.jsx)("div",{className:"noteTab",style:{backgroundColor:e.themeState.tabBackground,color:e.themeState.foreground},children:Object(x.jsxs)(g.a,{children:[Object(x.jsx)(v.a,{inline:!0,style:{padding:10},children:Object(x.jsx)(y.a,{placeholder:"Search Notes By Title",value:e.searchTerm,onChange:e.handleChange,type:"text",style:{backgroundColor:e.themeState.background,color:e.themeState.foreground}})}),e.noteTab]})}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"content",style:{backgroundColor:e.themeState.background,color:e.themeState.foreground},children:[Object(x.jsx)("br",{}),Object(x.jsx)(g.a,{sm:12,children:e.showNotes})]}),Object(x.jsx)("div",{className:"footer",style:{backgroundColor:e.themeState.tabBackground,color:e.themeState.foreground},children:e.footerTab})]})]})})},C=n(79),N=n(76),S=n(78),w=n(77),T=n(22),B=n(26),F=n(28),_=n(75),D=function(e){var t=Object(c.useState)(e.currentNote),n=Object(i.a)(t,2),a=n[0],o=n[1];Object(c.useEffect)((function(){o(e.currentNote)}),[e]);var r=function(e){var t=e.target,n=t.name,c=t.value;o(Object(F.a)(Object(F.a)({},a),{},Object(B.a)({},n,c)))};return Object(x.jsxs)(_.a,{className:"text-center",children:[Object(x.jsx)("br",{}),Object(x.jsxs)(v.a,{id:e.currentNote.id,onSubmit:function(t){t.preventDefault(),e.updateNote(a.id,a)},children:[Object(x.jsx)(v.a.Group,{controlId:"exampleForm.ControlSelect1",children:Object(x.jsx)(v.a.Control,{style:{backgroundColor:e.themeState.background,color:e.themeState.foreground},name:"title",autoComplete:"off",required:!0,type:"text",value:a.title,onChange:r})}),Object(x.jsx)("br",{}),Object(x.jsx)(v.a.Group,{children:Object(x.jsx)(v.a.Control,{as:"textarea",rows:18,style:{backgroundColor:e.themeState.background,color:e.themeState.foreground},name:"description",autoComplete:"off",required:!0,type:"text",value:a.description,onChange:r})}),Object(x.jsx)("br",{})]}),Object(x.jsx)("br",{})]})},A=n(37),P=function(e,t){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(C.a,{variant:"pills",className:"flex-column",children:Object(x.jsx)(C.a.Item,{children:Object(x.jsxs)(C.a.Link,{eventKey:e.id,children:[!0===e.favourite_note?Object(x.jsxs)("span",{style:{marginRight:".2rem"},children:[" ",Object(x.jsx)(h.a,{icon:T.b})," "]}):Object(x.jsx)("span",{children:" "}),e.title,!0===e.trash?Object(x.jsxs)("div",{className:"fa-pull-right",id:"deleteBtn",onClick:function(){return t(e.id)},children:[" ",Object(x.jsx)(h.a,{icon:O.i})," "]}):Object(x.jsx)("span",{children:" "}),Object(x.jsx)("div",{className:"hide",children:"Delete Permanently"})]})})})})},R=function(e,t,n){return!1===e.editing?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(f.a.Content,{children:Object(x.jsxs)(f.a.Pane,{eventKey:e.id,children:[Object(x.jsx)("h3",{children:e.title}),Object(x.jsx)("br",{}),Object(x.jsx)("p",{children:e.description})]})},e.id)}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(f.a.Content,{children:Object(x.jsx)(f.a.Pane,{eventKey:e.id,children:Object(x.jsx)(D,{currentNote:e,updateNote:t,themeState:n})})},e.id)})},E=function(e,t,n,c,a,o,r,i,s,l,j,d,u){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(f.a.Content,{children:Object(x.jsx)(f.a.Pane,{className:"m-1",eventKey:e.id,children:Object(x.jsxs)(N.a,{children:[Object(x.jsxs)(g.a,{xl:6,lg:12,children:[!1===e.editing?Object(x.jsx)(S.a,{overlay:Object(x.jsx)(w.a,{id:"tooltip-bottom",children:" Edit "}),placement:"top",children:Object(x.jsxs)("span",{className:"spanButton",onClick:function(){return a(e.id,e,t,n)},children:[" ",Object(x.jsx)(h.a,{icon:O.e})," "]})}):Object(x.jsx)(S.a,{overlay:Object(x.jsx)(w.a,{id:"tooltip-bottom",children:" View "}),placement:"top",children:Object(x.jsxs)("button",{className:"iconButton",form:e.id,type:"submit",children:[" ",Object(x.jsx)(h.a,{icon:O.c,color:u})," "]})}),!1===e.favourite_note?Object(x.jsx)(S.a,{overlay:Object(x.jsx)(w.a,{id:"tooltip-bottom",children:" Add To Favourites "}),placement:"top",children:Object(x.jsxs)("span",{className:"spanButton",onClick:function(){return o(e.id,e,t,n)},children:[" ",Object(x.jsx)(h.a,{icon:T.b})," "]})}):Object(x.jsx)(S.a,{overlay:Object(x.jsx)(w.a,{id:"tooltip-bottom",children:" Remove from Favourites "}),placement:"top",children:Object(x.jsxs)("span",{className:"spanButton",onClick:function(){return r(e.id,e,t,n)},children:[" ",Object(x.jsx)(h.a,{icon:T.b})," "]})}),Object(x.jsx)(S.a,{overlay:Object(x.jsxs)(w.a,{id:"tooltip-bottom",children:[" ",!1===e.trash?"Add to Trash":"Remove from Trash","  "]}),placement:"top",children:Object(x.jsxs)("span",{className:"spanButton",onClick:function(){return c(e.id,e,t,n)},children:[" ",Object(x.jsx)(h.a,{icon:O.j})," "]})}),Object(x.jsx)(S.a,{overlay:Object(x.jsx)(w.a,{id:"tooltip-bottom",children:" Copy Text "}),placement:"top",children:Object(x.jsx)("span",{className:"spanButton",onClick:function(){return navigator.clipboard.writeText(e.title+" "+e.description)},children:Object(x.jsx)(h.a,{icon:T.a})})}),Object(x.jsx)(S.a,{overlay:Object(x.jsx)(w.a,{id:"tooltip-bottom",children:" Download Note "}),placement:"top",children:Object(x.jsxs)("span",{className:"spanButton",onClick:function(){return i(e)},children:[" ",Object(x.jsx)(h.a,{icon:O.a})]})})]}),Object(x.jsxs)(g.a,{className:"text-xl-end text-lg-start text-muted",xl:6,lg:12,children:["Created_at: ",e.created_at,j===d?Object(x.jsx)(S.a,{placement:"top",overlay:Object(x.jsx)(w.a,{id:"tooltip-bottom",children:" Turn Dark Mode On "}),children:Object(x.jsx)("span",{role:"img","aria-label":"sun",className:"spanButton",onClick:l,children:"\ud83c\udf1e"})}):Object(x.jsx)(S.a,{placement:"top",overlay:Object(x.jsx)(w.a,{id:"tooltip-bottom",children:" Turn Dark Mode Off "}),children:Object(x.jsx)("span",{className:"spanButton",onClick:s,children:Object(x.jsx)(h.a,{icon:O.d,color:"white"})})}),Object(x.jsx)("a",{href:"https://github.com/SiamAnzir/react-keep-notes",className:"spanButton",style:{marginRight:".8rem"},children:Object(x.jsx)(h.a,{icon:A.a,color:u})})]})]})})},e.id)})},L=function(e,t,n,c){t.favourite_note=!0,n(c.map((function(n){return n.id===e?t:n})))},I=function(e,t,n,c){t.trash=!0,n(c.map((function(n){return n.id===e?t:n})))},J=function(e,t,n,c){t.favourite_note=!1,n(c.map((function(n){return n.id===e?t:n})))},G=function(e,t,n,c){t.trash=!1,n(c.map((function(n){return n.id===e?t:n})))},K=function(e,t,n,c){t.editing=!0,n(c.map((function(n){return n.id===e?t:n})))},M=function(e){var t=document.createElement("a"),n=new Blob([e.title+"\n"+e.description],{type:"text/plain"});t.href=URL.createObjectURL(n),t.download=e.created_at+".txt",document.body.appendChild(t),t.click()},q=function(){var e=Object(c.useContext)(p),t=e.notes,n=e.setNotes,a=e.theme,o=e.themeState,r=e.setThemeState,s=function(){r(a.dark)},l=function(){r(a.light)},j=[];t.map((function(e){return!1===e.trash?j.push(e):j}));var d=Object(c.useState)(""),u=Object(i.a)(d,2),b=u[0],h=u[1],O=Object(c.useState)([]),m=Object(i.a)(O,2),f=m[0],g=m[1];Object(c.useEffect)((function(){var e=j.filter((function(e){return e.title.toLowerCase().includes(b)}));g(e)}),[b]);var v=function(e,c){c.editing=!1,n(t.map((function(t){return t.id===e?c:t})))},y=""===b?j.map((function(e){return P(e)})):f.map((function(e){return P(e)})),C=j.map((function(e){return R(e,v,o)})),N=j.map((function(e){return E(e,n,t,I,K,L,J,M,l,s,o.background,a.light.background,o.foreground)}));return Object(x.jsx)(k,{default:t[0].id,noteTab:y,showNotes:C,footerTab:N,searchTerm:b,handleChange:function(e){h(e.target.value)},themeState:o})},U=n(51),Y=n(82),z=function(){var e=Object(c.useContext)(p),t=e.notes,n=e.setNotes,a=e.themeState,o={id:Object(d.a)(),title:"",description:"",created_at:(new Date).toDateString(),favourite_note:!1,trash:!1,editing:!1},r=Object(c.useState)(o),s=Object(i.a)(r,2),l=s[0],j=s[1],u=Object(c.useState)(!1),b=Object(i.a)(u,2),m=b[0],f=b[1],y=function(){window.location.reload()},k=function(e){var t=e.target,n=t.name,c=t.value;j(Object(F.a)(Object(F.a)({},l),{},Object(B.a)({},n,c)))};return Object(x.jsx)("section",{className:"mainContent",style:{backgroundColor:a.background,color:a.foreground},children:Object(x.jsxs)(_.a,{className:"text-center",children:[Object(x.jsx)(Y.a,{className:"d-inline-block m-1",style:{color:"green"},onClose:function(){return f(!1)},show:m,delay:1500,autohide:!0,children:Object(x.jsx)(N.a,{children:Object(x.jsx)(g.a,{children:Object(x.jsx)("h5",{children:"Note Created Successfully"})})})}),Object(x.jsx)("br",{}),Object(x.jsxs)(v.a,{onSubmit:function(e){e.preventDefault(),n([].concat(Object(U.a)(t),[l])),e.target.reset(),f(!0),setTimeout(y,1500)},children:[Object(x.jsx)(v.a.Group,{children:Object(x.jsx)(v.a.Control,{style:{backgroundColor:a.background,color:a.foreground},name:"title",autoComplete:"off",required:!0,type:"text",placeholder:"Title of your Note",onChange:k})}),Object(x.jsx)("br",{}),Object(x.jsx)(v.a.Group,{children:Object(x.jsx)(v.a.Control,{as:"textarea",rows:18,style:{backgroundColor:a.background,color:a.foreground},name:"description",autoComplete:"off",required:!0,type:"text",placeholder:"Description of your note",onChange:k})}),Object(x.jsx)("br",{}),Object(x.jsx)("footer",{children:Object(x.jsxs)(N.a,{children:[Object(x.jsx)(g.a,{className:"text-start ",children:Object(x.jsxs)("button",{style:{marginLeft:".8rem"},type:"submit",children:[" ",Object(x.jsx)(h.a,{icon:O.e})," Save "]})}),Object(x.jsxs)(g.a,{className:"text-end text-muted",children:[" Created_at : ",l.created_at," "]})]})})]}),Object(x.jsx)("br",{})]})})},H=function(){var e=j("scratchPad",b),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(c.useContext)(p),r=o.theme,s=o.themeState,l=o.setThemeState,d=Object(c.useState)(!1),u=Object(i.a)(d,2),m=u[0],f=u[1];return Object(x.jsxs)("section",{children:[Object(x.jsxs)("div",{className:"mainContent",style:{backgroundColor:s.background,color:s.foreground},children:[Object(x.jsx)("br",{}),Object(x.jsx)(Y.a,{className:"d-inline-block m-1",style:{color:"green"},onClose:function(){return f(!1)},show:m,delay:1500,autohide:!0,children:Object(x.jsx)(N.a,{children:Object(x.jsx)(g.a,{children:Object(x.jsx)("h5",{children:"Note Copied Successfully"})})})}),!1===n[0].editing?Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:n[0].title}),Object(x.jsx)("p",{children:n[0].description})]}):Object(x.jsx)("div",{children:Object(x.jsx)(D,{currentNote:n[0],updateNote:function(e,t){t.editing=!1,a(n.map((function(n){return n.id===e?t:n})))},themeState:s})})]}),Object(x.jsx)("div",{className:"scratchPadFooter",style:{backgroundColor:s.tabBackground,color:s.foreground},children:Object(x.jsxs)(N.a,{className:"",children:[Object(x.jsxs)(g.a,{xl:6,lg:12,children:[!1===n[0].editing?Object(x.jsx)(S.a,{overlay:Object(x.jsx)(w.a,{id:"tooltip-bottom",children:" Edit "}),placement:"top",children:Object(x.jsxs)("span",{className:"spanButton",onClick:function(){return K(n[0].id,n[0],a,n)},children:[" ",Object(x.jsx)(h.a,{icon:O.e})," "]})}):Object(x.jsx)(S.a,{overlay:Object(x.jsx)(w.a,{id:"tooltip-bottom",children:" View "}),placement:"top",children:Object(x.jsxs)("button",{className:"iconButton",form:n[0].id,type:"submit",children:[" ",Object(x.jsx)(h.a,{icon:O.c,color:s.foreground})," "]})}),Object(x.jsx)(S.a,{overlay:Object(x.jsx)(w.a,{id:"tooltip-bottom",children:" Copy Text "}),placement:"top",children:Object(x.jsx)("span",{className:"spanButton",onClick:function(){navigator.clipboard.writeText(n[0].title+" "+n[0].description),f(!0)},children:Object(x.jsx)(h.a,{icon:T.a})})}),Object(x.jsx)(S.a,{overlay:Object(x.jsx)(w.a,{id:"tooltip-bottom",children:" Download Note "}),placement:"top",children:Object(x.jsxs)("span",{className:"spanButton",onClick:function(){return M(n[0])},children:[" ",Object(x.jsx)(h.a,{icon:O.a})]})})]}),Object(x.jsxs)(g.a,{className:"text-xl-end text-lg-start text-muted",xl:6,lg:12,children:["Created_At: ",n[0].created_at,s.background===r.light.background?Object(x.jsx)(S.a,{placement:"top",overlay:Object(x.jsx)(w.a,{id:"tooltip-bottom",children:" Turn Dark Mode On "}),children:Object(x.jsx)("span",{role:"img","aria-label":"sun",className:"spanButton",onClick:function(){l(r.dark)},children:"\ud83c\udf1e"})}):Object(x.jsx)(S.a,{placement:"top",overlay:Object(x.jsx)(w.a,{id:"tooltip-bottom",children:" Turn Dark Mode Off "}),children:Object(x.jsx)("span",{className:"spanButton",onClick:function(){l(r.light)},children:Object(x.jsx)(h.a,{icon:O.d,color:"white"})})}),Object(x.jsx)("a",{href:"https://github.com/SiamAnzir/react-keep-notes",className:"spanButton",style:{marginRight:".8rem"},children:Object(x.jsx)(h.a,{icon:A.a,color:s.foreground})})]})]})})]})},V=function(){var e=Object(c.useContext)(p),t=e.notes,n=e.setNotes,a=e.theme,o=e.themeState,r=e.setThemeState,s=function(){r(a.dark)},l=function(){r(a.light)},j=[];t.map((function(e){return!0===e.favourite_note&&!1===e.trash?j.push(e):j}));var d=Object(c.useState)(""),u=Object(i.a)(d,2),b=u[0],h=u[1],O=Object(c.useState)([]),m=Object(i.a)(O,2),f=m[0],g=m[1];Object(c.useEffect)((function(){var e=j.filter((function(e){return e.title.toLowerCase().includes(b)}));g(e)}),[b]);var v=function(e,c){c.editing=!1,n(t.map((function(t){return t.id===e?c:t})))},y=""===b?j.map((function(e){return P(e)})):f.map((function(e){return P(e)})),C=j.map((function(e){return R(e,v,o)})),N=j.map((function(e){return E(e,n,t,I,K,L,J,M,l,s,o.background,a.light.background,o.foreground)}));return Object(x.jsx)(k,{default:t[0].id,noteTab:y,showNotes:C,footerTab:N,searchTerm:b,handleChange:function(e){h(e.target.value)},themeState:o})},W=function(){var e=Object(c.useContext)(p),t=e.notes,n=e.setNotes,a=e.theme,o=e.themeState,r=e.setThemeState,s=function(){r(a.dark)},l=function(){r(a.light)},j=[];t.map((function(e){return!0===e.trash?j.push(e):j}));var d=Object(c.useState)(""),u=Object(i.a)(d,2),b=u[0],h=u[1],O=Object(c.useState)([]),m=Object(i.a)(O,2),f=m[0],g=m[1];Object(c.useEffect)((function(){var e=j.filter((function(e){return e.title.toLowerCase().includes(b)}));g(e)}),[b]);var v=function(e,c){c.editing=!1,n(t.map((function(t){return t.id===e?c:t})))},y=function(e){n(t.filter((function(t){return t.id!==e})))},C=""===b?j.map((function(e){return P(e,y)})):f.map((function(e){return P(e,y)})),N=j.map((function(e){return R(e,v,o)})),S=j.map((function(e){return E(e,n,t,G,K,L,J,M,l,s,o.background,a.light.background,o.foreground)}));return Object(x.jsx)(k,{default:t[0].id,noteTab:C,showNotes:N,footerTab:S,searchTerm:b,handleChange:function(e){h(e.target.value)},themeState:o})},Q={light:{foreground:"#323232",background:"#FAFAFA",tabBackground:"#e5e5e5"},dark:{foreground:"#FAFAFA",background:"#323232",tabBackground:"#242424"}},X=a.a.createContext(Q),Z=function(){var e=j("notes",u),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(c.useContext)(X),r=j("theme",o.light),d=Object(i.a)(r,2),b=d[0],h=d[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(s.a,{basename:"/",children:[Object(x.jsx)(m,{}),Object(x.jsx)(p.Provider,{value:{notes:n,setNotes:a,theme:o,themeState:b,setThemeState:h},children:Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/addNote",component:z}),Object(x.jsx)(l.a,{exact:!0,path:"/scratchPad",component:H}),Object(x.jsx)(l.a,{exact:!0,path:"/",component:q}),Object(x.jsx)(l.a,{exact:!0,path:"/favourites",component:V}),Object(x.jsx)(l.a,{exact:!0,path:"/trash",component:W}),Object(x.jsx)(l.a,{path:"*",component:function(){return"404 NOT FOUND"}})]})})]})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(X.Provider,{value:Q,children:Object(x.jsx)(Z,{})})}),document.getElementById("root")),$()}},[[70,1,2]]]);
//# sourceMappingURL=main.369caa56.chunk.js.map