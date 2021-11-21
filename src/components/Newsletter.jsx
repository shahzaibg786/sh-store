import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from './Responsive'

const Newsletter = () => {
    return (
        <Container>
            <Title >NewsLetter</Title>
            <Desc>Get Timely updated from your favourite products.</Desc>
            <Inputcontainer>
            <Input  placeholder="Your Email"/>
            <Button >
                <Send />
            </Button>
            </Inputcontainer>
        </Container>
    )
}

export default Newsletter


const Container = styled.div`
height : 60vh;
background-color : #fcf5f5;
display: flex;
align-items : center;
justify-content : center;
flex-direction: column;
`

const Title = styled.h1`
font-size : 70px;
font-weight : 700;
margin : 20px;
${mobile({fontSize : "60px"})}`

const Desc = styled.div`
font-size : 24px;
font-weight : 300;
margin-bottom : 20px;
${mobile({
    textAlign: "center"
})}
`

const Inputcontainer = styled.div`
width: 50%;
height : 40px;
display:flex;
justify-content : space-between;
border: 1px solid lightgray;
${mobile({
    width:"80%"
})}
`

const Input = styled.input`
border : none;
flex: 8;
padding-left : 20px;
`
const Button = styled.button`
flex : 1;
border: none;
background-color : teal;
color : white;
`