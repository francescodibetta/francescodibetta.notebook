---
class: note
draft: true
tags:
parental-note:
---

> [!info]- Connectivity Stats
> ```dataviewjs
> // --- 1. ALL HELPER FUNCTIONS ---
> 
> // == INLINKS ==
> // Helper for getting *list of paths* (for counting and filtering)
> const getTrueInlinkPaths = (f) => {
>   return (f.file.inlinks || [])
>     .map(l => l.path) // Get the path of the *linking file*
>     .filter(path => 
>         path &&                       // must exist
>         path !== f.file.path &&       // must not be self-link
>         !path.startsWith("Others")    // Exclude links FROM "Others" folder
>     )
>     .filter((v, i, a) => a.indexOf(v) === i); // get unique paths
> }
> // Helper for *counting* inlinks
> const trueInlinkCount = (f) => getTrueInlinkPaths(f).length;
> // Helper for getting *formatted* inlinks (for display)
> const trueInlinkList = (f) => getTrueInlinkPaths(f).map(p => dv.fileLink(p));
> 
> // == OUTLINKS ==
> // Helper for getting *list of paths* (for counting and filtering)
> const getTrueOutlinkPaths = (f) => {
>   return (f.file.outlinks || [])
>     .map(l => l.path)
>     .filter(path => 
>         path &&                       // must exist
>         path !== f.file.path &&       // must not be self-link
>         !path.startsWith("Others")    // Exclude links TO "Others" folder
>     )
>     .filter((v, i, a) => a.indexOf(v) === i); // get unique paths
> }
> // Helper for *counting* outlinks
> const trueOutlinkCount = (f) => getTrueOutlinkPaths(f).length;
> // Helper for getting *formatted* outlinks (for display)
> const trueOutlinkList = (f) => getTrueOutlinkPaths(f).map(p => dv.fileLink(p));
> 
> // *** NEW: COLOR HELPER ***
> const colorCodeValue = (value) => {
>   const val = parseFloat(value);
>   if (isNaN(val)) return value;
>   let color;
>   if (val < 0.25) {
>     color = "#ff6b6b"; // Red
>   } else if (val < 0.50) {
>     color = "#ffa500"; // Orange
>   } else if (val < 0.75) {
>     color = "#e5c07b"; // Yellow/Gold
>   } else {
>     color = "#68d391"; // Green
>   }
>   // Using toFixed(3) to match your original output
>   return `<span style="color: ${color}; font-weight: 500;">${val.toFixed(3)}</span>`; 
> }
> 
> // --- 2. GLOBAL CALCULATIONS ---
> 
> // Define all pages *once* (excluding "Others")
> const allPages = dv.pages().where(p => !p.file.path.startsWith("Others"));
> const current = dv.current();
> 
> // Calculate max inlinks
> const inCounts = allPages.map(p => trueInlinkCount(p)).filter(n => n > 0);
> const maxInlinks = inCounts.length ? Math.max(...inCounts) : 1;
> 
> // Calculate max outlinks
> const outCounts = allPages.map(p => trueOutlinkCount(p));
> const maxOutlinks = outCounts.length ? Math.max(...outCounts) : 1;
> 
> 
> // --- 3. CURRENT NOTE STATS ---
> 
> // Entrenchment
> const currentInlinkCount = trueInlinkCount(current);
> const entrenchment = currentInlinkCount / (maxInlinks || 1);
> 
> // Outlinkness
> const currentOutlinkCount = trueOutlinkCount(current);
> const outlinkness = currentOutlinkCount / (maxOutlinks || 1);
> 
> 
> // --- 4. RENDER OUTPUT ---
> 
> // == CONNECTIVITY OUTPUT ==
> dv.paragraph(`**Entrenchment:** ${colorCodeValue(entrenchment)}  
> **Outlinkness:** ${colorCodeValue(outlinkness)}
> 
> **True inlinks**: ${currentInlinkCount} (Max in vault: ${maxInlinks});
> **True outlinks**: ${currentOutlinkCount} (Max in vault: ${maxOutlinks})
> `);
> 
> const inlinks = trueInlinkList(current);
> if (inlinks.length) {
> 	dv.paragraph("**True inlinks:**");
> 	dv.paragraph(inlinks.map(l => `- ${l}`).join("\n"));
> } else {
> 	dv.paragraph("_No true inlinks found._");
> }
> 
> // == LISTS ==
> 
> const outlinks = trueOutlinkList(current);
> if (outlinks.length) {
> 	dv.paragraph("**True outlinks:**");
> 	dv.list(outlinks); // dv.list formats file links nicely
> } else {
> 	dv.paragraph("_No true outlinks found._");
> }
> ```
