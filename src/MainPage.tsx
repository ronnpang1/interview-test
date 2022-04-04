import React, { Component } from 'react';
import styled from "styled-components"
import AgeSearch from './AgeSearch'
import UserBox from './UserBox'

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 20px;
  background-color: #f2f2f2;
`

const InnerContainer = styled.div`
  height: 50%;
  width: 75%;
  margin: auto;
  align-items: flex-start; 
  display: flex;
  background-color: #f2f2f2;
`

const Image = styled.img`
  float: left;
  width: 64px;
  height: 64px;
`

const Title = styled.div`
  margin-left: 12%;
  font-weight: bold;
  font-size: 32px;
  padding-top: 25px;
  margin-bottom: 10px;
`

class MainPage extends Component {
    render() {
        return (
            <Container>
                <Title>Users</Title>
                <InnerContainer>
                    <AgeSearch>
                    </AgeSearch>
                    <UserBox></UserBox>
                </InnerContainer>
            </Container>
        )
    }
}

export default MainPage;
