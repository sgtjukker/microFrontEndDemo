import{importShared as n}from"./__federation_fn_import.js";import a,{_ as f}from"./__federation_expose_NewComponent-855172f8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))p(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&p(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function p(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const{defineComponent:l}=await n("vue"),{createElementVNode:i,createVNode:u,openBlock:_,createElementBlock:m,pushScopeId:h,popScopeId:y}=await n("vue"),d=o=>(h("data-v-4fbf5dfc"),o=o(),y(),o),v={class:"otherApp"},g=d(()=>i("p",null," This is a test page on the OTHER micro Frontend Server ",-1)),N=d(()=>i("p",null," Below is a span of the mFE components in this project: ",-1)),S=l({__name:"App",setup(o){return(r,s)=>(_(),m("div",v,[g,N,u(a)]))}});const w=f(S,[["__scopeId","data-v-4fbf5dfc"]]),{createApp:E}=await n("vue");E(w).mount("#app");
