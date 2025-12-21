import React from 'react'

function Projects() {
  return (
    <section className='project-container'>
        <h2> Projects </h2>

        

        <div className='project-grid'>

          <div>
            <h3>Atelier Rue - E-commerce storefront</h3>
            <div className='image'>
              <img className='project-img' src='./assets/atelier-rue.png' alt='E-commerce storefront screenshot' />
              <a href='https://atelier-rue.netlify.app/' target="_blank" rel="noreferrer">
                <div className='overlay'>
                    This project leverages MERN stack + Stripe to deliver an e-commerce storefront.

                    NOTE: Backend takes a second to load. Wait a few seconds for products to render.
                    <br/>
                    <br/>
                    <strong>Click to visit page</strong>
                </div>
              </a>
              <p className='tech-stack-text'><strong>Tech Stack:</strong> MERN, Tailwind, Stripe, Netlify, Render</p>
            </div>
          </div>

          <div>
            <h3>Tealhouse - ATS Tracking System </h3>
            <div className='image'>
              
              <img className='project-img' src='./assets/tealhouse.png'  alt='Add to cart app screnshot'/>
              
              <a href='https://tealhouse-ats.netlify.app/login' target="_blank" rel="noreferrer">
                <div className='overlay'>
                    This project leverages MERN stack + Stripe to deliver a production-style, multi-tenant applicant tracking system that lets teams manage jobs, candidates, and hiring pipelines end-to-end.”.
                    <br/>
                    <br/>
                    <strong>Click to visit page</strong>
                </div>
              </a>

              <p className='tech-stack-text'><strong>Tech Stack:</strong> MERN, Tailwind, Netlify, Render</p>
            </div>
          </div>

        

          <div>
            <h3>Quizzical - Quiz Game </h3>
            <div className='image'>
              
              <img className='project-img' src='./assets/Quizzical.png' alt='Quiz game screenshot'/>
              
              <a href='https://react-quiz-trivia-app.netlify.app/' target="_blank" rel="noreferrer">
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

/*
          <div>
            <h3>Add to Cart - Shopping List App </h3>
            <div className='image'>
              
              <img className='project-img' src='./assets/add-to-cart.png'  alt='Add to cart app screnshot'/>
              
              <a href='https://add-to-cart-nc.netlify.app/' target="_blank" rel="noreferrer">
                <div className='overlay'>
                    This project leverages Firebase DB to create a shopping list application.
                    <br/>
                    <br/>
                    <strong>Click to visit page</strong>
                </div>
              </a>

              <p className='tech-stack-text'><strong>Tech Stack:</strong> HTML/CSS, Javascript, Firebase, Netlify</p>
            </div>
          </div>
*/