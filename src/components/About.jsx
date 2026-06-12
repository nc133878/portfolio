import React from 'react';
import useReveal from '../hooks/useReveal';

 function About(){
    const [ref, visible] = useReveal();
    return(
        <section ref={ref} className={`about-section reveal ${visible ? 'is-visible' : ''}`}>
            <h2 className='center'>About</h2>
            <p> As a seasoned developer with over 7+ years of experience, I have a proven track record of delivering high-quality, scalable, and efficient applications. I have a particular interest in developing costumer facing solutions using frontend frameworks.  
                I enjoy working on enthusiastic teams that stimulate innovation and creative thinking.</p>
            <h2 className='center'>Interests</h2>
            <p> Rhythm & Blues connoissuer. Songwriting novice. Physical Fitness addict. 
            Retired pickup basketball player. Combat sports junkie. Trivia fanatic. Part-time Graphic Designer. Food enthusiast.</p>
        </section>
    )
}

export default About