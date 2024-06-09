import{p as i,r,j as e,a as y,s as A,x as q,u as U,L as $,y as O,z as Y,M as _,A as J,B as K,C as Q,t as Z,D as G}from"./index-f2e9fc0e.js";import{N as L,A as H}from"./NoticesItem-43bc3770.js";import{u as V,o as W,s as S}from"./sprite2-8143aca6.js";import{c as X,a as b,Q as F,B as N}from"./ReactToastify-3d54d9f2.js";import{p as D}from"./cat-8a2618ae.js";import"./dog-26b760a7.js";import"./Loader-65e65c94.js";const ee=i.div`
  width: 678px;
  @media screen and (max-width: 767px) {
    width: 335px;
  }
`,te=i.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
`,z=i.button`
  border-radius: 30px;
  padding: 14px;
  width: 142px;
  background: ${t=>t.active?" #f6b83d":" #fff"};
  border: none;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,ie=i.p`
  width: 458px;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #262626;
  margin: auto;
  margin-top: 180px;
`,ne=i.span`
  font-weight: 700;
  color: #f6b83d;
`,oe=({favoritsPets:t,viewed:d})=>{const[n,l]=r.useState("favorites"),[a,o]=r.useState([]);r.useEffect(()=>{o(t)},[t]);const s=x=>{l(x)};return e.jsxs(ee,{children:[e.jsxs(te,{children:[e.jsx(z,{active:n==="favorites",onClick:()=>s("favorites"),children:"My favorite pets"}),e.jsx(z,{active:n==="viewed",onClick:()=>s("viewed"),children:"Viewed"})]}),n==="favorites"?(a==null?void 0:a.length)>0?e.jsx(L,{array:a,del:!0}):e.jsxs(ie,{children:["Oops,",e.jsx(ne,{children:"looks like there aren't any furries"}),'on our adorable page yet. Do not worry! View your pets on the "find your favorite pet" page and add them to your favorites.']}):e.jsx(L,{array:d,del:!0})]})},ae=i.div`
  border-radius: 60px;
  width: 520px;
  background: #fff;
  padding: 40px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    margin: auto;
    width: 704px;
  }
  @media screen and (max-width: 767px) {
    margin: 0;
    width: 335px;
    padding: 18px 20px;
    border-radius: 30px;
  }
`,de=i.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  @media screen and (max-width: 1280px) {
    justify-content: space-between;
    position: relative;
  }
  /* @media screen and (max-width: 767px) {
    justify-content: space-between;
  } */
`,re=i.div`
  border-radius: 30px;
  padding: 10px 14px;
  width: 80px;
  height: 38px;
  background: #f6b83d;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,se=i.img`
  /* border-radius: 100px;
  width: 110px;
  height: 110px;
  background: #fff4df;
  display: flex;
  margin-bottom: 8px; */
`,M=i.div`
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 305px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,pe=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff4df;
  border-radius: 100px;
  width: 110px;
  height: 110px;
  /* border-radius: 100px;
  width: 110px;
  height: 110px;
   background: #fff4df; 
  display: flex;
  margin-bottom: 8px;  */
`,R=i.input`
  display: none;
`,xe=i.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #262626;
  background: none;
  border: none;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,ce=i.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    position: absolute;
    left: 95px;
    top: 36px;
  }
`,le=i.button`
  border-radius: 30px;
  border: none;
  padding: 10px;
  width: 38px;
  height: 38px;
  background: #fff4df;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,he=i.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #2b2b2a;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    margin-top: 144px;
  }
`,C=i.input`
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  padding: 16px;
  width: 440px;
  height: 52px;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 305px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,ge=i.div`
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,me=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`,fe=i.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #2b2b2a;
`,ue=i.button`
  border-radius: 30px;
  padding: 10px 20px;
  width: 118px;
  height: 40px;
  background: #f6b83d;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,we=i.span`
  font-weight: 20;
  font-size: 25px;
