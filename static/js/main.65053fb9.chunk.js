(window["webpackJsonpgoogle-sign-in"]=window["webpackJsonpgoogle-sign-in"]||[]).push([[0],{24:function(e,t,o){e.exports=o(35)},29:function(e,t,o){},30:function(e,t,o){},35:function(e,t,o){"use strict";o.r(t);var n=o(1),a=o.n(n),l=o(16),i=o.n(l),r=(o(29),o(17)),c=o(8),s=o(18),u=o(19),g=o(22),m=o(13),h=(o(30),o(47)),p=o(46),f=function(e){function t(e){var o;return Object(r.a)(this,t),(o=Object(s.a)(this,Object(u.a)(t).call(this,e))).responseGoogle=function(e){e.error?console.log(e.error):e.w3.U3&&(o.setState({login:!0}),o.setState({profile:e.profileObj}))},o.logout=function(e){o.setState({login:!1})},o.state={login:!1,profile:{}},o}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this.state,o=t.login,n=t.profile,l=a.a.createElement("p",null,"Your login will appear here.");return!0===o?(e=a.a.createElement(m.GoogleLogout,{clientId:"1073306259932-4dqh1i9lk9l3rr5msm52aausp1ecffhh.apps.googleusercontent.com",buttonText:"Sign out",onLogoutSuccess:this.logout}),l=a.a.createElement("div",null,a.a.createElement("h2",null,n.name),a.a.createElement("h3",null,n.email),a.a.createElement("img",{src:n.imageUrl,alt:"image"}))):(e=a.a.createElement(m.GoogleLogin,{clientId:"1073306259932-4dqh1i9lk9l3rr5msm52aausp1ecffhh.apps.googleusercontent.com",buttonText:"Sign in with Google",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin"}),l=a.a.createElement("p",null,"Your login will appear here.")),a.a.createElement(h.a,{maxWidth:"sm"},a.a.createElement(p.a,{className:"card"},a.a.createElement("h1",null,"Sign in With Google"),a.a.createElement("p",null,"This is an api Test app. To test  Click the Button"),e,l))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.65053fb9.chunk.js.map