import React from 'react'
import ProductInfo from '../components/ui/productInfo/productInfo'
import styled from 'styled-components'
import globalVariables from "../components/styles/globalVariables"


const Wrapper = styled.div`
max-width: ${globalVariables.maxWidth};
  padding: 30px 20px 0 20px;
  margin: 0 auto;

`

function ProductPage() {
  return (
    <Wrapper>
        <ProductInfo />
        {/* Bellow goes product description componenet */}
    </Wrapper>
  )
}

export default ProductPage