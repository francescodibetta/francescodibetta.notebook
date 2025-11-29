import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const style = `
.top-tags-container {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

summary {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Pushes arrow to the right edge */
  cursor: pointer;
  
  /* Text Styles matching Explorer */
  font-family: var(--headerFont);
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark);
  line-height: 1.5rem;
  padding-right: 0.5rem;
}

summary::-webkit-details-marker {
  display: none;
}

/* Style the SVG Icon specifically */
.folder-icon {
  width: 1rem;
  height: 1rem;
  color: var(--darkgray); /* Matches Explorer icon color */
  stroke-width: 2px;
  transition: transform 0.2s ease;
}

/* Rotate the SVG when opened */
details[open] .folder-icon {
  transform: rotate(90deg);
  color: var(--secondary); /* Optional: Highlights color when open */
}

.top-tags-list {
  list-style: none !important;
  padding-left: 0 !important;
  margin-top: 0.5rem;
}
.tag-item {
  margin-bottom: 0.3rem;
}
.tag-link {
  font-size: 0.9rem;
  color: var(--secondary);
  text-decoration: none;
  font-weight: 500;
}
.tag-link:hover {
  color: var(--tertiary);
}
`

export default (() => {
  const TopTags: QuartzComponent = ({ allFiles, displayClass }: QuartzComponentProps) => {
    // 1. Collect and Count Tags
    const tags = new Map<string, number>()
    
    allFiles.forEach((file) => {
      const fileTags = file.frontmatter?.tags || []
      fileTags.forEach((tag) => {
        const cleanTag = tag.startsWith("#") ? tag.slice(1) : tag
        if (cleanTag !== "explorer") {
            tags.set(cleanTag, (tags.get(cleanTag) || 0) + 1)
        }
      })
    })

    // 2. Sort and Limit
    const sortedTags = [...tags.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)

    return (
      <div class={classNames(displayClass, "top-tags-container")}>
        <details>
          <summary>
            <span>Top Tags</span>
            {/* Native Feather Icon: Chevron Right */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              class="folder-icon"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </summary>
          
          <ul class="top-tags-list">
            {sortedTags.map(([tag, count]) => (
              <li class="tag-item">
                <a href={`/tags/${tag}`} class="tag-link">
                  #{tag} <span style={{opacity: 0.6, fontSize: "0.8em"}}>({count})</span>
                </a>
              </li>
            ))}
            <li class="tag-item" style={{marginTop: "0.5rem"}}>
              <a href="/tags" style={{fontSize: "0.8rem", fontStyle: "italic", color: "var(--gray)"}}>
                View all...
              </a>
            </li>
          </ul>
        </details>
      </div>
    )
  }
 
  TopTags.css = style
  return TopTags
}) satisfies QuartzComponentConstructor
