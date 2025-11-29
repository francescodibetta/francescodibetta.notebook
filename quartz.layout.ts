import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import ProfilePic from "./quartz/components/ProfilePic"
import DateStats from "./quartz/components/DateStats"
import TopTags from "./quartz/components/TopTags"


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
  links: {
    GitHub: "https://github.com/francescodibetta",
    //"LinkedIn": , // Add your academic links
    "Email": "mailto:francescodibetta@iusspavia.it"
  },
}),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    DateStats(),
    //Component.ContentMeta({ showReadingTime: false }),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.DesktopOnly(TopTags()),
    Component.Explorer({
  	title: "Explorer",
  	folderClickBehavior: "collapse", // Clicking folder name collapses it
  	folderDefaultState: "collapsed", // Start clean, user expands what they need
  	useSavedState: true, // Remember what I opened last time
    }),
   // Component.RecentNotes({ 
  	//title: "Recently Updated", 
  	//limit: 3, 
  	//filter: (f) => f.slug !== "index" && !f.frontmatter?.tags?.includes("explorer")
    //}),
  ],
  right: [
    ProfilePic(),
    Component.Graph({
    localGraph: {
   	drag: true, // Allow moving nodes
    	zoom: true,
    	depth: 2, // Only show direct neighbors (cleaner)
    	scale: 1.1,
    	repelForce: 0.5,
    	centerForce: 0.3,
    	linkDistance: 30,
    	fontSize: 0.4,
    	opacityScale: 1,
    	removeTags: ["#status", "#todo"], // Hide meta-tags from graph
    	showTags: false, // Hide all tags if you prefer just notes
  },
  globalGraph: {
    drag: true,
    zoom: true,
    depth: 1,
    scale: 0.9,
    repelForce: 0.5,
    centerForce: 0.3,
    linkDistance: 30,
    fontSize: 0.6,
    opacityScale: 1,
    showTags: false, // Keeps the big graph focused on concepts
  },
}),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
