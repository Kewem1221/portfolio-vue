(function(e){function t(t){for(var c,r,o=t[0],l=t[1],s=t[2],d=0,b=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&b.push(a[r][0]),a[r]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);u&&u(t);while(b.length)b.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(c=!1)}c&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},a={app:0},i=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/portfolio-vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0772":function(e,t,n){},"0a24":function(e,t,n){},"1a61":function(e,t,n){"use strict";n("ddf6")},"259a":function(e,t,n){"use strict";n("444c")},"265e":function(e,t,n){},"2d0e":function(e,t,n){e.exports=n.p+"img/project3.2f450593.jpg"},3608:function(e,t,n){"use strict";n("3fac")},"3b5d":function(e,t,n){"use strict";n("0a24")},"3fac":function(e,t,n){},"444c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"throttle",(function(){return ce}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function a(e,t,n,a,i,r){var o=Object(c["o"])("Header"),l=Object(c["o"])("Home"),s=Object(c["o"])("Skills"),u=Object(c["o"])("Projects"),d=Object(c["o"])("Awards"),b=Object(c["o"])("Footer");return Object(c["k"])(),Object(c["d"])(c["a"],null,[Object(c["h"])(o,{onChangeTheme:r.changeTheme,darkTheme:i.darkTheme},null,8,["onChangeTheme","darkTheme"]),Object(c["e"])("main",null,[Object(c["h"])(l),Object(c["h"])(s),Object(c["h"])(u),Object(c["h"])(d)]),Object(c["h"])(b)],64)}var i=n("dd94"),r=n.n(i);Object(c["m"])("data-v-f7c97fac");var o={class:"nav-header"},l=Object(c["e"])("i",{class:"uil uil-bars"},null,-1),s=[l],u=Object(c["e"])("div",{class:"nav-name"},[Object(c["e"])("img",{src:r.a,alt:""}),Object(c["e"])("span",null,"Junhao Liang")],-1),d={key:0,class:"uil uil-sun"},b={key:1,class:"uil uil-moon"};function j(e,t,n,a,i,r){return Object(c["k"])(),Object(c["d"])("header",null,[Object(c["e"])("nav",{class:Object(c["i"])(i.navClassList)},[Object(c["e"])("div",o,[Object(c["e"])("button",{class:"nav-btn",onClick:t[0]||(t[0]=function(){return r.showMenu&&r.showMenu.apply(r,arguments)})},s),u,Object(c["e"])("button",{class:"theme-btn",onClick:t[1]||(t[1]=function(t){return e.$emit("change-theme")})},[n.darkTheme?(Object(c["k"])(),Object(c["d"])("i",d)):(Object(c["k"])(),Object(c["d"])("i",b))])]),Object(c["e"])("ul",{class:Object(c["i"])(["nav-links",{"show-nav-links":i.showNavLinks}])},[Object(c["e"])("li",null,[Object(c["e"])("a",{href:"#home",onClick:t[2]||(t[2]=function(e){return r.handleLinkClick(e)})},"Home")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:"#skills",onClick:t[3]||(t[3]=function(e){return r.handleLinkClick(e)})},"技能")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:"#projects",onClick:t[4]||(t[4]=function(e){return r.handleLinkClick(e)})},"项目")]),Object(c["e"])("li",null,[Object(c["e"])("a",{href:"#awards",onClick:t[5]||(t[5]=function(e){return r.handleLinkClick(e)})},"荣誉&证书")])],2)],2)])}Object(c["l"])();n("4de4"),n("fb6a");var f={name:"Header",data:function(){return{navClassList:["nav-center"],showNavLinks:!1}},props:{darkTheme:Boolean},methods:{showMenu:function(){this.showNavLinks=!this.showNavLinks},handleWinScroll:function(){window.scrollY>60?this.navClassList.push("add-bg"):this.navClassList=this.navClassList.filter((function(e){return"add-bg"!==e}))},handleLinkClick:function(e){e.preventDefault();var t=e.target.getAttribute("href").slice(1),n=document.getElementById(t).offsetTop;window.scrollTo({left:0,top:n-64}),this.showNavLinks=!1}},mounted:function(){window.addEventListener("scroll",ce(this.handleWinScroll,500))}};n("3608");f.render=j,f.__scopeId="data-v-f7c97fac";var h=f;Object(c["m"])("data-v-eb80e4ec");var p={class:"home",id:"home"};function O(e,t,n,a,i,r){return Object(c["k"])(),Object(c["d"])("section",p)}Object(c["l"])();var m={name:"Home"};n("1a61");m.render=O,m.__scopeId="data-v-eb80e4ec";var v=m;Object(c["m"])("data-v-2eb04850");var g={class:"skills",id:"skills"},k=Object(c["f"])('<h2 data-v-2eb04850><i class="uil uil-wrench" data-v-2eb04850></i>技能</h2><ul class="skill-list" data-v-2eb04850><li data-v-2eb04850><span class="item-bullet" data-v-2eb04850></span> 熟练掌握前端三大基础语言：HTML、CSS、JavaScript。 熟练运用html5+css3进行页面布局，适配各种设备屏的幕。 </li><li data-v-2eb04850><span class="item-bullet" data-v-2eb04850></span> 了解Vue、React框架，了解AJAX。 </li><li data-v-2eb04850><span class="item-bullet" data-v-2eb04850></span> 熟悉Python，在网络爬虫、后端开发、人工智能（在IEEE上发过文章）、图像处理、 数据可视化、数据分析、应用开发等领域有一定实践。 </li><li data-v-2eb04850><span class="item-bullet" data-v-2eb04850></span> 熟悉面向对象的编程方式，熟悉GitHub的使用，了解SQLite，了解数据结构。 </li></ul>',2),y=[k];function w(e,t,n,a,i,r){return Object(c["k"])(),Object(c["d"])("section",g,y)}Object(c["l"])();var S={name:"Skills"};n("b95d");S.render=w,S.__scopeId="data-v-2eb04850";var x=S;n("b0c0"),n("9911");Object(c["m"])("data-v-42d5f8d4");var I={class:"projects",id:"projects"},P=Object(c["e"])("h2",null,[Object(c["e"])("i",{class:"uil uil-window"}),Object(c["g"])("项目")],-1);function T(e,t,n,a,i,r){var o=Object(c["o"])("Project"),l=Object(c["o"])("ProjBullets");return Object(c["k"])(),Object(c["d"])("section",I,[P,Object(c["e"])("div",{class:"slider",style:Object(c["j"])(i.style),onMousedown:t[0]||(t[0]=function(e){return r.touchStart(e)}),onMouseup:t[1]||(t[1]=function(e){return r.touchEnd(e)}),onTouchstart:t[2]||(t[2]=function(e){return r.touchStart(e)}),onTouchend:t[3]||(t[3]=function(e){return r.touchEnd(e)})},[(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["n"])(i.projects,(function(e){return Object(c["k"])(),Object(c["c"])(o,{key:e.name,projectImg:e.img,projectName:e.name,projectInfo:e.info,projectLink:e.link,btnText:e.btnText,dragging:i.dragging},null,8,["projectImg","projectName","projectInfo","projectLink","btnText","dragging"])})),128))],36),Object(c["h"])(l,{numProj:r.numProjects,onChangeSlide:r.handleChangeSlide,slideIndex:i.slideIndex},null,8,["numProj","onChangeSlide","slideIndex"])])}Object(c["l"])();n("caad"),n("2532"),n("159b");Object(c["m"])("data-v-24194ebe");var L=["src","alt"],C={class:"slide-title"},_={class:"slide-info"},B=["href"];function N(e,t,n,a,i,r){return Object(c["k"])(),Object(c["d"])("div",{class:Object(c["i"])([{scale:n.dragging},"slide"])},[Object(c["e"])("img",{class:"slide-img",src:n.projectImg,alt:n.projectImg,onDragstart:t[0]||(t[0]=function(e){return r.disableDrag(e)})},null,40,L),Object(c["e"])("h3",C,Object(c["p"])(n.projectName),1),Object(c["e"])("p",_,Object(c["p"])(n.projectInfo),1),Object(c["e"])("a",{class:"slide-btn",href:n.projectLink},Object(c["p"])(n.btnText),9,B)],2)}Object(c["l"])();var E={name:"Project",props:{projectImg:String,projectName:String,projectInfo:String,projectLink:String,btnText:String,dragging:Boolean},methods:{disableDrag:function(e){e&&e.preventDefault()}}};n("3b5d");E.render=N,E.__scopeId="data-v-24194ebe";var X=E;Object(c["m"])("data-v-15daa9dc");var H={class:"pagination"},M=["onClick"];function A(e,t,n,a,i,r){return Object(c["k"])(),Object(c["d"])("div",H,[(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["n"])(n.numProj,(function(t){return Object(c["k"])(),Object(c["d"])("span",{key:t,class:Object(c["i"])(["bullet",{current:t-1===n.slideIndex}]),onClick:function(n){return e.$emit("changeSlide",t-1)}},null,10,M)})),128))])}Object(c["l"])();n("a9e3");var F={name:"ProjBullets",props:{numProj:Number,slideIndex:Number}};n("5bc8");F.render=A,F.__scopeId="data-v-15daa9dc";var J=F,D={name:"Projects",data:function(){return{projects:[{img:n("5945"),name:"Flappy Bird",info:"Bird、障碍物和整个网页应用的逻辑由面向对象的方式编写，均封装在Javascript的类中。游戏支持键盘和触屏操作，适配手机、iPad、笔记本等设备的屏幕，兼容横竖屏。",link:"https://kewem1221.github.io/Flappy-Bird/",btnText:"试玩此游戏"},{img:n("801d"),name:"Doodle Jump",info:"实现方法和屏幕适配性与Flappy Bird一样，但支持触屏手势控制。",link:"https://kewem1221.github.io/Doodle-Jump/",btnText:"试玩此游戏"},{img:n("2d0e"),name:"Flask Blog",info:"博客网站的后端主要使用Python、Flask、SQLAlchemy、SQLite建立。实现的功能有：（1）注册、登录、退出账号，使用邮件重置密码，设置头像；（2）创建、更新、删除帖子。",link:"https://github.com/Kewem1221/Flask-Blog",btnText:"查看 GitHub repo"}],dragStartX:0,slideIndex:0,dragging:!1,style:{transform:"translateX(0px)"}}},components:{Project:X,ProjBullets:J},methods:{touchStart:function(e){this.dragging=!0,this.dragStartX=this.getPositionX(e)},touchEnd:function(e){this.dragging=!1;var t=this.getPositionX(e)-this.dragStartX;t<-100&&this.slideIndex<this.numProjects-1&&(this.slideIndex+=1),t>100&&this.slideIndex>0&&(this.slideIndex-=1)},getPositionX:function(e){return e.type.includes("mouse")?e.pageX:e.changedTouches[0].pageX},setSlideByIdx:function(e){void 0===e&&(e=this.slideIndex);var t=100*-e/this.numProjects;this.style.transform="translateX(".concat(t,"%)")},handleChangeSlide:function(e){this.slideIndex=e}},watch:{slideIndex:function(e){this.setSlideByIdx(e)}},computed:{numProjects:function(){return this.projects.length}},mounted:function(){document.querySelectorAll(".slide-img").forEach((function(e){e.addEventListener("dragstart",(function(e){e.preventDefault()}))}))}};n("e09d");D.render=T,D.__scopeId="data-v-42d5f8d4";var Q=D;Object(c["m"])("data-v-6f7740d9");var V={class:"awards",id:"awards"},q=Object(c["e"])("h2",null,[Object(c["e"])("i",{class:"uil uil-award"}),Object(c["g"])("荣誉&证书")],-1),G=Object(c["e"])("ul",{class:"award-list"},[Object(c["e"])("li",null," 2020-2021年度第二届全国大学生算法设计与编程挑战赛（秋季赛）成功参赛奖（Python） "),Object(c["e"])("li",null,"2020年第二届全国高校计算机能力挑战赛人工智能应用赛决赛三等奖"),Object(c["e"])("li",null,"2020年全国高校计算机能力挑战赛程序设计赛（Python）华东区域二等奖"),Object(c["e"])("li",null,"2020年全国高校计算机能力挑战赛程序设计赛（Python）决赛三等奖"),Object(c["e"])("li",null," 计算机软件著作权登记证书（软著登字第6907384号）NC Viewer & Visualization v1.0 "),Object(c["e"])("li",null,"上海市高等学校信息技术水平考试证书 二级Python程序设计（成绩优秀）"),Object(c["e"])("li",null,"CET-6 大学英语六级 (大一过)")],-1),W=[q,G];function $(e,t,n,a,i,r){return Object(c["k"])(),Object(c["d"])("section",V,W)}Object(c["l"])();var z={name:"Awards"};n("91f8");z.render=$,z.__scopeId="data-v-6f7740d9";var K=z;Object(c["m"])("data-v-118b155a");var R=Object(c["e"])("span",null,"© 2021 Junhao Liang",-1),Y=[R];function U(e,t,n,a,i,r){return Object(c["k"])(),Object(c["d"])("footer",null,Y)}Object(c["l"])();var Z={name:"Footer"};n("259a");Z.render=U,Z.__scopeId="data-v-118b155a";var ee=Z,te={name:"App",data:function(){return{darkTheme:!1}},components:{Header:h,Home:v,Skills:x,Projects:Q,Footer:ee,Awards:K},methods:{changeTheme:function(){document.querySelector("body").classList.toggle("dark-theme"),this.darkTheme=!this.darkTheme}}};n("9675");te.render=a;var ne=te;function ce(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=null;return function(){null===n&&(e.apply(this,arguments),n=setTimeout((function(){n=null}),t))}}Object(c["b"])(ne).mount("#app")},5945:function(e,t,n){e.exports=n.p+"img/project1.1282a304.jpg"},"5bc8":function(e,t,n){"use strict";n("da45")},"801d":function(e,t,n){e.exports=n.p+"img/project2.a15e3609.jpg"},"91f8":function(e,t,n){"use strict";n("9872")},9306:function(e,t,n){},9675:function(e,t,n){"use strict";n("9306")},9872:function(e,t,n){},b95d:function(e,t,n){"use strict";n("265e")},da45:function(e,t,n){},dd94:function(e,t,n){e.exports=n.p+"img/nav-face.97fde87e.jpg"},ddf6:function(e,t,n){},e09d:function(e,t,n){"use strict";n("0772")}});
//# sourceMappingURL=app.abeeeef9.js.map