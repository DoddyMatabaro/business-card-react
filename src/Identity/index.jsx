import React from 'react'
import image from '../assets/profile.png';
import './identity.css'

function Identity() {
  return (
    <div className='identity-container'>
        <div className="identity-profile">
             <img src={image} alt="profile" />
        </div>
        <div className='identity-descriptions'>
            <div className='name'>
              <h1>Doddy Matabaro</h1>
              <small>Full Stack Developer</small>
            </div>
            <small className='link'>dmdev.website</small>
        </div>
        <button>
            Email
        </button>
    </div>
  )
}

export default Identity