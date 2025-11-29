import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { GlobalConfiguration } from "../cfg"

// CSS to make it small and gray
const style = `
.date-stats {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: var(--gray);
  font-size: 0.8rem; /* Small font size */
  font-family: var(--bodyFont); /* Looks technical/clean */
}
.date-stats span {
  display: block; /* Put them on separate lines */
  line-height: 1.2;
}
`

interface Options {
  priority?: ("frontmatter" | "git" | "filesystem")[]
}

export default ((userOpts?: Options) => {
  const DateStats: QuartzComponent = ({ fileData, displayClass, cfg }: QuartzComponentProps) => {
    // Hide on homepage
    if (fileData.slug === "index") {
      return null
    }    
    const dates = fileData.dates
    if (!dates) {
      return null
    }

    // Helper to format date
    const formatDate = (d: Date) => {
      return d.toLocaleDateString(cfg.locale, {
        year: "numeric",
        month: "short",
        day: "2-digit",
      })
    }

    return (
      <div class={classNames(displayClass, "date-stats")}>
        {dates.created && (
          <span class="date-created">Created: {formatDate(dates.created)}</span>
        )}
        {dates.modified && (
          <span class="date-modified">Updated: {formatDate(dates.modified)}</span>
        )}
      </div>
    )
  }

  DateStats.css = style
  return DateStats
}) satisfies QuartzComponentConstructor
