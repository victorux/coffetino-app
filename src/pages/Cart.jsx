import React from 'react'
import styled from 'styled-components'
import globalVariables from '../components/styles/globalVariables';
import { device } from '../components/styles/breakpoints';

import CartItem from '../components/ui/cart/CartItem';
// import SummaryItem from '../components/ui/cart/SummaryItem';
import Total from '../components/ui/cart/Total';
import Button from '../components/button/index';
import {useNavigate} from "react-router-dom";

import { useSelector } from "react-redux"


const BodyContainer = styled.div`
  max-width: ${globalVariables.maxWidth};
  padding: 30px 20px 0 20px;
  margin: 0 auto;
  border-top: 1px solid ${({theme}) => theme.colors.gray200};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 80px;

  @media ${device.tablet}{
    flex-direction: column;
  }

  @media ${device.laptopL}{
    gap: 20px;
  }

  @media ${device.tablet}{
    gap: 100px;
  }
`
const Title = styled.span`
  font-size: ${({theme}) => theme.fontSizes._900};
  font-weight: 600;

  @media ${device.laptop}{
    font-size: ${({theme}) => theme.fontSizes._700};
  }
`

const CartList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet}{
    width: 100%;
  }
`

const SummaryList = styled.div` 
`

const BorderButton = styled.button`
  padding: 1.25rem 1.85rem;
  width: auto;
  border: 2px solid ${({theme}) => theme.colors.black};
  border-radius: 7px;
  background-color: transparent;
  margin-top: 40px;
  font-size: ${({theme}) => theme.fontSizes._400};
  cursor: pointer;
  letter-spacing: 0.02rem;
  font-weight: 400;
  color: ${({theme}) => theme.colors.black};
  transition: .22s all ease;

  :hover {
    background-color: ${({theme}) => theme.colors.black};
    color: #fff;
  }

  @media ${device.tablet}{
      width: 100%;
    }
`

const LeftBlock = styled.div`
  flex-grow: 1.8;

  @media ${device.tablet}{
      width: 100%;
    }
`
const RightBlock = styled.div`
  flex-grow: 1;

  @media ${device.tablet}{
      width: 100%;
    }
`
const SummaryBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: #F3F3F3;
  padding: 30px 40px;
  border-radius: 12px;
  margin-top: 40px;
  width: 100%;
`

function Cart() {

  const cart = useSelector(state => state.cart)
  const navigate = useNavigate();

  return (
    <BodyContainer>
      <LeftBlock>
        <Title>Shopping Cart</Title>
        <CartList>
          {cart.products.map((product, i) => <CartItem key={'p'+ i} product={product} />)}
          <div>
            <BorderButton onClick={() => navigate("/products") }>Continue shopping</BorderButton>
          </div>
        </CartList>
      </LeftBlock>
      <RightBlock>
        <Title>Order Summary</Title>
        <SummaryBlock>
          <SummaryList>
            {/* {cart.products.map(product => <SummaryItem />)} */}
          </SummaryList>
          <Total />
          <Button label="Go to checkout" />
        </SummaryBlock>
      </RightBlock>
    </BodyContainer>
  )
}

export default Cart