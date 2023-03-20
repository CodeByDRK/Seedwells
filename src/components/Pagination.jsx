import React from 'react'

export default function Pagination( {currentPage, postsPerPage, totalPosts, paginate} ) {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }


  return (
    <div className='pagination-container' >
        <div className="pagination-guide">
            Page {currentPage} of {pageNumbers.length}
        </div>
        <ul className='pagination-links'>
            {
            pageNumbers.map(number => (
                <li key={number} className='pagination-number'>
                    <button onClick={() => paginate(number)} className='page-link'>
                        {number}
                    </button>
                </li>
            ))
            }
        </ul>
    </div >
  )
}
