import React from "react"
import { Link } from "gatsby"
import "./layout.scss"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header = (
      <>
      <div className="announce-wrapper ph">
        <div className="container">
          <div className="an-details">
            <p><img src="/ph-logo.png"/>Featured on Product hunt <a href="https://www.producthunt.com/posts/contra-wireframe-kit?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-contra-wireframe-kit" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=193721&theme=light&period=daily" alt="Contra Wireframe Kit - Open source wireframe kit for design and prototyping 🚀 | Product Hunt Embed" /></a>
            </p>
          </div>
        </div>
      </div>
      <section className="header_section">
        <div className="container">
          <nav>
            <Link to={`/`} className="brand">
              <img src="/logo.svg" className="logo" />
            </Link>
            <ul className="buttons links">
              <li>
                <a className="btn-tw" href="https://twitter.com/intent/tweet?text=Design%20awesome%20wireframes%20with%20contra%20wireframe%20kit%20https://contrauikit.com%20by%20@realvjy">Share on twitter <img src="/twitter.svg"/></a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      </>
    )
  return (
    <div className="contra_wrap">
        <header>{header}</header>
        <main className="hero_section">{children}</main>
        <div className="ad-float">
          <a href="http://bit.ly/3o05NEX">
            <img src="bloo-ads.jpg" />
          </a>
        </div>
      </div>
  )
}

export default Layout