`,be=i.button`
  border-radius: 30px;
  border: none;
  padding: 15px 35px;
  width: 136px;
  height: 50px;
  background: #fff4df;
  white-space: nowrap;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #f6b83d;
  margin-top: 80px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,w=i.div`
  color: red;
  font-size: 12px;
`,je=i.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 20px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,ve=i.li`
  border: 1px solid rgba(38, 38, 38, 0.1);
  border-radius: 20px;
  width: 440px;
  height: 130px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 305px;
    height: 149px;
    position: relative;
  }
  @media screen and (max-width: 767px) {
    width: 295px;
    height: 132px;
    padding: 16px;
  }
`,ye=i.img`
  border-radius: 100px;
  width: 90px;
  height: 90px;
  background: pink;
  margin-right: 25px;
  @media screen and (max-width: 1280px) {
    width: 75px;
    height: 75px;
    margin-right: 14px;
  }
`,ke=i.button`
  border-radius: 30px;
  padding: 10px;
  width: 38px;
  height: 38px;
  background: #fff4df;
  border: none;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    position: absolute;
    top: 13px;
    right: 15px;
  }
`,Pe=i.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 129%;
  color: #2b2b2a;
  margin-bottom: 12px;
`,Me=i.div`
  display: flex;
  gap: 27px;
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: #262626;
  @media screen and (max-width: 1280px) {
    gap: 10px;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 767px) {
    width: 153px;
  }
`,j=i.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
`,Ce=i.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 153px;
    align-items: flex-start;
  }
`,Ee=({pets:t})=>{const[d,n]=r.useState([]),l=y();r.useEffect(()=>{n(t)},[t]);const a=async o=>{await l(q(o)),n(s=>s.filter(x=>x._id!==o))};return e.jsx(je,{children:d==null?void 0:d.map(o=>e.jsxs(ve,{children:[e.jsxs(Ce,{children:[e.jsx("div",{children:e.jsx(ye,{src:o.imgURL})}),e.jsxs("div",{children:[e.jsx(Pe,{children:o.title}),e.jsxs(Me,{children:[e.jsxs("div",{children:[e.jsx(j,{children:"Name"}),e.jsx("p",{children:o.name})]}),e.jsxs("div",{children:[e.jsx(j,{children:"Birthday"}),e.jsx("p",{children:o.birthday})]}),e.jsxs("div",{children:[e.jsx(j,{children:"Sex"}),e.jsx("p",{children:o.sex})]}),e.jsxs("div",{children:[e.jsx(j,{children:"Species"}),e.jsx("p",{children:o.species})]})]})]})]}),e.jsx(ke,{onClick:()=>a(o._id),children:e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${A}#trash-2`})})})]},o._id))})},Se=i.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 18, 19, 0.4);
  overflow: auto;
`,Ue=i.div`
  background: #fff;
  padding: 50px;
  border-radius: 30px;
  width: 480px;
  height: 580px;
  margin: 10% auto;
  position: relative;
  @media screen and (max-width: 767px) {
    width: 335px;
    padding: 40px 20px;
  }
`,v=i.p`
  color: red;
  font-size: 12px;
`,Fe=i.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #2b2b2a;
  margin-bottom: 20px;
`;i.div`
  border-radius: 100px;
  background: pink;
  width: 86px;
  height: 86px;
  margin: auto;
  margin-bottom: 12px;
`;const Ie=i.button`
  border-radius: 30px;
  padding: 16px;
  width: 380px;
  height: 52px;
  background: #f6b83d;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  color: #fff;
  border: none;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;i.div`
  border: 1px solid #f6b83d;
  border-radius: 30px;
  padding: 16px 326px 16px 16px;
  width: 100%;
`;const E=i.input`
  border: 1px solid #f6b83d;
  border-radius: 30px;
  padding: 16px;
  width: 100%;
  margin-bottom: 20px;
`,Le=i.input`
  border: 1px solid #f6b83d;
  border-radius: 30px;
  padding: 12px 20px 12px 12px;
  width: 226px;
  height: 42px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,ze=i.div`
  display: flex;
  gap: 8px;
  width: 380px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,Be=i.button`
  border-radius: 30px;
  padding: 12px 16px;
  width: 146px;
  height: 42px;
  background: #fff4df;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: #262626;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
