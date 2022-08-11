import React from 'react';
import './footer.css';
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';
import { BsTwitter, BsInstagram } from 'react-icons/bs';


function Footer() {
  return (
    <div className='footer'>
        <div className="socials">
                 <a href="https://discord.com"><BsTwitter /></a>
                 <a href="https://discord.com"><FaFacebookF /></a>
                 <a href="https://discord.com"><BsInstagram /></a>
                 <a href="https://linkedin.com"><FaLinkedinIn /></a>
                 <a href="https://github.com"><FaGithub /></a>
        </div>
    </div>
  )
}

export default Footer