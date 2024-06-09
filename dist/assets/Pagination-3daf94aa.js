import{p as n,r as x,j as e,s as t}from"./index-f2e9fc0e.js";const j=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 8px;
`,l=n.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: 1px solid rgba(38, 38, 38, 0.2);
  background: none;
  /* font-weight: 700;
  font-size: 18px;
  line-height: 122%; */
  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
    justify-content: center;
  }
`,m=n.div`
  display: flex;
  gap: 10px;
  margin: 0 16px;
  @media screen and (max-width: 767px) {
    margin: 0;
    gap: 5px;
  }
`,d=n.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: 1px solid rgba(38, 38, 38, 0.2);
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 122%;
  @media screen and (max-width: 767px) {
    width: 33px;
    height: 33px;
  }
`,u=n.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: none;
  background: #f6b83d;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  line-height: 122%;
  text-align: center;
  @media screen and (max-width: 767px) {
    width: 33px;
    height: 33px;
  }
`,w=({subtract:c,add:o,page:i,first:f,last:g,total:r})=>{const[s,p]=x.useState(0);x.useEffect(()=>{p(r)},[r]);const a=i===s?"0.5":"1.0",h=i===1?"0.5":"1.0";return e.jsxs(j,{children:[e.jsxs(l,{onClick:f,disabled:i===1,children:[e.jsx("svg",{width:"20",height:"20",style:{transform:"scaleX(-1)",marginRight:"-25px",fillOpacity:h},children:e.jsx("use",{href:`${t}#fi-rr-angle-small-left`})}),e.jsx("svg",{width:"20",height:"20",style:{transform:"scaleX(-1)",fillOpacity:h},children:e.jsx("use",{href:`${t}#fi-rr-angle-small-left`})})]}),e.jsx(l,{onClick:c,disabled:i===1,children:e.jsx("svg",{width:"20",height:"20",style:{transform:"scaleX(-1)",fillOpacity:h},children:e.jsx("use",{href:`${t}#fi-rr-angle-small-left`})})}),e.jsxs(m,{children:[i-1>0&&e.jsx(d,{children:i-1}),e.jsxs(u,{children:[" ",i," "]}),i!==s&&e.jsxs(d,{children:[" ",i+1," "]}),i!==s&&e.jsxs(d,{children:[" ","..."," "]})]}),e.jsx(l,{onClick:o,disabled:i===s,children:e.jsx("svg",{width:"20",height:"20",style:{fillOpacity:a},children:e.jsx("use",{href:`${t}#fi-rr-angle-small-left`})})}),e.jsxs(l,{onClick:g,disabled:i===s,children:[e.jsx("svg",{width:"20",height:"20",style:{marginRight:"-25px",fillOpacity:a},children:e.jsx("use",{href:`${t}#fi-rr-angle-small-left`})}),e.jsx("svg",{width:"20",height:"20",style:{fillOpacity:a},children:e.jsx("use",{href:`${t}#fi-rr-angle-small-left`})})]})]},r)};export{w as P};
