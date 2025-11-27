---
draft: true
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
> // *** NEW: COLOR HELPER (Exponential Curve) ***
> const colorCodeValue = (value) => {
>   let val = parseFloat(value);
>   if (isNaN(val)) return value;
> 
>   // 1. Clamp value between 0 and 1
>   val = Math.max(0, Math.min(1, val));
> 
>   // 2. CURVED HUE CALCULATION (Red -> Teal)
>   const hue = Math.floor(Math.pow(val, 2) * 150);
> 
>   // 3. Vivid Aesthetics
>   const color = `hsl(${hue}, 85%, 60%)`;
> 
>   // Bold font (700) and 3 decimal places for this specific note
>   return `<span style="color: ${color}; font-weight: 550;">${val.toFixed(3)}</span>`;
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
