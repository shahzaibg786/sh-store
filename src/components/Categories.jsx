import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import {categoryitems} from '../data'
import { mobile } from './Responsive'

const Categories = () => {

    return (
        <Container>
            {categoryitems.map(item => (

            <CategoryItem  item = {item}/>
            ))}
        </Container>
    )
}

export default Categories

const Container = styled.div`
    display: flex;
    padding : 20px;
    justify-content: space-between;
    ${mobile({padding:"0px" , flexDirection:"column"})}
`