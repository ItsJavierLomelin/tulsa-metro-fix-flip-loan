export interface City { slug:string; name:string; county:string; title:string; description:string; intro:string; angle:string; caution:string; }
export const brand = 'Tulsa Metro Fix & Flip Loan';
export const domain = 'tulsafixandflip.loansapp.cfd';
export const formName = 'Tulsa-Metro-Fix-Flip-Loan-Form';
/** GA4 measurement ID. Leave empty until the property is created, then paste the G-XXXXXXXXXX value here. */
export const ga4Id = '';

type Raw = [slug:string, name:string, county:string, intro:string, angle:string, caution:string];
const raw: Raw[] = [
  ['tulsa', 'Tulsa', 'Tulsa', 'Tulsa spreads from the Brady Arts District and Kendall-Whittier to Brookside, Maple Ridge and the south side. Tell us the address and the work you plan. We will connect you with funding sources that review the project on its own terms.', 'Art Deco-era homes, bungalows and mid-century ranches each have their own buyers, and the finished value changes by neighborhood. Compare your plan with recent sales on the same street.', 'Older Tulsa houses often have clay-related foundation movement and original wiring. Walk the house with a contractor and tell us what is still unconfirmed.'],
  ['broken-arrow', 'Broken Arrow', 'Tulsa', 'Broken Arrow is Oklahoma\'s fourth-largest city, with the Rose District downtown and a long run of suburban growth. Share the property and your plan. We connect investors with funding sources and keep the process moving.', 'Subdivisions from the 1980s onward dominate, and buyers expect updated kitchens, baths and finished outdoor space. Use sales from the same subdivision.', 'Roof age after hail and settling on clay lots are the two common surprises. Check both.'],
  ['jenks', 'Jenks', 'Tulsa', 'Jenks has the Oklahoma Aquarium, the Riverwalk and a strongly sought-after school district. Send us the address and your finish plan. We introduce your project to funding sources that can review a higher-finish flip.', 'Buyers here pay for updated homes in good school zones, so finishes should match recent sales. Use Jenks sales, not Tulsa averages.', 'Parcels near the river need a flood check. Confirm status and tell us what you learn.'],
  ['bixby', 'Bixby', 'Tulsa', 'Bixby is a fast-growing south Tulsa County city with a strong school district. Tell us about the property and the plan. We connect you with funding sources and answer questions quickly.', 'Subdivisions from the 1990s and later draw families who want updated finishes. Match comparables to the same subdivision.', 'Fast growth can mean uneven build quality. Check the foundation and the grading.'],
  ['owasso', 'Owasso', 'Tulsa', 'Owasso is a northeast Tulsa County suburb with its own school district and steady growth. Share the property and your plan. We introduce your project to funding sources and respond promptly.', 'Ranches and colonials from the 1990s and later are common, and buyers look for move-in condition. Recent sales in the same subdivision are your best support.', 'Check roofs and HVAC systems, which are the biggest budget items. Tell us what is verified.'],
  ['sand-springs', 'Sand Springs', 'Tulsa', 'Sand Springs sits west of Tulsa on the Arkansas River with Keystone Lake nearby. Send us the address and your plan. We connect investors with funding sources and keep things clear.', 'Older homes near the center and newer builds farther out both trade, and buyers appreciate the lake access. Pick the exit and match the scope.', 'River-adjacent parcels need a flood check. Confirm status for the address.'],
  ['sapulpa', 'Sapulpa', 'Creek', 'Sapulpa is the Creek County seat on Route 66, with a historic downtown. Tell us what you plan to buy. We introduce your project to funding sources that fit it.', 'Older homes near downtown and newer subdivisions both trade, at prices below south Tulsa. Gather Sapulpa and Tulsa comparables.', 'Older mechanicals and clay soils both matter. Check the foundation.'],
  ['glenpool', 'Glenpool', 'Tulsa', 'Glenpool takes its name from the early Glenn Pool oil field and sits just south of Tulsa. Share the property and your renovation plan. We connect you with funding sources and respond quickly.', 'Subdivision homes from the 1990s onward are typical, and buyers want updated, low-maintenance houses. Use sales from Glenpool and Jenks.', 'Check the foundation and the grading on clay lots. Share what you find.'],
  ['catoosa', 'Catoosa', 'Rogers', 'Catoosa is northeast of Tulsa along Route 66, home to the Blue Whale and the Port of Catoosa. Send us the address and the plan. We introduce your project to funding sources and keep things moving.', 'Older ranches and newer subdivisions trade at moderate prices, and buyers commute to Tulsa. Use Catoosa and Claremore sales.', 'Check roof age and drainage first.'],
  ['claremore', 'Claremore', 'Rogers', 'Claremore is the Rogers County seat, home to the Will Rogers Memorial and Rogers State University. Tell us about the property and the plan. We connect investors with funding sources and answer questions quickly.', 'Older homes near the center and newer subdivisions farther out both sell, and the college adds rental demand. Pick the exit before you set the scope.', 'Creeks and older drainage need a look. Confirm flood status for the address.'],
  ['collinsville', 'Collinsville', 'Tulsa', 'Collinsville is a small north Tulsa County city with an old main street. Share the property and your plan. We introduce your project to funding sources and respond promptly.', 'Small-town homes and country lots trade at lower prices, so tight scope matters. Gather several nearby sales.', 'Septic and well questions come up on country lots. Confirm utilities.'],
  ['skiatook', 'Skiatook', 'Tulsa', 'Skiatook sits beside Skiatook Lake in the Osage hills north of Tulsa. Send us the address and the plan. We connect you with funding sources and keep things clear.', 'Lake-area homes and small-town houses both trade, and buyers value the setting. Use Skiatook sales.', 'Lake-side lots need a flood and drainage check. Share what you find.'],
  ['coweta', 'Coweta', 'Wagoner', 'Coweta is a Wagoner County town southeast of Tulsa, growing with the commuter market. Tell us what you are buying. We introduce your project to funding sources that fit it.', 'Newer subdivisions and country lots dominate, and buyers want move-in condition at a fair price. Compare with Broken Arrow and Wagoner.', 'Septic and drainage on country lots matter. Confirm them early.'],
  ['mannford', 'Mannford', 'Creek', 'Mannford sits on Keystone Lake in Creek County, west of Tulsa. Share the property and the plan. We connect investors with funding sources and respond quickly.', 'Lake and country homes attract buyers looking for space and water access. Gather several nearby comparables.', 'Lakefront parcels need a flood check. Confirm status.'],
  ['sperry', 'Sperry', 'Tulsa', 'Sperry is a small town in Tulsa County north of Tulsa. Send us the address and your plan. We introduce your project to funding sources and keep the next steps simple.', 'Modest homes on larger lots are typical, and comparable sales can be thin. Use nearby towns for support.', 'Check utilities and drainage on the lot. Tell us what is verified.'],
  ['kiefer', 'Kiefer', 'Creek', 'Kiefer is a small Creek County town southwest of Tulsa near Glenpool. Tell us about the property. We connect you with funding sources and answer questions promptly.', 'Newer homes and country lots draw buyers who want space close to Tulsa. Use sales from Kiefer, Glenpool and Sapulpa.', 'Septic and drainage matter on larger lots. Confirm them.'],
  ['mounds', 'Mounds', 'Creek', 'Mounds is a small Creek County town named for the nearby hills, along U.S. 75 south of Tulsa. Share the address and the plan. We introduce your project to funding sources and keep things clear.', 'Small-town and country homes trade at moderate prices. A restrained renovation backed by nearby sales is usually the right scope.', 'Check foundation and utilities first.'],
  ['verdigris', 'Verdigris', 'Rogers', 'Verdigris is a small Rogers County town near Catoosa and the Verdigris River. Send us the address and your plan. We connect investors with funding sources and respond quickly.', 'Newer subdivisions and country lots make up the market, and buyers commute to Tulsa. Use Verdigris and Catoosa sales.', 'River-adjacent parcels need a flood check. Confirm status.']
];
export const cities: City[] = raw.map(([slug,name,county,intro,angle,caution])=>({
  slug,name,county,intro,angle,caution,
  title:`Fix and Flip Loans in ${name}, OK | ${brand}`,
  description:`Fix and flip funding connections for ${name}, Oklahoma investors. Share your purchase and renovation plan and we connect you with funding sources.`
}));

