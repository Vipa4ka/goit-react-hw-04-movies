(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{32:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b})),n.d(t,"e",(function(){return h})),n.d(t,"d",(function(){return d}));var c=n(34),r=n.n(c),a=n(36),i="https://api.themoviedb.org/3",o="3ffe89a3ccd04801febc3db968502921";function s(){return u.apply(this,arguments)}function u(){return(u=Object(a.a)(r.a.mark((function e(){var t,n,c,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(t,n);case 4:if(!(c=e.sent).ok){e.next=11;break}return e.next=8,c.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return s("".concat(i,"/trending/all/day?api_key=").concat(o))}function l(e){return s("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(e))}function b(e){return s("".concat(i,"/movie/").concat(e,"?api_key=").concat(o))}function h(e){return s("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(o))}function d(e){return s("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(o))}},59:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var c=n(57),r=n(33),a=n(0),i=n(2),o=n(8),s=n(40),u=n.n(s),f=n(15),l=n.n(f),b=n(32),h=n(1);function d(){var e,t=Object(a.useState)([]),n=Object(r.a)(t,2),s=n[0],f=n[1],d=Object(i.i)().url,p=Object(i.g)(),v=Object(i.f)(),j=(null===(e=u.a.parse(p.search))||void 0===e?void 0:e.query)||"";return Object(a.useEffect)((function(){""!==j&&b.b(j).then((function(e){var t=e.results;f(t)})).catch((function(e){return console.log(e)}))}),[j]),Object(h.jsxs)("div",{children:[Object(h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===e.target.elements.searching.value.trim())return alert("Enter a value to search.");v.push(Object(c.a)(Object(c.a)({},p),{},{search:"query=".concat(e.target.elements.searching.value)}))},children:[Object(h.jsx)("input",{className:l.a.moviesInput,type:"text",placeholder:"Search movies",name:"searching"}),Object(h.jsx)("button",{type:"submit",children:"Search"})]}),s&&Object(h.jsx)("ul",{className:l.a.moviesPage,children:s.map((function(e){var t=e.id,n=e.title,c=e.name,r=e.poster_path;return Object(h.jsx)("li",{children:Object(h.jsxs)(o.b,{to:{pathname:"".concat(d,"/").concat(t),state:{backUrl:p}},children:[Object(h.jsx)("img",{src:null!==r?"https://image.tmdb.org/t/p/w500".concat(r):"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",alt:null!==n&&void 0!==n?n:c,width:"220px",height:"350px"}),Object(h.jsx)("p",{className:l.a.title,children:n})]})},t)}))})]})}}}]);
//# sourceMappingURL=MoviesPage.2d723eb4.chunk.js.map