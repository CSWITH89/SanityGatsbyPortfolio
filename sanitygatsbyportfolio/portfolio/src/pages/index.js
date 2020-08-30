import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GrLinkedin, GrYoutube, GrFacebook } from "react-icons/gr";
import styles from './index.css';

export const query = graphql`
{
  allSanityProject {
    edges {
      node {
        title
        description
        slug{
          current
        }
        screenshotImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
}
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <section class="main-page">
{/* SIDEBAR START */}
      <div class="sidebar">
        <div class="sidebar-content">
          <div class="sidebar-content-header">
            <h1 class="sidebar-content-header-text">Placeholder Name</h1>
          </div>
          <div class="sidebar-content-navigation">
            <ul>
              <li>Option</li>
              <li>Option</li>
              <li>Option</li>
              <li>Option</li>
            </ul>
          </div>
          <footer class="sidebar-content-footer">
            <div class="sidebar-content-footer-icons">
              <p>Icon Tray placeholder</p>
              <GrLinkedin 
              class="icon icon-linkedin"
              />
              <GrYoutube
              class="icon icon-youtube"
              />
              <GrFacebook
              class="icon icon-facebook"
              />
            </div>
          </footer>
        </div>
      </div>
{/* SIDEBAR END */}
{/* PROJECT IMAGES START */}
<div class="project-showcase">
  <div class="project-showcase-content">
    {
      data.allSanityProject.edges.map(({node: project}) => (
        <div key={project.slug.current}>
        <Img fluid={project.screenshotImage.asset.fluid} alt={project.title} />
        </div>
      ))
    }
  </div>
</div>
{/* PROJECT IMAGES END */}
    </section>
  </Layout>
)

export default IndexPage
