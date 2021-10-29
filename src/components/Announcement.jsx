import React from 'react'
import styled from "styled-components";

const Announcement = () => {
    return (
        <Container>
            Unstoppable deals for you! 
        </Container>
    )
}

export default Announcement

const Container = styled.div`
height:30px;
background-color: orange;
color:white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`