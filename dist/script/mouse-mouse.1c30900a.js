"use strict";(self.webpackChunkcnblogs_theme_simplememory_2_2_13=self.webpackChunkcnblogs_theme_simplememory_2_2_13||[]).push([[379],{2352:function(e,t,n){n.a(e,(async function(e,o){try{function s(e){const t=document.createElement("div");t.className="cursor";const n=document.createElement("div");n.className="cursor-f";let o,s,c=0,i=0,a=0,d=0,l=e.size,u=e.sizeF;function r(e,t,n){return(1-n)*e+n*t}document.body.appendChild(t),document.body.appendChild(n),"ontouchstart"in window&&(t.style.display="none",n.style.display="none"),t.style.setProperty("--size",l+"px"),n.style.setProperty("--size",u+"px"),window.addEventListener("mousemove",(function(e){a=e.pageX,d=e.pageY,t.style.top=d-l/2+"px";let n=a-l/2,o=document.body.offsetWidth;n=n<0?0:o-l<n?o-l:n,t.style.left=n+"px"})),function e(){c=r(c,a,.16),i=r(i,d,.16),n.style.top=i-u/2+"px";let t=c-u/2,o=document.body.offsetWidth;t=t<0?0:o-u<t?o-u:t,n.style.left=t+"px",requestAnimationFrame(e)}();let p=!1;function m(e){gsap.to(t,{scale:4.5}),gsap.to(n,{scale:.4}),p=!0,o=e.clientY||e.touches[0].clientY||e.targetTouches[0].clientY}function f(e){gsap.to(t,{scale:1}),gsap.to(n,{scale:1}),s=e.clientY||s,p&&o&&Math.abs(o-s)>=40&&(p=!1,o=null,s=null)}window.addEventListener("mousedown",m,!1),window.addEventListener("touchstart",m,!1),window.addEventListener("touchmove",(function(e){p&&(s=e.touches[0].clientY||e.targetTouches[0].clientY)}),!1),window.addEventListener("touchend",f,!1),window.addEventListener("mouseup",f,!1)}n.r(t),n.d(t,{default:function(){return s}}),await $.__tools.dynamicLoadingJs($.__config.default.gsap).catch((e=>console.error("gsap.js",e))),o()}catch(c){o(c)}}),1)}}]);