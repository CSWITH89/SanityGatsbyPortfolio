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
            <h1 class="sidebar-content-header-text">CHRISTOPHER WITHALL</h1>
          </div>
          <div class="sidebar-content-navigation">
            <ul class="sidebar-content-navigation-list">
            <li class="sidebar-content-navigation-list-item nav-item">home</li>
              <li class="sidebar-content-navigation-list-item nav-item">about</li>
              <li class="sidebar-content-navigation-list-item nav-item">resume</li>
              <li class="sidebar-content-navigation-list-item nav-item">blog</li>
              <li class="sidebar-content-navigation-list-item nav-item">contact</li>
            </ul>
          </div>
          <footer class="sidebar-content-footer">
            <div class="sidebar-content-footer-icons">
            <a href="https://www.linkedin.com/in/christopherwithall/" target="_blank" rel="noopener noreferrer">
              <GrLinkedin 
              class="icon icon-linkedin"
              />
              </a>
              <div class="disabled">
              <GrYoutube
              class="icon icon-youtube"
              />
              </div>
              <div class="disabled">
              <GrFacebook
              class="icon icon-facebook"
              />
              </div>
            </div>
          </footer>
        </div>
      </div>
{/* SIDEBAR END */}
{/* PROJECT IMAGES START */}
<div class="project-showcase">
  <div class="project-showcase-content">
    {
      data.allSanityProject.edges.map(({node: project}, i) => (
        <div class="project-showcase-image" key={project.slug.current}>
        <Img
        style={{ height: '100vh' }}
        imgStyle={{ objectFit: 'cover' }} 
        fluid={project.screenshotImage.asset.fluid} alt={project.title} />
        <div class={`project-showcase-image-filter-${i+1}`}></div>
        <div class={`project-showcase-image-wrapper-${i+1}`}>
        <h2 class="project-showcase-image-wrapper-text">{`${project.title}`}</h2>
        </div>
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
