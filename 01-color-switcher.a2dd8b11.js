!function(){var t=document.querySelector('button[data-start=""'),e=document.querySelector('button[data-stop=""'),n=document.querySelector("body"),o=null;t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,o=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(o),console.log(o)}))}();
//# sourceMappingURL=01-color-switcher.a2dd8b11.js.map