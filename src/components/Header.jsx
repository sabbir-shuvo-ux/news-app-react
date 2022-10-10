import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const Header = () => {
      return (
            <div className='my-4 container mx-auto text-center'>
                  <h1
                        className='text-[2rem] text font-bold text-blue-500'
                  >The Daily News</h1>
                  <h1 className='font-[800] text-[3rem] text-blue-600 relative w-[320px] mx-auto'>
                        <span className='absolute left-[0px] text-blue-300'><ImQuotesLeft /></span>
                        Business
                        <span className='absolute right-[0px] text-blue-300'><ImQuotesRight /></span>
                  </h1>

                  <p className='text-[20px] text-gray-400'>
                        Awesome place to make oneself <br /> productive and entertained through daily updates.
                  </p>
            </div>
      )
}

export default Header