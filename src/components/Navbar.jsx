import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';  

const Container = styled.div`
height: 60px;
// background-color: skyblue ;
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: end;
 
`;
const Center = styled.div`
flex: 1;
text-align: center;
`;
const Language = styled.span`
font-size: 14px;
cursor: pointer;
`;
const Searchcontainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
margin-left: 25px;
padding: 5px;
align-items: center;
`;
const Input = styled.input`
border: none;

`;
const Logo = styled.h1`
 font-weight: bold;

`;
 
 
const Menuitems = styled.div`
margin-left: 25px;
font-size: 14px;
cursor: pointer;

`;
 
 
const Navbar = () => {
  return (
    <Container >
      <Wrapper> 
        <Left>
          <Language> <b>EN</b></Language>
          <Searchcontainer>
            <Input/>
            <Search style={{color: "gray" , fontSize: 16}}/> 
          </Searchcontainer>
        </Left>
        <Center><Logo><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}><b>SHOPPABLE_2.O</b></Link> </Logo></Center>
        <Right> 
          <Menuitems>   <Link to="/register" style={{ color: 'inherit', textDecoration: 'none' }}><b>REGISTER</b></Link></Menuitems>
          <Menuitems>   <Link to="/Login" style={{ color: 'inherit', textDecoration: 'none' }}><b>SIGN IN</b></Link></Menuitems>
          <Badge badgeContent={5} color="primary" style={{ marginLeft: '20px', cursor: 'pointer' }}>
       
      <Link to="/cart" style={{ color: 'inherit', textDecoration: 'none' }}><ShoppingCartOutlined fontSize="large" /></Link>
    </Badge>
        </Right>
      </Wrapper>
    </Container> 
  )
}

export default Navbar
