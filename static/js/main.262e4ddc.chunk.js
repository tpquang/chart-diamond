(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{113:function(e,t,r){},207:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(27),i=r.n(c),o=(r(113),r(29)),d=r.n(o),u=r(46),s=r(47),l=r(210),f=(r(114),r(52)),p=r.n(f),b=r(15);var m=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)([]),i=Object(s.a)(c,2),o=i[0],f=i[1],m=Object(n.useState)([]),x=Object(s.a)(m,2),j=x[0],h=x[1],g=Object(n.useState)([]),y=Object(s.a)(g,2),k=y[0],O=y[1],_=Object(n.useState)(0),v=Object(s.a)(_,2),I=v[0],w=v[1];Object(n.useEffect)((function(){var e=setTimeout((function(){w(I+1),E()}),1e4);return function(){clearTimeout(e)}}),[I]);var S=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f([]),p.a.get("https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=3&sortBy=fixed_price&order=asc&name=purple%20diamond").then((function(e){e.data.list.forEach((function(e){e.fixed_price=(new Intl.NumberFormat).format(e.fixed_price)})),f(e.data.list)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h([]),p.a.get("https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=3&sortBy=fixed_price&name=&order=asc&saleType&category=13&tokenType").then((function(e){e.data.list.forEach((function(e){e.fixed_price=(new Intl.NumberFormat).format(e.fixed_price)})),h(e.data.list)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O([]),p.a.get("https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=3&sortBy=fixed_price&name=&order=asc&saleType&category=17&tokenType").then((function(e){e.data.list.forEach((function(e){e.fixed_price=(new Intl.NumberFormat).format(e.fixed_price)})),O(e.data.list)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a([]),p.a.get("https://market-api.radiocaca.com/nft-sales?saleType&category=16&tokenType&tokenId=0&token_standard=BEP1155&pageNo=1&pageSize=3&sortBy=fixed_price&order=asc&min_count=1&max_count=500").then((function(e){e.data.list.forEach((function(e){e.fixed_price=(new Intl.NumberFormat).format(e.fixed_price)})),a(e.data.list)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return e.next=4,T([]);case 4:return e.next=6,N([]);case 6:return e.next=8,M([]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){E()}),[]);var F=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return Object(b.jsx)("b",{style:{color:"green"},children:e})}},{title:"Price",dataIndex:"fixed_price",key:"fixed_price",render:function(e){return Object(b.jsx)("b",{children:e})}},{title:"Mua",dataIndex:"id",key:"id",render:function(e){return Object(b.jsx)("a",{target:"_blank",href:"https://market.radiocaca.com/#/market-place/"+e,style:{padding:10,backgroundColor:"lightgrey",border:0,borderRadius:5},children:"Mua"})}}],B=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return Object(b.jsx)("b",{style:{color:"#8f02d7"},children:e})}},{title:"Price",dataIndex:"fixed_price",key:"fixed_price",render:function(e){return Object(b.jsx)("b",{children:e})}},{title:"Mua",dataIndex:"id",key:"id",render:function(e){return Object(b.jsx)("a",{target:"_blank",href:"https://market.radiocaca.com/#/market-place/"+e,style:{padding:10,backgroundColor:"lightgrey",border:0,borderRadius:5},children:"Mua"})}}],C=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return Object(b.jsx)("b",{style:{color:"#a5a51a"},children:e})}},{title:"Price",dataIndex:"fixed_price",key:"fixed_price",render:function(e){return Object(b.jsx)("b",{children:e})}},{title:"Image",dataIndex:"image_url",key:"image_url",render:function(e){return Object(b.jsx)("img",{src:e,style:{width:50,height:50}})}},{title:"Mua",dataIndex:"id",key:"id",render:function(e){return Object(b.jsx)("a",{target:"_blank",href:"https://market.radiocaca.com/#/market-place/"+e,style:{padding:10,backgroundColor:"lightgrey",border:0,borderRadius:5},children:"Mua"})}}],P=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return Object(b.jsx)("b",{style:{color:"darkGray"},children:e})}},{title:"Price",dataIndex:"fixed_price",key:"fixed_price",render:function(e){return Object(b.jsx)("b",{children:e})}},{title:"Mua",dataIndex:"id",key:"id",render:function(e){return Object(b.jsx)("a",{target:"_blank",href:"https://market.radiocaca.com/#/market-place/"+e,style:{padding:10,backgroundColor:"lightgrey",border:0,borderRadius:5},children:"Mua"})}}];return Object(b.jsxs)("div",{style:{textAlign:"center"},children:[Object(b.jsxs)("div",{style:{display:"flex"},children:[Object(b.jsx)(l.a,{style:{margin:20},dataSource:r&&r,columns:F,pagination:!1}),Object(b.jsx)(l.a,{style:{margin:20},dataSource:o&&o,columns:B,pagination:!1})]}),Object(b.jsxs)("div",{style:{display:"flex"},children:[Object(b.jsx)(l.a,{style:{margin:20},dataSource:k&&k,columns:P,pagination:!1}),Object(b.jsx)(l.a,{style:{margin:20},dataSource:j&&j,columns:C,pagination:!1})]})]})};var x=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(m,{})})},j=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,211)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),j()}},[[207,1,2]]]);
//# sourceMappingURL=main.262e4ddc.chunk.js.map