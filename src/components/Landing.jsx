import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section className='landing-screen'>
      <div className="landing-container">
        <div className="introDiv">
          <div className="introHeader">
            Seedwells Investors
          </div>
          <div className='color-bar'>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="introParagraph">
          The Seedwells organization aims to transform business into a newly industrializing, middle-income org providing a high quality of life to all its members by  in a secure manner.
          </div>
        </div>

        <div className="introbuttons-container">
          <Link to={'/Aboutus'} style={{textDecoration: 'none'}}> 
            <p className='button-one' >Learn More</p>
          </Link>
          <Link to={'/Contactus'} style={{textDecoration: 'none'}}> 
            <p className='button-two'>Contact Us</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
