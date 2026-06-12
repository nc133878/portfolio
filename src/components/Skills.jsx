import React from 'react';
import useReveal from '../hooks/useReveal';

const skills = [
    { src: './images/HTML5_Badge.png', alt: 'HTML5' },
    { src: './images/js-logo.png', alt: 'JavaScript' },
    { src: './images/css-logo.png', alt: 'CSS' },
    { src: './images/logo192.png', alt: 'React' },
    { src: './images/python-logo.png', alt: 'Python' },
    { src: './images/git-logo.png', alt: 'Git' },
    { src: './images/tailwind-logo.png', alt: 'Tailwind CSS' },
    { src: './images/nodejs.png', alt: 'Node.js' },
    { src: './images/go-logo.png', alt: 'Go' },
    { src: './images/postgresql.png', alt: 'PostgreSQL' },
];

export default function Skills(){
    const [ref, visible] = useReveal();
    return(
        <section ref={ref} className={`skills-section reveal ${visible ? 'is-visible' : ''}`}>
            <h2>Skills</h2>
            <div className='logo-grid'>
                {skills.map((skill, i) => (
                    <img
                        key={skill.alt}
                        className='skill-logo'
                        src={skill.src}
                        alt={skill.alt}
                        style={{ '--i': i }}
                    />
                ))}
            </div>
        </section>
    )
}
