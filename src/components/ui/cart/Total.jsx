import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Span = styled.span`
  font-size: ${({theme}) => theme.fontSizes._500};
  font-weight: 300;
  color: ${({theme}) => theme.colors.black};
`

const BoldSpan = styled.span`
  font-size: ${({theme}) => theme.fontSizes._600};
  font-weight: 600;
  color: ${({theme}) => theme.colors.black};
`

function Total() {
  return (
    <Container>
      <Item>
        <Span>Delivery</Span>
        <Span>Free</Span>
      </Item>
      <Item>
        <Span>Discount</Span>
        <Span>-</Span>
      </Item>
      <Item>
        <BoldSpan>Total</BoldSpan>
        <BoldSpan>$110.99</BoldSpan>
      </Item>
    </Container>
  )
}

export default Total