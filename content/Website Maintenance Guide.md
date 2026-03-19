---
title: Quartz Site Maintenance Guide
draft: true
tags:
---

# Quartz Site Maintenance Guide

This is a private reference note for maintaining and updating the Quartz site. Because `draft: true` is in the frontmatter above, this note will **not** be published to the live site.

## 1. How to Make Main Modifications (Templates & Styling)

All major structural and styling changes happen inside the root folder of your Quartz repository, specifically in two TypeScript files:

### **A. Change Layout & Components (`quartz.layout.ts`)**

This file controls **where** things appear on the page (e.g., sidebars, footer, header).

- Open `quartz.layout.ts` in your code editor.
- You will see sections for `sharedPageComponents` (header/footer), `defaultContentPageLayout` (standard notes), and `defaultListPageLayout` (folder/tag pages).
- You can add, remove, or rearrange components like `Component.Graph()`, `Component.Backlinks()`, or `Component.TableOfContents()`.

### **B. Change Colors & Fonts (`quartz.config.ts`)**

This file controls the **theme** of your site.

- Open `quartz.config.ts`.
- Scroll to the `theme` section.
- Under `typography`, you can change the fonts used for headers and body text.
- Under `colors`, you can modify the hex codes for both `lightMode` and `darkMode` (e.g., background color, text color, link color).

## 2. How to Change Site and Page Info

### **A. Global Site Information**

To change the main name of your site, the URL, or the default language:

- Open `quartz.config.ts`.
- Look at the top for the `configuration` object.
- Modify variables like:
  - `pageTitle`: The name of your site shown in the header.
  - `baseUrl`: Your website's URL (important for RSS and sitemaps).
  - `locale`: e.g., `"en-US"` or `"it-IT"`.

### **B. Specific Page/Note Information**

To change the title, add aliases, or hide a specific page, use YAML frontmatter at the very top of that specific Markdown note:

```yaml
---
title: My Custom Page Title
aliases: [Another Name]
draft: false
---
```

## 3. How to Sync and Publish Changes

Once you have made your changes (either editing notes in Obsidian or modifying the `.ts` files in your code editor), you need to sync them to the live website.

1. Open your terminal (or the terminal inside VS Code).
2. Make sure you are in your Quartz folder (e.g., `cd path/to/quartz`).
3. Run the standard sync command:

```bash
npx quartz sync
```

4. **What this does:** This command automatically formats your markdown, builds the static HTML, commits the changes to Git, and pushes them to your GitHub repository. Your live site will update shortly after!