`,Ae=i.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  background: #fff4df;
  border-radius: 100px;
  width: 110px;
  height: 110px;
  margin: auto;
  margin-bottom: 12px;
`,B=i.img`
  border-radius: 100px;
  width: 110px;
  height: 110px;
  background: #fff4df;
  display: flex;
  margin-bottom: 8px;
`,$e=X().shape({name:b(),email:b().matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid email address").required("Email is required"),avatar:b().matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,"Invalid URL for avatar"),phone:b().matches(/^\+38\d{10}$/,"Invalid phone number")}),Oe=({user:t,close:d})=>{const[n,l]=r.useState(""),a=y(),o=U(),{register:s,handleSubmit:x,setValue:p,formState:{errors:c}}=V({resolver:W($e)}),g=r.useCallback(h=>{h.key==="Escape"&&d()},[d]);r.useEffect(()=>(document.addEventListener("keydown",g),()=>{document.removeEventListener("keydown",g)}),[g]);const u=h=>{h.target===h.currentTarget&&d()};r.useEffect(()=>{t!=null&&t.avatar&&p("avatar",t.avatar)},[t,p]);const m=async h=>{try{(await a(Y(h))).meta.requestStatus==="fulfilled"?(d(),o("/profile")):N("You are not authorized")}catch(f){alert("Error updating user: "+f.message)}},k=h=>{const f=h.target.files[0];if(f){const I=URL.createObjectURL(f),T=I.replace("blob:","")+".png";l(I),p("avatar",T)}},P=()=>{document.getElementById("avat").click()};return e.jsxs(Se,{onClick:u,children:[e.jsx(F,{toastStyle:{background:"#f30e0e",color:"white"}}),e.jsxs(Ue,{children:[e.jsx($,{width:"24",height:"24",onClick:d,children:e.jsx("use",{href:`${O}#x-x`})}),e.jsx(Fe,{children:"Edit information"}),e.jsxs("form",{onSubmit:x(m),children:[e.jsxs(Ae,{children:[n?e.jsx(B,{src:n,alt:"selected photo"}):t!=null&&t.avatar?e.jsx(B,{src:t.avatar,alt:"user photo"}):e.jsx("svg",{width:"50",height:"50",children:e.jsx("use",{href:`${S}#user-02`})}),e.jsx(R,{...s("avatar"),id:"avat",type:"file",accept:"image/png, image/jpeg, image/gif, image/bmp, image/webp",onChange:k})]}),e.jsxs(ze,{children:[e.jsxs("div",{children:[e.jsx(Le,{value:n||(t==null?void 0:t.avatar)||"",readOnly:!0}),c.avatar&&e.jsx(v,{children:c.avatar.message})]}),e.jsxs(Be,{type:"button",onClick:P,children:["Upload photo",e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${S}#upload-cloud`})})]})]}),e.jsxs("div",{children:[e.jsx(E,{id:"name",...s("name"),defaultValue:t==null?void 0:t.name,placeholder:"Name"}),c.name&&e.jsx(v,{children:c.name.message})]}),e.jsxs("div",{children:[e.jsx(E,{id:"email",...s("email"),defaultValue:t==null?void 0:t.email,placeholder:"Email"}),c.email&&e.jsx(v,{children:c.email.message})]}),e.jsxs("div",{children:[e.jsx(E,{id:"phone",...s("phone"),defaultValue:(t==null?void 0:t.phone)||"+380",placeholder:"+380",type:"text"}),c.phone&&e.jsx(v,{children:c.phone.message})]}),e.jsx(Ie,{type:"submit",children:"Save"})]})]})]})},Ve=i.div`
  background: #fff;
  border-radius: 30px;
  width: 448px;
  height: 364px;
  margin: 10% auto;
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media screen and (max-width: 767px) {
    width: 335px;
    padding: 0 28px;
    justify-content: center;
  }
`,Ne=i.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  letter-spacing: -0.03em;
  color: #262626;
  margin-bottom: 28px;
`,Re=i.button`
  background: rgba(38, 38, 38, 0.05);
  border-radius: 30px;
  padding: 14px 44px;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  color: #262626;
  border: none;
`,Te=i.div`
  display: flex;
  gap: 8px;
`,qe=({close:t,logout:d})=>{const n=r.useCallback(a=>{a.key==="Escape"&&t()},[t]);r.useEffect(()=>(document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}),[n]);const l=a=>{a.target===a.currentTarget&&t()};return e.jsx(_,{onClick:l,children:e.jsxs(Ve,{children:[e.jsx($,{width:"24",height:"24",onClick:t,children:e.jsx("use",{href:`${O}#x-x`})}),e.jsx(H,{children:e.jsx("img",{src:D,width:"44",height:"44"})}),e.jsx(Ne,{children:"Already leaving?"}),e.jsxs(Te,{children:[e.jsx(J,{onClick:d,children:"Yes"}),e.jsx(Re,{onClick:t,children:"Cancel"})]})]})})},Ye=({userData:t})=>{var h;const[d,n]=r.useState(!1),[l,a]=r.useState(!1),o=y(),s=U(),{register:x,formState:{errors:p}}=V({}),c=async()=>{const f=await o(Q());localStorage.setItem("petLoveUserData",JSON.stringify([])),f.error&&f.payload.includes("401")&&N("You are not authorized"),s("/home")},g=()=>{n(!0)},u=()=>{n(!1)},m=()=>{s("/add-pet")},k=()=>{a(!0)},P=()=>{a(!1)};return e.jsxs(ae,{children:[e.jsx(F,{toastStyle:{background:"#f30e0e",color:"white"}}),e.jsxs("div",{children:[e.jsxs("form",{children:[e.jsxs(de,{children:[e.jsxs(re,{children:["User",e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${S}#people`})})]}),e.jsxs(ce,{children:[e.jsxs(pe,{children:[t!=null&&t.avatar?e.jsx(se,{src:t.avatar,alt:"user photo"}):e.jsx("svg",{width:"50",height:"50",children:e.jsx("use",{href:`${K}#userr`})}),e.jsx(R,{id:"avatar",type:"file",accept:"image/png, image/jpeg, image/gif, image/bmp, image/webp",...x("avatar")}),p.avatar&&e.jsx(w,{children:p.avatar.message})]}),e.jsx(xe,{type:"button",onClick:g,children:"Upload photo"})]}),e.jsx(le,{type:"button",onClick:g,children:e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${A}#edit`})})})]}),e.jsx(he,{children:"My information"}),e.jsxs(ge,{children:[e.jsxs(M,{children:[e.jsx("label",{htmlFor:"name"}),e.jsx(C,{id:"name",...x("name"),value:t==null?void 0:t.name}),p.name&&e.jsx(w,{children:p.name.message})]}),e.jsxs(M,{children:[e.jsx("label",{htmlFor:"email"}),e.jsx(C,{id:"email",...x("email"),value:t==null?void 0:t.email}),p.email&&e.jsx(w,{children:p.email.message})]}),e.jsxs(M,{children:[e.jsx("label",{htmlFor:"phone"}),e.jsx(C,{id:"phone",...x("phone"),placeholder:"+380",value:t==null?void 0:t.phone}),p.phone&&e.jsx(w,{children:p.phone.message})]}),p.apiError&&e.jsx(w,{children:p.apiError.message})]})]}),e.jsxs(me,{children:[e.jsx(fe,{children:"My pets"}),e.jsxs(ue,{onClick:m,children:["Add pet ",e.jsx(we,{children:"+"})]})]}),((h=t==null?void 0:t.pets)==null?void 0:h.length)>0&&e.jsx(Ee,{pets:t.pets}),e.jsx(be,{onClick:k,children:"Log out"})]}),d&&e.jsx(Oe,{user:t,close:u}),l&&e.jsx(qe,{close:P,logout:c})]})},_e=i.div`
  display: flex;
  gap: 32px;
  justify-content: space-around;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 744px;
    padding: 0 20px;
    flex-direction: column;
    margin: auto;
  }
  @media screen and (max-width: 767px) {
    width: 375px;
    padding: 0 20px;
    flex-direction: column;
    margin: auto;
  }
`,De=()=>{const[t,d]=r.useState([]),[n,l]=r.useState([]),[a,o]=r.useState([]),s=y(),x=U();return r.useEffect(()=>{(async()=>{var g;const c=localStorage.getItem("petLoveUserData");if(c&&c!=="[]"){const u=JSON.parse(c);Z(u==null?void 0:u.token);const m=await s(G());((g=m.error)==null?void 0:g.message)==="Rejected"&&x("/login"),o(m.payload),d(m.payload.noticesFavorites),l(m.payload.noticesViewed)}else x("/login")})()},[s,x]),e.jsxs(_e,{children:[e.jsx(F,{toastStyle:{background:"#f30e0e",color:"white"}}),e.jsx(Ye,{userData:a}),e.jsx(oe,{favoritsPets:t,viewed:n})]})};export{De as default};
