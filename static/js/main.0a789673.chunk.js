(window.webpackJsonpsplashdown=window.webpackJsonpsplashdown||[]).push([[0],{12:function(e,t,a){e.exports=a(35)},17:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(11),r=a.n(c),l=(a(17),a(1)),s=a(2),i=a(4),u=a(3),d=a(5),m=(a(18),a(34),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"Welcome"},o.a.createElement("h1",null,"Splashdown"),o.a.createElement("button",{href:"#colordiv","data-aos":"fade-up","data-aos-duration":"1000",className:"welcome-button "},"Generate Color Scheme")))}}]),t}(n.Component)),h=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Color-main",id:"colordiv"},o.a.createElement("div",{"data-aos":"fade-up",className:"Color-swatch blue"}),o.a.createElement("div",{"data-aos":"fade-up",className:"Color-swatch green"}),o.a.createElement("div",{"data-aos":"fade-up",className:"Color-swatch blue"}),o.a.createElement("div",{"data-aos":"fade-up",className:"Color-swatch green"}),o.a.createElement("div",{"data-aos":"fade-up",className:"Color-swatch blue "}))}}]),t}(n.Component),f=function(e){return o.a.createElement("img",{src:e.url,alt:"","data-aos":"fade-up"})},p=function(e){var t=e.data.map(function(e){return o.a.createElement(f,{url:e.urls.small,alt:e.alt_description,key:e.id,h:f.height,w:f.width})});return o.a.createElement("section",{className:"img-grid"},t)},b=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={imgs:[]},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.unsplash.com/photos/?client_id=51e13758bf8016eb55dde3f96b90895260da9653919f48fd0f038e699affa885").then(function(e){return e.json()}).then(function(t){e.setState({imgs:t})}).catch(function(e){console.log("Error happened during fetching!",e)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement(h,null),o.a.createElement(p,{data:this.state.imgs}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.0a789673.chunk.js.map