import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import axios from 'axios';
import FullNews from './Pages/FullNews';
import ErrorPage from './Pages/ErrorPage';
import LoadingBar from 'react-top-loading-bar';


const App = () => {

  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const getApiData = () => {
    try {
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_API_KEY}`).then((res) => {
        setApiData([res.data.articles]);
        setLoading(false);
      })
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    setProgress(100)
    getApiData();
  }, [])

  return (
    <>
      <LoadingBar
        height={4}
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route path='/' element={<Home apiData={apiData} loading={loading} />} />
        <Route path='/singleNews/:title' element={<FullNews apiData={apiData} setProgress={setProgress} />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App