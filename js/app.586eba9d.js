(function(e){function t(t){for(var n,s,c=t[0],i=t[1],l=t[2],u=0,p=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1d6a76f6"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=s(e);var l=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/autorace-app/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[e._v("Latest Release")]),a("v-icon",[e._v("mdi-open-in-new")])],1)],1),a("v-main",[a("router-view")],1)],1)},o=[],s={name:"App",data:function(){return{}}},c=s,i=a("2877"),l=a("6544"),u=a.n(l),d=a("7496"),p=a("40dc"),f=a("8336"),v=a("132d"),m=a("adda"),h=a("f6c4"),y=a("2fa4"),g=Object(i["a"])(c,r,o,!1,null,null,null),b=g.exports;u()(g,{VApp:d["a"],VAppBar:p["a"],VBtn:f["a"],VIcon:v["a"],VImg:m["a"],VMain:h["a"],VSpacer:y["a"]});var k=a("9483");Object(k["a"])("".concat("/autorace-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("d3b7"),a("3ca3"),a("ddb0");var w=a("8c4f"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header"),a("Calendar")],1)},$=[],D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticClass:"fill-height"},[a("v-col",[a("v-sheet",{attrs:{height:"64"}},[a("v-toolbar",{attrs:{flat:""}},[a("v-btn",{staticClass:"mr-4",attrs:{outlined:"",color:"grey darken-2"},on:{click:e.setToday}},[e._v(" Today ")]),a("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:e.prev}},[a("v-icon",{attrs:{small:""}},[e._v(" mdi-chevron-left ")])],1),a("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:e.next}},[a("v-icon",{attrs:{small:""}},[e._v(" mdi-chevron-right ")])],1),e.$refs.calendar?a("v-toolbar-title",[e._v(" "+e._s(e.$refs.calendar.title)+" ")]):e._e(),a("v-spacer"),a("v-menu",{attrs:{bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({attrs:{outlined:"",color:"grey darken-2"}},"v-btn",r,!1),n),[a("span",[e._v(e._s(e.typeToLabel[e.type]))]),a("v-icon",{attrs:{right:""}},[e._v(" mdi-menu-down ")])],1)]}}])},[a("v-list",[a("v-list-item",{on:{click:function(t){e.type="day"}}},[a("v-list-item-title",[e._v("Day")])],1),a("v-list-item",{on:{click:function(t){e.type="week"}}},[a("v-list-item-title",[e._v("Week")])],1),a("v-list-item",{on:{click:function(t){e.type="month"}}},[a("v-list-item-title",[e._v("Month")])],1),a("v-list-item",{on:{click:function(t){e.type="4day"}}},[a("v-list-item-title",[e._v("4 days")])],1)],1)],1)],1)],1),a("v-sheet",{attrs:{height:"600"}},[a("v-calendar",{ref:"calendar",attrs:{color:"primary",events:e.events,"event-color":e.getEventColor,type:e.type},on:{"click:event":e.showEvent,"click:more":e.viewDay,"click:date":e.setDate,change:e.updateRange},model:{value:e.focus,callback:function(t){e.focus=t},expression:"focus"}}),a("v-menu",{attrs:{"close-on-content-click":!1,activator:e.selectedElement,"offset-x":""},model:{value:e.selectedOpen,callback:function(t){e.selectedOpen=t},expression:"selectedOpen"}},[a("v-card",{attrs:{color:"grey lighten-4","min-width":"350px",flat:""}},[a("v-toolbar",{attrs:{color:e.selectedEvent.color,dark:""}},[a("v-toolbar-title",{domProps:{innerHTML:e._s(e.selectedEvent.name)}})],1),a("v-chip",{staticClass:"ma-2",attrs:{color:e.selectedEvent.color}},[e._v(" "+e._s(e.selectedEvent.place)+" ")]),a("v-card-text",[a("span",{domProps:{innerHTML:e._s(e.selectedEvent.details)}})]),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(t){e.selectedOpen=!1}}},[e._v(" Cancel ")])],1)],1)],1)],1)],1)],1)},C=[],x=a("2909"),P=(a("d81d"),a("4de4"),{data:function(){return{focus:"",type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[],colors:{kawaguchi:"blue",isesaki:"indigo",hamamatsu:"deep-purple",iizuka:"cyan",sanyou:"green"},places:{kawaguchi:"川口",isesaki:"伊勢崎",hamamatsu:"浜松",iizuka:"飯塚",sanyou:"鉄壁山陽"},names:["Meeting","Holiday","PTO","Travel","Event","Birthday","Conference","Party"]}},mounted:function(){this.$store.dispatch("fetchEvents"),this.$refs.calendar.checkChange()},methods:{viewDay:function(e){var t=e.date;this.focus=t,this.type="day"},getEventColor:function(e){return e.color},setToday:function(){this.focus="";var e=new Date;this.$store.commit("setDate",e),this.$store.commit("setPlaces",{events:this.$store.state.events,date:e}),this.$store.commit("maybeChangePlace")},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},showEvent:function(e){var t=this,a=e.nativeEvent,n=e.event,r=function(){t.selectedEvent=n,t.selectedElement=a.target,requestAnimationFrame((function(){return requestAnimationFrame((function(){return t.selectedOpen=!0}))}))};this.selectedOpen?(this.selectedOpen=!1,requestAnimationFrame((function(){return requestAnimationFrame((function(){return r()}))}))):r(),a.stopPropagation()},updateRange:function(e){var t=this,a=e.start,n=e.end;if(null!==this.$store.state.events){var r=[],o=new Date("".concat(a.date,"T00:00:00"));o.setDate(o.getDate()-o.getDay());var s=new Date("".concat(n.date,"T23:59:59"));s.setDate(s.getDate()+6-s.getDay());var c=this.$store.state.events.filter((function(e){return a=new Date(e.start),n=new Date(e.end),o<=a&&a<=s||a<=o&&o<=n})).map((function(e){return{name:e.title,start:new Date(e.start),end:new Date(e.end),color:t.colors[e.place],timed:!1,details:e.range,place:t.places[e.place]}}));r.push.apply(r,Object(x["a"])(c)),this.events=r}else setTimeout((function(){t.updateRange({start:a,end:n})}),500)},setDate:function(e){var t=e.date;this.$store.commit("setDate",t),this.$store.commit("setPlaces",{events:this.$store.state.events,date:t}),this.$store.commit("maybeChangePlace")}}}),E=P,j=a("a4f6"),V=a("b0af"),O=a("99d9"),R=a("cc20"),T=a("62ad"),M=a("8860"),S=a("da13"),A=a("5d23"),L=a("e449"),H=a("0fd9"),B=a("8dd9"),F=a("71d9"),I=a("2a7f"),q=Object(i["a"])(E,D,C,!1,null,null,null),z=q.exports;u()(q,{VBtn:f["a"],VCalendar:j["a"],VCard:V["a"],VCardActions:O["a"],VCardText:O["b"],VChip:R["a"],VCol:T["a"],VIcon:v["a"],VList:M["a"],VListItem:S["a"],VListItemTitle:A["b"],VMenu:L["a"],VRow:H["a"],VSheet:B["a"],VSpacer:y["a"],VToolbar:F["a"],VToolbarTitle:I["a"]});var N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card",{staticClass:"d-flex justify-space-around mb-6",attrs:{color:e.$vuetify.theme.dark?"grey darken-3":"grey lighten-4",flat:"",tile:""}},[a("div",{staticClass:"d-flex flex-column mb-6"},[a("v-card",{key:"4",staticClass:"pa-2",attrs:{outlined:"",tile:""}},[a("Datepicker",{attrs:{language:e.ja,format:"yyyy-MM-dd",value:e.date},on:{selected:e.updateDate}})],1),a("v-card",{key:"5",staticClass:"pa-2",attrs:{outlined:"",tile:""}},[a("v-select",{attrs:{items:e.places,value:e.place,label:"開催場所",outlined:""},on:{change:e.updatePlace}})],1)],1),a("div",{staticClass:"d-flex flex-column mb-6"},[a("v-card",{key:"6",staticClass:"pa-2",attrs:{outlined:"",tile:""}},[a("v-select",{attrs:{items:e.races,value:e.race,label:"レース",outlined:""},on:{change:e.updateRace}})],1),a("v-card",{key:"7",staticClass:"pa-2",attrs:{outlined:"",tile:""}},[a("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:e.play}},[e._v(" Play ")])],1)],1)])],1)},J=[],W=(a("c740"),a("fb6a"),a("99af"),a("fa33")),Y=a("2430"),G={name:"Home",components:{Datepicker:W["a"]},data:function(){return{ja:Y["ja"]}},methods:{updateDate:function(e){this.$store.commit("setDate",e),this.$store.commit("setPlaces",{events:this.$store.state.events,date:e}),this.$store.commit("maybeChangePlace")},updatePlace:function(e){this.$store.commit("setPlace",e)},updateRace:function(e){var t=this.races.findIndex((function(t){return t===e}));this.$store.commit("setRace",t)},play:function(){var e={kawaguchi:"kawaguchi",isesaki:"isezaki",hamamatsu:"hama",iizuka:"iizuka",sanyou:"sanyou"},t=this.$store.state.race+1,a=("00"+t).slice(-2),n=e[this.$store.state.place],r=new Date(this.$store.state.date),o=r.getFullYear(),s=("00"+(r.getMonth()+1)).slice(-2),c=("00"+r.getDate()).slice(-2),i="https://sp-auto.digi-c.com/autorace/_definst_/".concat(n,"/").concat(o,"/").concat(n,"_").concat(o).concat(s).concat(c,"_").concat(a,"/playlist.m3u8");console.log(i),this.$router.push({name:"Player",params:{url:i}})}},computed:{date:function(){return this.$store.state.date},places:function(){var e=this;return this.$store.state.places.map((function(t){return e.names[t]}))},place:function(){return this.names[this.$store.state.place]},races:function(){return["1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R"]},race:function(){return this.races[this.$store.state.race]},names:function(){return{kawaguchi:"川口",isesaki:"伊勢崎",hamamatsu:"浜松",iizuka:"飯塚",sanyou:"鉄壁山陽"}}}},K=G,Q=a("b974"),U=Object(i["a"])(K,N,J,!1,null,null,null),X=U.exports;u()(U,{VBtn:f["a"],VCard:V["a"],VSelect:Q["a"]});var Z={name:"Home",components:{Calendar:z,Header:X}},ee=Z,te=Object(i["a"])(ee,_,$,!1,null,null,null),ae=te.exports,ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("video",{attrs:{id:"video",controls:"",autoplay:""}}),a("button",{on:{click:this.back}},[e._v("back")])])])},re=[],oe=a("ba56"),se=a.n(oe),ce={props:{url:String},data:function(){return{hls:new se.a}},mounted:function(){this.videoPlay()},methods:{videoPlay:function(){var e=document.getElementById("video"),t=this.url;se.a.isSupported()?(this.hls=new se.a,this.hls.loadSource(t),this.hls.attachMedia(e),e.play()):e.canPlayType("application/vnd.apple.mpegurl")&&(e.src=t,e.addEventListener("canplay",(function(){e.play()})))},back:function(){this.$router.back()}}},ie=ce,le=Object(i["a"])(ie,ne,re,!1,null,null,null),ue=le.exports;n["a"].use(w["a"]);var de=[{path:"/",name:"Home",component:ae},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/player",name:"Player",component:ue,props:!0}],pe=new w["a"]({routes:de}),fe=pe,ve=a("1da1"),me=(a("96cf"),a("2f62"));n["a"].use(me["a"]);var he=new me["a"].Store({state:{events:null,date:new Date,place:null,places:[],race:7},mutations:{setEvents:function(e,t){e.events=t},setDate:function(e,t){e.date=t,e.places=e.events.filter((function(e){var a=new Date(e.start),n=new Date(e.end),r=new Date(t);return a<=r&&r<=n})).map((function(e){return e.place})),e.places.some((function(t){return t===e.place}))||(e.place=e.places[0])},setPlace:function(e,t){e.place=t},setRace:function(e,t){e.race=t},setPlaces:function(e,t){var a=t.events,n=new Date(t.date);e.places=a.filter((function(e){var t=new Date(e.start),a=new Date(e.end);return t<=n&&n<=a})).map((function(e){return e.place}))},maybeChangePlace:function(e){e.places.some((function(t){return t===e.place}))||(e.place=e.places[0])}},actions:{fetchEvents:function(e){return Object(ve["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null===e.state.events){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,fetch("https://admob-app-id-5452967350.firebaseio.com/events.json").then((function(e){return e.json()}));case 4:a=t.sent,e.commit("setEvents",a),e.commit("setPlaces",{events:a,date:e.state.date}),e.commit("maybeChangePlace");case 8:case"end":return t.stop()}}),t)})))()}},modules:{}}),ye=a("f309");n["a"].use(ye["a"]);var ge=new ye["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:fe,store:he,vuetify:ge,render:function(e){return e(b)}}).$mount("#app")}});
//# sourceMappingURL=app.586eba9d.js.map