import React from 'react';
import Contactbg from '../img/contact-bg.png';
import facebookLogo from '../img/facebook-logo-2.png';
import instagramLogo from '../img/instagram-logo-2.png';
import twitterLogo from '../img/twitter-logo-2.png';
import youtubeLogo from '../img/youtube-logo-2.png';
import SubmitIcon from '../img/submit-icon.png';

export default function Contact() {
  return (
    <section className='contact-page' >
        <div className="header-region">
            <img className='header-r-background' src={Contactbg} alt="" />
            <h2>Contact Us</h2>
        </div>
        <div className='body-region' >
            <div className="container">
                <div className="contact-section">
                    <div className="maps-container">
                        
                    </div>
                    <div className="contact-info">
                        <h4>Seedwells Investors</h4>
                        <p>Location, Loacation</p>
                        <h4>+123456789</h4>
                        <h4>email@email.com</h4>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/kevision2030/"> <img className='social-icon' src={instagramLogo} alt="" /> </a>
                            <a href="https://www.facebook.com/KenyaVision2030/"> <img className='social-icon' src={facebookLogo} alt="" /></a>
                            <a href="https://www.youtube.com/channel/UCzffoFIki_WRPhXm6s_EN1g">  <img className='social-icon' src={youtubeLogo} alt="" /> </a>
                            <a href="https://twitter.com/kenyavision2030">  <img className='social-icon' src={twitterLogo} alt="" /> </a>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form action='submit'>
                        <input className='contact-input' placeholder='Enter Your Name' type="text" />
                        <input className='contact-input' placeholder='Enter Your Email' type="text" />
                        <input className='contact-input' placeholder='Enter Your Phone Number' type="text" />
                        <textarea className='contact-message' placeholder='Enter Your Message' type="text" />
                        <button  className='button-one submit-btn' >Submit <img className='submit-icon' src={SubmitIcon} alt="" /></button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
