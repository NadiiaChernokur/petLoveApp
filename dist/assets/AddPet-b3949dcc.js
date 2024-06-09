import{p as t,r as l,a as q,u as B,j as e,s as c,t as I,v as L,w as z}from"./index-f2e9fc0e.js";import{u as T,s as E,o as M}from"./sprite2-8143aca6.js";import{c as Y,a as o,Q as N,B as O}from"./ReactToastify-3d54d9f2.js";const W="/assets/dogAddpets-232d59b6.png",J="/assets/appDogT-5a2f9476.png",Q="/assets/addDogM-63dcdac0.png",n=t.span`
  color: red;
  font-size: 12px;
`,V=t.div`
  margin: 32px;
  margin-top: 0;
  display: flex;
  gap: 32px;
  justify-content: space-between;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    margin: auto;
  }
`,_=t.img`
  border-radius: 60px;
  width: 592px;
  height: 654px;
  background-image: url(${W});
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    background-image: url(${J});
    width: 704px;
    height: 248px;
  }
  @media screen and (max-width: 767px) {
    min-width: 335px;
    border-radius: 30px;
    width: 335px;
    height: 213px;
    background-image: url(${Q});
  }
`,G=t.div`
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
`,H=t.div`
  border-radius: 60px;
  width: 592px;
  min-width: 592px;
  /* height: 654px; */
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
`,K=t.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #262626;
  margin-bottom: 40px;
`,X=t.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: rgba(43, 43, 42, 0.4);
`,Z=t.div`
  display: flex;
  gap: 8px;
`,x=t.input`
  opacity: 0;
  position: absolute;
  pointer-events: none;
  cursor: pointer;
`,u=t.label`
  cursor: pointer;
  position: relative;
  display: inline-block;
  border: none;
  border-radius: 30px;
  padding: 6px;
  width: 40px;
  height: 40px;
  /* background: ${({$bgColor:r})=>r}; */
  text-align: center;
  line-height: 40px;

  &:after {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    transition: background-color 0.3s;
  }

  ${x}:checked + & {
    background: ${({$bgrColor:r})=>r};
    stroke: #fff;
  }
`,ee=t.form`
  width: 432px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,te=t.img`
  border-radius: 100px;
  width: 86px;
  height: 86px;
  margin: auto;
  background: pink;
  /* margin-bottom: 12px; */
`,ie=t.input`
  display: none;
`,se=t.button`
  background: #fff4df;
  color: white;
  border-radius: 30px;
  padding: 12px 16px;
  width: 146px;
  height: 47px;
  border: none;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: #262626;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 767px) {
    width: 117px;
  }
`,re=t.input`
  border: 1px solid #f6b83d;
  border-radius: 30px;
  padding: 12px 16px;
  width: 278px;
  @media screen and (max-width: 767px) {
    width: 170px;
  }
`,b=t.input`
  border: 1px solid #f6b83d;
  border-radius: 30px;
  padding: 16px;
  /* width: 432px; */
  width: 100%;
  margin-bottom: 18px;
`,de=t.div`
  display: flex;
  gap: 8px;
  margin-bottom: 18px;
`,ae=t.div`
  display: flex;
  gap: 12px;
  margin-bottom: 18px;
`,oe=t.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,ne=t.button`
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
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,pe=t.button`
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
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,le=t.select`
  border: 1px solid #f6b83d;
  border-radius: 30px;
  padding: 16px;
  width: 210px;

  margin-bottom: 18px;
  @media screen and (max-width: 767px) {
    width: 143px;
  }
