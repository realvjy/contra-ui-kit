import React from "react"
import { Link, graphql, withPrefix } from "gatsby"
import Helmet from "react-helmet"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contra Wireframe Kit" />
      <Helmet>
        <script src={withPrefix('sound.js')} type="text/javascript" loop />
      </Helmet>
      <>
      <section className="hero_section">
        <audio id="contra_mp3" src="contra.mp3" preload="auto"/>
        <div className="container">
          <div className="hero_wrapper">
            <div className="hero_img">
              <img src="/screens.png" />
            </div>
            <div className="hero_details">
              <div className="texts">
                <h1>Open source wireframe kit</h1>
                <p>A starter wireframe kit for quick design and prototyping your idea. Its library contains more than <strong>150+ components</strong> and <strong>50+</strong> ready to use <strong>mobile screens</strong>. You can also create new components and screens easily with the help of its style guide.</p>
              </div>

              <div className="compatible">
                <div className="p-logo"><img src="/figma.png"/> <img src="/sketch.png"/> <img src="xd.png"/> <img src="/studio.png"/></div>
              </div>

              <div className="btn-lnks">
                <div className="dwn-links">
                  <button className="btn btn-download">
                    <h4>Download now</h4>
                  </button>
                  <ul className="dwn-list">
                    <li><a href="https://bit.ly/contra-wireframe-kit-figma"><img src="/figma.png"/> Figma</a></li>
                    <li><a href="http://bit.ly/contra-wireframe-kit-sketchapp"><img src="/sketch.png"/> Sketch</a></li>
                    <li><a href="https://bit.ly/contra-wireframe-kit-xd"><img src="xd.png"/> Adobe XD</a></li>
                    <li><a href="https://bit.ly/contra-wireframe-kit-studio"><img src="/studio.png"/> Invision Studio</a></li>
                  </ul>
                </div>
                <a href="https://www.buymeacoffee.com/realvjy" className="btn btn-coffee">
                  <h4>Buy me a coffee</h4>
                </a>
              </div>
              <div className="license">
                <p>Free for commercial and personal use under <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">CC0 License</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      </>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
