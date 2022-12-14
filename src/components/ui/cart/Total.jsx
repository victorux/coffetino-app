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
  font-size: ${({theme}) => theme.fontSizes._400};
  font-weight: 300;
  color: ${({theme}) => theme.colors.black};
`

const SmallSpan = styled.span`
  font-size: ${({theme}) => theme.fontSizes._300};
  font-weight: 300;
  color: ${({theme}) => theme.colors.gray700};
`

const BoldSpan = styled.span`
  font-size: ${({theme}) => theme.fontSizes._500};
  font-weight: 500;
  color: ${({theme}) => theme.colors.black};
`

function Total({cart}) {
  const products = cart.products;

  // Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const totalPrice = products.reduce(function(previousValue, currentValue) {
  return previousValue + currentValue.total}, 0)

  return (
    <Container>
      <Item>
        <Span>Items</Span>
        <Span>
          {
            formatter.format(totalPrice)
          }
        </Span>
      </Item>
      <Item>
        <Span>Postage & Packing</Span>
        <Span>Free</Span>
      </Item>
      <Item>
        <Span>Discount</Span>
        <Span>-</Span>
      </Item>
      <hr color='#dadada' size="1"/>
      <Item>
        <BoldSpan>Order Total</BoldSpan>
        <BoldSpan>
          {
            formatter.format(totalPrice)
          }
        </BoldSpan>
      </Item>
      <Item>
        <SmallSpan>Order total include VAT.</SmallSpan>
      </Item>
    </Container>
  )
}

export default Total