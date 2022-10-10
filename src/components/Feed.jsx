import React, { useState } from 'react'
import Blogs from './Blogs';
import Search from './Search';

const Feed = ({ apiData, loading }) => {

      const [searchData, setSearchData] = useState('');


      return (
            <div>
                  <Search
                        searchData={searchData}
                        setSearchData={setSearchData}
                  />
                  <Blogs apiData={apiData} searchData={searchData} loading={loading} />
            </div>
      )
}

export default Feed