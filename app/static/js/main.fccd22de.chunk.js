(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(15),r=n.n(o),l=(n(87),n(30)),c=n(31),s=n(33),d=n(32),u=n(34),m=(n(44),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("draw").getContext("2d");function t(){e.canvas.width=window.innerWidth,e.canvas.height=window.innerHeight-70,e.fillStyle="white",e.fillRect(0,0,window.innerWidth,window.innerHeight-70)}t(),window.addEventListener("resize",t),document.addEventListener("mousemove",i),document.addEventListener("mousedown",a),document.addEventListener("mouseenter",a),document.addEventListener("touchstart",a),document.addEventListener("touchend",a),document.addEventListener("touchmove",i);var n={x:0,y:0};function a(e){n.x=e.clientX,n.y=e.clientY}function i(t){if(1===t.buttons){e.beginPath(),e.lineWidth=10,e.lineCap="round",e.strokeStyle="#000",e.moveTo(n.x,n.y),a(t),e.lineTo(n.x,n.y),e.stroke()}}}},{key:"render",value:function(){return i.a.createElement("canvas",{id:"draw",style:{top:70,backgroundColor:"#fff"}})}}]),t}(a.Component)),h=n(16),f=n(75),p=n.n(f),v=n(71),w=n.n(v);var g=Object(h.withStyles)(function(e){return{root:{color:e.palette.common.white}}})(function(e){return i.a.createElement(w.a,Object.assign({elevation:0,position:"static"},e))}),y=n(73),E=n(74),b=n.n(E);var k=Object(h.withStyles)(function(e){return{root:Object(y.a)({height:64},e.breakpoints.up("sm"),{height:70})}})(function(e){return i.a.createElement(b.a,e)}),C=n(17),x=n.n(C);var j=Object(h.withStyles)(function(e){return{title:{fontSize:24},toolbar:{justifyContent:"space-between"},left:{flex:1},leftLinkActive:{color:e.palette.common.white},right:{flex:1,display:"flex",justifyContent:"flex-end"},rightLink:{fontSize:16,color:e.palette.common.white,marginLeft:3*e.spacing.unit,cursor:"pointer"}}})(function(e){var t=e.classes;return i.a.createElement("div",null,i.a.createElement(g,{position:"fixed"},i.a.createElement(k,{className:t.toolbar},i.a.createElement("div",{className:t.left}),i.a.createElement(p.a,{variant:"h6",underline:"none",color:"inherit",className:t.title},"Doodle Predictor"),i.a.createElement("div",{className:t.right},i.a.createElement(x.a,{className:t.rightLink,onClick:e.clear},"Clear Palette")))),i.a.createElement("div",{className:t.placeholder}))});var O=Object(h.withStyles)(function(e){return{title:{fontSize:24},toolbar:{justifyContent:"space-between"},left:{flex:1},leftLinkActive:{color:e.palette.common.white},right:{flex:1,display:"flex",justifyContent:"flex-end"},rightLink:{fontSize:16,color:e.palette.common.white,marginLeft:3*e.spacing.unit,cursor:"pointer",backgroundColor:e.palette.primary.main},footer:{bottom:0,backgroundColor:e.palette.primary.light}}})(function(e){var t=e.classes;return i.a.createElement("div",null,i.a.createElement("div",{position:"fixed",className:t.footer},i.a.createElement(k,{className:t.toolbar},i.a.createElement("div",{className:t.left}),i.a.createElement(x.a,{className:t.rightLink,onClick:e.predict},"Predict Class"),i.a.createElement("div",{className:t.right}))),i.a.createElement("div",{className:t.placeholder}))}),L=n(81),S=n.n(L),N=n(76),R=n.n(N),P=n(80),A=n.n(P),B=n(78),z=n.n(B),I=n(79),W=n.n(I),D=n(77),T=n.n(D);var H=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={data:null,refresh:!1,answerReady:!1},n.handleClose=function(){n.setState({answerReady:!1})},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"callBackendAPI",value:function(){return new Promise(function(e,t){var n=function(e){var t;t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);for(var n=e.split(",")[0].split(":")[1].split(";")[0],a=new Uint8Array(t.length),i=0;i<t.length;i++)a[i]=t.charCodeAt(i);return console.log(a),new Blob([a],{type:n})}(document.getElementById("draw").toDataURL("image/png")),a=new XMLHttpRequest,i=window.location;a.open("POST","".concat(i.protocol,"//").concat(i.hostname,":").concat(i.port,"/analyze"),!0),a.onerror=function(){t(a.responseText)},a.onload=function(t){if(4===this.readyState){var n=JSON.parse(t.target.responseText);e("Result = ".concat(n.result))}};var o=new FormData;o.append("file",n),a.send(o)})}},{key:"clear",value:function(){var e=document.getElementById("draw"),t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),t.fillStyle="white",t.fillRect(0,0,window.innerWidth,window.innerHeight-70)}},{key:"predict",value:function(){var e=this;this.setState({loading:!0}),this.callBackendAPI().then(function(t){e.setState({data:t,answerReady:!0,loading:!1})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(R.a,{open:this.state.answerReady,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},i.a.createElement(T.a,{id:"alert-dialog-title"},"Prediction"),i.a.createElement(z.a,null,i.a.createElement(W.a,{id:"alert-dialog-description"},this.state.data)),i.a.createElement(A.a,null,i.a.createElement(x.a,{onClick:this.handleClose,color:"primary",autoFocus:!0},"Close"))),i.a.createElement(j,{clear:this.clear.bind(this)}),i.a.createElement(m,{canvas:this.state.canvas,ctx:this.state.ctx}),this.state.loading?i.a.createElement(S.a,null):"",i.a.createElement(O,{predict:this.predict.bind(this)}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e,t,n){},82:function(e,t,n){e.exports=n(197)},87:function(e,t,n){}},[[82,1,2]]]);
//# sourceMappingURL=main.fccd22de.chunk.js.map