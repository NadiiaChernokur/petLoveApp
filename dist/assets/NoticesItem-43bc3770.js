import{p as i,j as e,s as n,r as o,M as S,F as J,L as R,y as N,G as W,H as G,I as Q,J as q,K as V,N as y,O as b,P as X,Q as Y,A as k,R as E,u as T,c as Z,a as ee,t as te,D as se,S as A,T as ie}from"./index-f2e9fc0e.js";import{p as ne}from"./dog-26b760a7.js";import{L as re}from"./Loader-65e65c94.js";const oe=i.ul`
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
    justify-content: center;
  }
  @media screen and (max-width: 767px) {
    max-width: 375px;
    min-width: 375px;
    justify-content: center;
  }
`,ae=i.li`
  margin-bottom: 8px;
  padding: 14px;
  background: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`,he=i.div`
  border-radius: 16px;
  width: 315px;
  height: 178px;
  background-color: #fff4df;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
`,de=i.img`
  width: 315px;
  height: 277px;
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
`,ce=i.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #2b2b2a;
  margin-bottom: 8px;
  width: 100%;
`,le=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,xe=i.div`
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
`,M=i.p`
  text-transform: capitalize;
`,u=i.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
`,ge=i.div`
  width: 292px;
`,pe=i.p`
  display: flex;
  gap: 20px;
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: #262626;
  margin-bottom: 50px;
`,je=i.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`,fe=i.button`
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
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,C=i.button`
  border-radius: 30px;
  padding: 14px;
  width: 48px;
  height: 48px;
  background: #fff4df;
  border: none;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,ue=i.div`
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
`,we="/assets/heart-5b5090e7.svg",a="/assets/stars-93060518.svg",w=i.div`
  display: flex;
  gap: 3px;
`,me=()=>e.jsxs(w,{children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${a}#stars`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${a}#stars`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${a}#stars`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${a}#stars`})})]}),ve=()=>e.jsxs(w,{children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${a}#stars`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${a}#stars`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${a}#stars`})})]}),ye=()=>e.jsxs(w,{children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${a}#stars`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${a}#stars`})})]}),be=()=>e.jsxs(w,{children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${a}#stars`})})]}),Me=()=>e.jsxs(w,{children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})})]}),ke=({pet:t,close:h,fav:d,toggleHeartClick:l})=>{const[x,j]=o.useState(d),r=o.useCallback(g=>{g.key==="Escape"&&h()},[h]);o.useEffect(()=>(j(d),document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}),[d,r]);const m=g=>{g.target===g.currentTarget&&h()};return e.jsx(S,{onClick:m,children:e.jsxs(J,{children:[e.jsx(R,{width:"24",height:"24",onClick:h,children:e.jsx("use",{href:`${N}#x-x`})}),e.jsx(W,{src:t.imgURL,alt:t.title}),e.jsx(G,{children:t.category}),e.jsx(Q,{children:t.title}),e.jsxs(q,{children:[t.popularity<=10&&e.jsx(me,{}),t.popularity>10&&t.popularity<=20&&e.jsx(ve,{}),t.popularity>20&&t.popularity<=30&&e.jsx(ye,{}),t.popularity>30&&t.popularity<=40&&e.jsx(be,{}),t.popularity>40&&e.jsx(Me,{}),e.jsx("p",{children:t.popularity})]}),e.jsxs(V,{children:[e.jsxs(y,{children:[e.jsx(b,{children:"Name"}),e.jsx("p",{children:t.name})]}),e.jsxs(y,{children:[e.jsx(b,{children:"Birthday"}),e.jsx("p",{children:t.birthday})]}),e.jsxs(y,{children:[e.jsx(b,{children:"Sex"}),e.jsx("p",{children:t.sex})]}),e.jsxs(y,{children:[e.jsx(b,{children:"Species"}),e.jsx("p",{children:t.species})]})]}),e.jsx(X,{children:t.comment}),e.jsxs(Y,{children:[x==="true"?e.jsx(k,{onClick:()=>l(t._id),children:"Remove"}):e.jsxs(k,{onClick:()=>l(t._id),children:["Add to",e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${we}#heartW`})})]}),e.jsx(E,{children:"Contact"})]})]})})},$e=i.div`
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
`,Le=i.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  letter-spacing: -0.03em;
  color: #f6b83d;
  margin-bottom: 20px;
`,Ie=i.div`
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fff4df;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`,Ae=i.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #2b2b2a;
  margin-bottom: 28px;
