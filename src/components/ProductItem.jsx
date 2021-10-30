import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FavoriteBorder, Search } from "@mui/icons-material";

const ProductItem = ({item}) => {
    return (
        <Container>
            {/* <Circle /> */}
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

const Info = styled.div`
opacity : 0;
background-color : rgba(0,0,0,0.2);
position : absolute;
top : 0;
left: 0;
width : 100%;
height : 100%;
display : flex;
// flex-direction : column;
justify-content : center;
align-items : center;
z-index :3;
transition : all 0.5s ease;
`


const Container = styled.div`
flex : 1;
margin: 5px;
min-width: 280px;
height : 350px;
display : flex;
align-items : center;
justify-content : center;
background-color : #f0f0f0;
position : relative;

&:hover ${Info} {
    opacity : 1;
}

`

const Circle = styled.div`
height: 200px;
width: 200px;
border-radius: 50%;
background-color : white;
position: absolute;
`

const Image = styled.img`
width : 250px;
height : 75%;
z-index :2;
`



const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color : white;
display: flex;
justify-content : center;
align-items : center;
margin : 5px;
cursor : pointer;
transition : all 0.5s ease;

&:hover {
    background-color : #e9f5f5;
    transform : scale(1.5);
}
`
