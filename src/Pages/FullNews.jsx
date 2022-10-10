import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import NewsDetail from '../components/NewsDetail';

const FullNews = ({ apiData, setProgress }) => {

      const { title } = useParams();
      const navigate = useNavigate();

      useEffect(() => {
            window.scrollTo(0, 0);
            setProgress(100)
      }, [])

      return (
            <>
                  {apiData[0]?.filter(item => item.title === title).map((item, index) => (
                        <div
                              className=""
                              key={index}
                        >
                              <nav
                                    className='w-[90%] mx-auto py-4'
                              >
                                    <span
                                          onClick={() => navigate(-1)}
                                          className='flex transition items-center gap-2 font-[25px] text-gray-500 cursor-pointer hover:text-black group'>
                                          <BsArrowLeft className='transition group-hover:-translate-x-2' />
                                          Go Back
                                    </span>
                              </nav>
                              <NewsDetail item={item} />
                        </div>
                  ))}
            </>
      )
}

export default FullNews