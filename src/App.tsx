import React from 'react';
import styled from 'styled-components';
import TopBar  from './components/TopBar';
import MainPage  from './components/MainPage';

const API_URL = 'http://localhost:8099'

function App() {
  return (
    <div style={{height: "100%", width:"100%"}} className="App">
      <TopBar></TopBar>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
