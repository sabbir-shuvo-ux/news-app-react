import React from 'react'
import Feed from '../components/Feed'
import Header from '../components/Header'

const Home = ({ apiData, loading }) => {
      return (
            <div>
                  <Header />
                  <Feed apiData={apiData} loading={loading} />
            </div>
      )
}

export default Home