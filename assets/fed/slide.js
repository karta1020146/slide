import{_ as d}from"../preload-helper-Jk08Cs8h.js";const l=new Set(["Module","__esModule","default","_export_sfc"]);let i={"./slide":()=>(c(["__federation_expose_Slide-B6TEpDQo.css"]),f("./../__federation_expose_Slide-kHjls_dI.js").then(e=>Object.keys(e).every(t=>l.has(t))?()=>e.default:()=>e))};const a={},c=e=>{const t=import.meta.url;if(typeof t>"u"){console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');return}const o=t.substring(0,t.lastIndexOf("fed/slide.js"));e.forEach(r=>{const s=o+r;if(s in a)return;a[s]=!0;const n=document.head.appendChild(document.createElement("link"));n.href=s,n.rel="stylesheet"})};async function f(e){return d(()=>import(e),__vite__mapDeps([]))}const u=e=>{if(!i[e])throw new Error("Can not find remote module "+e);return i[e]()},p=e=>{globalThis.__federation_shared__=globalThis.__federation_shared__||{},Object.entries(e).forEach(([t,o])=>{const r=Object.keys(o)[0],s=Object.values(o)[0],n=s.scope||"default";globalThis.__federation_shared__[n]=globalThis.__federation_shared__[n]||{};const _=globalThis.__federation_shared__[n];(_[t]=_[t]||{})[r]=s})};export{c as dynamicLoadingCss,u as get,p as init};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
