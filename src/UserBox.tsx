import React, { Component } from 'react';
import image from './assets/logo.svg'
import styled from "styled-components"

const Container = styled.div`
  height: 250px;
  width: 66%;
  margin-left:40px;
  text-align: center;
  background-color: #ffffff;
  flex-direction: column;
  padding: 10px;
  overflow: auto;

`

const Search = styled.input`
  height: 38px;
  width: 91%;
  align-items: center;
  background-color: #ffffff;
  margin-bottom:5px;
  border-radius: 8px;
`

const Max = styled.div`
  height: 64px;
  width: 100%;
  align-items: center;
  background-color: #ffffff;
`

const Table = styled.table`
    width: 500px;
    margin-left: auto;
    margin-right: auto;
`

const Th = styled.th`
    float:left;
`

const Td = styled.td`
    float:left;
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


class UserBox extends React.Component<{},any> {
    constructor(props:any) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8099/users/kids").then(res => res.json()).then((result) => {
            this.setState({
                items: result.data
            })
        })
    }

    render() {
        const items  = this.state.items;
        return (
            <Container>
                <Search placeholder="search" name="minAge" type="number" />
                {/* <Max>
                    max: <input name="maxAge" value="100" type="number" />
                    </Max>
                    <Btn type="button">Filter by age</Btn> */}
                <Table>
                    <tr>
                        <Th>Name</Th>
                        <th>Age</th>
                    </tr>
                    {items.map((item: { name: { firstName: React.ReactNode; }; age: React.ReactNode; }) => (
                        <tr>
                        <Td>{item.name.firstName}</Td>
                        <td>{item.age}</td>
                        </tr>

                    ))}

           
                </Table>
            </Container>
        )
    }
}

export default UserBox;
