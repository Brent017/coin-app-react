(window["webpackJsonpcoin-app-react"]=window["webpackJsonpcoin-app-react"]||[]).push([[0],{187:function(e,t,n){e.exports=n(328)},192:function(e,t,n){},314:function(e,t,n){},326:function(e,t,n){},327:function(e,t,n){},328:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(48),i=n.n(o),l=(n(92),n(192),n(15)),s=n.n(l),c=n(26),u=n(27),m=n(20),d=n(21),p=n(23),h=n(22),f=n(24),g=n(43),v=n(341),y=n(342),b=n(336),E=n(344),C=n(339),w=n(338),O=n(32),k=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){e.setState(Object(c.a)({},t.currentTarget.name,t.currentTarget.value))},e.handleSubmit=function(){var t=Object(u.a)(s.a.mark(function t(n){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),console.log(e.state.username),(a=new FormData).append("username",e.state.username),a.append("password",e.state.password),e.props.logIn(e.state).then(function(t){"Success!"===t.status.message?e.props.history.push("/profile"):(e.setState({notValid:!0}),console.log(t,e.props))}).catch(function(e){console.log(e)});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.state={username:"",password:"",notValid:!1},e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{className:"login",textAlign:"center",verticalAlign:"middle"},r.a.createElement(v.a.Column,{style:{maxWidth:450,height:1e3}},r.a.createElement(y.a,{className:"title",style:{fontSize:"80px",color:"#c0c0c0",fontStyle:"Consolas",textShadow:"2px 2px #111"},as:"h2",textAlign:"center"},r.a.createElement("br",null),"Coin Ca",r.a.createElement("span",null,"\xa2"),"he"),r.a.createElement(b.a,{onSubmit:this.handleSubmit},r.a.createElement(E.a,{stacked:!0},"Username:",r.a.createElement(b.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"username",type:"text",name:"username",onChange:this.handleChange}),"Password:",r.a.createElement(b.a.Input,{fluid:!0,icon:"asterisk",iconPosition:"left",placeholder:"password",type:"text",name:"password",onChange:this.handleChange}),r.a.createElement(C.a,{fluid:!0,size:"large",type:"submit"},"Login"),this.state.notValid?r.a.createElement("div",{style:{fontSize:"20px",color:"red"}},"Invalid username or password, please try again."):null,r.a.createElement(w.a,null,"Not registered? ",r.a.createElement(O.b,{to:"/register"},"Register Now"))))))}}]),t}(a.Component),S=(n(314),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){"image"!==t.currentTarget.name?e.setState(Object(c.a)({},t.currentTarget.name,t.currentTarget.value)):(console.log(t.currentTarget.files[0]),e.setState({image:t.currentTarget.files[0]}))},e.handleSubmit=function(){var t=Object(u.a)(s.a.mark(function t(n){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),(a=new FormData).append("file",e.state.image),a.append("username",e.state.username),a.append("email",e.state.email),a.append("password",e.state.password),console.log(a.entries(),"<-this is data from Register"),console.log(a,"before registerFunction"),e.props.register(a).then(function(t){console.log(t,"data in registerFunction"),"Success!"===t.status.message?e.props.history.push("/profile"):console.log(t,"<-should be error message in registerFunction")});case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.state={username:"",email:"",password:"",image:{}},e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{className:"login",textAlign:"center",verticalAlign:"middle"},r.a.createElement(v.a.Column,{style:{maxWidth:450,height:1e3}},r.a.createElement(y.a,{className:"title",style:{fontSize:"80px",color:"#c0c0c0",fontStyle:"Consolas",textShadow:"2px 2px #111"},as:"h2",textAlign:"center"},r.a.createElement("br",null),"Coin Ca",r.a.createElement("span",null,"\xa2"),"he"),r.a.createElement(b.a,{onSubmit:this.handleSubmit},r.a.createElement(E.a,{stacked:!0},"Username:",r.a.createElement(b.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"username",type:"text",name:"username",onChange:this.handleChange}),"Email:",r.a.createElement(b.a.Input,{fluid:!0,icon:"mail",iconPosition:"left",placeholder:"email",type:"text",name:"email",onChange:this.handleChange}),"Password:",r.a.createElement(b.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",type:"password",name:"password",onChange:this.handleChange}),"Image:",r.a.createElement(b.a.Input,{fluid:!0,icon:"image",iconPosition:"left",type:"file",name:"image",onChange:this.handleChange}),r.a.createElement(C.a,{fluid:!0,size:"large",type:"submit"},"Register"),r.a.createElement(w.a,null,"Already A Member? ",r.a.createElement(O.b,{to:"/"},"Login"))))))}}]),t}(a.Component)),j=n(340),x=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={},n.handleItemClick=function(e,t){var a=t.name;return n.setState({activeItem:a})},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.activeItem;return r.a.createElement(j.a,{stackable:!0},r.a.createElement(j.a.Item,null,r.a.createElement("img",{src:"https://vignette.wikia.nocookie.net/pawnstarsthegame/images/0/05/1924_Saint-Gaudens_Double_Eagle_Gold_Coin.png/revision/latest?cb=20160420000935",alt:"1924 St. Gaudens gold coin"})),r.a.createElement(j.a.Item,{as:O.b,to:"",name:"login",active:"login"===e,onClick:this.handleItemClick},"Login"),r.a.createElement(j.a.Item,{as:O.b,to:"profile",name:"profile",active:"profile"===e,onClick:this.handleItemClick},"Home"),r.a.createElement(j.a.Item,{as:O.b,to:"coins",name:"coins",active:"coins"===e,onClick:this.handleItemClick},"My Coins"),r.a.createElement(j.a.Item,{as:O.b,to:"",name:"login",active:"login"===e,onClick:this.handleItemClick},"Sign Out"),r.a.createElement(j.a.Item,null,r.a.createElement("h3",{style:{fontSize:"30px",color:"#c0c0c0",fontStyle:"Consolas",textShadow:"1px 1px #111"},as:"h2",textAlign:"center"}," | | | | | | Welcome to Coin Ca",r.a.createElement("span",null,"\xa2"),"he | | | | | |")))}}]),t}(a.Component),T=n(337),M=n(88),N=[{key:1,text:"None",value:""},{key:2,text:"CC",value:"CC"},{key:3,text:"D",value:"D"},{key:4,text:"P",value:"P"},{key:5,text:"S",value:"S"},{key:6,text:"W",value:"W"},{key:7,text:"O",value:"O"}],A=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).updateCoin=function(e){n.setState(Object(c.a)({},e.currentTarget.name,e.currentTarget.value))},n.handleSelectChange=function(e,t){var a=t.value;return n.setState({mint_mark:a})},n.handleSubmit=function(e,t){e.preventDefault();var a=new FormData;a.append("year",n.state.year),a.append("denomination",n.state.denomination),a.append("mint_mark",n.state.mint_mark),a.append("num_value",n.state.num_value),n.props.addCoin(a)},n.handleClear=function(){n.setState({year:"",denomination:"",mint_mark:"",num_value:null})},n.state={year:"",denomination:"",mint_mark:"",num_value:null},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(e){return r.a.createElement("div",null,r.a.createElement("h4",{style:{fontSize:"28px"}},"Add New Coin"),r.a.createElement(b.a,{form:!0,onSubmit:this.handleSubmit,onReset:this.handleClear,class:"ui form"},r.a.createElement("div",{className:"five fields"},r.a.createElement("div",{className:"field"},r.a.createElement(M.a,null,"Year Minted: "),r.a.createElement(b.a.Input,{type:"text",name:"year",placeholder:"ie: 1900",onChange:this.updateCoin,value:this.state.year})),r.a.createElement("div",{className:"field"},r.a.createElement(M.a,null,"Denomination: $"),r.a.createElement(b.a.Input,{type:"number",min:"0.005",max:"20.00",step:"any",name:"denomination",placeholder:".005 - 20.00",onChange:this.updateCoin,value:this.state.denomination}),r.a.createElement(M.a,null,"Half cent -> $20")),r.a.createElement("div",{className:"field"},r.a.createElement(M.a,null,"Numismatic Value: $"),r.a.createElement(b.a.Input,{type:"number",min:"0.01",max:"1,000,000.00",step:"any",name:"num_value",placeholder:"0.00",onChange:this.updateCoin,value:this.state.num_value}),r.a.createElement(M.a,null,".01 and up"),r.a.createElement("h3",null,r.a.createElement("a",{href:"https://www.ngccoin.com/price-guide/united-states/",target:"_blank",rel:"noopener noreferrer"},"Click Here to Search",r.a.createElement("br",null),"Numismatic Values",r.a.createElement("br",null),"(will open in new tab)"))),r.a.createElement("div",null,r.a.createElement(b.a.Select,{fluid:!0,label:"Mint Mark",options:N,placeholder:"None",value:this.state.mint_mark,onChange:this.handleSelectChange}))),r.a.createElement("div",null,r.a.createElement(C.a,{className:"teal",type:"submit"},"Add Coin to Collection"),r.a.createElement(C.a,{className:"teal",type:"reset"},"Clear"))))}}]),t}(a.Component),I=function(e){var t=0,n=e.totalNumismatic,a=e.silverMelt,o=e.copperMelt,i=e.goldMelt,l=e.coins.map(function(n){return r.a.createElement(v.a,{columns:1},r.a.createElement(v.a.Row,null,r.a.createElement(v.a.Column,{width:15,style:{fontSize:"20px"}},r.a.createElement("div",{className:"ui cards"},r.a.createElement("div",{className:"ui red fluid card"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{key:n.id,style:{fontSize:"20px"},className:"header melt"},"Date: ",n.year," | Face: $ ",n.denomination," | Mint: ",n.mint_mark," | Comp: ",function(e){var t=e.coindb;return.25===t.denomination||.1===t.denomination||.5===t.denomination&&t.year<1965?"90% Silver, 10% Copper":.01===t.denomination&&t.year<1982?"95% Copper, 5% Zinc":.5===t.denomination&&t.year>1964&&t.year<1971?"40% Silver, 60% Copper":.5===t.denomination&&1964===e.year?"90% Silver, 10% Copper":1===t.denomination&&t.year<1936?"90% Silver, 10% Copper":1===t.denomination&&t.year>1970&&t.year<1977?"40% Silver, 60% Copper":.05===t.denomination&&t.year>1941&&t.year<1946?"35% Silver, 56% Copper":.02===t.denomination?"95% Copper, 5% Tin/Zinc":.03===t.denomination&&t.year<1854?"75% Silver, 25% Copper":.03===t.denomination&&t.year>1853&&t.year<1865?"90% Silver, 10% Copper":.03===t.denomination&&t.year>1864?"75% Copper, 25% Nickel":2.5===t.denomination||5===t.denomination||10===t.denomination||20===t.denomination?"90% Gold, 10% Copper":"Not listed"}(n)," | Melt: $",function(e){var n=e.coindb,r=0,l=.0321507466,s=.00220462262;.25===n.denomination&&n.year<1965&&n.year>1891?r=a*l*6.25*.9+o*s*6.25*.1:.1===n.denomination&&n.year<1965?r=a*l*2.5*.9+o*s*2.5*.1:.5===n.denomination&&n.year<1965&&n.year>1891?r=a*l*12.5*.9+o*s*12.5*.1:.5===n.denomination&&n.year>1964&&n.year<1971?r=a*l*11.5*.4+o*s*11.5*.6:.5===n.denomination&&n.year>1970?r=o*s*11.34*.75:.01===n.denomination&&n.year<1982&&n.year>1863&&1943!==n.year?r=o*s*3.11*.95:1===n.denomination&&n.year<1936&&n.year>1877?r=a*l*26.73*.9+o*s*26.73*.1:1===n.denomination&&n.year>1970&&n.year<1977?r=a*l*24.59*.4+o*s*24.59*.6:.05===n.denomination&&n.year>1941&&n.year<1946?r=a*l*5*.35+o*s*5*.56:.02===n.denomination?r=o*s*6.22*.95:.03===n.denomination&&n.year<1854?r=a*l*.8*.75+o*s*12.3*.25:.03===n.denomination&&n.year>1853&&n.year<1865?r=a*l*.75*.9+o*s*11.6*.1:.03===n.denomination&&n.year>1864?r=o*s*1.94*.75:2.5===n.denomination?r=i*l*4.18*.9+o*s*4.18*.1:5===n.denomination?r=i*l*8.359*.9+o*s*8.359*.1:10===n.denomination?r=i*l*16.718*.9+o*s*16.718*.1:20===n.denomination&&(r=i*l*33.4362*.9+o*s*33.4362*.1);var c=Math.round(100*r)/100;return t=Math.round(100*t)/100+c,c.toFixed(2)}(n)," | Numismatic Value: $ ",n.num_value," |",r.a.createElement(C.a,{className:"ui button",onClick:e.deleteCoin.bind(null,n.id),basic:!0,color:"red"},"Remove"),r.a.createElement(C.a,{className:"ui button",onClick:e.editCoin.bind(null,n),basic:!0,color:"green"},"Edit"))))))))});return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Total melt value is $",t.toFixed(2)),r.a.createElement("br",null),r.a.createElement("h1",null,"Total numismatic value is $",n)),r.a.createElement("div",null,l))},P=function(){var e=(new Date).getHours();return e<12?"morning":e>=12&&e<17?"afternoon":"evening"},_=function(){var e=["The Constitution Only Allows Coins, Not Paper Money?  The Founding Fathers didn\u2019t trust paper money, so they didn\u2019t authorize it. It took an act of Congress in 1862 to print paper money for permanent circulation, and except for brief periods, some types remained redeemable in gold or silver until 1971, when the last U.S. Notes were discontinued.","The U.S. Dollar was Based on a Spanish Coin?  The U.S. didn\u2019t start minting its own coins until 1792. Until then, the Spanish silver 8-real coin, made in Mexico City (also known as \u201cpieces of eight\u201d), was so common that it was used as the basis for the value of the dollar. It remained legal tender in the U.S. until the mid-1800s","A Bit Was a Real Denomination \u2014 More or Less?  That same Spanish silver coin could easily be cut into eight parts (giving it its colloquial name) for smaller transactions. Those pieces were called bits, hence the expression \u201ctwo-bits,\u201d which was commonly used to describe one-quarter (2/8ths) of a dollar.","The Eagle was a real denomination?  The 10-dollar gold eagle, half-eagle and quarter-eagle coins were denominations specified in the Coinage Act of 1792. The double eagle $20 gold coin was created by that name in 1849.","All U.S. Coins Were Originally Gold, Silver, or Copper?  Coins originally had worth of their own, since they were made of specific amounts of precious or semi-precious metals. When the value of those metals exceeded the coins\u2019 worth, alloys and non-precious metals were substituted. Today\u2019s circulating coins contain no gold or silver.","There Are No Pennies in U.S. Coinage?  The coin representing 1/100th of a U.S. dollar is a cent, not a penny. The term penny came from European settlers who used the word to describe a small unit of currency in their native countries, but it has never been an official term in the U.S.","There Were 2-Cent and 3-Cent U.S. Coins Once?  When the U.S. started minting coins in 1792, a dollar bought a lot more than it does today, so a few cents were all you needed to buy everyday items like food and sundries. That made 2- and 3-cent coins practical. Two-cent coins were discontinued in 1873 and 3-cents in 1889.","A Nickel Wasn\u2019t Always a Nickel\u2014Or Made of Nickel?  We\u2019ve always had the dime, but original 5-cent coins were called half-dimes and were made of silver. The small, thin coins were hard to use and easily counterfeited, and were replaced by a copper-nickel coin in 1873.","All U.S. Coins Bear Two Mottos?  Federal law dictates that all U.S. coins carry the mottos \u201cIn God We Trust\u201d and \u201cE Pluribus Unum.\u201d","Many Coins Are Worth Millions?  In 2013, a 1794 \u201cFlowing Hair\u201d silver dollar sold at auction for over $10 million. 1913 Liberty Head nickels have sold for as much as $5 million. Pennies (OK, 1-cent coins) haven\u2019t cracked the million-dollar mark yet, but a 1943 steel Wheat Cent can bring as much as $110,000.","Counterfeiting used to be a Capital Offense?  Because early coins were more crudely made, they were relatively easy to fake, so the 1792 Coin Act made counterfeiting or defacing coins punishable by death.","Billions of Dollars Are Just Lying Around?  An estimated $10 billion in coins is held in U.S. homes. Another 58 million is left behind on airplanes worldwide, according to one estimate."];return e[Math.floor(Math.random()*e.length)]},D=(n(326),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={email:"",image:"",username:""},e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{stackable:!0,columns:3,padded:!0,className:"Profile"},r.a.createElement(v.a.Row,null,r.a.createElement(v.a.Column,{width:4},this.props.userInfo.loading?"Loading...":r.a.createElement(T.a,{image:"https://coin-app-heroku.herokuapp.com/static/profile_pics/"+this.props.userInfo.image,header:this.props.username,meta:this.props.email,description:this.props.userInfo.username,style:{fontSize:"30px"}})),r.a.createElement(v.a.Column,{width:8},r.a.createElement(y.a,{as:"h2",textAlign:"center"},"Good ",r.a.createElement(P,null)," ",this.props.userInfo.username," ",r.a.createElement("br",null),r.a.createElement("span",null)," ",r.a.createElement("br",null),"Did you know: ",r.a.createElement("br",null),r.a.createElement(_,null))),r.a.createElement(v.a.Column,{width:4},r.a.createElement("iframe",{id:"goldpriceiframe",src:"//widgets.goldprice.com/widget/index.html",seamless:"seamless",scrolling:"no",frameBorder:"0",marginWidth:"0",marginHeight:"0",style:{width:"100%",height:"350px",overflowX:"hidden"}}))))}}]),t}(a.Component)),U=n(177),V=function(e,t){return r.a.createElement("div",null,r.a.createElement("button",{className:"ui button",onClick:e.showModal.bind(null,t)},"Add New Coin"),r.a.createElement("br",null),r.a.createElement(v.a,{columns:5,style:{fontSize:"30px",textAlign:"center",fontWeight:"bold"}},r.a.createElement(v.a.Row,null,r.a.createElement(v.a.Column,null),r.a.createElement(v.a.Column,null),r.a.createElement(v.a.Column,null,r.a.createElement("h1",null,"My Cache")),r.a.createElement(v.a.Column,null),r.a.createElement(v.a.Column,null),r.a.createElement(v.a.Column,null))))};function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var W=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).handleEditChange=function(t){t.preventDefault(),e.setState(Object(c.a)({id:e.props.coinToEdit.id},t.target.name,t.target.value))},e.handleSubmit=function(){e.props.updateCoin(e.state)},e.setCoinToEdit=function(){e.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e.props.coinToEdit))},e.state={id:"",year:"",denomination:"",mint_mark:"",num_value:""},e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.setCoinToEdit()}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui-container"},r.a.createElement("h3",{style:{fontSize:"28px"}},"Edit Coin"),r.a.createElement("form",{onSubmit:this.handleSubmit,class:"ui form"},r.a.createElement("div",{className:"five fields"},r.a.createElement("div",{className:"field"},r.a.createElement(M.a,null,"Year"),r.a.createElement("input",{type:"text",name:"year",onChange:this.handleEditChange,value:this.state.year})),r.a.createElement("div",{className:"field"},r.a.createElement(M.a,null,"Denomination"),r.a.createElement("input",{type:"text",name:"denomination",onChange:this.handleEditChange,value:this.state.denomination})),r.a.createElement("div",{className:"field"},r.a.createElement(M.a,null,"Mint Mark"),r.a.createElement("input",{type:"text",name:"mint_mark",onChange:this.handleEditChange,value:this.state.mint_mark})),r.a.createElement("div",{className:"field"},r.a.createElement(M.a,null,"Numismatic Value: $"),r.a.createElement(b.a.Input,{type:"number",min:"0.01",max:"1,000,000.00",step:"any",name:"num_value",placeholder:"0.00",onChange:this.updateCoin,value:this.state.num_value}))),r.a.createElement("div",{className:"centerme"},r.a.createElement(C.a,{className:"teal",type:"submit"},"Edit Coin"),r.a.createElement(C.a,{className:"teal",onClick:this.props.closeModal},"Close"))))}}]),t}(a.Component);n(327);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var $=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).numismaticValue=function(){for(var t=0,n=e.state.coins,a=0;a<n.length;a++)null!==n[a].num_val&&(t+=parseFloat(n[a].num_value));e.setState({totalNumismatic:t})},e.addCoin=function(){var t=Object(u.a)(s.a.mark(function t(n){var a,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://coin-app-heroku.herokuapp.com/coins/v1/",{method:"POST",body:n,credentials:"include",headers:{enctype:"multipart/form-data"}});case 3:if(200===(a=t.sent).status){t.next=7;break}throw Error("404 from server");case 7:return t.next=9,a.json();case 9:r=t.sent,console.log(r.data,"Coin DATAAAA"),e.setState({coins:r.data,showCoinModal:!1}),t.next=18;break;case 14:return t.prev=14,t.t0=t.catch(0),console.log(t.t0,"addCoin error"),t.abrupt("return",t.t0);case 18:e.getCoins();case 19:case"end":return t.stop()}},t,null,[[0,14]])}));return function(e){return t.apply(this,arguments)}}(),e.showModal=function(t){console.log(t,"<-coin in showModal"),e.setState({coinToAdd:t,showCoinModal:!e.state.showEditModal})},e.closeModal=function(){e.setState({showCoinModal:!1})},e.closeEditModal=function(){e.setState({showEditModal:!1})},e.getSilverValue=Object(u.a)(s.a.mark(function t(){var n,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.quandl.com/api/v3/datasets/CHRIS/CME_SI1?api_key=eJytx4A9GTBYAKVhEU3H",{method:"GET",headers:{"Content-type":"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,console.log(a.dataset.data[0][2],"MELT JSON"),e.setState({silverMelt:a.dataset.data[0][2]}),t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(0),console.log(t.t0,"getSilverValue error"),t.abrupt("return",t.t0);case 15:case"end":return t.stop()}},t,null,[[0,11]])})),e.getCopperValue=Object(u.a)(s.a.mark(function t(){var n,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.quandl.com/api/v3/datasets/CHRIS/CME_HG1?api_key=eJytx4A9GTBYAKVhEU3H",{method:"GET",headers:{"Content-type":"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,e.setState({copperMelt:a.dataset.data[0][2]}),t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),console.log(t.t0,"getCopperValue error"),t.abrupt("return",t.t0);case 14:case"end":return t.stop()}},t,null,[[0,10]])})),e.getGoldValue=Object(u.a)(s.a.mark(function t(){var n,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.quandl.com/api/v3/datasets/CHRIS/CME_GC1?api_key=eJytx4A9GTBYAKVhEU3H",{method:"GET",headers:{"Content-type":"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,e.setState({goldMelt:a.dataset.data[0][2]}),t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),console.log(t.t0,"getGoldValue error"),t.abrupt("return",t.t0);case 14:case"end":return t.stop()}},t,null,[[0,10]])})),e.getCoins=Object(u.a)(s.a.mark(function t(){var n,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://coin-app-heroku.herokuapp.com/coins/v1/"+e.props.userInfo.id,{method:"GET",credentials:"include",headers:{enctype:"multipart/form-data"}});case 3:return n=t.sent,t.next=6,n.json();case 6:return a=t.sent,t.t0=console,t.next=10,a;case 10:if(t.t1=t.sent,t.t0.log.call(t.t0,t.t1,"<-coinsResponse"),200===a.status.code){t.next=14;break}throw Error("404 from server");case 14:e.setState({coins:a.data}),t.next=21;break;case 17:return t.prev=17,t.t2=t.catch(0),console.log(t.t2,"err from getCoins"),t.abrupt("return",t.t2);case 21:e.numismaticValue();case 22:case"end":return t.stop()}},t,null,[[0,17]])})),e.handleFormChange=function(t){e.setState({coinToAdd:R({},e.state.coinToAdd,Object(c.a)({},t.currentTarget.name,t.currentTarget.value))})},e.handleEditChange=function(t){e.setState({coinToEdit:R({},e.state.coinToEdit,Object(c.a)({},t.target.name,t.target.value))})},e.updateCoin=function(){var t=Object(u.a)(s.a.mark(function t(n){var a,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("coin in updateCoin: ",n),t.prev=1,t.next=4,fetch("https://coin-app-heroku.herokuapp.com/coins/v1/"+n.id,{method:"PUT",credentials:"include",body:JSON.stringify(n),headers:{"Content-type":"application/json"}});case 4:if(a=t.sent,console.log(a,"editRequest"),200===a.status){t.next=8;break}throw Error("edit request not working");case 8:return t.next=10,a.json();case 10:if(r=t.sent,console.log("editResponse: ",r),200===r.status.code){t.next=14;break}throw Error("edit request not working");case 14:e.state.coins.map(function(e){return e===r.data.id&&(e=r.data),e}),e.setState({coins:[].concat(Object(U.a)(e.state.coins),[r.data]),showEditModal:!1}),t.next=22;break;case 18:return t.prev=18,t.t0=t.catch(1),console.log(t.t0,"error updateCoin"),t.abrupt("return",t.t0);case 22:case"end":return t.stop()}},t,null,[[1,18]])}));return function(e){return t.apply(this,arguments)}}(),e.editCoin=function(t){console.log(t,"COIN in editCoin"),e.setState({coinToEdit:R({},t),showEditModal:!0})},e.deleteCoin=function(){var t=Object(u.a)(s.a.mark(function t(n){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://coin-app-heroku.herokuapp.com/coins/v1/"+n,{method:"DELETE",credentials:"include",headers:{enctype:"multipart/form-data"}});case 3:if(200===(a=t.sent).status){t.next=6;break}throw Error("An error occurred on delete");case 6:return t.next=8,a.json();case 8:t.sent,e.setState({coins:e.state.coins.filter(function(e){return e.id!==n})}),t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(0),console.log(t.t0,"error in delete"),t.abrupt("return",t.t0);case 16:e.getCoins();case 17:case"end":return t.stop()}},t,null,[[0,12]])}));return function(e){return t.apply(this,arguments)}}(),e.state={id:"",coins:[],showCoinModal:!1,showEditModal:!1,silverMelt:null,copperMelt:null,goldMelt:null,totalNumismatic:null,coinToAdd:{year:"",denomination:"",mint_mark:"",number_minted:""},editCoinId:null,coinToEdit:{id:"",year:"",denomination:"",mint_mark:"",num_value:""}},e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getCoins(),this.getSilverValue(),this.getCopperValue(),this.getGoldValue()}},{key:"render",value:function(){return r.a.createElement("div",{className:"CoinContainer"},this.state.showCoinModal?r.a.createElement(A,{addCoin:this.addCoin,coinToAdd:this.state.coinToAdd,handleFormChange:this.handleFormChange}):null,r.a.createElement(V,{showModal:this.showModal}),this.state.showEditModal?r.a.createElement(W,{updateCoin:this.updateCoin,coinToEdit:this.state.coinToEdit,closeEditModal:this.closeEditModal}):null,this.state.coins?r.a.createElement(I,{coins:this.state.coins,deleteCoin:this.deleteCoin,editCoin:this.editCoin,silverMelt:this.state.silverMelt,copperMelt:this.state.copperMelt,goldMelt:this.state.goldMelt,totalNumismatic:this.state.totalNumismatic}):null)}}]),t}(a.Component);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var B=function(){return r.a.createElement("div",null,"Page does not exist :-o")},q=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).logIn=function(){var t=Object(u.a)(s.a.mark(function t(n){var a,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://coin-app-heroku.herokuapp.com/user/login",{method:"POST",credentials:"include",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,e.setState(function(){return z({},r.data,{loading:!1,isAuth:!0})}),t.abrupt("return",r);case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}(),e.register=function(){var t=Object(u.a)(s.a.mark(function t(n){var a,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.prev=1,t.next=4,fetch("https://coin-app-heroku.herokuapp.com/user/register",{method:"POST",credentials:"include",body:n,headers:{enctype:"multipart/form-data"}});case 4:return a=t.sent,t.next=7,a.json();case 7:return r=t.sent,console.log(r),e.setState(z({},r.data,{loading:!1,isAuth:!0})),t.abrupt("return",r);case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}},t,null,[[1,13]])}));return function(e){return t.apply(this,arguments)}}(),e.logout=function(){e.setState({isAuth:!1})},e.state={id:"",username:"",password:"",email:"",image:"",loading:!0,isAuth:!1},e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("main",null,this.state.isAuth?r.a.createElement(x,{logout:this.logout,isAuth:this.state.isAuth}):null,r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(k,Object.assign({},t,{logIn:e.logIn}))}}),r.a.createElement(g.a,{exact:!0,path:"/register",render:function(t){return r.a.createElement(S,Object.assign({},t,{register:e.register}))}}),r.a.createElement(g.a,{exact:!0,path:"/profile",render:function(t){return r.a.createElement(D,Object.assign({},t,{userInfo:e.state}))}}),r.a.createElement(g.a,{exact:!0,path:"/coins",render:function(t){return r.a.createElement($,Object.assign({},t,{userInfo:e.state}))}}),r.a.createElement(g.a,{component:B})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O.a,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[187,1,2]]]);
//# sourceMappingURL=main.c4ab67a7.chunk.js.map