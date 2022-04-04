import React, { Component } from 'react';
import image from './assets/logo.svg'
import styled from "styled-components"

const Container = styled.div`
  height: 150px;
  width: 33%;
  text-align: center;
  background-color: #ffffff;
  flex-direction: column;
  padding: 10px;
`

const Min = styled.div`
  height: 64px;
  width: 100%;
  align-items: center;
  background-color: #ffffff;
`

const Max = styled.div`
  height: 64px;
  width: 100%;
  align-items: center;
  background-color: #ffffff;
`

const Btn = styled.button`
  height: 25px;
  background-color: #009900;
  width: 33%;
  margin:auto;
  border-radius: 8px;
  color: #ffffff;
  border: none;
`


class AgeSearch extends Component {
    render() {
        return (
                <Container>
                    <Min>
                    min: <input name="minAge" type="number" />
                    </Min>
                    <Max>
                    max: <input name="maxAge"  type="number" />
                    </Max>
                    <Btn type="button">Filter by age</Btn>
                </Container>
        )
    }
}

export default AgeSearch;
