(this["webpackJsonpchristmas-delivery"]=this["webpackJsonpchristmas-delivery"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"a":"Enter your code here","e":"Santa needs to bring his presents to the children. Write code below to help him.","d":"This is an early stage prototype for an open-source React-Redux coding game that is live coded on Twitch.","f":"Run code","b":"Too slow :(","g":"You have won!","h":"Watch the development of this game on Twitch","c":"See the source code of this game"}')},51:function(e,t,A){},69:function(e,t,A){"use strict";A.r(t);var n,i=A(4),r=A(1),c=A.n(r),a=A(27),o=A.n(a),s=(A(51),function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,73)).then((function(t){var A=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;A(e),n(e),i(e),r(e),c(e)}))}),u=A(8),g=A(15),d=A(45),f=A(2),l=A.n(f),v=A(7),w=A(6);!function(e){e.Running="Running",e.Won="Won",e.Lost="Lost",e.Waiting="Waiting"}(n||(n={}));var C={levelCompletionState:n.Waiting},h=Object(g.b)({name:"currentLevel",initialState:C,reducers:{loseLevel:function(e){return Object(w.a)(Object(w.a)({},e),{},{levelCompletionState:n.Lost})},winLevel:function(e){return Object(w.a)(Object(w.a)({},e),{},{levelCompletionState:n.Won})}}}),b=h.actions,j=h.reducer,Q=Object(g.b)({name:"world",initialState:{fps:10,size:{width:600,height:400},isRunning:!1,ticks:0,ticksPerFrame:10},reducers:{runGame:function(e){return Object(w.a)(Object(w.a)({},e),{},{isRunning:!0,ticks:0})},updateWorldState:function(e,t){return Object(w.a)(Object(w.a)({},e),t.payload)},waitTicks:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{ticks:e.ticks+t.payload})}},extraReducers:function(e){e.addCase(b.winLevel,(function(e){return Object(w.a)(Object(w.a)({},e),{},{isRunning:!1})})),e.addCase(b.loseLevel,(function(e){return Object(w.a)(Object(w.a)({},e),{},{isRunning:!1})}))}}),O=Q.reducer,B=Q.actions,P=A(20),I=A(19),x=function(){function e(t){var A=t.x,n=t.y;Object(P.a)(this,e),this.x=void 0,this.y=void 0,this.y=n,this.x=A}return Object(I.a)(e,[{key:"length",get:function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))}}]),Object(I.a)(e,[{key:"add",value:function(t){return new e({x:this.x+t.x,y:this.y+t.y})}},{key:"scale",value:function(t){return new e({x:t*this.x,y:t*this.y})}},{key:"normalize",value:function(){return this.scale(1/this.length)}},{key:"subtract",value:function(t){return new e({x:this.x-t.x,y:this.y-t.y})}},{key:"toJSON",value:function(){return{x:this.x,y:this.y}}},{key:"equals",value:function(e){return this.x===e.x&&this.y===e.y}}]),e}(),m=function(e){return e.sleighs},E=function(e){return e.houses},D=function(e){return e.world.ticks},y=l.a.mark(L),X=l.a.mark(S),p=l.a.mark(J),k=l.a.mark(R),H=l.a.mark(U);function L(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(Object(v.c)(S),"t0",1);case 1:return e.delegateYield(Object(v.g)(B.waitTicks.toString(),R),"t1",2);case 2:return e.delegateYield(Object(v.g)(B.waitTicks.toString(),U),"t2",3);case 3:case"end":return e.stop()}}),y)}function S(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.delegateYield(Object(v.f)(B.runGame.toString()),"t0",2);case 2:return t.delegateYield(Object(v.c)(J),"t1",3);case 3:return e=t.t1,t.delegateYield(Object(v.f)(b.winLevel.toString()),"t2",5);case 5:return t.delegateYield(Object(v.a)(e),"t3",6);case 6:t.next=0;break;case 8:case"end":return t.stop()}}),X)}function J(){var e,t;return l.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.delegateYield(Object(v.e)((function(e){return e.world.ticksPerFrame})),"t0",2);case 2:return e=A.t0,A.delegateYield(Object(v.d)(B.waitTicks(e)),"t1",4);case 4:return A.delegateYield(Object(v.e)((function(e){return e.world.fps})),"t2",5);case 5:return t=A.t2,A.delegateYield(Object(v.b)(1e3/t),"t3",7);case 7:A.next=0;break;case 9:case"end":return A.stop()}}),p)}function R(){var e,t;return l.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.delegateYield(Object(v.e)(m),"t0",1);case 1:return e=A.t0,A.delegateYield(Object(v.e)(E),"t1",3);case 3:if(1!==(t=A.t1).length||1!==e.length||!new x(t[0].position).equals(e[0].position)){A.next=6;break}return A.delegateYield(Object(v.d)(b.winLevel()),"t2",6);case 6:case"end":return A.stop()}}),k)}function U(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.delegateYield(Object(v.e)(D),"t0",1);case 1:if(e=t.t0,100,!(e>100)){t.next=5;break}return t.delegateYield(Object(v.d)(b.loseLevel()),"t1",5);case 5:case"end":return t.stop()}}),H)}var Y,T=A(10),z=Object(g.b)({name:"houses",initialState:[{id:"1",position:{x:100,y:100}}],reducers:{}}),F=z.reducer;z.actions;!function(e){e.Left="Left",e.Right="Right"}(Y||(Y={}));var M=[{id:"1",heading:Y.Right,maxSpeed:5,position:{x:400,y:300},command:null}],N=Object(g.b)({name:"sleighs",initialState:M,reducers:{moveSleigh:function(e,t){return e.map((function(e){return e.id===t.payload.sleighId?Object(w.a)(Object(w.a)({},e),{},{command:{name:"move",payload:t.payload.targetPosition},heading:t.payload.targetPosition.x<e.position.x?Y.Left:Y.Right}):e}))}},extraReducers:function(e){e.addCase(B.waitTicks,(function(e,t){return e.map((function(e){if(null===e.command)return e;var A=new x(e.position),n=new x(e.command.payload),i=n.subtract(A),r=i.normalize(),c=e.maxSpeed*t.payload,a=i.length<=c?n:A.add(r.scale(c));return Object(w.a)(Object(w.a)({},e),{},{position:a.toJSON()})}))}))}}),V=N.actions,K=N.reducer,q=Object(T.c)({currentLevel:j,houses:F,sleighs:K,world:O});var G=A(44),Z=A(12),W=function(e){return e.world.size};function _(e){var t,A=e.mirror,n=void 0!==A&&A,r=e.position,c=r.x,a=r.y,o=e.scale,s=void 0===o?1:o,g=e.state,d=e.spriteSheet,f=(t=d.frames,Object(u.d)((function(e){return e.world.ticks/e.world.ticksPerFrame%t}))%d.frames),l=d.size,v=l.width,w=l.height,C=-1*f*v,h=-1*d.states.findIndex((function(e){return e===g}))*w;return Object(i.jsx)("div",{style:{position:"absolute",width:v,height:w,left:c-v/2,top:a-w/2,backgroundImage:"url(".concat(d.source,")"),backgroundPositionX:C,backgroundPositionY:h,transform:"scaleX(".concat(n?-s:s," ) scaleY(").concat(s,")"),transitionProperty:"left, top",transitionDuration:"0.5s"}})}var $={source:"data:image/png;base64,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",size:{width:64,height:96},frames:11,states:["idle"]};function ee(e){var t=e.position,A=e.state;return Object(i.jsx)(_,{position:t,spriteSheet:$,state:A})}function te(){var e=Object(u.d)(E);return Object(i.jsx)(i.Fragment,{children:e.map((function(e){return Object(i.jsx)(ee,{position:e.position,state:"idle"},e.id)}))})}var Ae={source:"data:image/png;base64,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",size:{width:256,height:128},frames:1,states:["idle"]};function ne(e){var t=e.sleigh,A=t.heading,n=t.position,r=e.state;return Object(i.jsx)(_,{position:n,spriteSheet:Ae,mirror:A===Y.Left,scale:.5,state:r})}var ie=A(70);function re(){var e=Object(u.d)(m,ie.a);return Object(i.jsx)(i.Fragment,{children:e.map((function(e){return Object(i.jsx)(ne,{sleigh:e,state:"idle"},e.id)}))})}var ce,ae=A(23),oe=A(13),se=A(14),ue=function(e){return e.currentLevel.levelCompletionState};function ge(){var e=Object(Z.a)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  height: 100%;\n  width: 100%;\n  animation: "," 0.5s linear 0s;\n"]);return ge=function(){return e},e}function de(){var e=Object(Z.a)(["\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n\n  to {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n"]);return de=function(){return e},e}var fe=Object(oe.b)(de()),le=oe.a.div(ge(),fe),ve=(ce={},Object(ae.a)(ce,n.Lost,se.b),Object(ae.a)(ce,n.Won,se.g),ce),we=function(){var e=Object(u.d)(ue),t=ve[e];return void 0===t?null:Object(i.jsx)(le,{children:t})},Ce=A(71);function he(){var e=Object(Z.a)(["\n  background-color: #ddd;\n  position: relative;\n  height: ","px;\n  width: ","px;\n  overflow: hidden;\n  margin: 1rem auto;\n"]);return he=function(){return e},e}var be=oe.a.div(he(),Object(Ce.a)("height"),Object(Ce.a)("width"));function je(){var e=Object(u.d)(W);return Object(i.jsxs)(be,{width:e.width,height:e.height,children:[Object(i.jsx)(te,{}),Object(i.jsx)(re,{}),Object(i.jsx)(we,{})]})}var Qe=function(){function e(t,A){Object(P.a)(this,e),this.dispatch=A,this.command=void 0,this.heading=void 0,this.id=void 0,this.maxSpeed=void 0,this.position=void 0,this.command=t.command,this.heading=t.heading,this.id=t.id,this.maxSpeed=t.maxSpeed,this.position=t.position}return Object(I.a)(e,[{key:"moveTo",value:function(e){this.dispatch(V.moveSleigh({sleighId:this.id,targetPosition:e}))}}]),e}(),Oe=function(){function e(t){Object(P.a)(this,e),this.store=t}return Object(I.a)(e,[{key:"houses",get:function(){return this.store.getState().houses}},{key:"sleighs",get:function(){var e=this;return this.store.getState().sleighs.map((function(t){return new Qe(t,e.store.dispatch.bind(e.store))}))}}]),e}();A(61);function Be(){var e=Object(Z.a)(['\n  &:before {\n    font-family: "Font Awesome 5 Brands";\n    content: "','";\n    margin-right: 0.3rem;\n    display: inline-block;\n    text-decoration: none;\n  }\n']);return Be=function(){return e},e}var Pe=oe.a.a(Be(),(function(e){return e.iconUnicode}));function Ie(){var e=Object(Z.a)(["\n  & {\n    display: inline-grid;\n    column-gap: 1rem;\n    grid-auto-flow: column;\n  }\n"]);return Ie=function(){return e},e}var xe=oe.a.div(Ie());function me(){return Object(i.jsxs)("aside",{children:[Object(i.jsx)("div",{children:se.d}),Object(i.jsxs)(xe,{children:[Object(i.jsx)(Pe,{href:"https://github.com/startup-cto/christmas-delivery",iconUnicode:"\\f09b",children:se.c}),Object(i.jsx)(Pe,{href:"https://www.twitch.tv/the_startup_cto",iconUnicode:"\\f1e8",children:se.h})]})]})}var Ee=A(43),De=A.n(Ee),ye=(A(67),A(68),function(e){var t=e.disabled,A=void 0!==t&&t,n=e.onCodeChange,r=e.onRun,c=e.code;return Object(i.jsxs)("form",{children:[Object(i.jsxs)("label",{children:[se.a,Object(i.jsx)(De.a,{readOnly:A,value:c,mode:"javascript",theme:"monokai",onChange:n,height:"5rem",width:"100%",setOptions:{useWorker:!1}})]}),Object(i.jsx)("button",{disabled:A,onClick:function(e){e.preventDefault(),r()},children:se.f})]})});function Xe(e){return e.world.isRunning}var pe=A(72);function ke(){var e=Object(Z.a)(["\n  background-color: #4c0000;\n  border: 3px outset #680000;\n  box-shadow: 2rem;\n  padding: 1rem;\n"]);return ke=function(){return e},e}function He(){var e=Object(Z.a)(["\n  display: grid;\n  grid-template-columns: minmax(1rem, auto) minmax(0px, 768px) minmax(\n      1rem,\n      auto\n    );\n  background: ",",\n    linear-gradient(180deg, #242b4bee, #0b1026ee),\n    linear-gradient(120deg, #161b36aa, #061d37aa),\n    linear-gradient(240deg, #161b36aa, #061d37aa);\n\n  & > main {\n    grid-column-start: 2;\n  }\n"]);return He=function(){return e},e}var Le=oe.a.div(He(),Object(pe.a)(1,70).map((function(){return{intensity:.5+.5*Math.random(),xPercent:100*Math.random(),yPercent:100*Math.random()}})).map((function(e){var t=e.xPercent,A=e.yPercent,n=e.intensity;return"radial-gradient(\n        circle at ".concat(t,"% ").concat(A,"%,\n        #fff,\n        #fff3 ").concat(2*n,"px,\n        transparent ").concat(10*n,"px\n      )")})).join(",")),Se=oe.a.div(ke());function Je(){var e=Object(u.c)(),t=Object(r.useContext)(u.b).store,A=Object(u.d)(Xe),n=Object(r.useState)("const sleigh = game.sleighs[0];\nconst house = game.houses[0];\nconst positionOfHouse = house.position;\nconst someRandomPosition = { x: 300, y: 300 };\nsleigh.moveTo(someRandomPosition);"),c=Object(G.a)(n,2),a=c[0],o=c[1];return Object(i.jsx)(Le,{children:Object(i.jsxs)("main",{children:[Object(i.jsx)(je,{}),Object(i.jsxs)(Se,{children:[Object(i.jsx)("div",{children:se.e}),Object(i.jsx)(ye,{code:a,onCodeChange:o,onRun:function(){var A=new Oe(t);!function(e,t){new Function("game",e)(t)}(a,A),e(B.runGame())},disabled:A}),Object(i.jsx)(me,{})]})]})})}o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(u.a,{store:function(){var e=Object(d.a)(),t=Object(g.a)({reducer:q,middleware:[e]});return e.run(L),t}(),children:Object(i.jsx)(Je,{})})}),document.getElementById("root")),s()}},[[69,1,2]]]);
//# sourceMappingURL=main.646bc725.chunk.js.map