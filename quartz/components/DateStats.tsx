import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
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

    // 2. Inline Styles to FORCE the look
    const containerStyle = {
      marginTop: "0.5rem",
      marginBottom: "1rem",
      color: "gray",       // Forces gray color
      fontSize: "0.8rem",  // Forces small font
      lineHeight: "1.4",   // Good spacing
      fontFamily: "var(--bodyFont)",
    }

    return (
      <div class={classNames(displayClass, "date-stats")} style={containerStyle}>
        {dates.created && (
          <div style={{ display: "block" }}>
            <strong style={{ fontWeight: 600 }}>Created:</strong> {formatDate(dates.created)}
          </div>
        )}
        {dates.modified && (
          <div style={{ display: "block" }}>
            <strong style={{ fontWeight: 600 }}>Updated:</strong> {formatDate(dates.modified)}
          </div>
        )}
      </div>
    )
  }

  return DateStats
}) satisfies QuartzComponentConstructor
