import React from 'react'
import behanceImage from '../assets/images/behance.svg'
import linkedInImage from '../assets/images/linkedin.svg'
import dribbleImage from '../assets/images/dribbble.svg'
import './Contact.scss'

export function Contact () {
  return <div className="contact-component">
    <div className="contact-block">
      <div className="contaxt-text">
        <p className="contact-title h2-text">Want to work together?</p>
        <p className="contact-p h4-text">Feel free to reach out for collaboration</p>
      </div>
      <div className="contact-options">
        <div className="button">
          <a className="button-text" href="mailto:goncharuk12388@gmail.com">Contact me</a>
        </div>
        <div className="contact-options-links">
          <a href="https://dribbble.com/dsvc" className="dribbble">
            <img src={dribbleImage} className="dribbble-icon" />
          </a>
          <a href="https://www.behance.net/dariahoncharuk" className="behance">
            <img src={behanceImage} className="behance-icon" />
          </a>
          <a href="https://www.linkedin.com/in/daryasvc/" className="linkedin">
            <img src={linkedInImage} className="linkedin-icon" />
          </a>
          <a href="https://www.behance.net/daryasvc" className="behance">
            <img src={behanceImage} className="behance-icon" />
          </a>
        </div>
      </div>
    </div>

  </div>
}
