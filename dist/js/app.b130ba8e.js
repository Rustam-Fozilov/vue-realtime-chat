(function(){"use strict";var e={3188:function(e,t,n){var s=n(9242),r=n(3396),a=n(7139);const o=(0,r._)("h1",{style:{"text-align":"center"}},"Realtime chat app",-1),i={class:"wrapper"},l={class:"chat"},u={class:"chat-messages"},c={class:"messages",ref:"autoScroll"};function f(e,t,n,f,g,h){return(0,r.wg)(),(0,r.iD)(r.HY,null,[o,(0,r._)("div",i,[(0,r._)("div",l,[(0,r._)("div",u,[(0,r._)("div",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(g.allMessages,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id,class:"message"},[(0,r._)("p",null,(0,a.zw)(e.text),1),(0,r._)("div",null,[(0,r._)("span",null,(0,a.zw)(e.username),1)])])))),128))],512),(0,r._)("form",null,[(0,r.wy)((0,r._)("textarea",{onKeyup:t[0]||(t[0]=(0,s.D2)(((...e)=>h.sendMessage&&h.sendMessage(...e)),["enter"])),"onUpdate:modelValue":t[1]||(t[1]=e=>g.message=e),placeholder:"Type message...",class:"form-control",rows:"3"},null,544),[[s.nr,g.message]])])])])])],64)}var g=n(6943),h={name:"App",data(){return{allMessages:[],message:"",username:""}},beforeMount(){this.username=prompt("Ismingizni kiriting"),this.getAllMessages()},updated(){this.$refs["autoScroll"].scrollTop=9999999999},methods:{getAllMessages(){try{g.Z.get("https://vue-realtime-chat-a5aec-default-rtdb.firebaseio.com/messages.json").then((e=>{this.allMessages=Object.keys(e.data).map((t=>({id:t,...e.data[t]})))}))}catch(e){console.log(e)}},sendMessage(){try{g.Z.post("https://vue-realtime-chat-a5aec-default-rtdb.firebaseio.com/messages.json",{text:this.message,username:this.username}).then((e=>{this.message=""}))}catch(e){console.log(e)}}},watch:{allMessages(){this.getAllMessages()}}},d=n(89);const p=(0,d.Z)(h,[["render",f]]);var m=p;(0,s.ri)(m).mount("#app")}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,s,r,a){if(!s){var o=1/0;for(c=0;c<e.length;c++){s=e[c][0],r=e[c][1],a=e[c][2];for(var i=!0,l=0;l<s.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(i=!1,a<o&&(o=a));if(i){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[s,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,a,o=s[0],i=s[1],l=s[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var c=l(n)}for(t&&t(s);u<o.length;u++)a=o[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},s=self["webpackChunkvue_realtime_chat"]=self["webpackChunkvue_realtime_chat"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(3188)}));s=n.O(s)})();
//# sourceMappingURL=app.b130ba8e.js.map