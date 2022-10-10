import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { ImCancelCircle } from 'react-icons/im';

const Search = ({ searchData, setSearchData }) => {
      return (
            <div className='w-[200px] sm:w-[320px] rounded-lg border-2 mx-auto py-2 flex justify-between items-center pr-2'>
                  <input
                        onChange={(e) => setSearchData(e.target.value)}
                        className='outline-none focus:outline-0 px-2 w-[100%]'
                        type="text"
                        value={searchData}
                        placeholder='Search here...'
                  />
                  {
                        searchData ? (
                              <ImCancelCircle className='cursor-pointer hover:text-red-400' size={20} onClick={() => setSearchData('')} />
                        ) : (
                              <HiOutlineArrowRight className='animate_costume' size={22} />
                        )
                  }
            </div>
      )
}

export default Search