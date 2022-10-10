import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import moment from 'moment';
import NoImg from '../img/noImg.jpg';
import { Link } from 'react-router-dom';

const Blog = ({ item }) => {

      const overviewElips = (str, num) => {
            if (str?.length > num) {
                  return str.slice(0, num) + "...";
            } else {
                  return str;
            }
      }

      return (
            <>

                  <div className="min-w-[200px] w-[300px]">
                        <div className="w-full p-1 h-[200px]">
                              <img className='object-cover w-full h-full rounded-2xl' src={item.urlToImage ? item.urlToImage : NoImg} alt="hello img" />
                        </div>
                        <h2 className="bg-blue-400 rounded-lg inline-block py-1 mt-3 px-4 text-white font-[500]">{item.source.name}</h2>
                        <h1 className='text-black text-[1.5rem] font-[600] mt-3 mb-4'> {overviewElips(item.title, 42)} </h1>
                        <p className='text-gray-400 text-justify'>
                              {overviewElips(item.description, 100)}
                        </p>
                        <Link to={`/singleNews/${item.title}`}>
                              <div className="flex justify-between cursor-pointer my-4 items-center group">
                                    <div className="flex flex-col gap-1">
                                          <p>{item.author ? item.author : "unknown"}</p>
                                          <p className='text-gray-500'>{moment(item.publishedAt).utc().format('YYYY-MM-DD')}</p>
                                    </div>

                                    <span className='text-[25px] transition group-hover:text-blue-400 group-hover:translate-x-2'><BsArrowRight /></span>
                              </div>
                        </Link>
                  </div>
            </>

      )
}

export default Blog