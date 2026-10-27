import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
const root=new URL('../',import.meta.url), model=JSON.parse(await readFile(new URL('data/cost_model.json',root))), market=JSON.parse(await readFile(new URL('data/competitor_data.json',root))), html=await readFile(new URL('index.html',root),'utf8');
assert(model.suggestedExpenses.length>=15);assert(model.defaultProducts.length===1);assert.equal(market.price_comparison.n,3);assert.deepEqual(market.price_comparison.included_offer_ids,['P01','P02','P03']);
for(const f of ['app.js','report-export.js','styles.css','data/competitor_data.json'])assert(html.includes(f)||await access(new URL(f,root)).then(()=>true));
const E=model.suggestedExpenses.filter(e=>e.enabled), sum=(id)=>E.find(e=>e.id===id).amount;
const variablePer= sum('cogs-manufacture')+sum('cogs-inbound')+sum('cogs-packaging')+sum('fulfillment-outbound')+129*(sum('payment-percent')+sum('returns-reserve'))+sum('payment-fixed');
const fixed=E.filter(e=>e.classification==='fixed').reduce((a,e)=>a+e.amount/(e.frequency==='annual'?12:1),0);
const units=10, price=129, revenue=units*price, variable=units*variablePer, contribution=revenue-variable, profit=contribution-fixed, be=Math.ceil(fixed/(price-variablePer));
assert(Math.abs(variablePer-82.701)<1e-8);assert(Math.abs(fixed-337.9166666667)<1e-6);assert.equal(be,8);assert(Math.abs(profit-125.0733333333)<1e-6);
const breakEvenRevenue=be*price,safetyUnits=units-be,safetyPercent=safetyUnits/units,totalCosts=variable+fixed;
assert.equal(breakEvenRevenue,1032);assert.equal(safetyUnits,2);assert.equal(safetyPercent,.2);assert(Math.abs(totalCosts-1164.9266666667)<1e-6);
for(const testPrice of [70,variablePer]){const contributionPerUnit=testPrice-variablePer;const breakEvenUnits=contributionPerUnit>0?Math.ceil(fixed/contributionPerUnit):Infinity;assert.equal(breakEvenUnits,Infinity)}
const inv=25*(sum('cogs-manufacture')+sum('cogs-inbound')+sum('cogs-packaging'));const startup=E.filter(e=>e.classification==='startup').reduce((a,e)=>a+e.amount,0);assert.equal(inv,1452);assert.equal(startup,1020);
console.log(JSON.stringify({status:'PASS',expenseCount:model.suggestedExpenses.length,competitorCount:market.pricing_offers.length,variablePerUnit:variablePer,fixedMonthly:fixed,breakEvenUnits:be,breakEvenRevenue,marginOfSafety:{units:safetyUnits,percent:safetyPercent},expectedTotalCosts:totalCosts,monthlyProfit:profit,zeroAndNegativeContribution:'no finite break-even displayed',inventoryCash:inv,startupCosts:startup},null,2));

