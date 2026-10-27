# Mission 3 — Pricing & Cost Laboratory

A browser-only pricing and cost lab for the proposed hockey equipment bag with integrated stick holders. It is a static site: no server, API key, login, or paid service is required. Product assumptions, editable expenses, scenario quantities, evidence notes, and original Mission 1 competitive records are bundled locally.

## Run and build

Open `index.html` through a static web server (ES modules and `fetch` require HTTP). The GitHub Pages workflow builds the site into `dist/` with relative asset paths.

```sh
npm run validate
npm run build
```

## Important model boundaries

- The concept, audience, and preliminary $119–$149 price hypothesis come from Mission 1 materials. No brand name, final dimensions, bill of materials, supplier, or confirmed channel was provided. DTC North American launch and home-based early operations are explicit modeling assumptions.
- Costs marked **Researched** are evidence points, not necessarily quotes available to this venture. Stripe lists a domestic card reference fee; Uline's carton may not fit the final product; Connecticut filing fees apply only to that entity/jurisdiction; GitHub Pages hosting applies to a public static information site and is not checkout infrastructure.
- Other startup and operating amounts are **Illustrative** planning placeholders. Sales volume is student-entered and is not a demand forecast.
- Break-even includes monthly recurring fixed expenses and variable costs. Startup investment and opening inventory cash are shown separately. Inventory cash includes manufacturing, inbound freight, and packaging at the editable starter assumptions.
- Competitive summary includes only three selected USD full ice-hockey gear bag offers. Prices and product specs were captured October 27, 2026; this is not an exhaustive or statistically representative sample. Separate stick bags and the TK field-hockey duffle are contextual alternatives, not equivalent full bag comparisons.
- Working edits are stored in browser local storage. Clearing browser data or changing devices may lose them; use Backup/Restore to keep a copy.
- Reports are enabled only after the user evaluates and confirms a current decision snapshot. The user supplies the written rationale and warning acknowledgment when shown; the app never confirms on the user's behalf.

## Original venture website context

- Repository: https://github.com/derekcrowe-ops/pricing-intelligence-dashboard
- Live site: https://derekcrowe-ops.github.io/pricing-intelligence-dashboard/

## Deployment

The configured repository is `https://github.com/derekcrowe-ops/Pricing-Laboratory-.git`. GitHub Actions publishes `dist/` to Pages on pushes to `main`. Expected Pages URL: `https://derekcrowe-ops.github.io/Pricing-Laboratory-/`.
