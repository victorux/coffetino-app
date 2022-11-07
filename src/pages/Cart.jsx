import React from 'react'
import styled from 'styled-components'
import globalVariables from '../components/styles/globalVariables';
import { device } from '../components/styles/breakpoints';
import EmptyCart from '../components/ui/cart/EmptyCart'

import CartItem from '../components/ui/cart/CartItem';
import PayWithStripe from '../components/ui/cart/PayWithStripe'
// import SummaryItem from '../components/ui/cart/SummaryItem';
import Total from '../components/ui/cart/Total';
import Button from '../components/button/index';
import {useNavigate} from "react-router-dom";

import { useSelector } from "react-redux"


const BodyContainer = styled.div`
  max-width: ${globalVariables.maxWidth};
  padding: 40px 20px 0 20px;
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
  font-family: ${({theme}) => theme.fonts.sans};
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
  gap: 20px;
  background-color: #F3F3F3;
  padding: 30px 40px;
  border-radius: 12px;
  margin-top: 40px;
  width: 100%;
`

const SmallSpan = styled.span`
  font-size: ${({theme}) => theme.fontSizes._300};
  font-weight: 300;
  line-height: 2;
  color: ${({theme}) => theme.colors.gray700};
`

function Cart() {

  const cart = useSelector(state => state.cart)
  const cartProducts = cart.products;
  const navigate = useNavigate();

  const quantity = useSelector(state => state.cart.qty);

  const totalPrice = Number(cart.products.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue.total}, 0).toFixed(2));
  
  return ( 
    cartProducts.length === 0 
    ? <EmptyCart />
    : <BodyContainer>
      <LeftBlock>
        <Title>Shopping Cart ({quantity} {quantity > 1 ? 'items' : 'item'})</Title>
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
          <Total cart={cart} />
          <PayWithStripe amount={totalPrice}>
            <Button label="Proceed to checkout" />
          </PayWithStripe>
          <SmallSpan>
            By placing this order you agree to Coffetino <i>Conditions of usage and sale</i>.<br/>You also agree to Coffetino <i>terms and conditions</i>.
          </SmallSpan>
        </SummaryBlock>
      </RightBlock>
    </BodyContainer>
  )
}

export default Cart