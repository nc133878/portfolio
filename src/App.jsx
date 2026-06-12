import React from 'react'
import Info from './components/Info'
import About from './components/About'
import Footer from './components/Footer'
import Photo from './components/Photo'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Greeting from './components/Greeting'


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
