import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

export default () => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = useStaticQuery(query)

  return (
    <Layout>
      <SEO title="Home" description="This my Portfolio HomePage" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="Projetos" />*
      <Blogs blogs={blogs} title="blog" />
      <Contact />
    </Layout>
  )
}

const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        title
        description
        github
        url
        stack {
          id
          text
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allStrapiBlogs(sort: { fields: data, order: DESC }) {
      nodes {
        slug
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        category
        id
        desc
        data
      }
    }
  }
`
