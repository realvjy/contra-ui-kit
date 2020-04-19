import React from "react"
import { Link } from "gatsby"
import "./layout.scss"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header = (
      <>
      <div className="announce-wrapper ph">
        <div className="container">

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
                <a className="btn-tw" href="https://twitter.com/intent/tweet?text=Design%20awesome%20wireframes%20,%20with%20contra%20wireframekit%20%20https://contrauikit.com%20by%20@realvjy">Share on twitter <img src="/twitter.svg"/></a>
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

      </div>
  )
}

export default Layout
