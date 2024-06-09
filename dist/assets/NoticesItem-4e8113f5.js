import{R as f,p as d,j as e,s as c,r as x,M as N,F as ee,L as R,y as T,G as te,H as se,I as ne,J as re,K as ie,N as k,O as C,P as oe,Q as ae,A as $,S as B,u as F,i as de,a as le,t as ce,D as he,T as O,U as xe}from"./index-29781df6.js";import{p as pe}from"./dog-26b760a7.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var u=function(){return u=Object.assign||function(o){for(var n,s=1,r=arguments.length;s<r;s++){n=arguments[s];for(var h in n)Object.prototype.hasOwnProperty.call(n,h)&&(o[h]=n[h])}return o},u.apply(this,arguments)};function L(t,o){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&o.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)o.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}var fe={color:"#38ad48",enabled:!0,size:50,style:{}},ue=function(t){return parseFloat(t.toString()).toString()===t.toString()?t+"px":t.toString()},S=function(t){var o=function(n){var s=n.color,r=n.enabled,h=n.size,a=n.style,l=L(n,["color","enabled","size","style"]),p=u(u({},l),{style:u({color:s,overflow:"visible",width:ue(h)},a)});return r?f.createElement(t,u({},p)):null};return o.defaultProps=fe,o},ge={speed:100,still:!1,thickness:100},U=u(u({},ge),{secondaryColor:"rgba(0,0,0,0.44)"});function _(t,o){o===void 0&&(o={});var n=o.insertAt;if(!(!t||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&s.firstChild?s.insertBefore(r,s.firstChild):s.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var je="@keyframes spinners-react-infinity{0%{stroke-dasharray:1,347;stroke-dashoffset:75}25%,75%{stroke-dasharray:17,330}50%{stroke-dasharray:1,347}to{stroke-dasharray:1,347;stroke-dashoffset:423}}";_(je);var W=function(t){var o=t.secondaryColor,n=t.speed,s=t.still,r=t.thickness,h=L(t,["secondaryColor","speed","still","thickness"]),a=7*(r/100),l=s?{}:{animation:"spinners-react-infinity "+140/n+"s linear infinite"};return f.createElement("svg",u({fill:"none",viewBox:"0 0 131 55"},h),f.createElement("defs",null,f.createElement("path",{d:"M46.57 45.5138C36.346 55.4954 19.8919 55.4954 9.66794 45.5138C-0.55598 35.5321 -0.55598 19.4678 9.66794 9.48624C19.8919 -0.495412 36.346 -0.495412 46.57 9.48624L84.4303 45.5138C94.6543 55.4954 111.108 55.4954 121.332 45.5138C131.556 35.5321 131.556 19.4678 121.332 9.48624C111.108 -0.495412 94.6543 -0.495412 84.4303 9.48624L46.57 45.5138Z",id:"spinners-react-infinity-path"})),f.createElement("use",{stroke:o,strokeWidth:a,xlinkHref:"#spinners-react-infinity-path"}),f.createElement("use",{fill:"none",stroke:"currentColor",strokeDasharray:"1, 347",strokeDashoffset:"75",strokeLinecap:"round",strokeWidth:a,style:l,xlinkHref:"#spinners-react-infinity-path"}))};W.defaultProps=U;var ye=S(W),me="@keyframes spinners-react-diamond{25%{transform:translate(30px,-30px)}50%{transform:translate(60px)}75%{transform:translate(30px,30px)}}";_(me);var z=[{x:3,y:48},{x:18,y:33},{x:18,y:48},{x:18,y:63},{x:33,y:48},{x:33,y:18},{x:33,y:33},{x:33,y:63},{x:33,y:78},{x:48,y:3},{x:48,y:18},{x:48,y:33},{x:48,y:48},{x:48,y:63},{x:48,y:78},{x:48,y:93},{x:63,y:18},{x:63,y:33},{x:63,y:48},{x:63,y:63},{x:63,y:78},{x:78,y:33},{x:78,y:48},{x:78,y:63},{x:93,y:48}],I=function(t){var o=t.secondaryColor,n=t.speed,s=t.still,r=t.thickness,h=L(t,["secondaryColor","speed","still","thickness"]),a={animation:"spinners-react-diamond "+140/n+"s steps(2, end) infinite"};return s&&(a.animation="none"),f.createElement("svg",u({fill:"currentColor"},h,{viewBox:"0 0 96 96"}),z.map(function(l){return f.createElement("circle",{key:l.x+"-"+l.y,cx:l.x,cy:l.y,fill:o,r:2.5*(r/100)})}),f.createElement("g",{style:a},z.filter(function(l,p){return p<5}).map(function(l){return f.createElement("circle",{key:"h-"+l.x+"-"+l.y,cx:l.x,cy:l.y,r:3.5*(r/100)})})))};I.defaultProps=U;S(I);var ve=S(I);const we=d.div`
  width: 100%;
  display: flex;
  justify-content: center;
