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
      <SEO title="All posts" />
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
                <p>More than 150+ Components and 50+ ready to use mobile screens. Have powerful design system to quickly design new screens.</p>
              </div>

              <div className="compatible">
                <h3>Compitable with <img src="/figma.png"/> <img src="/sketch.png"/> <img src="xd.png"/> <img src="/studio.png"/></h3>
              </div>

              <div className="btn-lnks">
                <div className="dwn-links">
                  <a href="https://www.producthunt.com/upcoming/contra-wireframe-kit/" className="btn btn-download">
                    <h4>Get it now</h4>
                  </a>
                </div>

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
