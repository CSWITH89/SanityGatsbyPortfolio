import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GrLinkedin, GrYoutube, GrFacebook } from "react-icons/gr";

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
      <div class="sidebar">
        <div class="sidebar-content">
          <h1 class="sidebar-content-heading">Placeholder Name</h1>
          <ul>
            <li>Option</li>
            <li>Option</li>
            <li>Option</li>
            <li>Option</li>
          </ul>
          <div>
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
        </div>
      </div>
    {/* <h1>Portfolio</h1>
    <ul style={{
      listStyle: 'none',
      display: 'flex',
      alignItems: 'space-between',
      padding: 0,
    }}>
      {data.allSanityProject.edges.map(({node: project})=>(
       <li 
       key={project.slug.current}
       style={{ flex: '1 45%', maxWidth: '45%'}}
       >
         <h2
         style={{
           fontSize: '24px'
         }}
         >{project.title}</h2>
       <Image fluid={project.screenshotImage.asset.fluid} alt={project.title} />
      <p>{project.description}</p>
      </li>
      ))}
    </ul> */}
    </section>
  </Layout>
)

export default IndexPage
