import React, { useState } from 'react';
import Contactbg from '../img/contact-bg.png';
import Blogsicon from '../img/BlogsIcon.png'
import { Link } from 'react-router-dom';
import { pressReleaseData } from './links-utils/pressreleasesdata';
import Pagination from './Pagination';

export default function Pressreleases() {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setpostsPerPage] = useState(10);
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    // Change Page
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    }
    

  return (
    <section className='contact-page' >
        <div className="header-region">
            <img className='header-r-background' src={Contactbg} alt="" />
            <h2>Press Releases</h2>
        </div>
        <div className='body-region' >
            <div className="container">

                {/*..CARD CONTAINER..*/}
                {
                    pressReleaseData && pressReleaseData.slice(indexOfFirstPost, indexOfLastPost).map(pressData => (
                        <Link key={pressData.id}
                            style={{textDecoration: 'none', color: 'black'}} 
                            to={pressData.releaseLink}
                            className="link-card-container" >
                                <div className="hover-state"></div>
                                <div className="card-info">
                                    <p>{pressData.releaseName}</p>
                                    <p>{pressData.releasePublishDate}</p>
                                </div>
                                <img src={Blogsicon} alt="" />
                                <div className='gray-bg' ></div>
                        </Link>                        
                    ))
                }
            </div>
            <Pagination currentPage={currentPage} postsPerPage={postsPerPage} totalPosts={pressReleaseData.length} paginate={paginate}/>
        </div>
    </section>
  )
}
