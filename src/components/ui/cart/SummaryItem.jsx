import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border-bottom: 1px solid ${({theme}) => theme.colors.gray300};
  padding: 20px 0;

  :first-child {
    padding-top: 0;
  }
`


const Title = styled.h3`
  font-weight: 500;
  font-size: ${({theme}) => theme.fontSizes._500};
  letter-spacing: 0.25px;
  margin-bottom: 10px;
`

const ItemDesc = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 14px;
  align-items: flex-end;
  justify-content: space-between;
`

const DescList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  span {
    font-size: ${({theme}) => theme.fontSizes._400};
    font-weight: 300;
    color: ${({theme}) => theme.colors.black};
  }
`

const Price = styled.span`
  font-size: ${({theme}) => theme.fontSizes._500};
  font-weight: 300;
`
function Summary() {
  return (
    <Container>
      <Title>Product Title</Title>
      <ItemDesc>
        <DescList>
          <span>- One time delivery</span>
          <span>- Whole Beans</span>
          <span>- 2 packs</span>
        </DescList>
        <Price>$70.99 p/m</Price>
      </ItemDesc>
    </Container>
  )
}

export default Summary