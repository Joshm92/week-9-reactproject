(this["webpackJsonpjosh-app"]=this["webpackJsonpjosh-app"]||[]).push([[0],{19:function(e,t,a){},24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(21),r=a.n(l),i=(a(29),a(19),a(1)),o=a(2),u=a(4),s=a(3),h=a(5),m=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container"}," ",c.a.createElement("h1",{className:"display-4"},this.props.text)))}}]),t}(n.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("p",null,this.props.children)}}]),t}(n.Component);d.defaultProps={children:"Hello and welcome to my React site"};var p=d,k=a(6),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={clicked:!1},a.handleClick=a.handleClick.bind(Object(k.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){this.setState({clicked:!this.state.clicked})}},{key:"render",value:function(){var e=this.state.clicked,t=this.props.color,a={height:200,width:200,backgroundColor:e?t:"orange"};return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Click the box!"),c.a.createElement("div",{onClick:this.handleClick,style:a}))}}]),t}(n.Component);b.defaultProps={color:"hotpink"};var C=b,v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){console.log("hello world")}},{key:"render",value:function(){var e=this.props.names;return e?c.a.createElement("ul",{className:"People-List",onClick:this.handleClick},e.map((function(e,t){return c.a.createElement("li",{key:t}," ",e," ")}))):c.a.createElement("p",null,"Nothing to see here")}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={clicked:!1},a.handleClick=a.handleClick.bind(Object(k.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){this.setState({clicked:!this.state.clicked})}},{key:"render",value:function(){var e=this.state.clicked;return c.a.createElement("p",{onClick:this.handleClick},e?"clicked":"not clicked")}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={clicked:!1},a.handleClick=a.handleClick.bind(Object(k.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){this.setState({clicked:!this.state.clicked})}},{key:"render",value:function(){var e=this.state.clicked,t=this.props.initial,a=this.props.alternate;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:this.handleClick}),c.a.createElement("p",null,e?t:a))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={counter:a.props.initial},a.handleClickIncrement=a.handleClickIncrement.bind(Object(k.a)(a)),a.handleClickDecrease=a.handleClickDecrease.bind(Object(k.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleClickIncrement",value:function(){this.state.counter<this.props.max&&this.setState({counter:this.state.counter+1})}},{key:"handleClickDecrease",value:function(){this.state.counter>0&&this.setState({counter:this.state.counter-1})}},{key:"render",value:function(){var e=this.state.counter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:this.handleClickDecrease},"-1"),c.a.createElement("button",{onClick:this.handleClickIncrement},"+1"),c.a.createElement("p",null,e))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={counter:0},a.handleClickIncrement=a.handleClickIncrement.bind(Object(k.a)(a)),a.handleClickDecrease=a.handleClickDecrease.bind(Object(k.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleClickIncrement",value:function(){this.state.counter<this.props.max&&this.setState({counter:+this.state.counter+ +this.props.step})}},{key:"handleClickDecrease",value:function(){this.state.counter>0&&this.setState({counter:+this.state.counter-+this.props.step})}},{key:"render",value:function(){var e=this.state.counter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:this.handleClickDecrease},"-1"),c.a.createElement("button",{onClick:this.handleClickIncrement},"+1"),c.a.createElement("p",null,e))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={position:0},a.handleClick=a.handleClick.bind(Object(k.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){this.setState({position:this.state.position+this.props.jump})}},{key:"render",value:function(){var e={position:"relative",top:this.state.position};return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:this.handleClick,style:e},"Catch Me If You Can"))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={value:"default input"},a.handleChange=a.handleChange.bind(Object(k.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.currentTarget.value})}},{key:"render",value:function(){var e=this,t=this.state.value;return c.a.createElement("form",{className:"form-control"},c.a.createElement("p",null,"Length: ",t.length),c.a.createElement("input",{className:"form-control",onChange:function(t){return e.handleChange(t)},value:t}))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(k.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){var t=e.currentTarget.value;this.setState({value:t})}},{key:"calculateBackground",value:function(){return 0===this.state.value.length?{}:{background:this.calculateColoe}}},{key:"render",value:function(){var e=this.state.value.length,t={backgroundColor:0===e?"":e<9?"red":e<16?"orange":"green"};return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{style:t,type:"password",onChange:this.handleChange}))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={celcius:0,fahrenheit:32},a.handleChangeCelcius=a.handleChangeCelcius.bind(Object(k.a)(a)),a.handleChangeFahrenheit=a.handleChangeFahrenheit.bind(Object(k.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleChangeCelcius",value:function(e){var t=+e.currentTarget.value;this.setState({celcius:t,fahrenheit:(1.8*t+32).toFixed(2)})}},{key:"handleChangeFahrenheit",value:function(e){var t=+e.currentTarget.value;this.setState({fahrenheit:t,celcius:((t-32)/1.8).toFixed(2)})}},{key:"render",value:function(){return c.a.createElement("form",null,c.a.createElement("label",null,"Celcius"),c.a.createElement("input",{type:"number",value:this.state.celcius,onChange:this.handleChangeCelcius}),c.a.createElement("label",null,"Fahrenheit"),c.a.createElement("input",{type:"number",value:this.state.fahrenheit,onChange:this.handleChangeFahrenheit}))}}]),t}(n.Component),F=a(14),x=function(){return c.a.createElement("ul",{className:"list-group"},[{value:"Home",link:"/home"},{value:"Square",link:"/square/orange"},{value:"Clicked",link:"/clicked"},{value:"People",link:"/people"},{value:"Toggle",link:"/toggle"},{value:"Temperature",link:"/temperature"},{value:"Length",link:"/length"},{value:"Password",link:"/password"},{value:"Stepcounter",link:"/stepcounter/100/10"}].map((function(e,t){return c.a.createElement("li",{key:t,className:"list-group-item"},c.a.createElement(F.b,{to:e.link},e.value))})))},I=function(){return c.a.createElement("p",null,"Uh-oh! 404 Page not found")},N=a(11),D=function(){return c.a.createElement(F.a,null,c.a.createElement(m,{text:"Josh's React App"}),c.a.createElement(N.c,null,c.a.createElement(N.a,{path:"/home"},c.a.createElement(p,null,"Hello World")),c.a.createElement(N.a,{path:"/square/:color",render:function(e){var t=e.match;return c.a.createElement(C,{color:t.params.color})}}),c.a.createElement(N.a,{path:"/people"},c.a.createElement(v,{names:["Sandra","Josh","Hagrid"]})),c.a.createElement(N.a,{path:"/toggle"},c.a.createElement(j,{initial:"Hello",alternate:"World"})),c.a.createElement(N.a,{path:"/counter"},c.a.createElement(O,{initial:50,max:100})),c.a.createElement(N.a,{path:"/stepcounter/:max/:step",render:function(e){var t=e.match;return c.a.createElement(E,{max:t.params.max,step:t.params.step})}}),c.a.createElement(N.a,{path:"/catch"},c.a.createElement(g,{jump:100})),c.a.createElement(N.a,{path:"/temperature",component:S}),c.a.createElement(N.a,{path:"/clicked",component:f}),c.a.createElement(N.a,{path:"/length",component:y}),c.a.createElement(N.a,{path:"/password",component:w}),c.a.createElement(I,null)),c.a.createElement(x,{component:x}))},P=function(){return c.a.createElement(D,{square:!0})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.fed4004b.chunk.js.map