webpackJsonp([0],{150:function(e,n){function t(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=150},185:function(e,n){function t(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=185},252:function(e,n,t){"use strict";function a(e){return r._25(0,[(e()(),r._5(0,null,null,2,"ion-nav",[],null,null,null,z.b,z.a)),r._21(6144,null,T.a,null,[U.a]),r._3(4374528,null,0,U.a,[[2,H.a],[2,W.a],N.a,G.a,F.a,r.k,r.x,r.D,r.j,q.l,V.a,[2,X.a],B.a,r.l],{root:[0,"root"]},null),(e()(),r._24(null,["\n"]))],function(e,n){e(n,2,0,n.component.rootPage)},null)}function o(e){return r._25(0,[r._22(402653184,1,{content:0}),(e()(),r._5(0,[[1,0]],null,5,"ion-content",[["class","no-scroll"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],[["window","resize"]],function(e,n,t){var a=!0;return"window:resize"===n&&(a=!1!==r._19(e,2).resize()&&a),a},Y.b,Y.a)),r._3(4374528,[["mainContent",4]],0,J.a,[G.a,F.a,B.a,r.k,r.D,N.a,Q.a,r.x,[2,H.a],[2,W.a]],null,null),(e()(),r._24(1,["\n  "])),(e()(),r._24(1,["\n  "])),(e()(),r._24(1,["\n\n  "])),(e()(),r._24(1,["\n"])),(e()(),r._24(null,["\n"])),(e()(),r._24(null,["\n\n"]))],null,function(e,n){e(n,1,0,r._19(n,2).statusbarPadding,r._19(n,2)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var i=t(32),r=t(0),c=t(6),l=t(97),d=t(214),s=t(274),u=t(360),_=t.n(u),p=function(){function e(e,n,t,a){this.navCtrl=n,this.ngRenderer=t,this.ngZone=a,this.stats=new _.a,this.width=640,this.height=480,console.log("WxH: "+this.width+"x"+this.height)}return e.prototype.ngOnInit=function(){console.log("ngOnInit")},e.prototype.ngAfterViewInit=function(){console.log("Content",this.content),this.createARParameters(),this.appendStatisticsScreen(this.content)},e.prototype.getDeviceId=function(){return navigator.mediaDevices.enumerateDevices().then(function(e){console.log("cam info",e);var n="unkwn";return e.forEach(function(e){if(e.label){var t=e.label.match(/back|rear/);null===t&&void 0===t||(n=e.deviceId)}}),console.log(n),null!==n&&void 0!==n&&"unkwn"!==n||(console.log("Inside if in getdeviceid"),e.forEach(function(e){if(e.kind){var t=e.kind.match(/video|videoinput/);null===t&&void 0===t||(n=e.deviceId)}})),n})},e.prototype.trackMarker=function(e,n,t,a){var o=n.createThreeBarcodeMarker(t,1);o.add(a),e.scene.add(o)},e.prototype.createWebGLRenderer=function(e,n,t,a){var o=new d.WebGLRenderer({alpha:!0});o.setClearColor(new d.Color("lightgrey"),0),console.log("orientation",t.orientation);var i=window.innerWidth,r=window.innerHeight;return"portrait"===t.orientation?(o.setSize(r,i),o.domElement.style.transformOrigin="0 0",o.domElement.style.transform="rotate(-90deg) translateX(-100%)"):o.setSize(i,r),o.domElement.style.position="absolute",o.domElement.style.top="0px",o.domElement.style.left="0px",o},e.prototype.startRendering=function(e){var n=this,t=this.width,a=this.height;("MediaDevices"in window||navigator.getUserMedia)&&this.getDeviceId().then(function(o){console.log("dev id",o),n.deviceId=o,s.ARController.getUserMediaThreeScene({maxARVideoSize:640,cameraConfig:{video:{deviceId:n.deviceId}},cameraParam:"assets/data/camera_para.dat",onSuccess:function(o,i,r){i.setPatternDetectionMode(s.artoolkit.AR_TEMPLATE_MATCHING_MONO_AND_MATRIX);var c=n.createWebGLRenderer(t,a,i,o),l=0;c.domElement.addEventListener("click",function(e){console.log("Inside click"),e.preventDefault(),l+=1},!1);try{n.ngRenderer.appendChild(e.nativeElement,c.domElement)}catch(e){console.log("Error in startRendering",e)}var d=n.createIcosahedron();n.createAvatar(function(e){console.log("Callback returned",e),n.trackMarker(o,i,5,e)}),n.trackMarker(o,i,20,d);var u=function(){n.stats.update(),n.ngZone.runOutsideAngular(function(){o.process(),o.renderOn(c),requestAnimationFrame(u)})};u()}})})},e.prototype.renderVideoStream=function(e){var n=this;this.getDeviceId().then(function(t){navigator.mediaDevices.getUserMedia({video:{deviceId:t}}).then(function(t){var a=n.ngRenderer.createElement("video");a.setAttribute("autoplay",""),a.setAttribute("muted",""),a.setAttribute("playsinline",""),a.style.width=window.innerWidth+"px",a.style.height=window.innerHeight+"px",a.srcObject=t,document.body.addEventListener("click",function(){a.play()}),n.ngRenderer.appendChild(e.nativeElement,a),a.onload=function(t){console.log("Video Elem Loaded",t),n.ngRenderer.appendChild(e.nativeElement,a)}})})},e.prototype.createARParameters=function(){var e=this,n=window.innerWidth,t=window.innerHeight;this.getDeviceId().then(function(a){console.log("dev id",a),e.deviceId=a;var o={video:{deviceId:e.deviceId}},i=s.ARController.getUserMediaThreeScene({width:window.innerWidth,height:window.innerHeight,maxARVideoSize:1080,cameraConfig:o,cameraParam:"assets/data/camera_para.dat",onSuccess:function(a,o,r){e.ngRenderer.appendChild(e.content.nativeElement,i),o.setPatternDetectionMode(s.artoolkit.AR_TEMPLATE_MATCHING_MONO_AND_MATRIX);var c=e.createWebGLRenderer(n,t,o,a);e.ngRenderer.appendChild(e.content.nativeElement,c.domElement);var l=e.createIcosahedron();e.createAvatar(function(n){console.log("Callback returned",n),e.trackMarker(a,o,5,n)}),e.trackMarker(a,o,20,l);var d=function(){e.stats.update(),e.ngZone.runOutsideAngular(function(){a.process(),a.renderOn(c),requestAnimationFrame(d)})};d()}})})},e.prototype.appendStatisticsScreen=function(e){try{this.ngRenderer.appendChild(e.nativeElement,this.stats.dom)}catch(e){console.log("Error in appendStatisticsScreen",e)}},e.prototype.incrementXAngle=function(e){e.rotation.x+=5},e.prototype.createCube=function(){var e=new d.Mesh(new d.BoxGeometry(1,1,1),new d.MeshNormalMaterial);return e.material.shading=d.FlatShading,e.position.z=.5,e},e.prototype.createIcosahedron=function(){var e=new d.Mesh(new d.IcosahedronGeometry(.7,1),new d.MeshNormalMaterial);return e.material.shading=d.FlatShading,e.position.z=.7,e},e.prototype.createAvatar=function(e){console.log("Starting avatar 20");var n=new d.LoadingManager;n.onLoad=function(){console.log("Loading started!");try{var e=window.speechSynthesis,n=new SpeechSynthesisUtterance("Hey Ya Boy, Whats up.");e.speak(n)}catch(e){console.log("error in speaking",e)}},n.onError=function(){console.log("Error in loding res")},n.onProgress=function(e,n,t){console.log("Loading file: "+e+".\nLoaded "+n+" of "+t+" files.")};var t=new d.ObjectLoader(n),a=new d.MeshNormalMaterial;console.log("Object oader",t,"material",a),t.load("assets/avatar/legoboy.json",function(n){console.log("Avatar Loaded",n),n.traverse(function(e){e instanceof d.Mesh&&(console.log("inside child"),e.material=a,e.material.shading=d.FlatShading)}),n.rotation.x=Math.PI/2,n.position.z=.5,n.scale.x=.7,n.scale.y=.7,n.scale.z=.7,console.log("positionobj x:",n.position.x,"y",n.position.y,"z",n.position.z),e(n)})},e}();Object(c.__decorate)([Object(r.M)("mainContent",{read:r.k}),Object(c.__metadata)("design:type","function"==typeof(h=void 0!==r.k&&r.k)&&h||Object)],p.prototype,"content",void 0),p=Object(c.__decorate)([Object(r.i)({selector:"page-home",templateUrl:"home.html"}),Object(c.__metadata)("design:paramtypes",["function"==typeof(f=void 0!==l.e&&l.e)&&f||Object,"function"==typeof(g=void 0!==l.d&&l.d)&&g||Object,"function"==typeof(v=void 0!==r.E&&r.E)&&v||Object,"function"==typeof(m=void 0!==r.x&&r.x)&&m||Object])],p);var h,f,g,v,m,b=function(){return function(e){this.rootPage=p,e.ready().then(function(){window.URL=window.URL||window.webkitURL,window.MediaDevices=window.MediaDevices||navigator.getUserMedia})}}();b=Object(c.__decorate)([Object(r.i)({templateUrl:"app.html"}),Object(c.__metadata)("design:paramtypes",["function"==typeof(w=void 0!==l.e&&l.e)&&w||Object])],b);var w,y=t(250),k=t(251),j=(t(366),function(){function e(e){this.http=e,console.log("Hello ArengineServiceProvider Provider")}return e.prototype.startAREngine=function(){},e}());j=Object(c.__decorate)([Object(r.o)(),Object(c.__metadata)("design:paramtypes",["function"==typeof(M=void 0!==k.a&&k.a)&&M||Object])],j);var M,O=function(){return function(){}}();O=Object(c.__decorate)([Object(r.u)({declarations:[b,p],imports:[i.a,l.c.forRoot(b,{},{links:[]})],bootstrap:[l.a],entryComponents:[b,p],providers:[{provide:r.l,useClass:l.b},y.a,j]})],O);var E=t(52),A=t(367),R=t(368),x=t(369),I=t(370),C=t(371),S=t(372),L=t(373),P=t(374),D=t(375),z=t(376),T=t(42),U=t(59),H=t(4),W=t(24),N=t(10),G=t(1),F=t(3),q=t(8),V=t(36),X=t(17),B=t(11),Z=r._2({encapsulation:2,styles:[],data:{}}),K=r._0("ng-component",b,function(e){return r._25(0,[(e()(),r._5(0,null,null,1,"ng-component",[],null,null,null,a,Z)),r._3(49152,null,0,b,[F.a],null,null)],null,null)},{},{},[]),Y=t(377),J=t(27),Q=t(38),$=r._2({encapsulation:2,styles:[],data:{}}),ee=r._0("page-home",p,function(e){return r._25(0,[(e()(),r._5(0,null,null,1,"page-home",[],null,null,null,o,$)),r._3(4308992,null,0,p,[F.a,W.a,r.E,r.x],null,null)],function(e,n){e(n,1,0)},null)},{},{},[]),ne=t(21),te=t(131),ae=t(22),oe=t(101),ie=t(103),re=t(128),ce=t(19),le=t(39),de=t(109),se=t(212),ue=t(54),_e=t(47),pe=t(111),he=t(74),fe=t(116),ge=t(127),ve=t(123),me=t(211),be=t(129),we=t(34),ye=t(110),ke=t(130),je=r._1(O,[E.b],function(e){return r._16([r._17(512,r.j,r.X,[[8,[A.a,R.a,x.a,I.a,C.a,S.a,L.a,P.a,D.a,K,ee]],[3,r.j],r.v]),r._17(5120,r.t,r._15,[[3,r.t]]),r._17(4608,ne.k,ne.j,[r.t]),r._17(5120,r.b,r._6,[]),r._17(5120,r.r,r._12,[]),r._17(5120,r.s,r._13,[]),r._17(4608,i.c,i.s,[ne.c]),r._17(6144,r.H,null,[i.c]),r._17(4608,i.f,te.a,[]),r._17(5120,i.d,function(e,n,t,a){return[new i.l(e),new i.p(n),new i.o(t,a)]},[ne.c,ne.c,ne.c,i.f]),r._17(4608,i.e,i.e,[i.d,r.x]),r._17(135680,i.n,i.n,[ne.c]),r._17(4608,i.m,i.m,[i.e,i.n]),r._17(6144,r.F,null,[i.m]),r._17(6144,i.q,null,[i.n]),r._17(4608,r.K,r.K,[r.x]),r._17(4608,i.h,i.h,[ne.c]),r._17(4608,i.j,i.j,[ne.c]),r._17(4608,ae.k,ae.k,[]),r._17(4608,ae.c,ae.c,[]),r._17(4608,oe.a,oe.a,[N.a,G.a]),r._17(4608,ie.a,ie.a,[N.a,G.a]),r._17(4608,re.a,re.a,[]),r._17(4608,ce.a,ce.a,[]),r._17(4608,le.a,le.a,[F.a]),r._17(4608,Q.a,Q.a,[G.a,F.a,r.x,B.a]),r._17(4608,de.a,de.a,[N.a,G.a]),r._17(5120,ne.f,se.b,[ne.q,[2,ne.a],G.a]),r._17(4608,ne.e,ne.e,[ne.f]),r._17(5120,ue.b,ue.d,[N.a,ue.a]),r._17(5120,X.a,X.b,[N.a,ue.b,ne.e,_e.b,r.j]),r._17(4608,pe.a,pe.a,[N.a,G.a,X.a]),r._17(4608,he.a,he.a,[N.a,G.a]),r._17(4608,fe.a,fe.a,[N.a,G.a,X.a]),r._17(4608,ge.a,ge.a,[G.a,F.a,B.a,N.a,q.l]),r._17(4608,ve.a,ve.a,[N.a,G.a]),r._17(4608,V.a,V.a,[F.a,G.a]),r._17(4608,y.a,y.a,[]),r._17(4608,j,j,[k.a]),r._17(512,ne.b,ne.b,[]),r._17(512,r.l,me.a,[]),r._17(256,G.b,{},[]),r._17(1024,be.a,be.b,[]),r._17(1024,F.a,F.b,[i.b,be.a,r.x]),r._17(1024,G.a,G.c,[G.b,F.a]),r._17(512,B.a,B.a,[F.a]),r._17(512,we.a,we.a,[]),r._17(512,N.a,N.a,[G.a,F.a,[2,we.a]]),r._17(512,q.l,q.l,[N.a]),r._17(256,ue.a,{links:[]},[]),r._17(512,r.h,r.h,[]),r._17(512,ye.a,ye.a,[r.h]),r._17(1024,_e.b,_e.c,[ye.a,r.q]),r._17(1024,r.c,function(e,n,t,a,o,r,c,l,d,s,u,_,p,h){return[i.r(e,n),ke.a(t),re.b(a,o),ge.b(r,c,l,d,s),_e.d(u,_,p,h)]},[[2,i.i],[2,r.w],G.a,F.a,B.a,G.a,F.a,B.a,N.a,q.l,G.a,ue.a,_e.b,r.x]),r._17(512,r.d,r.d,[[2,r.c]]),r._17(131584,r._4,r._4,[r.x,r.Y,r.q,r.l,r.j,r.d]),r._17(2048,r.f,null,[r._4]),r._17(512,r.e,r.e,[r.f]),r._17(512,i.a,i.a,[[3,i.a]]),r._17(512,ae.j,ae.j,[]),r._17(512,ae.d,ae.d,[]),r._17(512,ae.i,ae.i,[]),r._17(512,se.a,se.a,[]),r._17(512,O,O,[]),r._17(256,E.a,b,[]),r._17(256,ne.a,"/",[])])});Object(r.R)(),Object(i.k)().bootstrapModuleFactory(je)},313:function(e,n){},314:function(e,n){}},[252]);