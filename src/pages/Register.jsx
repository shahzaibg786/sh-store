import React from "react";
import styled from "styled-components";
import { mobile } from "../components/Responsive";
import bed4 from "../images/bed4.jpg"

const Register = () => {
  return (
    <Container bgimage={bed4}>
      <Wrapper >
        <Title>Create Account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            I declare, all the provided data is to true to my best.
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image : url(${props =>props.bgimage});
  background-size : cover;
  opacity : 1;
  background-position: center;
  background-repeat : no-repeat;
  //background: liner-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));
  display : flex;
  align-items: center;
  justify-content : center;
  
  `;

const Wrapper = styled.div`
padding : 20px;
background-color: #f5f5f5;
width : 40%;
align-items: center;
justify-content: center;
${mobile({width:"80%"})}
`;

const Title = styled.h1`
font-sixe : 24px;
font-weight : 300;
display : flex;
align-items : center;
justify-content : center;`;

const Form = styled.form`
display : flex;
flex-direction : column;
min-width : 40%;
flex-wrap : wrap;

`;

const Input = styled.input`
flex : 1;
margin : 20px 20px 0px 0px; 
padding : 10px;
`;

const Agreement = styled.span`
font-size : 12px;
margin : 20px 0px;
`;

const Button = styled.button`
width : 20%;
border : none;
border-radius : 10px;
padding : 15px 20px;
// margin : 10px 0px;
background-color : #a0c794;
color : white;
font-weight : 700;
cursor : pointer;

&:hover{
    background-color : orange;
}
${mobile({width:"40%"})}
`;
