(()=>{"use strict";function e(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,u=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw u}}}}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function r(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}document.querySelector("body");var t,a=document.querySelector(".divMoney"),o=document.querySelector(".moneySmalls"),u=document.querySelector("#btnWithdrawals"),i=function(){function n(e,r){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.value=e,this.amount=r}var u,i,f;return u=n,(i=[{key:"withdrawals",value:function(r,u){var i,f=!0,s=!1,v=e(c);try{for(v.s();!(i=v.n()).done;){var m=i.value;if(console.log(r,u),r<=u){if(r>0){var y=Math.floor(r/m.value);if(0!=(t=y>m.amount?m.amount*m.value:y*m.value)){l.push(new n(m.value,t/m.value)),m.amount=m.amount-t/m.value;for(var d=0;d<t/m.value;d++){1==f&&(o.innerHTML="$ "+r,f=!1);var h=document.createElement("img");h.src="assets/img/".concat(m.value,".jpg"),h.classList.add("bills"),h.innerHTML=h,a.append(h)}}r-=t}}else s=!0}}catch(e){v.e(e)}finally{v.f()}if(1!=s)return c;o.innerHTML="$ "+r,a.append("No hay monto suficiente para retirar la cantidad solicitada, por favor retire un valor menor de $ ".concat(u))}},{key:"sumCashier",value:function(){var n,r=0,t=e(c);try{for(t.s();!(n=t.n()).done;){var a=n.value;r+=a.value*a.amount}}catch(e){t.e(e)}finally{t.f()}return r}}])&&r(u.prototype,i),f&&r(u,f),n}(),l=[],c=[];c.push(new i(5e4,50)),c.push(new i(2e4,20)),c.push(new i(1e4,10)),c.push(new i(5e3,2)),u.addEventListener("click",(function(){var e=document.getElementById("moneyAmount");a.innerHTML="";var n=new i;console.log(n.withdrawals(e.value,n.sumCashier())),e.value=""}))})();