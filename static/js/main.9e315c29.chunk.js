(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var r=n(18),a=n.n(r),o=n(0),c=n.n(o),i=n(10),u=n(129),p=n(127),l=n(58),s=n(31),d=n.n(s),m=Object(l.a)({props:{MuiAppBar:{position:"sticky"},MuiCard:{elevation:0}},overrides:{MuiAppBar:{root:{background:"#fff !important"}}},palette:{background:{default:"#fff"}}}),f=Object(l.a)({props:{MuiAppBar:{position:"sticky"},MuiCard:{elevation:0}},palette:{type:"dark",background:{default:d.a[900],paper:d.a[800]}},overrides:{MuiAppBar:{root:{background:"transparent !important"}},MuiTable:{root:{background:"transparent !important"}},MuiTypography:{root:{color:d.a[400]}}}}),g=n(19),b=n(36),h=n.n(b),j=n(47),O=n(59),v=n(24),y=n(20),E=n.n(y),M=n(48),k=n.n(M),x=n(49),w=function(e){var t=Object(g.a)(),n=Object(o.useRef)(),r=k()();Object(o.useEffect)(function(){void 0!==n&&void 0!==n.current&&n.current.layout()},[r]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(y.ControlledEditor,{theme:t.value?"dark":"light",value:e.value,editorDidMount:function(t,r){n.current=r;var a=e.openrpcMethodObject?e.openrpcMethodObject.name:"inspector",o="inmemory://".concat(a,".json");y.monaco.init().then(function(t){var n=t.Uri.parse(o),a=t.editor.createModel(e.value||"","json",n);r.setModel(a);var c={type:"object",properties:{jsonrpc:{type:"string",enum:["2.0"]},id:{oneOf:[{type:"string"},{type:"number"}]},method:{type:"string"},params:{type:"array"}}};e.openrpcMethodObject&&(c=Object(v.a)({},c,{additionalProperties:!1,properties:Object(v.a)({},c.properties,{method:{type:"string",enum:[e.openrpcMethodObject.name]},params:Object(v.a)({},c.properties.params,{items:e.openrpcMethodObject.params.map(function(e){return Object(v.a)({},e.schema,{additionalProperties:!1})})})})})),Object(x.addDiagnostics)(n.toString(),c,t)}).catch(function(e){return console.error("An error occurred during initialization of Monaco: ",e)})},language:"json",onChange:function(t,n){e.onChange&&e.onChange(n)}}))},C=n(54),S=n.n(C),T=n(128),R=n(121),B=n(122),P=n(123),D=n(126),I=n(124),J=n(21),N=n(55),q=n.n(N),z=n(56),A=n.n(z);var F=function(e){var t=Object(g.a)(),n=function(e){var t=Object(o.useState)(e),n=Object(i.a)(t,2),r=n[0],a=n[1];return[r,function(){a(r+1)}]}(0),r=Object(i.a)(n,2),a=r[0],u=r[1],p=Object(o.useState)(e.request||{jsonrpc:"2.0",method:"",params:[],id:a}),l=Object(i.a)(p,2),s=l[0],d=l[1],m=Object(o.useRef)(),f=Object(o.useState)(),b=Object(i.a)(f,2),v=b[0],y=b[1],M=Object(o.useState)(e.url||""),k=Object(i.a)(M,2),x=k[0],C=k[1],N=function(e){var t=Object(o.useState)(),n=Object(i.a)(t,2),r=n[0],a=n[1],c=Object(o.useState)(),u=Object(i.a)(c,2),p=u[0],l=u[1];return Object(o.useEffect)(function(){var t;(e.includes("http://")||e.includes("https://"))&&(t=J.HTTPTransport),e.includes("ws://")&&(t=J.WebSocketTransport);try{var n=new(t||J.HTTPTransport)(e),r=new J.Client(new J.RequestManager([n]));a(r),r.onError(function(e){console.log("onError",e),l(e)})}catch(o){l(o)}},[e]),[r,p,l]}(x),z=Object(i.a)(N,3),F=z[0],U=z[1],W=z[2];Object(o.useEffect)(function(){e.openrpcMethodObject&&d({jsonrpc:"2.0",method:e.openrpcMethodObject.name,params:s.params,id:a})},[e.openrpcMethodObject,s,d,a]),Object(o.useEffect)(function(){e.url&&C(e.url)},[e.url]);var G=function(){var e=Object(j.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(H(),!F){e.next=13;break}return u(),e.prev=3,e.next=6,F.request(s.method,s.params);case 6:t=e.sent,y({jsonrpc:"2.0",result:t}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),W(e.t0);case 13:case"end":return e.stop()}},e,null,[[3,10]])}));return function(){return e.apply(this,arguments)}}();var H=function(){y(void 0),W(void 0)};return c.a.createElement("div",{style:{height:"100%"}},c.a.createElement(T.a,{position:"static",elevation:0,color:"default"},c.a.createElement(R.a,null,c.a.createElement("img",{height:"30",alt:"openrpc-logo",style:{marginRight:"10px"},src:"https://github.com/open-rpc/design/raw/master/icons/open-rpc-logo-noText/open-rpc-logo-noText%20(PNG)/128x128.png"}),c.a.createElement(B.a,{variant:"h6",color:"textSecondary"},"Inspector"),c.a.createElement(P.a,{onClick:G},c.a.createElement(S.a,null)),c.a.createElement(D.a,{value:x,placeholder:"Enter a JSON-RPC server URL",onChange:function(e){return C(e.target.value)},fullWidth:!0,style:{background:"rgba(0,0,0,0.1)",borderRadius:"4px",padding:"0px 10px",marginRight:"5px"}}),e.hideToggleTheme?null:c.a.createElement(P.a,{onClick:function(){e.onToggleDarkMode&&e.onToggleDarkMode()}},e.darkMode?c.a.createElement(q.a,null):c.a.createElement(A.a,null)))),c.a.createElement("div",{style:{display:"flex",marginBottom:"-80px"}},c.a.createElement(O.a,{split:"vertical",minSize:100,maxSize:-100,defaultSize:"50%",style:{flexGrow:1},onChange:function(){m&&m.current&&m.current.layout()}},c.a.createElement("div",{style:{width:"99%",padding:"10px"}},c.a.createElement(w,{onChange:function(e){return d(JSON.parse(e))},openrpcMethodObject:e.openrpcMethodObject,value:JSON.stringify(s,null,4)})),c.a.createElement("div",{style:{height:"100%",padding:"10px",overflowY:"auto",paddingBottom:"80px"}},(v||U)&&c.a.createElement(I.a,{style:{position:"absolute",top:"15px",right:"15px",zIndex:1},onClick:function(){H()}},"Clear"),c.a.createElement(E.a,{options:{minimap:{enabled:!1},wordWrap:"on",lineNumbers:"off",wrappingIndent:"deepIndent",readOnly:!0,showFoldingControls:"always"},editorDidMount:function(e,t){m.current=t},theme:t.value?"dark":"light",language:"json",value:JSON.stringify(U||v,null,4)||""})))))},U=n(57),W=function(e){var t=Object(o.useState)(U.parse(window.location.search,{ignoreQueryPrefix:!0,depth:e||100,decoder:function(e){return/^(\d+|\d*\.\d+)$/.test(e)?parseFloat(e):"false"!==e&&("true"===e||decodeURIComponent(e))}}));return[Object(i.a)(t,1)[0]]},G=function(){var e=Object(g.a)(),t=W(),n=Object(i.a)(t,1)[0],r=e.value?f:m;return c.a.createElement(p.a,{theme:r},c.a.createElement(u.a,null),c.a.createElement(F,{onToggleDarkMode:e.toggle,darkMode:e.value,url:n.url,openrpcMethodObject:n.openrpcMethodObject,request:n.request}))};n(105),n(106);a.a.render(c.a.createElement(G,null),document.getElementById("root"))},63:function(e,t,n){e.exports=n(107)}},[[63,1,2]]]);
//# sourceMappingURL=main.9e315c29.chunk.js.map