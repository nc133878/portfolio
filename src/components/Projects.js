import React from 'react'

function Projects() {
  return (
    <section className='project-container'>
        <h2> Projects </h2>

        

        <div className='project-grid'>

          <div>
            <h3>Add to Cart - Shopping List App </h3>
            <div className='image'>
              
              <img className='project-img' src='./assets/add-to-cart.png'  alt='Add to cart app screnshot'/>
              
              <a href='https://add-to-cart-nc.netlify.app/' target="_blank" rel="noreferrer">
                <div className='overlay'>
                    This project leverages a firebase DB to create a shopping list application.
                    <br/>
                    <br/>
                    <strong>Click to visit page</strong>
                </div>
              </a>

              <p className='tech-stack-text'><strong>Tech Stack:</strong> HTML/CSS, Javascript, Firebase, Netlify</p>
            </div>
          </div>

          <div>
            <h3>Static Tailwind Landing Page </h3>
            <div className='image'>
              
              <img className='project-img' src='./assets/tailwind-static.png' alt='Static Tailwind page screenshot' />
              
              <a href='https://master--landing-static-tailwindcss.netlify.app/' target="_blank" rel="noreferrer">
                <div className='overlay'>
                    This project leverages React and Tailwind CSS to build a static landing page for an imaginary Tailwind CSS course.
                    <br/>
                    <br/>
                    <strong>Click to visit page</strong>
                </div>
              </a>

              <p className='tech-stack-text'><strong>Tech Stack:</strong> React, Tailwind, Netlify</p>
            </div>
          </div>

          <div>
            <h3>Quizzical - Quiz Game </h3>
            <div className='image'>
              
              <img className='project-img' src='./assets/Quizzical.png' alt='Quiz game screenshot'/>
              
              <a href='https://master--landing-static-tailwindcss.netlify.app/' target="_blank" rel="noreferrer">
                <div className='overlay'>
                    This project leverages the Open Trivia API to create a fun Trivia web application.
                    <br/>
                    <br/>
                    <strong>Click to visit page</strong>
                </div>
              </a>

              <p className='tech-stack-text'><strong>Tech Stack:</strong> React, HTML/CSS, Netlify</p>
            </div>
          </div>

        </div>
    </section>
  )
}

export default Projects