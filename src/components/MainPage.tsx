import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import AgeSearch from './AgeFilter'
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
const Title = styled.div`
  margin-left: 13%;
  font-weight: bold;
  font-size: 20px;
  padding-top: 25px;
  margin-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif;
`
export interface MinMax {
  min: number;
  max: number;
}

function MainPage() {

  const [originaList, SetOriginaList] = useState<any>([]);

  async function retrieveAPI() {

    const urls = ["http://localhost:8099/users/kids", "http://localhost:8099/users/adults", "http://localhost:8099/users/seniors"]
    let res = await Promise.all(urls.map(e => fetch(e)))
    let jsonResponse = await Promise.all(res.map(e => e.json()))

    const kidsResp = jsonResponse[0].data
    const adultsArr = jsonResponse[1].data
    const seniorArr = jsonResponse[2]

    const finalList = kidsResp.concat(adultsArr).concat(seniorArr)
    SetOriginaList(finalList)
  }

  useEffect(() => {
    retrieveAPI()
  }, []);


  const [minMax, setMinMax] = useState<MinMax>({ min: 0, max: 100 })
  return (
    <Container>
      <Title>Users </Title>
      <InnerContainer>
        <AgeSearch setMinMax={setMinMax}>
        </AgeSearch>
        <UserBox minmax={minMax} originalList={originaList} >
        </UserBox>
      </InnerContainer>
    </Container>
  )
}

export default MainPage;
