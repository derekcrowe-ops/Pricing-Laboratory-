import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
const root=new URL('../',import.meta.url), out=new URL('../dist/',import.meta.url);
await rm(out,{recursive:true,force:true}); await mkdir(out,{recursive:true});
for(const f of ['index.html','app.js','styles.css','report-export.js','data']) await cp(new URL(f,root),new URL(f,out),{recursive:true});
await writeFile(new URL('.nojekyll',out),''); console.log('Static GitHub Pages build written to dist/.');
