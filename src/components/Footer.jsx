import React from 'react'
import { Link } from 'react-router-dom';
import facebookLogo from '../img/facebook-logo.png';
import instagramLogo from '../img/instagram-logo.png';
import twitterLogo from '../img/twitter-logo.png';
import youtubeLogo from '../img/youtube-logo.png';

export default function Footer() {
  return (
    <section className="footer">
        {/*...FIRST SIDE OF FOOTER...*/}
        <div className="footer-container">
            <div className="footerBox">
                <p className="footerHeader">Follow Us</p>
                <div className="social-icons">
                    <a href=""> <img className='social-icon' src={instagramLogo} alt="" /> </a>
                    <a href=""> <img className='social-icon' src={facebookLogo} alt="" /></a>
                    <a href="">  <img className='social-icon' src={youtubeLogo} alt="" /> </a>
                    <a href="">  <img className='social-icon' src={twitterLogo} alt="" /> </a>
                </div>
            </div>
            <div className="footerBox">
                <p className="footerHeader">Browse</p>
                <div>
                    <Link to={'/Blogs'} style={{textDecoration: 'none'}}> 
                        <p className='footer-link'>Blogs & Updates</p>
                    </Link>
                    <Link to={'/Aboutus'} style={{textDecoration: 'none'}}> 
                        <p className='footer-link'>About Seedwells</p>
                    </Link>
                    <Link to={'/Contactus'} style={{textDecoration: 'none'}}> 
                        <p className='footer-link'>Contact us</p>
                    </Link>
                </div>
            </div>
            <div className="footerBox">
                <p className="footerHeader">Seedwells Investors</p>
                <div>
                    <p className='footer-link'>
                        A vehicle for accelerating transformation of organizations into a rapidly industrializing 
                    </p>
                </div>
            </div>
            <div className="footerBox">
                <p className="footerHeader">Resources</p>
                <div>
                    <Link to={'/Publications'} style={{textDecoration: 'none'}}> 
                        <p className='footer-link'>Publications</p>
                    </Link>
                    <Link to={'/Vacancies'} style={{textDecoration: 'none'}}> 
                        <p className='footer-link'>Vacancies</p>
                    </Link>
                </div>
            </div>
        </div>


        {/*...SECOND SIDE OF FOOTER...*/}
        <div className="footer-container">
            <div className="footerBox">
                <p className="footerHeader">Visions</p>
                <div>
                    <Link to={'/Economicpillar'} style={{textDecoration: 'none'}}> 
                        <p className='footer-link'>Economic Visions</p>
                    </Link>
                    <Link to={'/Politicalpillar'} style={{textDecoration: 'none'}}> 
                        <p className='footer-link'>Financial Visions</p>
                    </Link>
                    <Link to={'/Socialpillar'} style={{textDecoration: 'none'}}> 
                        <p className='footer-link'>Social Visions</p>
                    </Link>
                </div>
            </div>
            <div className="footerBox">
                <p className="footerHeader">Contact</p>
                <div>
                    <p className='footer-link' >+123456789</p>
                    <p className='footer-link' >email@Email.com</p>
                    <p className='footer-link' >Location, location Street</p>
                </div>
            </div>

            <div className='newsLetter' >
                <input type="email" placeholder='Enter Email Address' />
                <button type='submit' >Subscribe</button>
            </div>
        </div>
    </section>
  )
}
