import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="disclamer">

        </div>
        <div className="yeah-credit">
        <div className="maker">
          <h3>Made with love &#10084; and coffee <a href="https://vijayverma.co/?ref=illlustrations">vijay verma</a> @realvjy</h3>
          <ul className="scl-lnk">
            <li><a href="https://dribbble.com/realvjy" target="__blank"><strong>dribbble</strong></a></li>
            <li> • <a href="https://twitter.com/realvjy" target="__blank"><strong>twitter</strong></a></li>
            <li> • <a href="https://instagram.com/realvjy" target="__blank"><strong>instagram</strong></a></li>
          </ul>
        </div>
        <div className="spl-credit">
          <p>Special Credit <a href="https://twitter.com/pablostanley" target="_blank">Pablo Stanley</a> • <a href="https://www.openpeeps.com/" target="_blank">openpeeps</a></p>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
