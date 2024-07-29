import React from 'react'
import Info from './components/Info.js'
import About from './components/About.js'
import Footer from './components/Footer.js'
import Photo from './components/Photo.js'
import Skills from './components/Skills.js'
import Projects from './components/Projects.js'
import Greeting from './components/Greeting.js'


export default function App(){
    return(
        <main>
          <Greeting />
          <Photo />
          <div className='container'>
            <Info />
            <About />
            <Footer />
          </div>
          <Skills />
          <Projects />
        </main>
    )
}