import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import React from "react";
import styled from "styled-components";
import {mobile} from "../components/Responsive"

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Inputcontainer placeholder = "Search"/>
            <Search style={{color: "grey", fontSize: 16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SH Store</Logo>
        </Center>
        <Right>
            <Menuitems >Register</Menuitems>
            <Menuitems >Login</Menuitems>
            <Menuitems >
                <Badge badgeContent={2} color="primary">
                    <ShoppingCartIcon />    
                </Badge>
            </Menuitems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 60px;
 ${mobile({height : "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding : "10px 0px"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display : "none"})};
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  border-radius: 25px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  
`;
const Inputcontainer = styled.input`
  border: none;
  ${mobile({width : "50px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize : "20px"})}
  `;
  
  const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end; 
  ${mobile({flex : 2 , justifyContent : "center"})}
`;
const Menuitems = styled.div`
font-size:15px;
cursor: pointer;
margin-left: 25px;
${mobile({ fontSize : "12px" , marginLeft : "10px"})}
`