import React, { useEffect } from 'react';
import './App.css';
import { callApi, getApiPath } from './api/utils';
import { PATHS } from './api/paths';

function App() {
  
  const getListImages= async ()=>{
    const res = await callApi(getApiPath(PATHS.GET_IMAGES), 'GET')
    if (res)
  console.log(res)
  }

  useEffect(()=>{
    getListImages()
  },[])


  return (
    <div className="App">
     
    </div>
  );
}

export default App;
