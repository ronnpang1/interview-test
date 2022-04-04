import React from 'react';
import styled from 'styled-components';
import TopBar  from './TopBar';
import MainPage  from './MainPage';

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
