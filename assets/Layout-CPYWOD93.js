import{o as a,c as v,a as s,d as w,r as x,b as d,w as o,e as t,f as E,u as p,g as V,h as f,i as h,j as C,E as b,k as N,l as k,m as B,n as R}from"./index-Cn1_UpIB.js";import{_ as S}from"./plugin-vueexport-helper-DlAUqK2U.js";const y={},I={class:"navbar-header bg-primary"};function L(i,l){return a(),v("div",I,l[0]||(l[0]=[s("h1",null,"Navbar",-1)]))}const M=S(y,[["render",L]]),O=w({__name:"SidebarView",setup(i){const l=x(!0),m=(n,e)=>{console.log(n,e)},u=(n,e)=>{console.log(n,e)},_=(n,e)=>{console.log(n,e),n==="arrow"?l.value=!l.value:C.push(n)};return(n,e)=>{const r=b,c=N,g=k;return a(),d(g,{class:"el-menu-vertical-demo",collapse:l.value,onOpen:m,onClose:u,onSelect:_},{default:o(()=>[t(r,{index:"/"},{title:o(()=>e[0]||(e[0]=[s("span",null,"Home",-1)])),default:o(()=>[e[1]||(e[1]=s("i",{class:"fa-solid fa-house"},null,-1))]),_:1}),t(r,{index:"element_plus"},{title:o(()=>e[2]||(e[2]=[s("span",null,"Element+",-1)])),default:o(()=>[e[3]||(e[3]=s("img",{width:"20",src:"https://element-plus.org//images/element-plus-logo-small.svg"},null,-1))]),_:1}),t(r,{index:"loadash"},{title:o(()=>e[4]||(e[4]=[E("Loadash")])),default:o(()=>[e[5]||(e[5]=s("img",{width:"20",src:"https://lodash.com/icons/favicon-32x32.png"},null,-1))]),_:1}),t(r,{index:"arrow"},{default:o(()=>[l.value?f("",!0):(a(),d(c,{key:0},{default:o(()=>[t(p(V))]),_:1})),l.value?(a(),d(c,{key:1},{default:o(()=>[t(p(h))]),_:1})):f("",!0)]),_:1})]),_:1},8,["collapse"])}}}),H=w({__name:"Layout",setup(i){return(l,m)=>{const u=B("RouterView"),_=R;return a(),v("div",null,[t(M),t(_,null,{default:o(()=>[t(O),t(u)]),_:1})])}}});export{H as default};