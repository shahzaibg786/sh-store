import React from 'react'
import styled from 'styled-components'
import { mobile } from '../components/Responsive'
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
                <Link >Forgot Password Click Here</Link>
                <Link >Create New Account.</Link>
                </Form>
                {/* <Forgot>
                    <Forgottitle>Forgot Password</Forgottitle>
                    <Forgotbutton>Click Here</Forgotbutton>
                </Forgot> */}
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
width: 25%;
background-color : white;
padding : 20px;
align-items : center;
justify-content : center;
${mobile({width: "75%"})}
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
margin : 10px 0px;`

const Button = styled.button`
width : 40%;
padding : 15px 20px;
margin : 10px 0px;
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
const Link = styled.a `
margin : 3px 0px;
display : flex;
cursor : pointer;
 &:hover{
     color : orange;
     text-decoration : underline;
 }`

// const Forgot = styled.div`
// display : flex;
// `

// const Forgottitle = styled.h4``
// const Forgotbutton = styled.a`
// margin-left : 10px;
// color : red;`