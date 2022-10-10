import React from 'react';
import noSearch from '../img/noSearch.png';

const SearchError = () => {
      return (
            <div className='flex justify-center items-center mt-10 flex-col'>
                  <img src={noSearch} alt="nothing here" />
                  <h1 className='text-xl'>Nothing here </h1>
            </div>
      )
}

export default SearchError