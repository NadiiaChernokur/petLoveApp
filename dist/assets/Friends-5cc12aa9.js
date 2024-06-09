import{n,r as d,a as h,c as l,j as r,d as c}from"./index-f2e9fc0e.js";import{L as w}from"./Loader-65e65c94.js";const f=n.div`
  width: 1193px;
  padding: 0 20px;
  padding-bottom: 20px;
  margin: 64px auto;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 744px;
    padding: 0 20px;
    padding-bottom: 20px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    margin: auto;
    padding: 0;
    padding-bottom: 20px;
  }
`,g=n.h3`
  font-weight: 700;
  font-size: 54px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #262626;
  margin-bottom: 60px;
  @media screen and (max-width: 767px) {
    font-size: 28px;
  }
`,m=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`,u=n.li`
  margin-bottom: 8px;
  background: #fff;
  border-radius: 15px;
  width: 371px;
  height: 196px;
  padding: 12px 20px;
  position: relative;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 342px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    margin: auto;
  }
`,j=n.p`
  background: #fff4df;
  border-radius: 30px;
  padding: 8px;
  white-space: nowrap;
  position: absolute;
  right: 12px;
  color: #f6b83d;
`,b=n.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  @media screen and (max-width: 767px) {
    gap: 14px;
  }
`,y=n.img`
  width: 90px;
  height: 90px;
  cursor: pointer;
  /* &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  } */
`,F=n.div`
  width: 196px;
`,v=n.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  letter-spacing: -0.04em;
  color: #262626;
  margin-bottom: 20px;
`,o=n.p`
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: #262626;
  margin-bottom: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    overflow: inherit;
    text-overflow: inherit;
    white-space: inherit;
    height: auto;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,t=n.span`
  color: rgba(38, 38, 38, 0.5);
  width: 100%;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,I=()=>{const[i,p]=d.useState([]),s=h(),x=l(e=>e.isLoading);return d.useEffect(()=>{(async()=>{try{const a=await s(c());p(a.payload)}catch(a){console.error("Failed to fetch friends:",a)}})()},[s]),r.jsxs(f,{children:[r.jsx(g,{children:"Our friends"}),x?r.jsx(w,{}):r.jsx(m,{children:i==null?void 0:i.map(e=>r.jsxs(u,{children:[r.jsx(j,{children:e.workDays&&e.workDays[0]?`${e.workDays[0].isOpen===!0?e.workDays[0].from:e.workDays[5].from} - ${e.workDays[0].isOpen===!0?e.workDays[0].to:e.workDays[5].to}`:"Day and night"}),r.jsxs(b,{children:[r.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:r.jsx(y,{src:e.imageUrl,alt:e.title})}),r.jsxs(F,{children:[r.jsx(v,{children:e.title}),r.jsx("a",{href:`mailto:${e.email}`,children:r.jsxs(o,{children:[r.jsx(t,{"data-fulltext":e.email,children:"Email:"}),e.email===null?"without information":e.email]})}),r.jsx("a",{href:e.addressUrl,target:"_blank",rel:"noopener noreferrer",children:r.jsxs(o,{"data-fulltext":e.address,children:[r.jsx(t,{children:"Address:"}),e.address===null?"website only":e.address]})}),r.jsx("a",{href:`tel:${e.phone}`,children:r.jsxs(o,{children:[r.jsx(t,{children:"Phone: "}),e.phone===null?"without information":e.phone]})})]})]})]},e.title))})]})};export{I as default};
