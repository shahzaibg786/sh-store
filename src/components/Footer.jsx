import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room } from '@mui/icons-material'
import React from 'react'
import styled from "styled-components"

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>SH Store</Logo>
                <Desc>Best & Afforable Furniture Store.</Desc>
                <Socialcontainer>
                    <SocialIcons color="3B5999">
                        <Facebook />
                    </SocialIcons>
                    <SocialIcons color="E4405F">
                        <Instagram />
                    </SocialIcons>
                    <SocialIcons color="55ACEE">
                        <LinkedIn />
                    </SocialIcons>
                </Socialcontainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <Listitem>Home</Listitem>
                    <Listitem>Cart</Listitem>
                    <Listitem>My Account</Listitem>
                    <Listitem>Wishlist</Listitem>
                    <Listitem>Terms and Conditions</Listitem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItems>
                 <Room  style={{marginRight:"10px"}}/>  National Park, DHA Phase 2
                </ContactItems>
                <ContactItems>
                 <Phone style={{marginRight:"10px"}}/>   090078601
                </ContactItems>
                <ContactItems>
                   <MailOutline style={{marginRight:"10px"}}/> m.shahzaib.arshad@hotmail.com
                </ContactItems>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer


const Container = styled.div`
display : flex;
background-color : rgba(0,0,0,0.2);`
const Left = styled.div`
flex :1;
display : flex;
flex-direction: column;
padding: 20px
`

const Logo = styled.h1``
const Desc = styled.p`
margin : 20px 0px`
const Socialcontainer = styled.div`
display : flex;`
const SocialIcons = styled.div`
width : 40px;
height : 40px;
border-radius: 50%;
display: flex;
color: white;
align-items : center;
justify-content : center;
margin-right : 10px;
background-color : #${props => props.color}
`



const Center = styled.div`
flex :1;
padding : 20px;
`
const Title = styled.h3`
margin-bottom: 20px;`
const List = styled.div`
margin : 0;
padding : 0;
list-style : none;
display : flex;
flex-wrap: wrap;
`
const Listitem = styled.li`
width : 50%;
margin-bottom : 8px;
`


const Right = styled.div`
flex :1;
padding : 20px;
`
const ContactItems = styled.div`
margin-bottom : 8px;
display: flex;
align-items :center;`

const Payment = styled.img``