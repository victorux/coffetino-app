import React from 'react'
import styled from 'styled-components'
import { device } from '../../styles/breakpoints'


const Item = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding-bottom: 40px;
    border-bottom: 1px solid ${({theme}) => theme.colors.gray200};
    margin-top: 40px;
`

const ItemImage = styled.div`
    max-width: 84px;
    flex-shrink: 0;

    img {
        width: 100%;
        height: auto;
    }
`

const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`

const DescItems = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: flex-end;



    @media ${ device.laptopL} {
        gap: 20px;
        flex-wrap: wrap;
    }

    @media ${ device.tablet} {
        gap: 10px;
        flex-wrap: wrap;
    }
`

const DescItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;

    select {
        padding: 0.4rem 0.2rem;
        border-radius: 7px;
        border: 1px solid ${({theme}) => theme.colors.gray400};
        font-size: ${({theme}) => theme.fontSizes._400};
        color: ${({theme}) => theme.colors.black};
        cursor: pointer;
        background-color: #fff;
    }

    @media ${device.mobileL}{
        flex: 1 1 100%;
    }
`

const Title = styled.h3`
    font-size: ${({theme}) => theme.fontSizes._500};
    font-weight: 500;
    letter-spacing: 0.04rem;
`

const Subtitle = styled.span`
    font-size: ${({theme}) => theme.fontSizes._300};
    font-weight: 400;
    color: ${({theme}) => theme.colors.gray400};
    letter-spacing: 0.025rem;
`

const DeleteButton = styled.div`
    background-color: ${({theme}) => theme.colors.black};
    border: none;
    padding: 0.6rem 1.2rem;
    color: #fff;
    border-radius: 7px;
    font-size: ${({theme}) => theme.fontSizes._400};
    cursor: pointer;
    transition: .22s all ease;

    :hover {
        background-color: ${({theme}) => theme.colors.gray600};
    }

    @media ${device.mobileL}{
        flex: 1 1 100%;
        text-align: center;
    }

`

const ItemPrice = styled.span`
    color: ${({theme}) => theme.colors.black};
    font-size: ${({theme}) => theme.fontSizes._500};
    margin-left: 7px;
`


function CartItem() {
  return (
    <Item>
        <ItemImage>
            <img alt="" src='https://i.ibb.co/T84BYrd/cb-lavazza-1000g-tierra-planet-0001-1.jpg' />
        </ItemImage>
        <ItemContent>
            <Title>Product Title</Title>
            <DescItems>
                <DescItem>
                    <Subtitle>Type</Subtitle>
                    <select>
                        <option>Whole beans</option>
                    </select>
                </DescItem>
                <DescItem>
                    <Subtitle>Delivery</Subtitle>
                    <select>
                        <option>One Time</option>
                    </select>
                </DescItem>
                <DescItem>
                    <Subtitle>Qty</Subtitle>
                    <select>
                        <option>2</option>
                    </select>
                </DescItem>
                <DeleteButton>Delete</DeleteButton>
            </DescItems>
            <div><Subtitle>Total:</Subtitle><ItemPrice>$48.99</ItemPrice></div>
        </ItemContent>
    </Item>
  )
}

export default CartItem