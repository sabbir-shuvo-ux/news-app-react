import React, { useState } from 'react';
import Blog from './Blog';
import Pagination from './Pagination';
import { FiLoader } from 'react-icons/fi';
import SearchError from './SearchError';

const Blogs = ({ apiData, searchData, loading }) => {

      const [currentpage, setCurrentpage] = useState(1);
      const [postPerPage, setPostPerPage] = useState(8);

      const handleSearch = apiData[0]?.filter(item => item.title.toLowerCase().includes(searchData.toLowerCase()))

      const lastPostIndex = currentpage * postPerPage;
      const firstPostIndex = lastPostIndex - postPerPage;
      const allData = handleSearch?.slice(firstPostIndex, lastPostIndex);


      return (
            <>
                  {
                        loading ? (
                              <>
                                    <div className="container flex justify-center mt-10 mx-auto">
                                          <FiLoader size={30} className='text-indigo-400 animate-spin' />
                                    </div>
                              </>
                        ) : (
                              <>
                                    {
                                          searchData && handleSearch?.length === 0 ? (
                                                <SearchError />
                                          ) : (
                                                <div className='container mx-auto flex flex-wrap gap-5 my-[3rem] justify-center'>
                                                      {allData?.map((item, index) => (
                                                            <Blog key={index} item={item} />
                                                      ))}
                                                </div>
                                          )
                                    }


                                    {handleSearch?.length < 7 ? (
                                          ''
                                    ) : (
                                          <Pagination
                                                postPerPage={postPerPage}
                                                currentpage={currentpage}
                                                setCurrentpage={setCurrentpage}
                                                totalPost={apiData[0]?.length}
                                          />
                                    )}
                              </>
                        )
                  }




            </>
      )
}

export default Blogs