import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { GlobalConfiguration } from "../cfg"

const style = `
.date-stats {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: var(--gray);
  font-size: 0.8rem;
  font-family: var(--bodyFont);
}
`

interface Options {
  priority?: ("frontmatter" | "git" | "filesystem")[]
}

export default ((userOpts?: Options) => {
  const DateStats: QuartzComponent = ({ fileData, displayClass, cfg }: QuartzComponentProps) => {
    // 1. Hide on Homepage
    if (fileData.slug === "index") {
      return null
    }

    const dates = fileData.dates
    if (!dates) {
      return null
    }

    const formatDate = (d: Date) => {
      return d.toLocaleDateString(cfg.locale, {
        year: "numeric",
        month: "short",
        day: "2-digit",
      })
    }

    // 2. Render with DIVs (Forces new lines)
    return (
      <div class={classNames(displayClass, "date-stats")}>
        {dates.created && (
          <div>Created: {formatDate(dates.created)}</div>
        )}
        {dates.modified && (
          <div>Updated: {formatDate(dates.modified)}</div>
        )}
      </div>
    )
  }

  DateStats.css = style
  return DateStats
}) satisfies QuartzComponentConstructor
