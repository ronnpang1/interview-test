import React, { Component } from 'react';
import image from './assets/logo.svg'
import styled from "styled-components"

const Container = styled.div`
  height: 100px;
  postion: absolute;
  display: flex;
  margin-bottom: 20px;
`


class TopBar extends Component {
    render() {
        return (
                <Container>
                    <img style={{float: "left"}} width="84" src={image}></img>
                    <h1 >Planned Test</h1>
                </Container>
        )
    }
}

export default TopBar;
