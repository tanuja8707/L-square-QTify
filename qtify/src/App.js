import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { StyledEngineProvider } from '@mui/material/styles';
import { Outlet } from "react-router-dom";
import { fetchNewAlbums, fetchTopAlbums, fetchSongs } from './api/api';
import Footer from "./components/Footer/Footer";


function App() {
  const [data, setData] = useState({});

  const generateData = async (key, source) => {
    try {
      const data = await source();
      setData((prevState) => ({ ...prevState, [key]: data }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
    console.log("in app.js")
  },[])

  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Navbar searchData={[...topAlbums, ...newAlbums]}  />
        <Outlet context={{ data: {topAlbums, newAlbums, songs} }} />
        <Footer/>
      </StyledEngineProvider> 
      
    </div>
  );
}

export default App;
