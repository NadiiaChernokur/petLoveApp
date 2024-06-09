import{n,r as o,a as l,j as r,c as h}from"./index-29781df6.js";const x=n.div`
  width: 1193px;
  padding: 0 20px;
  margin: 64px auto;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 744px;
    padding: 0 20px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    margin: auto;
    padding: 0;
  }
`,c=n.h3`
  font-weight: 700;
  font-size: 54px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #262626;
  margin-bottom: 60px;
  @media screen and (max-width: 767px) {
    font-size: 28px;
  }
`,f=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`,w=n.li`
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
`,g=n.p`
  background: #fff4df;
  border-radius: 30px;
  padding: 8px;
  white-space: nowrap;
  position: absolute;
  right: 12px;
  color: #f6b83d;
`,m=n.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  @media screen and (max-width: 767px) {
    gap: 14px;
  }
`,u=n.img`
  width: 90px;
  height: 90px;
  cursor: pointer;
`,j=n.div`
  width: 196px;
`,y=n.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  letter-spacing: -0.04em;
  color: #262626;
  margin-bottom: 20px;
`,a=n.p`
  width: 236px;
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
`,s=n.span`
  color: rgba(38, 38, 38, 0.5);
`,F=()=>{const[d,p]=o.useState([]),t=l();return o.useEffect(()=>{(async()=>{try{const i=await t(h());p(i.payload)}catch(i){console.error("Failed to fetch friends:",i)}})()},[t]),r.jsxs(x,{children:[r.jsx(c,{children:"Our friends"}),r.jsx(f,{children:d.map(e=>r.jsxs(w,{children:[r.jsx(g,{children:e.workDays&&e.workDays[0]?`${e.workDays[0].isOpen===!0?e.workDays[0].from:e.workDays[5].from} - ${e.workDays[0].isOpen===!0?e.workDays[0].to:e.workDays[5].to}`:"Day and night"}),r.jsxs(m,{children:[r.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:r.jsx(u,{src:e.imageUrl,alt:e.title})}),r.jsxs(j,{children:[r.jsx(y,{children:e.title}),r.jsx("a",{href:`mailto:${e.email}`,children:r.jsxs(a,{children:[r.jsx(s,{"data-fulltext":e.email,children:"Email:"}),e.email===null?"without information":e.email]})}),r.jsx("a",{href:e.addressUrl,target:"_blank",rel:"noopener noreferrer",children:r.jsxs(a,{"data-fulltext":e.address,children:[r.jsx(s,{children:"Address:"}),e.address===null?"website only":e.address]})}),r.jsx("a",{href:`tel:${e.phone}`,children:r.jsxs(a,{children:[r.jsx(s,{children:"Phone: "}),e.phone===null?"without information":e.phone]})})]})]})]},e.title))})]})};export{F as default};
