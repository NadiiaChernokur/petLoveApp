import{p as t,r as h,a as F,u as U,j as e,s as g,t as D,v as R,w as q}from"./index-29781df6.js";import{u as B,o as I}from"./yup-fe022c44.js";import{c as L,a as n,Q as z,B as T}from"./ReactToastify-5330041a.js";const E="/assets/dogAddpets-232d59b6.png",M="/assets/appDogT-5a2f9476.png",Y="/assets/addDogM-63dcdac0.png",o=t.span`
  color: red;
  font-size: 12px;
`,N=t.div`
  margin: 32px;
  margin-top: 0;
  display: flex;
  gap: 32px;
  justify-content: space-between;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    margin: auto;
  }
`,O=t.img`
  border-radius: 60px;
  width: 592px;
  height: 654px;
  background-image: url(${E});
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    background-image: url(${M});
    width: 704px;
    height: 248px;
  }
  @media screen and (max-width: 767px) {
    min-width: 335px;
    border-radius: 30px;
    width: 335px;
    height: 213px;
    background-image: url(${Y});
  }
`,J=t.div`
  width: 592px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 704px;
    height: 248px;
    margin: auto;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    margin: auto;
  }
`,Q=t.div`
  border-radius: 60px;
  width: 592px;
  min-width: 592px;
  height: 654px;
  padding: 60px 80px;
  background: #fff;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    margin: auto;
  }
  @media screen and (max-width: 767px) {
    border-radius: 30px;
    width: 335px;
    min-width: 335px;
    margin: auto;
    padding: 28px 20px;
  }
`,V=t.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #262626;
  margin-bottom: 40px;
`,_=t.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: rgba(43, 43, 42, 0.4);
`,G=t.div`
  display: flex;
  gap: 8px;
`,l=t.input`
  opacity: 0;
  position: absolute;
  pointer-events: none;
`,m=t.label`
  cursor: pointer;
  position: relative;
  display: inline-block;
  border: none;
  border-radius: 30px;
  padding: 6px;
  width: 40px;
  height: 40px;
  background: ${a=>a||"rgba(244, 63, 94, 0.1)"};
  text-align: center;
  line-height: 40px;

  &:after {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    transition: background-color 0.3s;
  }

  ${l}:checked + & {
    background: ${a=>a};
    stroke: #fff;
    /* mix-blend-mode: multiply; */
  }
`,H=t.form`
  width: 432px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,K=t.img`
  border-radius: 100px;
  width: 86px;
  height: 86px;
  margin: auto;
  background: pink;
  /* margin-bottom: 12px; */
`,W=t.input`
  display: none;
`,X=t.button`
  background: #fff4df;
  color: white;
  border-radius: 30px;
  padding: 12px 16px;
  width: 146px;
  border: none;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: #262626;
`,Z=t.input`
  border: 1px solid #f6b83d;
  border-radius: 30px;
  padding: 12px 16px;
  width: 278px;
  @media screen and (max-width: 767px) {
    width: 170px;
  }
`,u=t.input`
  border: 1px solid #f6b83d;
  border-radius: 30px;
  padding: 16px;
  /* width: 432px; */
  width: 100%;
  margin-bottom: 18px;
`,ee=t.div`
  display: flex;
  gap: 8px;
  margin-bottom: 18px;
`,te=t.div`
  display: flex;
  gap: 12px;
  margin-bottom: 18px;
`,ie=t.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,se=t.button`
  border-radius: 30px;
  border: none;
  padding: 14px;
  width: 170px;
  background: rgba(38, 38, 38, 0.05);
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  color: #262626;
`,de=t.button`
  border-radius: 30px;
  border: none;
  padding: 14px;
  width: 170px;
  height: 48px;
  background: #f6b83d;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  color: #fff;
`,re=t.select`
  border: 1px solid #f6b83d;
  border-radius: 30px;
  padding: 16px;
  width: 210px;
  /* width: 100%; */
  margin-bottom: 18px;