export interface Scenario { title:string; intro:string; items:string[]; outro:string }
export const priorityCities: string[] = ['tulsa','broken-arrow','jenks','owasso'];
export const scenarios: Record<string,Scenario> = {
  'tulsa':{title:'A Tulsa project, step by step',intro:'This is an illustration of how a project package might read for a Tulsa bungalow near Brookside. It is not a real deal.',items:['The buyer sends the address, the contract and a list of what the house needs: wiring, plumbing, kitchen, bath and floors.','A contractor walks the property and returns a written scope that notes the clay-soil foundation movement. The buyer adds three recent sales nearby.','We connect the project with funding sources, and the buyer answers follow-up questions about timeline and exit.'],outro:'Every project is different, and funding sources make their own decisions. Read our <a href="/fix-and-flip-project-checklist/">project checklist</a> to prepare your own package.'},
  'broken-arrow':{title:'A Broken Arrow project, step by step',intro:'This is an illustration of a package for a Broken Arrow ranch. It is not a real deal.',items:['The buyer records the roof age and any hail claim history in the file.','The scope covers the roof, the kitchen, two baths and flooring.','We introduce the project to funding sources and keep the buyer informed of each next step.'],outro:'Funding sources make their own decisions on each project. Start with the <a href="/fix-and-flip-project-checklist/">project checklist</a>.'},
  'jenks':{title:'A Jenks project, step by step',intro:'This is an illustration of a package for a Jenks home near the Riverwalk. It is not a real deal.',items:['The buyer confirms the flood status for the address.','The package includes a contractor scope and recent sales in the same school zone.','We connect the project with funding sources that can review a higher-finish flip.'],outro:'No outcome is guaranteed. The <a href="/fix-and-flip-vs-hard-money/">fix and flip vs hard money</a> guide explains how this kind of funding differs from other options.'},
  'owasso':{title:'An Owasso project, step by step',intro:'This is an illustration of a package for an Owasso subdivision home. It is not a real deal.',items:['The buyer lists cosmetic and systems work: paint, flooring, counters and HVAC.','The package adds sales from the same subdivision.','We connect the project with funding sources and respond to questions as they come up.'],outro:'Funding sources make their own decisions on each project. Start with the <a href="/fix-and-flip-project-checklist/">project checklist</a>.'}
};
export const nearbyAreas: Record<string,string[]> = {
  'tulsa':['broken-arrow','jenks','bixby'],
  'broken-arrow':['tulsa','jenks','bixby'],
  'jenks':['tulsa','broken-arrow','bixby'],
  'bixby':['tulsa','broken-arrow','jenks'],
  'owasso':['tulsa','broken-arrow','jenks'],
  'sand-springs':['tulsa','broken-arrow','jenks'],
  'sapulpa':['mannford','kiefer','mounds'],
  'glenpool':['tulsa','broken-arrow','jenks'],
  'catoosa':['claremore','verdigris','tulsa'],
  'claremore':['catoosa','verdigris','tulsa'],
  'collinsville':['tulsa','broken-arrow','jenks'],
  'skiatook':['tulsa','broken-arrow','jenks'],
  'coweta':['tulsa','broken-arrow','jenks'],
  'mannford':['sapulpa','kiefer','mounds'],
  'sperry':['tulsa','broken-arrow','jenks'],
  'kiefer':['sapulpa','mannford','mounds'],
  'mounds':['sapulpa','mannford','kiefer'],
  'verdigris':['catoosa','claremore','tulsa']
};
