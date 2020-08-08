import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import Project from "../components/Project"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({ projects, title }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
    </section>
  )
}

export default ProjectsPage
