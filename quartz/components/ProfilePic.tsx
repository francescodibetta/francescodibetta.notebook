import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const style = `
.profile-container {
  text-align: center;
  margin-bottom: 1rem;
}
.profile-img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--secondary);
}
`

export default (() => {
  const ProfilePic: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    // Only show on the homepage ("index")
    if (fileData.slug !== "index") {
      return <></>
    }

    return (
      <div class={classNames(displayClass, "profile-container")}>
        {/* Updated to .JPG to match your file */}
        <img src="/static/profile.JPG" class="profile-img" alt="Profile" />
      </div>
    )
  }

  ProfilePic.css = style
  return ProfilePic
}) satisfies QuartzComponentConstructor
