import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';


export default function Footer(){
    return(
        <footer>
            <a target="_blank" rel="noreferrer" href="https://github.com/nc133878" ><img src='../images/github-logo-grey.png' alt="git logo" /></a>
            <a target="_blank" rel="noreferrer" href="./assets/Neal_Crawford_Resume_25.pdf" ><FontAwesomeIcon className='icon-grey' icon={faFileAlt} size='2x' /></a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/neal-crawford-a4816085/" ><img src='../images/linkedin-logo-grey.png ' alt="linkedIn logo" /></a>
        </footer>
    )
}