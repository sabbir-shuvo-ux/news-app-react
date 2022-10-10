import React from 'react';
import moment from 'moment';
import NoImg from '../img/noImg.jpg';
import { BsBoxArrowInUpRight } from 'react-icons/bs';

const NewsDetail = ({ item }) => {
      return (
            <div
                  className='w-[100%] px-3 sm:px-0 sm:w-[60%] mx-auto'

            >
                  <header className='text-center'>
                        <h6
                              className='text-gray-400'
                        >
                              Published {moment(item.publishedAt).utc().format('YYYY-MM-DD')}
                        </h6>
                        <h2
                              className='text-[1.5rem] sm:text-[2rem] font-bold sm:leading-[45px]'
                        >
                              {item.title}
                        </h2>
                        <h2
                              className="bg-blue-400 rounded-lg inline-block py-1 mt-3 px-4 text-white font-[500]"
                        >
                              {item.source.name}
                        </h2>
                  </header>
                  <article className='my-10'>
                        <div className="w-full mb-6">
                              <img className='object-cover w-full h-full rounded-2xl' src={item.urlToImage ? item.urlToImage : NoImg} alt="hello img" />
                        </div>
                        <h2 className='text-xl mb-1 text-gray-800 font-[600]'>Short Description</h2>
                        <p className='text-gray-600'>
                              {item.content ? item.content : item.description}
                              <a
                                    href={item.url}
                                    className='underline flex justify-end items-center gap-2 hover:text-gray-900'
                                    target="_blank"
                                    rel="noopener noreferrer">More <BsBoxArrowInUpRight /></a>
                        </p>
                  </article>
            </div>
      )
}

export default NewsDetail