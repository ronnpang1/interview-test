import React, { useState } from 'react';
import { MinMax } from "./MainPage";

import styled from "styled-components"

const Container = styled.div`
  height: 180px;
  width: 33%;
  align-items:center;
  background-color: #ffffff;
  flex-direction: column;
  padding: 10px;
`
const InputLabel = styled.p`
  margin-top:17px;
  margin-left:15%;
  position:absolute;
  color:#bfb8b8;
`

const InputBox = styled.input`
  width:60%;
  height:28px;
  line-height: 2;
  padding-left: 45px;
  border-color:#bfb8b8;
  border-style:solid;
  margin-top:10px;
  border-radius: 3px;
`

const InputContainer = styled.div`
  position: relative;
  height: 64px;
  width: 100%;
  text-align:center;
  background-color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
`

const Btn = styled.button`
  height: 35px;
  background-color: #41a74a;
  width: 50%;
  margin-left:25px;
  border-radius: 24px;
  color: #ffffff;
  border: none;
`
const AgeFilter: React.FC<any> = ({ setMinMax }) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  const setMin = (min: string) => {
    setMinValue(Number(min))
  }

  const setMax = (max: string) => {
    setMaxValue(Number(max))
  }

  const onButtonClick = () => {
    setMinMax({ min: minValue, max: maxValue })
  }

  return (
    <Container>
      <InputContainer>
        <InputLabel>Min</InputLabel>
         <InputBox name="minAge" value={minValue} onChange={e => setMin(e.target.value)} type="number" />
      </InputContainer>
      <InputContainer>
      <InputLabel>Max</InputLabel>
         <InputBox name="maxAge" value={maxValue} onChange={e => setMax(e.target.value)} type="number" />
      </InputContainer>
      <Btn onClick={() => onButtonClick()} type="button">Retrieve Users</Btn>
    </Container>
  );
}

export default AgeFilter;
