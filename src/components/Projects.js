import React from "react"
import Title from "./Title"
import Project from "./Project"

const Projects = ({ projects, title }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={index} index={index} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects
