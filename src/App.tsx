import React from 'react';
import styled from 'styled-components';
import TopBar from './components/TopBar';
import MainPage from './components/MainPage';

const API_URL = 'http://localhost:8099'

const Main = styled.div`
  height: 100%;
  width: 100%;
`

function App() {
  return (
    <Main className="App">
      <TopBar></TopBar>
      <MainPage></MainPage>
    </Main>
  );
}

export default App;
