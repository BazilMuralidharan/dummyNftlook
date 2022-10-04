import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import MainContent from './components/main/MainContent';
import Footer from './components/footer/Footer';
import React from 'react';

import styled from 'styled-components';
import { Routes, Route } from "react-router-dom"

const HeaderDiv = styled.div`
width: -webkit-fill-available;display:flex; justify-content:space-around;
          box-shadow: 2px 8px 5px 0px rgba(0,0,0,0.75);
          
`

function App() {
  return (
    <>
    
          <div className="App">
            <HeaderDiv>
            <Header/>
            </HeaderDiv>
            
          
          {/* <div className='RouterMain'>
          <MainContent/>
          <Footer/>
          </div> */}

          <Routes>
              <Route path="/" element={ <MainContent/> } />
              <Route path="footer" element={  <Footer/> } />
        
          </Routes>
          </div>

         
    </>
  );
}

export default App;