`,be=d.div`
  border-radius: 30px;
  padding: 12px;
  width: ${({$prop:t})=>t}px;
  background: #fff;
  border: none;
`,ke=()=>e.jsx(we,{children:e.jsx(ve,{style:{width:"100"}})}),Ve=({width:t})=>e.jsx(be,{$prop:t,children:e.jsx(ye,{})}),Ce=d.ul`
  display: flex;
  flex-wrap: wrap;
  /* gap: 32px; */
  justify-content: space-between;
  min-width: 700px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    max-width: 744px;
    min-width: 744px;
    padding: 0 20px;
    margin: auto;
  }
  @media screen and (max-width: 767px) {
    max-width: 375px;
    min-width: 375px;
    /* padding: 0 20px; */
  }
`,Me=d.li`
  margin-bottom: 8px;
  padding: 14px;
  background: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`,$e=d.div`
  border-radius: 16px;
  width: 315px;
  height: 178px;
  background-color: #fff4df;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
`,Le=d.img`
  width: 315px;
  height: 277px;
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
`,Se=d.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #2b2b2a;
  margin-bottom: 8px;
  width: 100%;
`,Ie=d.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Ae=d.div`
  display: flex;
  justify-content: space-between;
  /* gap: 20px; */
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: #262626;
  margin-bottom: 16px;
  width: 292px;
`,M=d.p`
  text-transform: capitalize;
`,v=d.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
`,Ee=d.div`
  width: 292px;
`,Pe=d.p`
  display: flex;
  gap: 20px;
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: #262626;
  margin-bottom: 50px;
