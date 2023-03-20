import React, { useState } from 'react';
import Contactbg from '../img/contact-bg.png';
import Blogsicon from '../img/BlogsIcon.png'
import { Link } from 'react-router-dom';
import { blogsData } from './links-utils/blogsdata';
import Pagination from './Pagination';

export default function Blogs() {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setpostsPerPage] = useState(10);
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

  

    //console.log(indexOfFirstPost)
    //console.log(indexOfLastPost)

    // Change Page
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    }
    

  return (
    <section className='contact-page' >
        <div className="header-region">
            <img className='header-r-background' src={Contactbg} alt="" />
            <h2>Blogs</h2>
        </div>
        <div className='body-region' >
            <div className="container">

                {/*..CARD CONTAINER..*/}
                {
                    blogsData && blogsData.slice(indexOfFirstPost, indexOfLastPost).map(blogData => (
                        <Link key={blogData.id}
                            style={{textDecoration: 'none', color: 'black'}} 
                            to={blogData.blogLink}
                            className="link-card-container" >
                                <div className="hover-state"></div>
                                <div className="card-info">
                                    <p>{blogData.blogName}</p>
                                    <p>{blogData.blogPublishDate}</p>
                                </div>
                                <img src={Blogsicon} alt="" />
                                <div className='gray-bg' ></div>
                        </Link>                        
                    ))
                }
            </div>
            <Pagination currentPage={currentPage} postsPerPage={postsPerPage} totalPosts={blogsData.length} paginate={paginate}/>
        </div>
    </section>
  )
}
