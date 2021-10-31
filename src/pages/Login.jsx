import React from 'react'
import styled from 'styled-components'
import bed1 from '../images/bed1.jpg'
const Login = () => {
    return (
        <Container bgimage={bed1}>
            <Wrapper>
                <Title>Sign in</Title>
                <Form >
                    <Input placeholder = "Username" />
                    <Input placeholder = "Password" />
                
                <Button>Next</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login


const Container = styled.div`
width : 100vw;
height:100vh;
background-image : url(${props =>props.bgimage});
background-size : cover;
background-repeat : no-repeat;
display: flex;
align-items : center;
justify-content : center;
`

const Wrapper = styled.div`
width: 40%;
background-color : white;
padding : 20px;
align-items : center;
justify-content : center;
`

const Title = styled.h1`
font-size : 30px;
font-weigth : 700;
display : flex;
align-items : center;
justify-content : center;
`

const Form = styled.form`
display: flex;
flex-direction : column;
min-width : 40%;
flex-wrap : warap;
margin: 20px 0px;
// padding : 10px;
`

const Input = styled.input`
flex: 1;
padding : 10px;
margin : 20px 20px 0px 0px;`

const Button = styled.button`
width : 40%;
padding : 15px 20px;
margin : 20px 0px;
border : none;
border-radius : 10px;
background-color: #a0c794;
color: white;
font-size : 14px;
cursor : pointer;

&:hover {
    background-color : orange;
}
`