import{n as o,p as s,j as t,r as d,a as k,s as m,g as P}from"./index-f2e9fc0e.js";import{P as D}from"./Pagination-3daf94aa.js";const z=o.div`
  width: 1282px;
  padding: 62px;
  margin: auto;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 744px;
    padding: 0 20px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    padding: 0;
  }
`,C=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 24px;
  }
`,R=o.h3`
  font-weight: 700;
  font-size: 54px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #262626;
  @media screen and (max-width: 767px) {
    font-size: 28px;
  }
`,$=o.form`
  position: relative;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,M=o.input`
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  padding: 14px;
  width: 230px;
  position: relative;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,T=o.div`
  position: absolute;
  top: 15px;
  right: 11px;
`,w=o.button`
  background: none;
  border: none;
`,B=s.ul`
  display: flex;
  flex-wrap: wrap;
  /* gap: 38px; */
  justify-content: space-around;
`,E=s.li`
  width: 361px;
  height: 476px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 28px; */
  margin-bottom: 68px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 340px;
    /* height: 476px; */
  }
`,L=s.img`
  width: 100%;
  height: 226px;
  border-radius: 15px;
  background-color: #fff4df;
  /* margin-bottom: 28px; */
`,F=s.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  letter-spacing: -0.03em;
  color: #262626;
  /* margin-bottom: 14px; */
`,I=s.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.02em;
  color: #262626;
`,U=s.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
`,q=s.div`
  display: flex;
  justify-content: space-between;
`,K=s.button`
  background: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #f6b83d;
`,Y=({list:r})=>{const c=e=>{const i=new Date(e),a=String(i.getDate()).padStart(2,"0"),l=String(i.getMonth()+1).padStart(2,"0"),h=i.getFullYear();return`${a}/${l}/${h}`},p=e=>{window.open(e,"_blank")};return t.jsx(B,{children:r.map(e=>t.jsxs(E,{children:[t.jsx(L,{src:e.imgUrl,alt:e.title}),t.jsx(F,{children:e.title}),t.jsx(I,{children:e.text}),t.jsxs(q,{children:[t.jsx(U,{children:c(e.date)}),t.jsx(K,{onClick:()=>p(e.url),children:"Read more"})]})]},e.id))})},G=()=>{const[r,c]=d.useState(""),[p,e]=d.useState([]),[i,a]=d.useState(1),[l,h]=d.useState(0),[f,x]=d.useState(!1),u=k();d.useEffect(()=>{(async()=>{const g=await u(P({page:i,keyword:r}));if(g.meta.requestStatus==="fulfilled"){e(g.payload.results),h(g.payload.totalPages),x(!1);return}})()},[u,r,i,f]);const b=n=>{n.preventDefault(),x(!0)},j=()=>{c(""),a(1),x(!0)},y=()=>{a(n=>n+1)},N=()=>{a(n=>n-1)},S=()=>{a(1)},v=()=>{a(l)};return t.jsxs(z,{children:[t.jsxs(C,{children:[t.jsx(R,{children:"News"}),t.jsxs($,{onSubmit:b,children:[t.jsx(M,{type:"text",placeholder:"Search",value:r,onChange:n=>c(n.target.value)}),t.jsxs(T,{children:[r&&t.jsx(w,{type:"button",onClick:j,children:t.jsx("svg",{width:"20",height:"20",children:t.jsx("use",{href:`${m}#cross-small`,width:"20",height:"20"})})}),t.jsx(w,{type:"button",children:t.jsx("svg",{width:"20",height:"20",children:t.jsx("use",{href:`${m}#search`,width:"20",height:"20"})})})]})]})]}),t.jsx(Y,{list:p}),t.jsx(D,{page:i,add:y,subtract:N,first:S,last:v,total:l})]})};export{G as default};