`,ce=t.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  @media screen and (max-width: 767px) {
    margin-bottom: 16px;
    margin-top: 8px;
  }
`,f=t.div`
  display: flex;
  border-radius: 50%;
  background: ${({$bgColor:r})=>r};
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background: ${({$bgrColor:r})=>r};
    stroke: #fff;
    fill-opacity: 1.5;
  }
`,xe=t.label`
  position: absolute;
  top: 17px;
  right: 17px;
`,he="/assets/svg-da30c15f.svg",k="/assets/sex-10fc01d8.svg",ge=Y().shape({title:o().required("Title is required"),name:o().required("Name is required"),imgURL:o().matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,"Invalid URL").required("Image URL is required"),species:o().required("Species is required"),birthday:o().matches(/^\d{4}-\d{2}-\d{2}$/,"Invalid date format (YYYY-MM-DD)").required("Birthday is required"),sex:o().required("Sex is required")}),fe=()=>{const[r,$]=l.useState(null),[h,S]=l.useState([]),[j,C]=l.useState(""),g=q(),w=B(),{register:a,handleSubmit:P,setValue:v,formState:{errors:s}}=T({resolver:M(ge)});l.useEffect(()=>{(async()=>{const i=localStorage.getItem("petLoveUserData");if(i){const p=JSON.parse(i);I(p.token);const y=await g(L());S(y.payload)}})()},[g]);const A=async d=>{try{const i=await g(z(d));i.error&&i.payload.includes("401")||i.error&&i.payload.includes("400")?O("You are not authorized"):w("/profile")}catch(i){alert("Error: "+i.message)}},F=()=>{w("/profile")},U=async d=>{const i=d.target.files[0];if(i){const p=URL.createObjectURL(i),R=p.replace("blob:","")+".png";$(p),v("imgURL",R)}},D=()=>{document.getElementById("fileInput").click()},m=d=>{C(d.target.value)};return e.jsxs(V,{children:[e.jsx(N,{toastStyle:{background:"#f30e0e",color:"white"}}),e.jsx(G,{children:e.jsx(_,{})}),e.jsxs(H,{children:[e.jsxs(K,{children:["Add my pet /",e.jsx(X,{children:"Personal details"})]}),e.jsxs(ee,{onSubmit:P(A),children:[e.jsxs("div",{children:[e.jsxs(Z,{children:[e.jsxs(f,{$bgrColor:"#f43f5e",$bgColor:"rgba(244, 63, 94, 0.1)",children:[e.jsx(x,{type:"radio",id:"female",value:"female",...a("sex"),onChange:m}),e.jsx(u,{htmlFor:"female",$bgrColor:"#f43f5e",children:j==="female"?e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${k}#femaleW`})}):e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${c}#female`})})})]}),e.jsxs(f,{$bgrColor:"#3fd6f4",$bgColor:"rgba(84, 173, 255, 0.1)",children:[e.jsx(x,{type:"radio",id:"male",value:"male",...a("sex"),onChange:m}),e.jsx(u,{htmlFor:"male",$bgrColor:"#3fd6f4",children:j==="male"?e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${k}#maleW`})}):e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${c}#male`})})})]}),e.jsxs(f,{$bgrColor:"#f7bf4e",$bgColor:"#fff4df",children:[e.jsx(x,{type:"radio",id:"multiple",value:"multiple",...a("sex"),onChange:m}),e.jsx(u,{htmlFor:"multiple",$bgrColor:" #f7bb41",children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${c}#healthicons_sexual-reproductive-health`})})})]})]}),s.sex&&e.jsx(n,{children:s.sex.message})]}),e.jsx(ce,{children:r?e.jsx(te,{src:r,alt:"title"}):e.jsx("svg",{width:"86",height:"86",children:e.jsx("use",{href:`${he}#image`})})}),e.jsxs(de,{children:[e.jsxs("div",{children:[e.jsx(re,{value:r}),s.imgURL&&e.jsx(n,{children:s.imgURL.message})]}),e.jsx(ie,{...a("imgURL"),id:"fileInput",type:"file",accept:"image/png, image/jpeg, image/gif, image/bmp, image/webp",onChange:U}),e.jsxs(se,{type:"button",onClick:D,children:["Upload Photo",e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${E}#upload-cloud`})})]})]}),e.jsxs("div",{children:[e.jsx("label",{}),e.jsx(b,{...a("title"),placeholder:"Title"}),s.title&&e.jsx(n,{children:s.title.message})]}),e.jsxs("div",{children:[e.jsx("label",{}),e.jsx(b,{...a("name"),placeholder:"Pet’s Name"}),s.name&&e.jsx(n,{children:s.name.message})]}),e.jsxs(ae,{children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx(b,{...a("birthday"),placeholder:"0000.00.00"}),s.birthday&&e.jsx(n,{children:s.birthday.message}),e.jsx(xe,{children:e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${c}#calendar`})})})]}),e.jsxs("div",{children:[e.jsxs(le,{name:"species",...a("species"),onChange:d=>v("species",d.target.value),children:[e.jsx("option",{value:"",children:"Type of pet"}),h==null?void 0:h.map((d,i)=>e.jsx("option",{value:d,children:d},i))]}),s.species&&e.jsx(n,{children:s.species.message})]})]}),e.jsxs(oe,{children:[e.jsx(ne,{type:"button",onClick:F,children:"Back"}),e.jsx(pe,{type:"submit",children:"Submit"})]})]})]})]})};export{fe as default};
