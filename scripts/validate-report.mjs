import { writeFile } from 'node:fs/promises';
import { buildDocx } from '../report-export.js';
import model from '../data/cost_model.json' with { type: 'json' };
import market from '../data/competitor_data.json' with { type: 'json' };
const c={startup:1020,fixed:337.9167,revenue:1290,variable:827.01,contribution:462.99,opProfit:125.0733,cmPerUnit:46.299,be:8,units:10,inventory:1452,time_horizon:'one month'};
const snapshot={snapshot_at:new Date().toISOString(),venture:model.venture,websites:{repository:model.venture.originalWebsiteRepository,live:model.venture.originalWebsiteUrl},products:model.defaultProducts,costs:model.suggestedExpenses.filter(x=>x.enabled),financials:c,competitors:{research_date:market.research_date,comparison:market.price_comparison,offers:market.pricing_offers},evaluation:{risk:'Moderate modeled risk',summary:'Validation sample only',findings:['Sample warning'],paragraphs:['Sample narrative']},decision:{student_justification:'Validation-only sample. Not a student decision.',confirmed_at:new Date().toISOString(),acknowledged_warnings:true},sources:model.costEvidenceSources,limitations:market.research_limitations};
const blob=await buildDocx(snapshot), path=new URL('../dist/docx-validation-only.docx',import.meta.url); await writeFile(path,Buffer.from(await blob.arrayBuffer()));console.log(path.pathname);
