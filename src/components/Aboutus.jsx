import React, { useState } from 'react';
import Contactbg from '../img/contact-bg.png';
import Economicicon from '../img/Economicpillaricon.png';
import Socialicon from '../img/Socialpillaricon.png';
import Politicalicon from '../img/Politicalpillaricon.png';
import Enablersicon from '../img/Enablerspillaricon.png';
import { Link } from 'react-router-dom';

export default function Contact() {

  const [isPillar, setPillar] = useState('Economic');

  function economicPillar() {
    setPillar('Economic')
    console.log(isPillar)
  }
  function socialPillar() {
    setPillar('Social')
    console.log(isPillar)
  }
  function politicalPillar() {
    setPillar('Political')
    console.log(isPillar)
  }
  function enablersPillar() {
    setPillar('Enablers')
    console.log(isPillar)
  }


  return (
    <section className='aboutvision-page'>
        <div className="header-region">
            <img className='header-r-background' src={Contactbg} alt="" />
            <h2>About Us</h2>
        </div>
        <div className="body-region">
          <div className="aboutvision-container">
            <div className="aboutvision-segment">
                <h5>SEEDWELLS INVESTORS</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum dolore eu fu".</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magx ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum dolore eu fu".na aliqua. Ut enim ad minim veniam, q.</p>

                <div className='colored-vision-title'>
                  <h6>The Vision</h6>
                  <div className='underline-flag-color'>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess
                </p>
            </div>

            {/*This bit contains info on the pillars of vision*/}
            <div className="aboutvision-pillars-container">
              <p className="aboutvision-p-title">Pillars Of The Vision</p>
              <div className='slide-renderer-container' >
                
                {/* PILLAR-SLIDE */}
                <div className={ isPillar == 'Economic' ? 'pillar-slide' : 'hidden-pillar-slide'}>
                  <p>Economic Pillar</p>
                  <p>This pillar aims to achieve an average economic growth rate of 10 per cent per annum and sustaining the same until 2030.</p>

                  <p className="pillar-slide-subtext">Moving the Economy up the Value Chain</p>
                  <Link style={{textDecoration: 'none', color: 'black'}} to={'/Economicsandmacro'}>
                    <p className='pillar-slide-button'>Find Out More</p>
                  </Link>
                  <img src={Economicicon} alt="" />
                </div>

                {/* PILLAR-SLIDE */}
                <div className={ isPillar == 'Social' ? 'pillar-slide' : 'hidden-pillar-slide'}>
                  <p>Social Pillar</p>
                  <p>This pillar seeks to engender just, cohesive and equitable social development in a clean and secure environment.</p>

                  <p className="pillar-slide-subtext">Investing in the People of Kenya</p>
                  <Link style={{textDecoration: 'none', color: 'black'}} to={'/Social-pillar'}>
                    <p className='pillar-slide-button'>Find Out More</p>
                  </Link>
                  <img src={Socialicon} alt="" />
                </div>

                {/* PILLAR-SLIDE */}
                <div className={ isPillar == 'Political' ? 'pillar-slide' : 'hidden-pillar-slide'}>
                  <p>Political Pillar</p>
                  <p>This pillar aims to realize an issue-based, people-centered, result-oriented and accountable democratic system.</p>

                  <p className="pillar-slide-subtext">Moving to the Future as One Nation</p>
                  <Link style={{textDecoration: 'none', color: 'black'}} to={'/Political-pillar'}>
                    <p className='pillar-slide-button'>Find Out More</p>
                  </Link>
                  <img src={Politicalicon} alt="" />
                </div>

                {/* PILLAR-SLIDE */}
                <div className={ isPillar == 'Enablers' ? 'pillar-slide' : 'hidden-pillar-slide'}>
                  <p>Enablers and Macros</p>
                  <p>The economic, social and political pillars of Kenya Vision 2030 are anchored on the foundations of macroeconomic stability; infrastructural development; Science, Technology and Innovation (STI); Land Reforms; Human Resources Development; Security and Public Sector Reforms</p>

                  <p className="pillar-slide-subtext">Moving to the Future as One Nation</p>
                  <Link style={{textDecoration: 'none', color: 'black'}} to={'/Political-pillar'}>
                    <p className='pillar-slide-button'>Find Out More</p>
                  </Link>
                  <img src={Enablersicon} alt="" />
                </div>

              </div>

              <div className="slides-circles">
                <div onClick={economicPillar} className={ isPillar == 'Economic' ? 'active-pillar-circle' : 'pillar-circle'}></div>
                <div onClick={socialPillar} className={ isPillar == 'Social' ? 'active-pillar-circle' : 'pillar-circle'}></div>
                <div onClick={politicalPillar} className={ isPillar == 'Political' ? 'active-pillar-circle' : 'pillar-circle'}></div>
                <div onClick={enablersPillar} className={ isPillar == 'Enablers' ? 'active-pillar-circle' : 'pillar-circle'}></div>
              </div>

            </div>
          </div>
        </div>
    </section>
  )
}
