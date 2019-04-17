(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{201:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(15),i=n.n(r),c=(n(89),n(43)),l=n.n(c),s=n(72),d=n(30),u=n(31),m=n(33),h=n(32),f=n(34),p=(n(45),function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("draw").getContext("2d");function t(){e.canvas.width=window.innerWidth,e.canvas.height=window.innerHeight-70}t(),window.addEventListener("resize",t),document.addEventListener("mousemove",function(t){if(1!==t.buttons)return;e.beginPath(),e.lineWidth=10,e.lineCap="round",e.strokeStyle="#111111",e.moveTo(n.x,n.y),a(t),e.lineTo(n.x,n.y),e.stroke()}),document.addEventListener("mousedown",a),document.addEventListener("mouseenter",a);var n={x:0,y:0};function a(e){n.x=e.clientX,n.y=e.clientY}}},{key:"render",value:function(){return o.a.createElement("canvas",{id:"draw",style:{top:70}})}}]),t}(a.Component)),v=n(16),w=n(77),g=n.n(w),y=n(73),E=n.n(y);var b=Object(v.withStyles)(function(e){return{root:{color:e.palette.common.white}}})(function(e){return o.a.createElement(E.a,Object.assign({elevation:0,position:"static"},e))}),k=n(75),x=n(76),j=n.n(x);var C=Object(v.withStyles)(function(e){return{root:Object(k.a)({height:64},e.breakpoints.up("sm"),{height:70})}})(function(e){return o.a.createElement(j.a,e)}),O=n(17),S=n.n(O);var L=Object(v.withStyles)(function(e){return{title:{fontSize:24},toolbar:{justifyContent:"space-between"},left:{flex:1},leftLinkActive:{color:e.palette.common.white},right:{flex:1,display:"flex",justifyContent:"flex-end"},rightLink:{fontSize:16,color:e.palette.common.white,marginLeft:3*e.spacing.unit,cursor:"pointer"}}})(function(e){var t=e.classes;return o.a.createElement("div",null,o.a.createElement(b,{position:"fixed"},o.a.createElement(C,{className:t.toolbar},o.a.createElement("div",{className:t.left}),o.a.createElement(g.a,{variant:"h6",underline:"none",color:"inherit",className:t.title},"Doodle Predictor"),o.a.createElement("div",{className:t.right},o.a.createElement(S.a,{className:t.rightLink,onClick:e.clear},"Clear Palette")))),o.a.createElement("div",{className:t.placeholder}))});var N=Object(v.withStyles)(function(e){return{title:{fontSize:24},toolbar:{justifyContent:"space-between"},left:{flex:1},leftLinkActive:{color:e.palette.common.white},right:{flex:1,display:"flex",justifyContent:"flex-end"},rightLink:{fontSize:16,color:e.palette.common.white,marginLeft:3*e.spacing.unit,cursor:"pointer",backgroundColor:e.palette.primary.main},footer:{bottom:0,backgroundColor:e.palette.primary.light}}})(function(e){var t=e.classes;return o.a.createElement("div",null,o.a.createElement("div",{position:"fixed",className:t.footer},o.a.createElement(C,{className:t.toolbar},o.a.createElement("div",{className:t.left}),o.a.createElement(S.a,{className:t.rightLink,onClick:e.predict},"Predict Class"),o.a.createElement("div",{className:t.right}))),o.a.createElement("div",{className:t.placeholder}))}),P=n(83),R=n.n(P),B=n(78),z=n.n(B),A=n(82),I=n.n(A),D=n(80),T=n.n(D),W=n(81),J=n.n(W),M=n(79),F=n.n(M),H=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={data:null,refresh:!1,answerReady:!1},n.callBackendAPI=Object(s.a)(l.a.mark(function e(){var t,n,a,o,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("draw"),n=t.toDataURL("image/png"),a=new XMLHttpRequest,o=window.location,a.open("POST","".concat(o.protocol,"//").concat(o.hostname,":").concat(o.port,"/analyze"),!0),a.onerror=function(){alert(a.responseText)},a.onload=function(e){if(4===this.readyState){var t=JSON.parse(e.target.responseText);return"Result = ".concat(t.result)}},(r=new FormData).append("file",n),a.send(r),console.log(n);case 11:case"end":return e.stop()}},e)})),n.handleClose=function(){n.setState({answerReady:!1})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"clear",value:function(){var e=document.getElementById("draw");e.getContext("2d").clearRect(0,0,e.width,e.height)}},{key:"predict",value:function(){var e=this;this.setState({loading:!0}),this.callBackendAPI().then(function(t){e.setState({data:t,answerReady:!0,loading:!1})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(z.a,{open:this.state.answerReady,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},o.a.createElement(F.a,{id:"alert-dialog-title"},"Prediction"),o.a.createElement(T.a,null,o.a.createElement(J.a,{id:"alert-dialog-description"},this.state.data)),o.a.createElement(I.a,null,o.a.createElement(S.a,{onClick:this.handleClose,color:"primary",autoFocus:!0},"Close"))),o.a.createElement(L,{clear:this.clear.bind(this)}),o.a.createElement(p,{canvas:this.state.canvas,ctx:this.state.ctx}),this.state.loading?o.a.createElement(R.a,null):"",o.a.createElement(N,{predict:this.predict.bind(this)}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e,t,n){},84:function(e,t,n){e.exports=n(201)},89:function(e,t,n){}},[[84,1,2]]]);
//# sourceMappingURL=main.74bb1d2b.chunk.js.map