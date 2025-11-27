---
class: tag_page
draft: true
tags:
---

# 1. Stats

```dataviewjs
// --- CONFIGURATION ---
const rootTags = dv.current().file.tags;
const primaryTag = rootTags[0];

if (!rootTags || rootTags.length === 0) {
    dv.paragraph("⚠️ No tags found in frontmatter.");
} else {
    dv.header(2, `🗂️ Structure of ${primaryTag}`);

    // Correct exclusion: ONLY the current file
    function isTagPage(p) {
        return p.file.path === dv.current().file.path;
    }

    // 1. Pages that have ALL root tags (intersection mode)
    const pages = dv.pages()
        .where(p => rootTags.every(t => p.file.tags.includes(t)))
        .where(p => !isTagPage(p));  // prevent self-reference

    // 2. Find subtags under the primary tag
    const subtagSet = new Set();
    const rootOnlyPages = [];

    pages.forEach(p => {
        let hasSubtag = false;

        p.file.tags.forEach(t => {
            if (t.startsWith(primaryTag + "/")) {
                subtagSet.add(t);
                hasSubtag = true;
            }
        });

        if (!hasSubtag) rootOnlyPages.push(p);
    });

    // 3. Root-only pages
    if (rootOnlyPages.length > 0) {
        dv.header(3, "Root Tag");

        rootOnlyPages.sort((a, b) => a.file.name.localeCompare(b.file.name));

        dv.table(
            ["Note", "Aliases"],
            rootOnlyPages.map(p => [
                p.file.link,
                p.aliases ? p.aliases[0] : "—"
            ])
        );
    }

    // 4. Subtag sections
    const sortedSubtags = Array.from(subtagSet).sort();

    for (const tag of sortedSubtags) {
        const searchUrl = `obsidian://search?query=tag:${tag}`;
        const headerLink = `[${tag}](${searchUrl})`;

        dv.header(3, headerLink);

        const specificPages = pages.where(p => p.file.tags.includes(tag));

        dv.table(
            ["Note", "Aliases"],
            specificPages
                .sort(p => p.file.name, 'asc')
                .map(p => [
                    p.file.link,
                    p.aliases ? p.aliases[0] : "—"
                ])
        );
    }
}
```

```dataviewjs
// --- CONFIGURATION ---
const rootTag = dv.current().file.tags[0];
const limit = 10;  // How many related topics to show

if (rootTag) {
    dv.header(2, `🔗 Related Topics`);

    const pages = dv.pages(rootTag);

    const tagCounts = {};

    // Check if a note is the tag page (only tagged with the root tag)
    function isTagPage(p, root) {
        return p.file.tags.length === 1 && p.file.tags[0] === root;
    }

    // Parent tag = higher in hierarchy
    function isParentTag(tag, root) {
        return root.startsWith(tag + "/");
    }

    // Child tag = lower in hierarchy
    function isChildTag(tag, root) {
        return tag.startsWith(root + "/");
    }

    // Count how many pages we consider as denominator (exclude tag page itself)
    const validPages = pages.where(p => !isTagPage(p, rootTag));
    const total = validPages.length;

    // Count co-occurring tags
    validPages.forEach(p => {
        p.file.tags.forEach(t => {

            // Skip: root tag, generic tags, parent tags, child tags
            if (
                t === rootTag ||
                t === "#note" ||
                t === "#reference" ||
                isParentTag(t, rootTag) ||
                isChildTag(t, rootTag)
            ) {
                return;
            }

            tagCounts[t] = (tagCounts[t] || 0) + 1;
        });
    });

    // Sort by frequency
    const sortedTags = Object.entries(tagCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, limit);

    dv.paragraph("Co-occurring tags");

    dv.table(
        ["Related Topic", "Frequency", "Overlap %"],
        sortedTags.map(([tag, count]) => {
            const pct = ((count / total) * 100).toFixed(1) + "%";
            return [
                tag,
                count,
                pct
            ];
        })
    );
}
```

```dataviewjs
// --- CONFIGURATION ---
const rootTag = dv.current().file.tags[0]; 
const barColor = "#8884d8";
const containerHeight = 150; // Total height of the graph area
const maxBarHeight = 100;    // Max height of the tallest bar (leaves room for text)

if (rootTag) {
    dv.header(2, "📅 Timeline");

    const pages = dv.pages(rootTag).where(p => p.file.cday);
    const years = {};

    pages.forEach(p => {
        const y = p.file.cday.year;
        years[y] = (years[y] || 0) + 1;
    });

    const sortedYears = Object.keys(years).sort();
    const maxCount = Math.max(...Object.values(years)) || 1;

    // Render Graphic
    let html = `<div style="
        display: flex; 
        align-items: flex-end; 
        gap: 15px; 
        height: ${containerHeight}px; 
        margin-bottom: 20px;
        border-bottom: 1px solid var(--text-muted);
        padding-bottom: 5px;
    ">`;

    for (let y of sortedYears) {
        const count = years[y];
        
        // Calculate Height in PIXELS (Robust)
        const pxHeight = Math.max((count / maxCount) * maxBarHeight, 2);
        
        html += `
        <div style="
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            flex: 1; 
            justify-content: flex-end;
            height: 100%;
        ">
            <span style="font-size: 0.8em; font-weight: bold; margin-bottom: 4px;">${count}</span>
            
            <div style="
                width: 100%; 
                background-color: ${barColor}; 
                height: ${pxHeight}px; 
                border-radius: 4px 4px 0 0; 
                opacity: 0.8;
                min-width: 20px;
            "></div>
            
            <span style="font-size: 0.8em; margin-top: 6px; color: var(--text-muted); width: 100%; text-align: center;">${y}</span>
        </div>`;
    }
    html += `</div>`;
    dv.paragraph(html);
}
```
