import React, { Component } from "react";
import image from "../assets/logo.svg";
import styled from "styled-components";

const Container = styled.div`
  height: 48px;
  width: 100%;
  postion: absolute;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  float: left;
  width: 48px;
  height: 48px;
`;

const Title = styled.div`
  margin-left: 20px;
  font-weight: bold;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

function TopBar() {
  return (
    <Container>
      <Image src={image}></Image>
      <Title>Planned Test</Title>
    </Container>
  );
}

export default TopBar;