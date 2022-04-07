import React, { useState, useEffect } from 'react';
import { MinMax } from "./MainPage";
import sort from '../assets/sort-arrows.svg'

import searchIcon from '../assets/icons8-search.svg'
import styled from "styled-components"

const Container = styled.div`
  height: 250px;
  width: 66%;
  margin-left:40px;
  text-align: center;
  background-color: #ffffff;
  flex-direction: column;
  padding-top: 10px
`

const Search = styled.input`
  height: 38px;
  width: 80%;
  align-items: center;
  background-color: #ffffff;
  margin-bottom:5px;
  border-color:#bfb8b8;
  border-style:solid;
  padding-left:40px;
  border-radius: 10px;
`

const ImgIcon = styled.img`
    margin-left:5px;
    width: 7px;
    height: 7px;
`

const Image = styled.img`
    float: left;
    position: absolute;
    margin-top:12px;
    margin-left:15px;
    height:20px;
    width:20px;
`
const CheckBox = styled.input`
    width:15px;
    float:left;
    margin-left:10px;
`

const TableHeader = styled.div`
    width: 100%;
    height: 35px;
    display:flex;
    margin-top:15px;
`

const NameHeader = styled.div`
    width: 137px;
    font-family: Arial, Helvetica, sans-serif;
    font-size:10px;
    font-weight: bold;
`

const AgeHeader = styled.div`
    width: 82%;
    font-family: Arial, Helvetica, sans-serif;
    font-size:10px;
    font-weight: bold;
`

const DataContainer = styled.div`
    width: 100%;
    height: 150px;
    display:block;
    overflow: auto;
`

const NameData = styled.div`
    width: 30%;
    font-family: Arial, Helvetica, sans-serif;
    font-size:10px;
    text-align: left;
    margin-top:4px;
    margin-left:20px;
`
const AgeData = styled.div`
    width: 43%;
    font-family: Arial, Helvetica, sans-serif;
    font-size:10px;
`
const TableRow = styled.div`
    width: 100%;
    height: 30px;
    display:flex;
    border-bottom: 0.5px solid #bfb8b8;
`

const SearchContainer = styled.div`
    width: 100%;
    height: 55px;
    border-bottom: 0.5px solid #bfb8b8;
`

export interface UserProps {
    minmax: MinMax;
    originalList: [];
}

const UserBox: React.FC<UserProps> = ({ minmax, originalList }) => {
    // Set Mutable List
    const [list, SetList] = useState<any>([]);
    // Set search term
    const [searchTerm, SetSearchTerm] = useState<string>("");
    // Set sort name boolean
    const [sortName, setSortName] = useState<boolean>(false);
    // Set sort age boolean
    const [sortAge, setSortAge] = useState<boolean>(false);

    // helper to sort by age
    const sortByAge = () => {
        const sortedList = list.sort((a, b) => {
            if (a.age > b.age) return 1;
            if (a.age < b.age) return -1;
            return 0;
        });
        SetList(sortedList);
    };

    // helper to sort by name
    const sortByName = () => {
        const sortedList = list.sort((a, b) => {
            if (a.name.firstName > b.name.firstName) return 1;
            if (a.name.firstName < b.name.firstName) return -1;
            return 0;
        });
        SetList(sortedList);
    };

    // helper to filter by age
    const filterByAge = (item: any) => {
        if (minmax.min <= item.age && item.age <= minmax.max) {
            return true;
        }
        return false;
    };

    // function filters list by age and then sets the list
    const filterAge = () => {
        const ageArrFiltered = originalList.filter(filterByAge);
        SetList(ageArrFiltered);
    };

    useEffect(() => {
        if (sortName === true) {
            sortByName();
        } else {
            sortByAge();
        }
    }, [sortName, sortAge]);

    useEffect(() => {
        filterAge();
    }, [minmax, originalList]);

    return (
        <Container>
            <SearchContainer>
                <Image src={searchIcon}></Image>
                <Search onChange={e => SetSearchTerm(e.target.value)} value={searchTerm} placeholder="Search Users" type="text" />
            </SearchContainer>
            <TableHeader>
                <TableRow>
                    <NameHeader> Name
                        <span onClick={() => setSortName(!sortName)}>
                            <ImgIcon src={sort} >
                            </ImgIcon>
                        </span>
                    </NameHeader>
                    <AgeHeader> Age
                        <span onClick={() => setSortAge(!sortAge)}>
                            <ImgIcon src={sort} >
                            </ImgIcon>
                        </span>
                    </AgeHeader>
                </TableRow>
            </TableHeader>
            <DataContainer>
                {/* Takes search term and does include operation to see if string is in the first or last name */}
                {list
                    .filter((item) =>
                        item.name.firstName.toLowerCase().includes(searchTerm.toLowerCase())
                        || item.name.lastName.toLowerCase().includes(searchTerm.toLowerCase())
                        || searchTerm === "")
                    .map((item, index) => (
                        <TableRow key={index}>
                            <CheckBox type="checkbox" id="subscribeNews" name="subscribe" value="newsletter" />

                            <NameData>
                                {item.name.firstName} {item.name.lastName}
                            </NameData>
                            <AgeData>{item.age}</AgeData>
                        </TableRow>
                    ))}
            </DataContainer>
        </Container >
    );
};

export default UserBox;
