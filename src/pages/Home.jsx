import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import Body from '../components/Body/Body.jsx';     
import Footer from '../components/Footer/Footer.jsx'; 
function Home() {
  return <>
    
      <Header />
      <Body />
      <Footer />
   
  </>;
}

export default Home;