import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const style = `
.pdf-download-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--lightgray);
  color: var(--dark);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s ease;
  margin-bottom: 1rem;
  width: fit-content;
  border: 1px solid transparent;
}

.pdf-download-btn:hover {
  background-color: var(--secondary);
  color: white !important;
  border-color: var(--secondary);
}

.pdf-icon {
  width: 1.2rem;
  height: 1.2rem;
  stroke-width: 2px;
}
`

export default (() => {
  const DownloadPdf: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    // 1. Hide on Homepage
    if (fileData.slug === "index") {
      return null
    }

    const fm = fileData.frontmatter || {}

    // 2. LOGIC: Check BOTH conditions
    const pdfFile = fm.pdf
    const shareEnabled = fm.share_pdf // Looking for "share_pdf: true"

    // If no file exists OR the switch is not explicitly true, hide it.
    if (!pdfFile || shareEnabled !== true) {
      return null
    }

    // 3. Render the Button
    return (
      <div class={classNames(displayClass, "pdf-container")}>
        {/* ADDED "/notebook" prefix here! */}
        <a href={`/notebook/static/pdfs/${pdfFile}`} download class="pdf-download-btn" title="Download PDF version">
          {/* SVG Icon: Download */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
            class="pdf-icon"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download PDF
        </a>
      </div>
    )
  } // <--- THIS BRACE WAS MISSING

  DownloadPdf.css = style
  return DownloadPdf
}) satisfies QuartzComponentConstructor
