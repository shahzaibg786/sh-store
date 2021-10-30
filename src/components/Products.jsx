import React from 'react'
import styled from 'styled-components'
import {ProductItems} from '../data'
import ProductItem from './ProductItem'

const Products = () => {
    return (
        <Container>
            {ProductItems.map(item =>(
                <ProductItem item={item} />
            ))}
        </Container>
    )
}

export default Products

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap : wrap;
justify-content : space-beween;
`