import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FavoriteBorder, Search } from "@mui/icons-material";

const ProductItem = ({item}) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <Search />
                </Icon>
                <Icon>
                    <ShoppingCartIcon />
                </Icon>
                <Icon>
                    <FavoriteBorder />
                </Icon>
            </Info>
        </Container>
    )
}

export default ProductItem


const Container = styled.div`
flex : 1;
margin: 5px;
min-width: 280px;
height : 350px;
display : flex;
align-items : center;
justify-content : center;
background-color : gray;
position : relative;`

const Circle = styled.div``

const Info = styled.div`
position : absolute;
top : 0;
left: 0;
width : 100%;
height : 100%;
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
`

const Icon = styled.div``
const Image = styled.img`
height : 75%;
object-fit: cover;
`