(this["webpackJsonptic-tac-toe-hooks"]=this["webpackJsonptic-tac-toe-hooks"]||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(21)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(6),l=t.n(r);t(12),t(13);function o(e){var n=e.squares,t=e.onClick,a=e.winningPosition,r=e.endgame,l=function(e){return c.a.createElement(b,{index:e,value:n[e],onClick:function(){return t(e)},winningPosition:a,endgame:r})};return c.a.createElement("div",{className:"board-container"},c.a.createElement("div",{className:"board"},c.a.createElement("div",{className:"board-row"},l(0),l(1),l(2)),c.a.createElement("div",{className:"board-row"},l(3),l(4),l(5)),c.a.createElement("div",{className:"board-row"},l(6),l(7),l(8))))}t(14);function i(){return c.a.createElement("div",{className:"circle"})}t(15);function u(){return c.a.createElement("div",{className:"cross"},c.a.createElement("div",null),c.a.createElement("div",null))}var s=t(4),m=t(1);t(16);function f(){var e=Object(a.useState)([Array(9).fill(null)]),n=Object(m.a)(e,2),t=n[0],r=n[1],l=Object(a.useState)(0),i=Object(m.a)(l,2),u=i[0],f=i[1],b=Object(a.useState)(!0),g=Object(m.a)(b,2),h=g[0],O=g[1],j=Object(a.useState)(!1),w=Object(m.a)(j,2),N=w[0],k=w[1],C=Object(a.useState)(""),p=Object(m.a)(C,2),y=p[0],S=p[1],x=Object(a.useState)([]),G=Object(m.a)(x,2),P=G[0],W=G[1],q=Object(a.useState)(!1),T=Object(m.a)(q,2),X=T[0],A=T[1];Object(a.useEffect)((function(){N||B(J())})),Object(a.useEffect)((function(){F()}),[t,N]);var J=function(){return t[t.length-1]},B=function(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<n.length;t++){var a=Object(m.a)(n[t],3),c=a[0],r=a[1],l=a[2];e[c]&&e[c]===e[r]&&e[c]===e[l]&&(k(!0),S(e[c]),W(n[t]))}return null},F=function(){var e=J().every((function(e){return!!e})),n=!X&&e;console.log("entrou no handleEndgame"),A(n||N)};return c.a.createElement("div",{id:"game"},c.a.createElement(d,{title:"React Hooks Tic Tac Toe",hasWinner:N,endgame:X,handleNewGame:function(){return r([Array(9).fill(null)]),f(0),O(!0),k(!1),S(""),W([]),void A(!1)}}),c.a.createElement("div",{className:"container"},c.a.createElement(o,{squares:t[u],onClick:function(e){return function(e){var n=t.slice(0,u+1),a=Object(s.a)(n[n.length-1]);if(!a[e]&&!N){a[e]=h?"X":"O";var c=[].concat(Object(s.a)(n),[a]);r(c),f(n.length),O(!h)}}(e)},winningPosition:P,endgame:X&&!N}),c.a.createElement(E,{status:y?"Player ".concat(y," wins!"):X?"Endgame!":"Next player: ".concat(h?"X":"O"),hasWinner:N},t.map((function(e,n){return c.a.createElement(v,{key:n,index:n,onClick:function(e){return f(n=e),void O(n%2===0);var n}})})))))}t(17);function d(e){var n=e.title,t=e.hasWinner,a=e.endgame,r=e.handleNewGame;return c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,n),(t||a)&&c.a.createElement("button",{className:"new-game-btn",onClick:function(){return r()}},"New game!"))}t(18);function E(e){var n=e.children,t=e.status,a=e.hasWinner;return c.a.createElement("div",{className:"history"},c.a.createElement("h2",null,t),!a&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Game steps:"),c.a.createElement("ol",null,n)))}t(19);function v(e){var n=e.index,t=e.onClick,a=n?"Go to move #".concat(n):"Go to game start";return c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){return t(n)}},a))}t(20);function b(e){var n=e.index,t=e.value,a=e.onClick,r=e.winningPosition,l=e.endgame;return c.a.createElement("button",{className:"square ".concat("".concat(!!t&&t.toLowerCase()," ").concat(r.includes(n)?"winner":""," ").concat(l?"endgame":"")),onClick:function(){return a()}},"X"===t&&c.a.createElement(u,null),"O"===t&&c.a.createElement(i,null))}function g(){return c.a.createElement(f,null)}l.a.render(c.a.createElement(g,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.eabcc492.chunk.js.map