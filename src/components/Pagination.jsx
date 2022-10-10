import React from 'react';

const Pagination = ({ totalPost, postPerPage, setCurrentpage, currentpage }) => {

      let pages = [];
      for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
            pages.push(i);
      }

      const handleClick = (page) => {
            setCurrentpage(page);
            window.scrollTo({ top: 200, behavior: 'smooth' });
      }

      return (
            <nav>
                  <ul className='flex justify-center my-4 gap-4'>
                        {
                              pages.map((page, index) => {
                                    return <li
                                          className={`py-1 cursor-pointer px-4 border-t-2 ${page === currentpage ? 'border-t-blue-400' : ''}`}
                                          key={index}
                                          onClick={() => handleClick(page)}
                                    >
                                          <span className="page-link">{page}</span>
                                    </li>
                              })
                        }
                  </ul>
            </nav>
      )
}

export default Pagination