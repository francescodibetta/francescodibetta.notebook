import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
  <article class="popover-hint">
    <h1>404</h1>
    
    {/* --- NEW IMAGE CODE START --- */}
    <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
      <img 
        src="notebook/static/404-fun.jpg" 
        alt="Page not found" 
        style={{ maxWidth: "300px", borderRadius: "10px" }} 
      />
    </div>
    {/* --- NEW IMAGE CODE END --- */}

    <p>This page is not ready yet...</p>
    <p>
      <a href="/">Return to Homepage</a>
    </p>
  </article>
)    
}

export default (() => NotFound) satisfies QuartzComponentConstructor
