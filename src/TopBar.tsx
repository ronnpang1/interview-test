import React, { Component } from 'react';
import image from './assets/logo.svg'
import styled from "styled-components"

const Container = styled.div`
  height: 64px;
  width: 100%;
  postion: absolute;
  display: flex;
  align-items: center;
`

const Image = styled.img`
  float: left;
  width: 64px;
  height: 64px;
`

const Title = styled.div`
  margin-left:5px;
  font-weight: bold;
  font-size: 24px;
`

class TopBar extends Component {
    render() {
        return (
                <Container>
                    <Image  src={image}></Image>
                    <Title >Planned Test</Title>
                </Container>
        )
    }
}

export default TopBar;
