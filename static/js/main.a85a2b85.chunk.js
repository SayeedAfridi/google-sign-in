(window["webpackJsonpgoogle-sign-in"]=window["webpackJsonpgoogle-sign-in"]||[]).push([[0],{24:function(e,t,n){e.exports=n(35)},29:function(e,t,n){},30:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),l=n(16),i=n.n(l),r=(n(29),n(17)),c=n(8),s=n(18),u=n(19),g=n(22),m=n(13),h=(n(30),n(47)),p=n(46),f=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).responseGoogle=function(e){e.w3.U3&&(n.setState({login:!0}),n.setState({profile:e.profileObj}))},n.logout=function(e){n.setState({login:!1})},n.state={login:!1,profile:{}},n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this.state,n=t.login,o=t.profile;return e=!0===n?a.a.createElement("div",null,a.a.createElement("h2",null,o.name),a.a.createElement("h3",null,o.email),a.a.createElement("img",{src:o.imageUrl,alt:"image"})):a.a.createElement("p",null,"Your login will appear here."),a.a.createElement(h.a,{maxWidth:"sm"},a.a.createElement(p.a,{className:"card"},a.a.createElement("h1",null,"Sign in With Google"),a.a.createElement("p",null,"This is an api Test app. To test  Click the Button"),a.a.createElement(m.GoogleLogin,{clientId:"1073306259932-4dqh1i9lk9l3rr5msm52aausp1ecffhh.apps.googleusercontent.com",buttonText:"Sign in with Google",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin"}),a.a.createElement(m.GoogleLogout,{clientId:"1073306259932-4dqh1i9lk9l3rr5msm52aausp1ecffhh.apps.googleusercontent.com",buttonText:"Sign out",onLogoutSuccess:this.logout}),a.a.createElement("p",null,e)))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.a85a2b85.chunk.js.map