`,Ce=i.div`
  display: flex;
  gap: 8px;
`,Se=({close:t})=>{const h=T(),d=o.useCallback(r=>{r.key==="Escape"&&t()},[t]);o.useEffect(()=>(document.addEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)}),[d]);const l=r=>{r.target===r.currentTarget&&t()},x=()=>{h("/login")},j=()=>{h("/register")};return e.jsx(S,{onClick:l,children:e.jsxs($e,{children:[e.jsx(R,{width:"24",height:"24",onClick:t,children:e.jsx("use",{href:`${N}#x-x`})}),e.jsx(Ie,{children:e.jsx("img",{src:ne,width:44,height:44})}),e.jsx(Le,{children:"Attention"}),e.jsx(Ae,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),e.jsxs(Ce,{children:[e.jsx(k,{onClick:x,children:"Log In"}),e.jsx(E,{onClick:j,children:"Registration"})]})]})})},Te=({array:t,del:h})=>{const[d,l]=o.useState(!1),[x,j]=o.useState([]),[r,m]=o.useState([]),[g,D]=o.useState(""),[z,$]=o.useState(!1),F=Z(s=>s.isLoading),f=ee(),B=T();o.useEffect(()=>{(async()=>{var v;const c=localStorage.getItem("petLoveUserData");if(c!=="[]"){const p=JSON.parse(c);te(p==null?void 0:p.token),D(p==null?void 0:p.token);const I=await f(se());if(((v=I.payload.noticesFavorites)==null?void 0:v.length)>0){const H=I.payload.noticesFavorites.map(P=>P._id);m(H)}}})()},[f,B]);const _=s=>{l(!0),j(s)},U=()=>{l(!1)},K=()=>{$(!1)},L=async s=>{if(!g){$(!0);return}try{let c;r.includes(s)?(await f(A(s)),c=r.filter(v=>v!==s)):(await f(ie(s)),c=[...r,s]),m(c)}catch(c){console.error("Error updating favorite item",c)}},O=async s=>{await f(A(s)),window.location.reload()};return e.jsxs(oe,{children:[F?e.jsx(re,{}):t==null?void 0:t.map(s=>e.jsxs(ae,{children:[e.jsx(he,{children:e.jsx(de,{src:s.imgURL,alt:s.title})}),e.jsxs(ce,{children:[e.jsx(ue,{"data-full-text":s.title,children:e.jsx("p",{children:s.title})}),e.jsxs(le,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${n}#star`})}),e.jsx("p",{children:s.popularity})]})]}),e.jsxs(xe,{children:[e.jsxs("div",{children:[e.jsx(u,{children:"Name"}),e.jsx("p",{children:s.name})]}),e.jsxs("div",{children:[e.jsx(u,{children:"Birthday"}),e.jsx("p",{children:s.birthday})]}),e.jsxs("div",{children:[e.jsx(u,{children:"Sex"}),e.jsx(M,{children:s.sex})]}),e.jsxs("div",{children:[e.jsx(u,{children:"Species"}),e.jsx(M,{children:s.species})]}),e.jsxs("div",{children:[e.jsx(u,{children:"Category"}),e.jsx(M,{children:s.category})]})]}),e.jsx(ge,{children:e.jsx(pe,{children:s.comment})}),e.jsxs(je,{children:[e.jsx(fe,{onClick:()=>_(s),children:"Learn more"}),h?e.jsx(C,{onClick:()=>O(s._id),children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${n}#trash-2`})})}):e.jsx(C,{onClick:()=>L(s._id),children:r!=null&&r.includes(s._id)?e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${n}#hart`})}):e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${n}#heart`})})})]})]},s._id)),d&&e.jsx(ke,{pet:x,close:U,fav:r.includes(x._id)?"true":"false",toggleHeartClick:L}),z&&e.jsx(Se,{close:K})]})};export{Ie as A,Te as N};
