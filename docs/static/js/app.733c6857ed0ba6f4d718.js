!function(t){function e(e){for(var r,i,s=e[0],l=e[1],u=e[2],p=0,d=[];p<s.length;p++)i=s[p],n[i]&&d.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(c&&c(e);d.length;)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={0:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;o.push(["Vtdi",1]),a()}({S3r0:function(t,e){},Vtdi:function(t,e,a){"use strict";a.r(e);var r=a("oCYn"),n=a("JFUb"),o=Object(n.a)({name:"App"},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},[],!1,function(t){a("S3r0")},null,null).exports,i=a("jE9Z"),s=a("14Xm"),l=a.n(s),u=a("gDS+"),c=a.n(u),p=a("D3Ub"),d=a.n(p),v=a("vDqi"),h=a.n(v),_={KeyWordList:["Python","JavaScript","Ruby","PHP","Rails","iOS","AWS","Android","Java","Swift","Docker","Linux","Node.js","Git","Mac","Unity","Csharp","Python3","MySQL","Go","C++","CSS","Windows","機械学習","Xcode","初心者","HTML","Ubuntu","CentOS","GitHub","RaspberryPi","Laravel","Objective-C","Vagrant","Vue.js","jQuery","Bash","Vim","DeepLearning","React","TypeScript","WordPress","golang","Scala","R","MacOSX","HTML5","C","Kotlin","RubyOnRails","nginx","Slack","Heroku","TensorFlow","PostgreSQL","ShellScript","centos7","lambda","Azure","SQL","IoT","Ansible","Django","Apache","kubernetes","MachineLearning","Windows10","SSH","iPhone","VirtualBox","Firebase","Haskell","Arduino","Excel","Emacs","OpenCV","新人プログラマ応援","EC2","AndroidStudio","Chrome","PowerShell","GoogleAppsScript","reactjs","VSCode","api","Qiita","Elixir","ポエム","JSON","homebrew","docker-compose","数学","Twitter","Perl","GoogleCloudPlatform","npm","oracle","shell","AngularJS","webpack","babel"]},f={name:"InputForm",data:function(){return{KeyWord:"vue.js",MaxIndex:10,KeyWordList:_.KeyWordList}},methods:{setWord:function(){this.$emit("setWord",this.KeyWord,this.MaxIndex)}}},m={name:"display",props:{ArticleDatas:null,tag:null,DataNum:null},data:function(){return{page:1,perPage:5}},watch:{ArticleDatas:function(){this.page=1,this.Sort()}},computed:{SliceItems:function(){if(console.log("page="+this.page),null!=this.ArticleDatas)return this.ArticleDatas.slice((this.page-1)*this.perPage,this.page*this.perPage)},MaxPage:function(){return this.DataNum/this.perPage}},methods:{prevPage:function(){this.page=Math.max(this.page-1,1)},nextPage:function(){this.page=Math.min(this.page+1,this.MaxPage)},Sort:function(){for(var t=0;t<this.ArticleDatas.length;t++)for(var e=t;e<this.ArticleDatas.length;e++)if(this.ArticleDatas[t].likes_count<this.ArticleDatas[e].likes_count){var a=this.ArticleDatas[t];this.ArticleDatas[t]=this.ArticleDatas[e],this.ArticleDatas[e]=a}}}},g={components:{InputForm:Object(n.a)(f,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"InputForm"},[a("div",{staticClass:"jumbotron"},[a("div",{staticClass:"container"},[a("div",{staticClass:"d-flex flex-column"},[a("label",[t._v("KeyWord")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.KeyWord,expression:"KeyWord"}],staticClass:"col-4 mx-auto form-group form-control",attrs:{type:"text",plaseholder:"vue",autocomplete:"on",list:"WordList"},domProps:{value:t.KeyWord},on:{input:function(e){e.target.composing||(t.KeyWord=e.target.value)}}}),t._v(" "),a("datalist",{attrs:{id:"WordList"}},t._l(t.KeyWordList,function(e){return a("option",[t._v(t._s(e))])}),0),t._v(" "),a("label",[t._v("MaxIndex")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.MaxIndex,expression:"MaxIndex"}],staticClass:"col-4 mx-auto form-group form-control",attrs:{type:"number",plaseholder:"10"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.MaxIndex=e.target.multiple?a:a[0]}}},t._l([10,20,30,40,50,60,70,80,90,100],function(e){return a("option",[t._v(t._s(e))])}),0),t._v(" "),a("input",{staticClass:"col-4 mx-auto form-group btn btn-outline-primary",attrs:{type:"submit",value:"確定"},on:{click:function(e){return t.setWord()}}})])])])])},[],!1,null,null,null).exports,DisplayArea:Object(n.a)(m,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"DisplayArea"},[a("div",{staticClass:"jumbotron"},[a("div",{staticClass:"container"},[null!=t.tag?a("h1",[t._v(t._s(t.tag))]):t._e(),t._v(" "),null!=t.ArticleDatas?a("span",{staticClass:"mx-auto"},[a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(e){return t.prevPage()}}},[t._v("<")]),t._v("\n        "+t._s(t.page)+"/"+t._s(t.MaxPage)+"\n        "),a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(e){return t.nextPage()}}},[t._v(">")]),t._v(" "),t._l(t.SliceItems,function(e,r){return a("div",{key:r},[a("h4",[t._v(t._s(r+1+5*(t.page-1)))]),t._v(" "),a("table",{staticClass:"table table-hover"},[a("thead",[a("tr",[a("th",{attrs:{colspan:"2"}},[a("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])])])]),t._v(" "),a("tbody",[a("tr",[a("th",{attrs:{width:"10%"}},[t._v("Writer")]),a("th",[t._v(t._s(e.user.name))])]),t._v(" "),a("tr",[a("th",{attrs:{width:"10%"}},[t._v("Good")]),a("th",[t._v(t._s(e.likes_count))])]),t._v(" "),a("tr",[a("th",{attrs:{width:"10%"}},[t._v("Created")]),a("th",[t._v(t._s(e.created_at))])]),t._v(" "),e.created_at!=e.updated_at?a("tr",[a("th",{attrs:{width:"10%"}},[t._v("Updated")]),a("th",[t._v(t._s(e.updated_at))])]):t._e(),t._v(" "),a("tr",[a("th",{attrs:{width:"10%"}},[t._v("Comments")]),a("th",[t._v(t._s(e.comments_count))])]),t._v(" "),a("tr",[a("th",{attrs:{width:"10%"}},[t._v("Other Tags")]),a("th",t._l(e.tags,function(e){return a("span",[t._v(t._s(e.name)+",")])}),0)])])])])}),t._v(" "),a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(e){return t.prevPage()}}},[t._v("<")]),t._v("\n        "+t._s(t.page)+"/"+t._s(t.MaxPage)+"\n        "),a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(e){return t.nextPage()}}},[t._v(">")])],2):t._e()])])])},[],!1,function(t){a("xQOG")},"data-v-d32b1976",null).exports},data:function(){return{msg:"Vue axios",title:"Qiita API V2",url:String,dataObj:Object,Word:String,DataNum:10}},watch:{url:function(){var t=d()(l.a.mark(function t(e){var a=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get(e).then(function(t){return a.dataObj=t.data});case 3:console.log(c()(this.dataObj)),t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(0),console.error(t.t0),t.abrupt("return");case 10:case"end":return t.stop()}},t,this,[[0,6]])}));return function(e){return t.apply(this,arguments)}}()},methods:{setWord:function(t,e){this.Word=t,this.DataNum=e,this.url="https://qiita.com/api/v2/tags/"+t+"/items?page=1&per_page="+e}}},b=Object(n.a)(g,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Base"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v(t._s(t.title))]),t._v(" "),a("InputForm",{on:{setWord:t.setWord}}),t._v(" "),a("DisplayArea",{attrs:{ArticleDatas:t.dataObj,tag:t.Word,DataNum:t.DataNum}})],1)},[],!1,null,null,null).exports;r.a.use(i.a);var y=new i.a({routes:[{path:"/",component:b}]});r.a.config.productionTip=!1,r.a.use(h.a),new r.a({el:"#app",router:y,components:{App:o},template:"<App/>"})},xQOG:function(t,e){}});
//# sourceMappingURL=app.733c6857ed0ba6f4d718.js.map