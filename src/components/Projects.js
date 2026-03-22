import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: "Atelier Rue - E-commerce Storefront",
    url: "https://atelier-rue.netlify.app/",
    description: "A MERN stack + Stripe e-commerce storefront.",
    techStack: "MERN, Tailwind, Stripe, Netlify, Render"
  },
  {
    title: "Tealhouse - ATS Tracking System",
    url: "https://tealhouse-ats.netlify.app/login",
    description: "A production-style, multi-tenant applicant tracking system with a live demo account.",
    techStack: "MERN, Tailwind, Netlify, Render"
  },
  {
    title: "Songbook - Music Split Sheet Manager",
    url: "https://songbook-app.netlify.app/",
    description: "Full-stack app for music professionals to manage songs, collaborators, and royalty split sheets with PDF generation.",
    techStack: "React, TypeScript, Go, PostgreSQL, Tailwind, Vite"
  },
  {
    title: "Quizzical - Quiz Game",
    url: "https://react-quiz-trivia-app.netlify.app/",
    description: "A fun trivia web app powered by the Open Trivia API.",
    techStack: "React, HTML/CSS, Netlify"
  }
]

function Projects() {
  return (
    <section className='project-container'>
      <h2>Projects</h2>
      <div className='project-grid'>
        {projects.map((project) => (
          <ProjectCard key={project.url} {...project} />
        ))}
      </div>
      <p className='projects-note'>⚠ Backends are hosted on Render and may take ~60s to spin up on first load.</p>
    </section>
  )
}

export default Projects
