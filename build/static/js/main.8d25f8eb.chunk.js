(this["webpackJsonppokedex-app"]=this["webpackJsonppokedex-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),r=t(7),i=t.n(r),s=(t(13),t(2)),p=t(3),o=t(5),d=t(4),j=(t(14),t(15),t(8)),u=t(0),l=function(e){Object(o.a)(t,e);var n=Object(d.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){var e,n="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=this.props.id)<=999?"00".concat(e).slice(-3):e,".png");return Object(u.jsxs)("div",{className:"Pokecard",children:[Object(u.jsx)("h1",{className:"pokdecard-title",children:this.props.name}),Object(u.jsxs)("div",{className:"Pokecard-img",children:[" ",Object(u.jsx)("img",{src:n,alt:""})]}),Object(u.jsxs)("div",{className:"pokecard-data",children:["Type : ",this.props.type]}),Object(u.jsxs)("div",{className:"pokecard-data",children:["EXP : ",this.props.exp]})]})}}]),t}(c.Component),b=l,h=(t(17),function(e){Object(o.a)(t,e);var n=Object(d.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){var e;return e=this.props.isWinner?Object(u.jsx)("h1",{className:"Pokedex-winner",children:"Winning Hand"}):Object(u.jsx)("h1",{className:"Pokedex-loser",children:"Losing Hand"}),Object(u.jsxs)("div",{className:"Pokedex",children:[Object(u.jsx)("h1",{children:"POKEDEX!"}),Object(u.jsxs)("h4",{children:["Total Experience: ",this.props.exp," "]}),e,Object(u.jsx)("div",{className:"Pokedex-card",children:this.props.pokemon.map((function(e){return Object(u.jsx)(b,{id:e.id,name:e.name,type:e.type,exp:e.base_experience})}))})]})}}]),t}(c.Component)),m=h,x=function(e){Object(o.a)(t,e);var n=Object(d.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){for(var e=[],n=Object(j.a)(this.props.pokemon);e.length<n.length;){var t=Math.floor(Math.random()*n.length),c=n.splice(t,1)[0];e.push(c)}var a=e.reduce((function(e,n){return e+n.base_experience}),0),r=n.reduce((function(e,n){return e+n.base_experience}),0);return Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)(m,{pokemon:e,exp:a,isWinner:a>r}),Object(u.jsx)(m,{pokemon:n,exp:r,isWinner:r>a})]})}}]),t}(c.Component);x.defaultProps={pokemon:[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]};var O=x,f=function(e){Object(o.a)(t,e);var n=Object(d.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(O,{})})}}]),t}(c.Component),k=f,v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root")),v()}],[[18,1,2]]]);
//# sourceMappingURL=main.8d25f8eb.chunk.js.map