`,Oe=d.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`,ze=d.button`
  border-radius: 30px;
  padding: 14px 89px;
  width: 257px;
  height: 48px;
  background: #f6b83d;
  border: none;
  white-space: nowrap;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  color: #fff;
`,D=d.button`
  border-radius: 30px;
  padding: 15px;
  width: 48px;
  height: 48px;
  background: #fff4df;
  border: none;
`,De=d.div`
  width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  cursor: pointer;

  &:hover::after {
    content: attr(data-full-text);
    white-space: normal;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 5px;
    border-radius: 5px;
    top: 100%;
    left: 0;
    width: max-content;
    max-width: 300px; /* Встановіть максимальну ширину для повного тексту */
    z-index: 1;
  }
`,Ne="/assets/heart-5b5090e7.svg",g="/assets/stars-93060518.svg",w=d.div`
  display: flex;
  gap: 3px;
`,Re=()=>e.jsxs(w,{children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${c}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${g}#stars`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${g}#stars`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${g}#stars`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${g}#stars`})})]}),Te=()=>e.jsxs(w,{children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${c}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${c}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${g}#stars`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${g}#stars`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${g}#stars`})})]}),Be=()=>e.jsxs(w,{children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${c}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${c}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${c}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${g}#stars`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${g}#stars`})})]}),Fe=()=>e.jsxs(w,{children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${c}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${c}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${c}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${c}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${g}#stars`})})]}),Ue=()=>e.jsxs(w,{children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${c}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${c}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${c}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${c}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${c}#star`})})]}),_e=({pet:t,close:o,fav:n,toggleHeartClick:s})=>{const[r,h]=x.useState(n),a=x.useCallback(p=>{p.key==="Escape"&&o()},[o]);x.useEffect(()=>(h(n),document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}),[n,a]);const l=p=>{p.target===p.currentTarget&&o()};return e.jsx(N,{onClick:l,children:e.jsxs(ee,{children:[e.jsx(R,{width:"24",height:"24",onClick:o,children:e.jsx("use",{href:`${T}#x-x`})}),e.jsx(te,{src:t.imgURL,alt:t.title}),e.jsx(se,{children:t.category}),e.jsx(ne,{children:t.title}),e.jsxs(re,{children:[t.popularity<=10&&e.jsx(Re,{}),t.popularity>10&&t.popularity<=20&&e.jsx(Te,{}),t.popularity>20&&t.popularity<=30&&e.jsx(Be,{}),t.popularity>30&&t.popularity<=40&&e.jsx(Fe,{}),t.popularity>40&&e.jsx(Ue,{}),e.jsx("p",{children:t.popularity})]}),e.jsxs(ie,{children:[e.jsxs(k,{children:[e.jsx(C,{children:"Name"}),e.jsx("p",{children:t.name})]}),e.jsxs(k,{children:[e.jsx(C,{children:"Birthday"}),e.jsx("p",{children:t.birthday})]}),e.jsxs(k,{children:[e.jsx(C,{children:"Sex"}),e.jsx("p",{children:t.sex})]}),e.jsxs(k,{children:[e.jsx(C,{children:"Species"}),e.jsx("p",{children:t.species})]})]}),e.jsx(oe,{children:t.comment}),e.jsxs(ae,{children:[r==="true"?e.jsx($,{onClick:()=>s(t._id),children:"Remove"}):e.jsxs($,{onClick:()=>s(t._id),children:["Add to",e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${Ne}#heartW`})})]}),e.jsx(B,{children:"Contact"})]})]})})},We=d.div`
  background: #fff;
  border-radius: 30px;
  width: 466px;
  height: 434px;
  margin: 10% auto;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media screen and (max-width: 767px) {
    width: 335px;
  }
`,He=d.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  letter-spacing: -0.03em;
  color: #f6b83d;
  margin-bottom: 20px;
`,Ke=d.div`
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fff4df;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`,Je=d.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #2b2b2a;
  margin-bottom: 28px;
`,Ge=d.div`
  display: flex;
  gap: 8px;
`,Qe=({close:t})=>{const o=F(),n=x.useCallback(a=>{a.key==="Escape"&&t()},[t]);x.useEffect(()=>(document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}),[n]);const s=a=>{a.target===a.currentTarget&&t()},r=()=>{o("/login")},h=()=>{o("/register")};return e.jsx(N,{onClick:s,children:e.jsxs(We,{children:[e.jsx(R,{width:"24",height:"24",onClick:t,children:e.jsx("use",{href:`${T}#x-x`})}),e.jsx(Ke,{children:e.jsx("img",{src:pe,width:44,height:44})}),e.jsx(He,{children:"Attention"}),e.jsx(Je,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),e.jsxs(Ge,{children:[e.jsx($,{onClick:r,children:"Log In"}),e.jsx(B,{onClick:h,children:"Registration"})]})]})})},Xe=({array:t,del:o})=>{const[n,s]=x.useState(!1),[r,h]=x.useState([]),[a,l]=x.useState([]),[p,H]=x.useState(""),[K,A]=x.useState(!1),J=de(i=>i.isLoading),m=le(),G=F();x.useEffect(()=>{(async()=>{var b;const j=localStorage.getItem("petLoveUserData");if(j!=="[]"){const y=JSON.parse(j);ce(y==null?void 0:y.token),H(y==null?void 0:y.token);const P=await m(he());if(((b=P.payload.noticesFavorites)==null?void 0:b.length)>0){const X=P.payload.noticesFavorites.map(Y=>Y._id);l(X)}}})()},[m,G]);const Q=i=>{s(!0),h(i)},Z=()=>{s(!1)},q=()=>{A(!1)},E=async i=>{if(!p){A(!0);return}try{let j;a.includes(i)?(await m(O(i)),j=a.filter(b=>b!==i)):(await m(xe(i)),j=[...a,i]),l(j)}catch(j){console.error("Error updating favorite item",j)}},V=async i=>{await m(O(i)),window.location.reload()};return e.jsxs(Ce,{children:[J?e.jsx(ke,{}):t==null?void 0:t.map(i=>e.jsxs(Me,{children:[e.jsx($e,{children:e.jsx(Le,{src:i.imgURL,alt:i.title})}),e.jsxs(Se,{children:[e.jsx(De,{"data-full-text":i.title,children:e.jsx("p",{children:i.title})}),e.jsxs(Ie,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${c}#star`})}),e.jsx("p",{children:i.popularity})]})]}),e.jsxs(Ae,{children:[e.jsxs("div",{children:[e.jsx(v,{children:"Name"}),e.jsx("p",{children:i.name})]}),e.jsxs("div",{children:[e.jsx(v,{children:"Birthday"}),e.jsx("p",{children:i.birthday})]}),e.jsxs("div",{children:[e.jsx(v,{children:"Sex"}),e.jsx(M,{children:i.sex})]}),e.jsxs("div",{children:[e.jsx(v,{children:"Species"}),e.jsx(M,{children:i.species})]}),e.jsxs("div",{children:[e.jsx(v,{children:"Category"}),e.jsx(M,{children:i.category})]})]}),e.jsx(Ee,{children:e.jsx(Pe,{children:i.comment})}),e.jsxs(Oe,{children:[e.jsx(ze,{onClick:()=>Q(i),children:"Learn more"}),o?e.jsx(D,{onClick:()=>V(i._id),children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${c}#trash-2`})})}):e.jsx(D,{onClick:()=>E(i._id),children:a!=null&&a.includes(i._id)?e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${c}#hart`})}):e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${c}#heart`})})})]})]},i._id)),n&&e.jsx(_e,{pet:r,close:Z,fav:a.includes(r._id)?"true":"false",toggleHeartClick:E}),K&&e.jsx(Qe,{close:q})]})};export{Ke as A,Ve as L,Xe as N};
