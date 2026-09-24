import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const docs=path.resolve(root,'docs');
const marker=path.join(docs,'.generated-by-build-pages');
if(docs!==path.join(root,'docs'))throw new Error('Unexpected output path');
if(fs.existsSync(docs)){
  if(!fs.existsSync(marker))throw new Error('docs/ exists without the generated marker; leaving it untouched');
  fs.rmSync(docs,{recursive:true,force:true});
}
fs.mkdirSync(docs,{recursive:true});
for(const name of ['css','js','data'])fs.cpSync(path.join(root,name),path.join(docs,name),{recursive:true});
fs.cpSync(path.join(root,'assets','images'),path.join(docs,'assets','images'),{recursive:true});
let html=fs.readFileSync(path.join(root,'index.html'),'utf8');
html=html.replace('</head>','<link rel="stylesheet" href="css/viewer-mobile.css"></head>');
html=html.replace('</body>','<script src="js/viewer-mobile.js"></script></body>');
fs.writeFileSync(path.join(docs,'index.html'),html);
fs.writeFileSync(path.join(docs,'css','viewer-mobile.css'),`@media screen and (max-width:1919px){html,body{overflow-x:hidden}#portfolio{width:100%;overflow:hidden}.page{transform:scale(var(--viewer-scale,1));transform-origin:top left;margin:16px 0 var(--mobile-page-bottom,16px) 8px!important}.toolbar{overflow-x:auto;white-space:nowrap}}@media print{.page{transform:none!important;margin:0!important}#portfolio{overflow:visible!important}}`);
fs.writeFileSync(path.join(docs,'js','viewer-mobile.js'),`(()=>{function resize(){const w=window.innerWidth;const scale=w>=1920?1:Math.max(.1,(w-16)/1920);document.documentElement.style.setProperty('--viewer-scale',String(scale));document.documentElement.style.setProperty('--mobile-page-bottom',Math.round(1080*scale-1080+16)+'px')}window.addEventListener('resize',resize);resize()})();`);
fs.writeFileSync(path.join(docs,'.nojekyll'),'');
fs.writeFileSync(marker,'Generated from the root portfolio by scripts/build-pages.mjs. Do not edit docs/ directly.\n');
console.log(`Built ${docs}`);