`,ae=t.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  @media screen and (max-width: 767px) {
    margin-bottom: 16px;
    margin-top: 8px;
  }
`,b=t.div`
  display: flex;
`,ne="/assets/svg-da30c15f.svg",oe=L().shape({title:n().required("Title is required"),name:n().required("Name is required"),imgURL:n().matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,"Invalid URL").required("Image URL is required"),species:n().required("Species is required"),birthday:n().matches(/^\d{4}-\d{2}-\d{2}$/,"Invalid date format (YYYY-MM-DD)").required("Birthday is required"),sex:n().required("Sex is required")}),xe=()=>{const[a,v]=h.useState(null),[c,y]=h.useState([]),x=F(),f=U(),{register:r,handleSubmit:k,setValue:j,formState:{errors:s}}=B({resolver:I(oe)});h.useEffect(()=>{(async()=>{const i=localStorage.getItem("petLoveUserData");if(i){const p=JSON.parse(i);D(p.token);const w=await x(R());y(w.payload)}})()},[x]);const P=async d=>{try{const i=await x(q(d));i.error&&i.payload.includes("401")||i.error&&i.payload.includes("400")?T("You are not authorized"):f("/profile")}catch(i){alert("Error: "+i.message)}},S=()=>{f("/profile")},$=async d=>{const i=d.target.files[0];if(i){const p=URL.createObjectURL(i),C=p.replace("blob:","")+".png";v(p),j("imgURL",C)}},A=()=>{document.getElementById("fileInput").click()};return e.jsxs(N,{children:[e.jsx(z,{toastStyle:{background:"#f30e0e",color:"white"}}),e.jsx(J,{children:e.jsx(O,{})}),e.jsxs(Q,{children:[e.jsxs(V,{children:["Add my pet /",e.jsx(_,{children:"Personal details"})]}),e.jsxs(H,{onSubmit:k(P),children:[e.jsxs("div",{children:[e.jsxs(G,{children:[e.jsxs(b,{children:[e.jsx(l,{type:"radio",id:"female",value:"female",...r("sex")}),e.jsx(m,{htmlFor:"female",$bgColor:"rgba(244, 63, 94, 0.1)",$bgrColor:" #f43f5e",children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${g}#female`})})})]}),e.jsxs(b,{children:[e.jsx(l,{type:"radio",id:"male",value:"male",...r("sex")}),e.jsx(m,{htmlFor:"male",$bgColor:"rgba(84, 173, 255, 0.1)",$bgrColor:" #3fd6f4",children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${g}#male`})})})]}),e.jsxs(b,{children:[e.jsx(l,{type:"radio",id:"multiple",value:"multiple",...r("sex")}),e.jsx(m,{htmlFor:"multiple",$bgColor:"#fff4df",$bgrColor:" #f7bf4e",children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${g}#healthicons_sexual-reproductive-health`})})})]})]}),s.sex&&e.jsx(o,{children:s.sex.message})]}),e.jsx(ae,{children:a?e.jsx(K,{src:a,alt:"title"}):e.jsx("svg",{width:"86",height:"86",children:e.jsx("use",{href:`${ne}#image`})})}),e.jsxs(ee,{children:[e.jsx(Z,{value:a}),e.jsx(W,{...r("imgURL"),id:"fileInput",type:"file",accept:"image/png, image/jpeg, image/gif, image/bmp, image/webp",onChange:$}),s.imgURL&&e.jsx(o,{children:s.imgURL.message}),e.jsx(X,{type:"button",onClick:A,children:"Upload Photo"})]}),e.jsxs("div",{children:[e.jsx("label",{}),e.jsx(u,{...r("title"),placeholder:"Title"}),s.title&&e.jsx(o,{children:s.title.message})]}),e.jsxs("div",{children:[e.jsx("label",{}),e.jsx(u,{...r("name"),placeholder:"Pet’s Name"}),s.name&&e.jsx(o,{children:s.name.message})]}),e.jsxs(te,{children:[e.jsxs("div",{children:[e.jsx("label",{}),e.jsx(u,{...r("birthday"),placeholder:"0000.00.00"}),s.birthday&&e.jsx(o,{children:s.birthday.message})]}),e.jsxs(re,{name:"species",...r("species"),onChange:d=>j("species",d.target.value),children:[e.jsx("option",{value:"",children:"Type of pet"}),c==null?void 0:c.map((d,i)=>e.jsx("option",{value:d,children:d},i))]}),s.species&&e.jsx(o,{children:s.species.message})]}),e.jsxs(ie,{children:[e.jsx(se,{type:"button",onClick:S,children:"Back"}),e.jsx(de,{type:"submit",children:"Submit"})]})]})]})]})};export{xe as default};
