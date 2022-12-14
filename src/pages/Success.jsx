import React from 'react'
import styled from 'styled-components'
import globalVariables from "../components/styles/globalVariables"
import { device } from '../components/styles/breakpoints';
import success from "../assets/icons/success.png"
import { useNavigate } from "react-router-dom"

const Wrapper = styled.div`
  max-width: ${globalVariables.maxWidth};
  padding: 30px 20px 0 20px;
  margin: 0 auto;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`

const Title = styled.h1`
  font-size: ${({theme}) => theme.fontSizes._800};
  font-family: ${({theme}) => theme.fonts.sans};
  text-align: center;
  letter-spacing: 1px;
`

const Description = styled.p`
  font-size: ${({theme}) => theme.fontSizes._400};
  font-family: ${({theme}) => theme.fonts.ubuntu};
  text-align: center;
  line-height: 1.7;
  letter-spacing: 0.25px;
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



function Success() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  };
  
  return (
    <Wrapper>
      <Container>
        <img src={success} alt="success" />
        <Title>Your order has been processed!</Title>
        <Description>Congratulations! Your order is completed and have been placed successfully.<br/>
          You'll receive an email once your order is dispatched.</Description>
        <BorderButton onClick={handleClick}>Go to home page</BorderButton>
      </Container>
    </Wrapper>
  )
}

export default Success