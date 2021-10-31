import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const ProductList = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Beds</Title>
            <FilterContainer>
                <Filter>
                    <Filtertext>Filter Products:</Filtertext>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>Small</Option>
                        <Option>Medium</Option>
                        <Option>Large</Option>
                        <Option>Extra Large</Option>
                    </Select>
                </Filter>
                <Filter>
                <Filtertext>Sort Products:</Filtertext>
                <Select>
                        <Option selected>Newest</Option>
                        <Option>Lowest Price First</Option>
                        <Option>Best quality</Option>
                        <Option>Rating</Option>
                        <Option>Refundable</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList


const Container = styled.div`

`

const Title = styled.h1`
margin : 20px;
`

const FilterContainer = styled.div`
display: flex;
justify-content : space-between;`

const Filter = styled.div`
margin : 20px;
display: flex;`
const Filtertext =styled.div`
font-size : 20px;
font-weight : 600;
margin: 10px;`

const Select = styled.select`
padding: 10px;
margin-right : 20px;
cursor : pointer;

`
const Option = styled.option`

`