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
        <footer className="container footer">
          <div className="yeah-credit">
          <div className="maker">
            <h3>Made with love and coffee <a href="https://vijayverma.co/?ref=illlustrations">vijay verma</a> @realvjy</h3>
            <ul className="scl-lnk">
              <li><a href="https://dribbble.com/realvjy" target="__blank"><strong>dribbble</strong></a></li>
              <li><a href="https://twitter.com/realvjy" target="__blank"><strong>twitter</strong></a></li>
              <li><a href="https://instagram.com/realvjy" target="__blank"><strong>instagram</strong></a></li>
            </ul>
          </div>
          <div className="spl-credit">
            <p>Special Credit <a href="https://twitter.com/pablostanley" target="_blank">Pablo Stanley</a> • <a href="#">openpeeps</a></p>
          </div>
          </div>
        </footer>
      </div>
  )
}

export default Layout
