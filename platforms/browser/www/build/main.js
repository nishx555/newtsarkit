webpackJsonp([0],{153:function(n,e){function a(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}a.keys=function(){return[]},a.resolve=a,n.exports=a,a.id=153},188:function(n,e){function a(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}a.keys=function(){return[]},a.resolve=a,n.exports=a,a.id=188},256:function(n,e,a){"use strict";function t(n){return r._25(0,[(n()(),r._5(0,null,null,2,"ion-nav",[],null,null,null,T.b,T.a)),r._21(6144,null,W.a,null,[F.a]),r._3(4374528,null,0,F.a,[[2,H.a],[2,G.a],N.a,q.a,V.a,r.k,r.x,r.D,r.j,B.l,X.a,[2,J.a],K.a,r.l],{root:[0,"root"]},null),(n()(),r._24(null,["\n"]))],function(n,e){n(e,2,0,e.component.rootPage)},null)}function o(n){return r._25(0,[r._22(402653184,1,{videoElement:0}),(n()(),r._5(0,null,null,4,"ion-content",[["class","no-scroll"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],[["window","resize"]],function(n,e,a){var t=!0;return"window:resize"===e&&(t=!1!==r._19(n,2).resize()&&t),t},Z.b,Z.a)),r._3(4374528,null,0,$.a,[q.a,V.a,K.a,r.k,r.D,N.a,nn.a,r.x,[2,H.a],[2,G.a]],null,null),(n()(),r._24(1,["\n  "])),(n()(),r._5(0,[[1,0],["videoElement",1]],1,0,"video",[["autoplay",""],["preload","auto"],["webkitPlaysinline",""]],[[8,"width",0],[8,"height",0]],null,null,null,null)),(n()(),r._24(1,["\n"])),(n()(),r._24(null,["\n"])),(n()(),r._24(null,["\n\n"]))],null,function(n,e){var a=e.component;n(e,1,0,r._19(e,2).statusbarPadding,r._19(e,2)._hasRefresher),n(e,4,0,a.width,a.height)})}function l(n){return r._25(0,[(n()(),r._24(null,["\n"])),(n()(),r._5(0,null,null,10,"ion-header",[],null,null,null,null,null)),r._3(16384,null,0,tn.a,[q.a,r.k,r.D,[2,H.a]],null,null),(n()(),r._24(null,["\n\n  "])),(n()(),r._5(0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,on.b,on.a)),r._3(49152,null,0,ln.a,[N.a,[2,H.a],[2,G.a],q.a,r.k,r.D],null,null),(n()(),r._24(3,["\n    "])),(n()(),r._5(0,null,3,2,"ion-title",[],null,null,null,rn.b,rn.a)),r._3(49152,null,0,un.a,[q.a,r.k,r.D,[2,cn.a],[2,ln.a]],null,null),(n()(),r._24(0,["ar-js"])),(n()(),r._24(3,["\n  "])),(n()(),r._24(null,["\n\n"])),(n()(),r._24(null,["\n\n\n"])),(n()(),r._5(0,null,null,2,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],[["window","resize"]],function(n,e,a){var t=!0;return"window:resize"===e&&(t=!1!==r._19(n,14).resize()&&t),t},Z.b,Z.a)),r._3(4374528,null,0,$.a,[q.a,V.a,K.a,r.k,r.D,N.a,nn.a,r.x,[2,H.a],[2,G.a]],null,null),(n()(),r._24(1,["\n\n"])),(n()(),r._24(null,["\n"]))],null,function(n,e){n(e,4,0,r._19(e,5)._hidden,r._19(e,5)._sbPadding),n(e,13,0,r._19(e,14).statusbarPadding,r._19(e,14)._hasRefresher)})}Object.defineProperty(e,"__esModule",{value:!0});var i=a(33),r=a(0),u=a(5),c=a(71),d=a(215),s=a(216),_=a(217),f=a(283),h=function(){function n(n,e){this.navCtrl=e,this.width=640,this.height=480,console.log("WxH: "+this.width+"x"+this.height)}return n.prototype.getDeviceId=function(){return navigator.mediaDevices.enumerateDevices().then(function(n){console.log("cam info",n);var e="unkwn";return n.forEach(function(n){if(n.label){var a=n.label.match(/back|rear/);null===a&&void 0===a||(e=n.deviceId)}}),console.log(e),e})},n.prototype.ngAfterViewInit=function(){var n=this,e=this.width,a=this.height;("MediaDevices"in window||navigator.getUserMedia)&&(console.log("dev id",this.deviceId),this.getDeviceId().then(function(t){n.deviceId=t,f.ARController.getUserMediaThreeScene({maxARVideoSize:640,cameraConfig:{video:{deviceId:n.deviceId}},cameraParam:"assets/data/camera_para.dat",onSuccess:function(t,o,l){o.setPatternDetectionMode(f.artoolkit.AR_TEMPLATE_MATCHING_MONO_AND_MATRIX);var i=n.createWebGLRenderer(e,a,o,t);document.body.appendChild(i.domElement);var r=0;i.domElement.addEventListener("click",function(n){console.log("Inside click"),n.preventDefault(),r+=1},!1);var u=n.createIcosahedron();n.createAvatar(function(e){console.log("Callback returned",e),n.trackMarker(t,o,5,e)}),n.trackMarker(t,o,20,u),console.log("WTF Testing");var c=function(){t.process(),t.renderOn(i),requestAnimationFrame(c)};c()}})}))},n.prototype.trackMarker=function(n,e,a,t){var o=e.createThreeBarcodeMarker(a,1);o.add(t),n.scene.add(o)},n.prototype.createCube=function(){var n=new _.Mesh(new _.BoxGeometry(1,1,1),new _.MeshNormalMaterial);return n.material.shading=_.FlatShading,n.position.z=.5,n},n.prototype.createIcosahedron=function(){var n=new _.Mesh(new _.IcosahedronGeometry(.7,1),new _.MeshNormalMaterial);return n.material.shading=_.FlatShading,n.position.z=.7,n},n.prototype.createAvatar=function(n){console.log("Starting avatar 9");var e=new _.LoadingManager;e.onLoad=function(){console.log("Loading started!")},e.onError=function(){console.log("Error in loding res")},e.onProgress=function(n,e,a){console.log("Loading file: "+n+".\nLoaded "+e+" of "+a+" files.")};var a=new _.ObjectLoader(e),t=new _.MeshBasicMaterial({color:"yellow",side:_.DoubleSide});console.log("Object oader",a,"material",t),a.load("assets/avatar/model.json",function(e){console.log("Avatar Loaded",e),e.traverse(function(n){n instanceof _.Mesh&&(console.log("inside child"),n.material=t,n.material.shading=_.FlatShading)}),e.position.z=-3,e.position.x=1,e.position.y=1,console.log("positionobj x:",e.position.x,"y",e.position.y,"z",e.position.z),n(e)})},n.prototype.createWebGLRenderer=function(n,e,a,t){var o=new _.WebGLRenderer({antialias:!0,alpha:!0});o.setClearColor(new _.Color("lightgrey"),0),console.log("orient",a.orientation);var l=Math.min(window.innerWidth/t.video.videoWidth,window.innerHeight/t.video.videoHeight),i=l*t.video.videoWidth,r=l*t.video.videoHeight;return"portrait"===a.orientation?(o.setSize(r,i),o.domElement.style.transformOrigin="0 0",o.domElement.style.transform="rotate(-90deg) translateX(-100%)"):o.setSize(i,r),o.domElement.className="center",o},n}();Object(u.__decorate)([Object(r.M)("videoElement"),Object(u.__metadata)("design:type","function"==typeof(p=void 0!==r.k&&r.k)&&p||Object)],h.prototype,"videoElement",void 0),h=Object(u.__decorate)([Object(r.i)({selector:"page-home",templateUrl:"home.html"}),Object(u.__metadata)("design:paramtypes",["function"==typeof(v=void 0!==c.f&&c.f)&&v||Object,"function"==typeof(g=void 0!==c.d&&c.d)&&g||Object])],h);var p,v,g,b=function(){return function(n){this.rootPage=h,n.ready().then(function(){window.URL=window.URL||window.webkitURL,window.MediaDevices=window.MediaDevices||navigator.getUserMedia})}}();b=Object(u.__decorate)([Object(r.i)({templateUrl:"app.html"}),Object(u.__metadata)("design:paramtypes",["function"==typeof(m=void 0!==c.f&&c.f)&&m||Object])],b);var m,w=function(){function n(n,e){this.navCtrl=n,this.navParams=e}return n.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad ArJsPage")},n}();w=Object(u.__decorate)([Object(r.i)({selector:"page-ar-js",templateUrl:"ar-js.html"}),Object(u.__metadata)("design:paramtypes",["function"==typeof(j=void 0!==c.d&&c.d)&&j||Object,"function"==typeof(y=void 0!==c.e&&c.e)&&y||Object])],w);var j,y,O=a(253),k=a(254),M=(a(369),function(){function n(n){this.http=n,console.log("Hello ArengineServiceProvider Provider")}return n.prototype.startAREngine=function(){},n}());M=Object(u.__decorate)([Object(r.o)(),Object(u.__metadata)("design:paramtypes",["function"==typeof(D=void 0!==k.a&&k.a)&&D||Object])],M);var D,x=function(){return function(){}}();x=Object(u.__decorate)([Object(r.u)({declarations:[b,h,w],imports:[i.a,c.c.forRoot(b,{},{links:[]})],bootstrap:[c.a],entryComponents:[b,h,w],providers:[s.a,d.a,{provide:r.l,useClass:c.b},O.a,M]})],x);var E=a(56),L=a(370),P=a(371),A=a(372),C=a(373),R=a(374),z=a(375),I=a(376),S=a(377),U=a(378),T=a(379),W=a(43),F=a(62),H=a(4),G=a(20),N=a(9),q=a(1),V=a(3),B=a(8),X=a(37),J=a(18),K=a(11),Y=r._2({encapsulation:2,styles:[],data:{}}),Q=r._0("ng-component",b,function(n){return r._25(0,[(n()(),r._5(0,null,null,1,"ng-component",[],null,null,null,t,Y)),r._3(49152,null,0,b,[V.a],null,null)],null,null)},{},{},[]),Z=a(255),$=a(26),nn=a(31),en=r._2({encapsulation:2,styles:[],data:{}}),an=r._0("page-home",h,function(n){return r._25(0,[(n()(),r._5(0,null,null,1,"page-home",[],null,null,null,o,en)),r._3(4243456,null,0,h,[V.a,G.a],null,null)],null,null)},{},{},[]),tn=a(125),on=a(380),ln=a(40),rn=a(381),un=a(88),cn=a(50),dn=a(13),sn=r._2({encapsulation:2,styles:[],data:{}}),_n=r._0("page-ar-js",w,function(n){return r._25(0,[(n()(),r._5(0,null,null,1,"page-ar-js",[],null,null,null,l,sn)),r._3(49152,null,0,w,[G.a,dn.a],null,null)],null,null)},{},{},[]),fn=a(17),hn=a(133),pn=a(23),vn=a(102),gn=a(104),bn=a(130),mn=a(21),wn=a(39),jn=a(110),yn=a(213),On=a(58),kn=a(49),Mn=a(112),Dn=a(76),xn=a(117),En=a(129),Ln=a(124),Pn=a(212),An=a(131),Cn=a(35),Rn=a(111),zn=a(132),In=r._1(x,[E.b],function(n){return r._16([r._17(512,r.j,r.X,[[8,[L.a,P.a,A.a,C.a,R.a,z.a,I.a,S.a,U.a,Q,an,_n]],[3,r.j],r.v]),r._17(5120,r.t,r._15,[[3,r.t]]),r._17(4608,fn.k,fn.j,[r.t]),r._17(5120,r.b,r._6,[]),r._17(5120,r.r,r._12,[]),r._17(5120,r.s,r._13,[]),r._17(4608,i.c,i.s,[fn.c]),r._17(6144,r.H,null,[i.c]),r._17(4608,i.f,hn.a,[]),r._17(5120,i.d,function(n,e,a,t){return[new i.l(n),new i.p(e),new i.o(a,t)]},[fn.c,fn.c,fn.c,i.f]),r._17(4608,i.e,i.e,[i.d,r.x]),r._17(135680,i.n,i.n,[fn.c]),r._17(4608,i.m,i.m,[i.e,i.n]),r._17(6144,r.F,null,[i.m]),r._17(6144,i.q,null,[i.n]),r._17(4608,r.K,r.K,[r.x]),r._17(4608,i.h,i.h,[fn.c]),r._17(4608,i.j,i.j,[fn.c]),r._17(4608,pn.k,pn.k,[]),r._17(4608,pn.c,pn.c,[]),r._17(4608,vn.a,vn.a,[N.a,q.a]),r._17(4608,gn.a,gn.a,[N.a,q.a]),r._17(4608,bn.a,bn.a,[]),r._17(4608,mn.a,mn.a,[]),r._17(4608,wn.a,wn.a,[V.a]),r._17(4608,nn.a,nn.a,[q.a,V.a,r.x,K.a]),r._17(4608,jn.a,jn.a,[N.a,q.a]),r._17(5120,fn.f,yn.b,[fn.q,[2,fn.a],q.a]),r._17(4608,fn.e,fn.e,[fn.f]),r._17(5120,On.b,On.d,[N.a,On.a]),r._17(5120,J.a,J.b,[N.a,On.b,fn.e,kn.b,r.j]),r._17(4608,Mn.a,Mn.a,[N.a,q.a,J.a]),r._17(4608,Dn.a,Dn.a,[N.a,q.a]),r._17(4608,xn.a,xn.a,[N.a,q.a,J.a]),r._17(4608,En.a,En.a,[q.a,V.a,K.a,N.a,B.l]),r._17(4608,Ln.a,Ln.a,[N.a,q.a]),r._17(4608,X.a,X.a,[V.a,q.a]),r._17(4608,s.a,s.a,[]),r._17(4608,d.a,d.a,[]),r._17(4608,O.a,O.a,[]),r._17(4608,M,M,[k.a]),r._17(512,fn.b,fn.b,[]),r._17(512,r.l,Pn.a,[]),r._17(256,q.b,{},[]),r._17(1024,An.a,An.b,[]),r._17(1024,V.a,V.b,[i.b,An.a,r.x]),r._17(1024,q.a,q.c,[q.b,V.a]),r._17(512,K.a,K.a,[V.a]),r._17(512,Cn.a,Cn.a,[]),r._17(512,N.a,N.a,[q.a,V.a,[2,Cn.a]]),r._17(512,B.l,B.l,[N.a]),r._17(256,On.a,{links:[]},[]),r._17(512,r.h,r.h,[]),r._17(512,Rn.a,Rn.a,[r.h]),r._17(1024,kn.b,kn.c,[Rn.a,r.q]),r._17(1024,r.c,function(n,e,a,t,o,l,r,u,c,d,s,_,f,h){return[i.r(n,e),zn.a(a),bn.b(t,o),En.b(l,r,u,c,d),kn.d(s,_,f,h)]},[[2,i.i],[2,r.w],q.a,V.a,K.a,q.a,V.a,K.a,N.a,B.l,q.a,On.a,kn.b,r.x]),r._17(512,r.d,r.d,[[2,r.c]]),r._17(131584,r._4,r._4,[r.x,r.Y,r.q,r.l,r.j,r.d]),r._17(2048,r.f,null,[r._4]),r._17(512,r.e,r.e,[r.f]),r._17(512,i.a,i.a,[[3,i.a]]),r._17(512,pn.j,pn.j,[]),r._17(512,pn.d,pn.d,[]),r._17(512,pn.i,pn.i,[]),r._17(512,yn.a,yn.a,[]),r._17(512,x,x,[]),r._17(256,E.a,b,[]),r._17(256,fn.a,"/",[])])});Object(r.R)(),Object(i.k)().bootstrapModuleFactory(In)},322:function(n,e){},323:function(n,e){}},[256]);