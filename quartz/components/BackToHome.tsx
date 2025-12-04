import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const style = `
.back-home-container {
  margin-bottom: 1rem;
}

.back-home-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid var(--secondary);
  color: var(--secondary);
  background: transparent;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  font-family: var(--headerFont);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.back-home-btn:hover {
  background-color: var(--secondary);
  color: var(--light) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.home-icon {
  width: 1.1rem;
  height: 1.1rem;
  stroke-width: 2px;
}
`

export default (() => {
  const BackToHome: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={classNames(displayClass, "back-home-container")}>
        <a 
          href="https://francescodibetta.github.io/"
          class="back-home-btn"
          target="_parent"  /* 1. Tells browser to break out of the app context */
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation(); /* 2. Stops Quartz Router from seeing the click */
            window.location.assign("https://francescodibetta.github.io/"); /* 3. Hard redirect */
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
            class="home-icon"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Main Website
        </a>
      </div>
    )
  }

  BackToHome.css = style
  return BackToHome
}) satisfies QuartzComponentConstructor
