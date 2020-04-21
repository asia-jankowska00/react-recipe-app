(this["webpackJsonpreact-recipe-app"]=this["webpackJsonpreact-recipe-app"]||[]).push([[0],{28:function(e,t,a){e.exports=a(44)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),i=(a(33),a(34),a(9)),o=a(11),s=(a(35),a(6)),m=a(3),u=function(){return r.a.createElement("header",{className:"flex bg-blue-900 text-white p-4 px-16 justify-between"},r.a.createElement("div",null,r.a.createElement(i.b,{to:"/",className:""},r.a.createElement("h1",{className:"inline text-4xl font-semibold Merriweather-700 text-center"},r.a.createElement(s.a,{icon:m.f,className:"mx-4 transform hover:scale-110"}),r.a.createElement("p",{className:"inline transform hover:scale-110"},"it just forks!"))),r.a.createElement("p",{className:"inline ml-12 text-center"},"Find culinary inspiration and enhance your diet")),r.a.createElement("nav",{className:"flex "},r.a.createElement(i.b,{to:"/",className:"flex align-middle text-white Merriweather-400 px-4 py-2 hover:underline transform hover:scale-110"},r.a.createElement("button",null,"Search recipes")),r.a.createElement(i.b,{to:"/favorites",className:"flex align-middle text-white Merriweather-400 px-4 py-2 hover:underline transform hover:scale-110"},r.a.createElement("button",null,"Favorites"))))},f=a(4),p=a(12),d=a(10),b=a.n(d),h=a(14),x=Object(n.createContext)(),v=function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),o=Object(f.a)(i,2),s=o[0],m=o[1],u=Object(n.useState)(""),p=Object(f.a)(u,2),d=p[0],v=p[1],E=Object(n.useState)([{parameter:"vegan",title:"Vegan",type:"health"},{parameter:"vegetarian",title:"Vegetarian",type:"health"},{parameter:"low-carb",title:"Low-carb",type:"diet"},{parameter:"low-fat",title:"Low-fat",type:"diet"}]),j=Object(f.a)(E,2),g=j[0],w=j[1],y=Object(n.useState)([]),O=Object(f.a)(y,2),N=O[0],k=O[1],S=function(){var e="";N.forEach((function(t){e+="&".concat(t.type,"=").concat(t.parameter)})),v(e),console.log(e)};Object(n.useEffect)(S,[N]);var F=function(){var e=Object(h.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===s){e.next=10;break}return e.next=3,fetch("https://api.edamam.com/search?q=".concat(s).concat(d,"&app_id=").concat("560a76dc","&app_key=").concat("d2cf812100729746a80f302c5ecd16f2","&from=0&to=50"));case 3:return t=e.sent,console.log(d),e.next=7,t.json();case 7:a=e.sent,console.log(a),l(a.hits);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(x.Provider,{value:{dietaryOptions:g,setDietaryOptions:w,selectedProperties:N,setSelectedProperties:k,recipes:c,setRecipes:l,getRecipes:F,doSearch:function(e){e.preventDefault(),F()},getSearchQuery:function(e){m(e.target.value)},buildQueryString:S}},e.children)},E=function(e){var t=Object(n.useContext)(x),a=t.selectedProperties,c=t.setSelectedProperties,l=function(){a.includes(e.option)?o():i(),e.dropdownLabel.includes(e.option.title)?e.setDropdownLabel(Object(p.a)(e.dropdownLabel.filter((function(t){return t!==e.option.title})))):e.setDropdownLabel([].concat(Object(p.a)(e.dropdownLabel),[e.option.title]))},i=function(){c([].concat(Object(p.a)(a),[e.option]))},o=function(){c(Object(p.a)(a.filter((function(t){return t!==e.option}))))};return r.a.createElement("li",{onClick:l,parameter:e.option.parameter,className:"cursor-pointer hover:bg-gray-200 px-4 py-2"},r.a.createElement("input",{type:"checkbox",onChange:l,checked:!!a.includes(e.option)}),r.a.createElement("p",{className:"inline ml-2"},e.option.title))},j=function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useContext)(x),i=l.dietaryOptions,o=l.selectedProperties,u=Object(n.useState)([]),p=Object(f.a)(u,2),d=p[0],b=p[1],h=Object(n.useRef)();Object(n.useEffect)((function(){return document.addEventListener("mousedown",v),function(){document.removeEventListener("mousedown",v)}}),[]);var v=function(e){h.current.contains(e.target)||c(!1)};return r.a.createElement("div",{ref:h,className:"relative w-3/12"},r.a.createElement("div",{onClick:function(){c(!a)},className:"flex justify-between align-center bg-white border border-gray-400 shadow-inner px-4 py-2"},r.a.createElement("p",{className:"inline-block self-center"},0===o.length?"Diet preferences":d.toString().substring(0,20)+"..."),r.a.createElement(s.a,{icon:m.b,className:"ml-4 inline-block self-center"})),r.a.createElement("ul",{className:!0===a?"block w-full absolute bg-white border border-gray-400 shadow-inner":"hidden w-full bg-white border border-gray-400 shadow-inner"},i.map((function(e){return r.a.createElement(E,{key:e.parameter,dropdownLabel:d,setDropdownLabel:b,option:e})}))))},g=function(){var e=Object(n.useContext)(x),t=e.getSearchQuery,a=e.doSearch;return r.a.createElement("div",{className:"flex justify-around py-8"},r.a.createElement("form",{className:"flex w-3/4 justify-around items-start relative text-gray-700"},r.a.createElement("input",{type:"text",placeholder:"Search recipes...",onInput:t,className:"w-5/12 border border-gray-400 shadow-inner px-4 py-2"}),r.a.createElement(j,null),r.a.createElement("button",{onClick:a,className:"w-3/12 bg-blue-900 text-white Merriweather-400 shadow px-4 py-2 transform hover:scale-110"},"Search")))},w=a(15),y=Object(n.createContext)(),O=function(e){return r.a.createElement(y.Provider,{value:{APP_ID:"560a76dc",APP_KEY:"d2cf812100729746a80f302c5ecd16f2"}},e.children)},N=Object(n.createContext)(),k=function(e){var t=Object(n.useContext)(y),a=t.APP_KEY,c=t.APP_ID,l=Object(n.useState)([]),i=Object(f.a)(l,2),o=i[0],s=i[1],u=Object(n.useState)([]),d=Object(f.a)(u,2),x=d[0],v=d[1],E=Object(n.useState)(""),j=Object(f.a)(E,2),g=j[0],O=j[1],k=Object(n.useState)(),S=Object(f.a)(k,2),F=S[0],C=S[1],P=function(e){s([].concat(Object(p.a)(o),[e])),O("Remove favorite"),C(m.e)},_=function(e){s(Object(p.a)(o.filter((function(t){return t!==e})))),O("Add favorite"),C(w.a)},L=function(){var e=Object(h.a)(b.a.mark((function e(){var t,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===o.length){e.next=12;break}return t="",o.forEach((function(e){return t+="&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_".concat(e)})),e.next=5,fetch("https://api.edamam.com/search?".concat(t,"&app_id=").concat(c,"&app_key=").concat(a));case 5:if(!(n=e.sent).ok){e.next=12;break}return e.next=9,n.json();case 9:r=e.sent,console.log(r),v(r);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(N.Provider,{value:{favorites:o,setFavorites:s,favoriteRecipes:x,setFavoriteRecipes:v,doFavoriteSearch:function(e){e.preventDefault(),L()},getFavoriteRecipes:L,updateFavorites:function(e){console.log(e),o.includes(e)?_(e):P(e)},addFavorite:P,deleteFavorite:_,message:g,setMessage:O,heart:F,setHeart:C}},e.children)},S=function(e){var t=e.recipe.recipe||e.recipe,a=t.uri.split("_")[1],c=Object(n.useContext)(N),l=c.favorites,o=c.updateFavorites;return Object(n.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(l))}),[l]),r.a.createElement("div",{className:"flex flex-col bg-white shadow p-4 w-1/4 mx-6 mt-6"},r.a.createElement("img",{src:t.image,alt:"recipe",className:"object-contain w-full"}),r.a.createElement("h2",{className:"text-orange-600 text-2xl font-bold my-6"},t.label.length<25?t.label:t.label.substring(0,25)+"..."),r.a.createElement("p",{className:"text-gray-500"},"Source:"," ",r.a.createElement("a",{href:t.url,className:"underline"},t.source," ",r.a.createElement(s.a,{icon:m.d}))),r.a.createElement("div",{className:"flex justify-between mt-8"},r.a.createElement(i.b,{to:"/recipe/".concat(a)},r.a.createElement("button",{className:"flex w-full justify-left p-4 bg-blue-900 text-white"},r.a.createElement("p",{className:"inline self-center"},"View recipe info"),r.a.createElement(s.a,{icon:m.a,className:"ml-4  self-center"}))),r.a.createElement("button",{onClick:function(){o(a)},className:"flex w-1/3 justify-right text-orange-600"},r.a.createElement(s.a,{icon:l.includes(a)?m.e:w.a,className:"mt-1 mr-4 text-2xl inline-block self-center"}),r.a.createElement("p",{className:"w-3/5 inline self-center"},l.includes(a)?"Remove favorite":"Add favorite"))))},F=function(){var e=Object(n.useContext)(x).recipes;Object(n.useContext)(N).setFavorites;return r.a.createElement("div",{className:"flex flex-wrap justify-center"},e.map((function(e){return r.a.createElement(S,{recipe:e,key:e.recipe.uri.split("_")[1]})})))},C=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-gray-700 text-4xl font-semibold Merriweather-700 text-center py-4"},"Search recipes"),r.a.createElement("hr",null),r.a.createElement(g,null),r.a.createElement("hr",null),r.a.createElement(F,null))},P=function(e){var t=e.match,a=Object(n.useContext)(y),c=a.APP_KEY,l=a.APP_ID,i=Object(n.useContext)(N),u=i.favorites,p=i.updateFavorites,d=Object(n.useState)({}),x=Object(f.a)(d,2),v=x[0],E=x[1],j=Object(n.useState)(""),g=Object(f.a)(j,2),O=g[0],k=g[1],S=Object(n.useState)([]),F=Object(f.a)(S,2),C=F[0],P=F[1],_=function(){var e=Object(h.a)(b.a.mark((function e(){var a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_".concat(t.params.id),e.next=3,fetch("https://api.edamam.com/search?id=".concat(a,"&app_id=").concat(l,"&app_key=").concat(c));case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:r=e.sent,console.log(r[0]),E(r[0]),L();case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e,t="";for(e in v.healthLabels)t+="".concat(v.healthLabels[e],"; ");k(t)};Object(n.useEffect)((function(){L(),function(){var e,t=[];for(e in v.ingredientLines)t.push(v.ingredientLines[e]);P(t)}()}),[v]),Object(n.useEffect)((function(){_()}),[]);var R=Object(o.e)();return r.a.createElement("div",{className:"text-gray-500 flex flex-col items-center justify-center relative "},r.a.createElement("div",{onClick:R.goBack,className:"cursor-pointer flex items-center text-orange-600 p-4"},r.a.createElement(s.a,{icon:m.c,className:"mr-4 text-2xl bg-white rounded-full inline-block self-center"}),"Back"),r.a.createElement("div",{className:"flex flex-col bg-white shadow p-8 w-1/2 mx-6 mb-6"},r.a.createElement("img",{src:v.image,alt:"recipe",className:"object-cover h-full"}),r.a.createElement("div",{className:"flex justify-between py-8 items-center"},r.a.createElement("h2",{className:"text-orange-600 w-2/3 text-3xl font-bold"},v.label),r.a.createElement("div",{className:"flex w-1/3 justify-left"},r.a.createElement("button",{onClick:function(){p(t.params.id)},className:"flex w-full justify-center text-orange-600"},r.a.createElement(s.a,{icon:u.includes(t.params.id)?m.e:w.a,className:"mt-1 mr-4 text-2xl inline-block self-center"}),r.a.createElement("p",{className:"inline text-left self-center"},u.includes(t.params.id)?"Remove favorite":"Add favorite")))),r.a.createElement("hr",null),r.a.createElement("div",{className:"py-4"},r.a.createElement("p",{className:"text-gray-700 py-2 text-xl"},"Source:"," ",r.a.createElement("a",{href:v.url,className:"underline"},v.source," ",r.a.createElement(s.a,{icon:m.d}))),r.a.createElement("p",{className:"py-2"},O),r.a.createElement("div",{className:"py-2"},"Calories per 100g:"," ",r.a.createElement("p",{className:"inline text-gray-700"},Math.floor(v.calories/v.totalWeight*100).toString()+" kcal"))),r.a.createElement("hr",null),r.a.createElement("div",{className:"py-4"},r.a.createElement("h3",{className:"py-2 text-gray-700 text-xl"},"Ingredients:"),r.a.createElement("ul",{className:"py-2 text-gray-600"},C.map((function(e){return r.a.createElement("li",{key:e,className:"mx-4 py-2 list-disc"},e)})))),r.a.createElement("hr",null),r.a.createElement("h1",{className:"py-2"},"Recipe ID: ",t.params.id)))},_=function(){var e=Object(n.useContext)(N),t=e.favorites,a=(e.setFavorites,e.getFavoriteRecipes),c=e.favoriteRecipes;return Object(n.useEffect)((function(){a()}),[t]),r.a.createElement("div",null,r.a.createElement("h1",{className:"text-gray-700 text-4xl font-semibold Merriweather-700 text-center py-4"},"Favorites"),r.a.createElement("hr",null),r.a.createElement("div",{className:"flex flex-wrap justify-center"},c.map((function(e){return r.a.createElement(S,{key:e.uri.split("_")[1],recipe:e})}))))};var L=function(){var e=Object(n.useContext)(N).setFavorites;return Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem("favorites"));null!=t&&e(t)}),[]),r.a.createElement(i.a,null,r.a.createElement("div",{className:"mb-8"},r.a.createElement(u,null),r.a.createElement(o.a,{path:"/recipe/:id",component:P}),r.a.createElement(o.a,{path:"/",exact:!0,component:C}),r.a.createElement(o.a,{path:"/favorites",component:_})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null,r.a.createElement(v,null,r.a.createElement(k,null,r.a.createElement(L,null))))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.ae869435.chunk.js.map