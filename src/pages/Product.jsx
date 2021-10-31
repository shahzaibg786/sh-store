import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import bed1 from '../images/bed1.jpg'



const Product = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
{/* Body Content start here */}
                <Wrapper>
                    <ImageContainer>
                        <Image src={bed1}/>
                    </ImageContainer>
                    <InfoContainer>
                            <Title>Cargo</Title>
                            <Desc>Best product</Desc>
                            <Price>$20</Price>
                            <FilterContainer>
                                {/* Color container started here */}
                                <Filter>
                                    <FilterTitle>Color</FilterTitle>
                                    <FilterColor color="Red"/>
                                    <FilterColor color="Black"/>
                                    <FilterColor color="Green"/>
                                </Filter>
                                {/* Color container end here */}
                                <Filter>
                                    <FilterTitle>Size</FilterTitle>
                                    <FilterSize>
                                        <Filtersizeoption>Extra Small</Filtersizeoption>
                                        <Filtersizeoption>Small</Filtersizeoption>
                                        <Filtersizeoption>Medium</Filtersizeoption>
                                        <Filtersizeoption>Large</Filtersizeoption>
                                        <Filtersizeoption>Extra Large</Filtersizeoption>
                                    </FilterSize>
                                </Filter>
                            </FilterContainer>
                            {/* Add Container started here */}
                            <AddContainer>
                                <AmountContainer>
                                    <Remove />
                                    <Amount>1</Amount>
                                    <Add />
                                </AmountContainer>
                            
                            

                            <AddCartbtn>
                                Add to Cart
                            </AddCartbtn>

                            </AddContainer>
                            {/* Add container end here */}
                    </InfoContainer>
                    
                </Wrapper>

{/* Body Content end here */}
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product


const Container = styled.div``

const Wrapper = styled.div`
padding : 50px;
display : flex;
`

const ImageContainer = styled.div`
flex : 2;
`

const Image =styled.img`
width : 100%;
height : 90vh;
object-fit : cover;
`

const InfoContainer = styled.div`
flex : 1;
padding : 0px 50px;
`

const Title = styled.h1`
font-weight : 200;`

const Desc =styled.p`
margin : 20px 0px;`

const Price = styled.span`
font-weight : 100;
font-size : 40px;
`

const FilterContainer =styled.div`
width: 50%;
margin : 30px 0px;
display : flex;
justify-content : space-between;
`

const Filter =styled.div`
display : flex;
align-items : center;
`

const FilterTitle =styled.span`
font-size : 20px;
font-weight : 200;
// padding : 10px;
`

const FilterColor =styled.div`
width : 20px;
height: 20px;
border-radius : 50%;
background-color : ${props => props.color};
margin : 0px 5px;
cursor : pointer;
`

const FilterSize =styled.select`
margin-left : 10px;
padding : 5px;
border : 1px solid orange;
`

const Filtersizeoption =styled.option``


const AddContainer =styled.div`
width : 50%;
display : flex;
align-items : center;
justify-content : space-between;
`

const AmountContainer =styled.div`
display : flex;
align-items : center;
font-weight : 700;

`


const Amount =styled.span`
width : 30px;
height : 30px;
border-radius : 10px;
border : 1px solid orange;
display : flex;
align-items : center;
justify-content : center;
margin : 0px 5px;
`


const AddCartbtn =styled.button`
padding: 15px;
border : 1px solid #a0c794;
background-color: #a0c794;
color: white;
font-weight : 500;
cursor : pointer;
transition : all 0.5s ease;
&:hover {
    background-color: orange;
    border: none;
}`



