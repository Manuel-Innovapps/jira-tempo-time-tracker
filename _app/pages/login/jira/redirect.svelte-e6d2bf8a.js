import{S as c,i as d,s as f,e as u,t as m,c as h,a as p,h as g,d as l,b as _,g as b,G as x,Q as y,H as s}from"../../../chunks/vendor-e309547f.js";import{l as J}from"../../../chunks/Config-d1aac259.js";import{a as U}from"../../../chunks/JiraLogin-78882b5f.js";import"../../../chunks/Defaults-2a83e164.js";function v(n){let t,e,a,r;return{c(){t=u("button"),e=m("Login to Jira"),this.h()},l(o){t=h(o,"BUTTON",{class:!0});var i=p(t);e=g(i,"Login to Jira"),i.forEach(l),this.h()},h(){_(t,"class","button is-primary")},m(o,i){b(o,t,i),x(t,e),a||(r=y(t,"click",n[0]),a=!0)},p:s,i:s,o:s,d(o){o&&l(t),a=!1,r()}}}function w(n){function t(){const e=J(),a=U(e.jira.clientId);window.location.href=a}return[t]}class T extends c{constructor(t){super();d(this,t,w,v,f,{})}}export{T as default};