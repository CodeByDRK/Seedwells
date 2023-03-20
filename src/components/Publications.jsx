import React from 'react';
import Contactbg from '../img/contact-bg.png';
import Publicationsicon from '../img/PublicationsIcon.png'
import { Link } from 'react-router-dom';

export default function Publications() {
  return (
    <section className='contact-page' >
        <div className="header-region">
            <img className='header-r-background' src={Contactbg} alt="" />
            <h2>Publications</h2>
        </div>
        <div className='body-region' >
            <div className="container">

                {/*..CARD CONTAINER..*/}
                <Link style={{textDecoration: 'none', color: 'black'}} 
                    to={'/*'}
                    className="link-card-container" >
                            <div className="hover-state"></div>
                            <div className="card-info">
                                <p>Director Communications</p>
                                <p>Published 10/10/2023</p>
                            </div>
                            <img src={Publicationsicon} alt="" />
                            <div className='gray-bg' ></div>
                </Link>
                
                {/*..CARD CONTAINER..*/}
                <Link style={{textDecoration: 'none', color: 'black'}} 
                    to={'/*'}
                    className="link-card-container" >
                            <div className="hover-state"></div>
                            <div className="card-info">
                                <p>Director Communications</p>
                                <p>Published 10/10/2023</p>
                            </div>
                            <img src={Publicationsicon} alt="" />
                            <div className='gray-bg' ></div>
                </Link>

                {/*..CARD CONTAINER..*/}
                <Link style={{textDecoration: 'none', color: 'black'}} 
                    to={'/*'}
                    className="link-card-container" >
                            <div className="hover-state"></div>
                            <div className="card-info">
                                <p>Director Communications</p>
                                <p>Published 10/10/2023</p>
                            </div>
                            <img src={Publicationsicon} alt="" />
                            <div className='gray-bg' ></div>
                </Link>

                {/*..CARD CONTAINER..*/}
                <Link style={{textDecoration: 'none', color: 'black'}} 
                    to={'/*'}
                    className="link-card-container" >
                            <div className="hover-state"></div>
                            <div className="card-info">
                                <p>Director Communications</p>
                                <p>Published 10/10/2023</p>
                            </div>
                            <img src={Publicationsicon} alt="" />
                            <div className='gray-bg' ></div>
                </Link>

                {/*..CARD CONTAINER..*/}
                <Link style={{textDecoration: 'none', color: 'black'}} 
                    to={'/*'}
                    className="link-card-container" >
                            <div className="hover-state"></div>
                            <div className="card-info">
                                <p>Director Communications</p>
                                <p>Published 10/10/2023</p>
                            </div>
                            <img src={Publicationsicon} alt="" />
                            <div className='gray-bg' ></div>
                </Link>

                {/*..CARD CONTAINER..*/}
                <Link style={{textDecoration: 'none', color: 'black'}} 
                    to={'/*'}
                    className="link-card-container" >
                            <div className="hover-state"></div>
                            <div className="card-info">
                                <p>Director Communications</p>
                                <p>Published 10/10/2023</p>
                            </div>
                            <img src={Publicationsicon} alt="" />
                            <div className='gray-bg' ></div>
                </Link>

                {/*..CARD CONTAINER..*/}
                <Link style={{textDecoration: 'none', color: 'black'}} 
                    to={'/*'}
                    className="link-card-container" >
                            <div className="hover-state"></div>
                            <div className="card-info">
                                <p>Director Communications</p>
                                <p>Published 10/10/2023</p>
                            </div>
                            <img src={Publicationsicon} alt="" />
                            <div className='gray-bg' ></div>
                </Link>

                {/*..CARD CONTAINER..*/}
                <Link style={{textDecoration: 'none', color: 'black'}} 
                    to={'/*'}
                    className="link-card-container" >
                            <div className="hover-state"></div>
                            <div className="card-info">
                                <p>Director Communications</p>
                                <p>Published 10/10/2023</p>
                            </div>
                            <img src={Publicationsicon} alt="" />
                            <div className='gray-bg' ></div>
                </Link>

                {/*..CARD CONTAINER..*/}
                <Link style={{textDecoration: 'none', color: 'black'}} 
                    to={'/*'}
                    className="link-card-container" >
                            <div className="hover-state"></div>
                            <div className="card-info">
                                <p>Director Communications</p>
                                <p>Published 10/10/2023</p>
                            </div>
                            <img src={Publicationsicon} alt="" />
                            <div className='gray-bg' ></div>
                </Link>
            </div>
        </div>
    </section>
  )
}