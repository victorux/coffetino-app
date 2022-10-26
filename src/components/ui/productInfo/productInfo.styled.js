import styled from "styled-components"
import dd from "../../../assets/icons/dropdown.svg"
import { device } from "../../styles/breakpoints"

export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 80px;
    flex-wrap: no-wrap;
    margin-bottom: 120px;

    @media ${device.tablet} {
        flex-direction: column;
    }
`

export const ImageContainer = styled.div`
    max-width: 600px;

    @media ${device.tablet} {
        max-width: 100%;
    }

    img {
        width: 100%;
    }
`

export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;

`

export const ProductTitle= styled.h2`
    text-align: left;
    font-size: ${({theme}) => theme.fontSizes._900};

    @media ${device.tablet} {
        font-size: ${({theme}) => theme.fontSizes._700};
    }
`

export const ProductRating = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    gap: 7px;
    color: ${({theme}) => theme.colors.gray500};
    
    span {
        color: ${({theme}) => theme.colors.black};
        font-weight: 500;
    }
`

export const StyledSection = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 7px;
`

export const LabelStyled= styled.span`
    text-align: left;
    font-size: ${({theme}) => theme.fontSizes._400};
    color: ${({theme}) => theme.colors.gray500};
    letter-spacing: 0.015rem;
    font-weight: 400;
    text-transform: capitalize;
    margin-bottom: 10px;
`

export const Select = styled.select`
    font-size: ${({theme}) => theme.fontSizes._400};
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.black};
    border-radius: 7px;
    border: 2px solid ${({theme}) => theme.colors.gray300};
    transition: 0.22s all ease;
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
    background: transparent;
    background-image: url(${dd});
    background-repeat: no-repeat;
    background-position-x: 90%;
    background-position-y: 50%;
    padding: 1.2rem;
    padding-right: 2.7rem;
    font-weight: 400;

    &:hover {
        border-color:  ${({theme}) => theme.colors.gray500};
    }

    &:focus {
        outline: none;
    }
`

export const QtyPacks = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
`

export const Input = styled.input`
    padding: 1.2rem;
    width: 62px;
    border: 2px solid ${({theme}) => theme.colors.gray300};
    border-radius: 7px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.black};
    font-size: ${({theme}) => theme.fontSizes._400};
    transition: 0.3s all ease;

    &:hover {
        border-color:  ${({theme}) => theme.colors.gray500};
    }

    &:focus {
        outline: none;
    }
    
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type=number] {
        -moz-appearance: textfield;
    }
`

export const Button = styled.button`
    width: 4rem;
    font-size: 1.4rem;
    font-weight: 300;
    border-radius: 7px;
    color: #fff;
    border: none;
    outline: none;
    background-color: ${({theme}) => theme.colors.gray600};
    transition: 0.3s all ease;

    :hover {
        background-color: ${({theme}) => theme.colors.gray800};
        cursor: pointer;
    }
`
export const Cards = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;

    @media ${device.tablet} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`

export const Discount = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.4rem;
    /* background-color: ${({theme}) => theme.colors.gray300}; */
    font-size: ${({theme}) => theme.fontSizes._400};
    color: #fff;
    transition: .3s all ease;
`
export const Period = styled.span`
    font-size: 1.2rem;
    font-weight: 400;
`

export const PeriodPrice = styled.span`
    font-size: 1rem;
    font-weight: 400;
    color: ${({theme}) => theme.colors.gray500};
`


export const CardSubscription = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 20px;
    flex-direction: column;
    padding: 20px 30px;
    border-radius: 7px;
    text-align: center;
    padding: 2rem 2rem 3.6rem 2rem;
    overflow: hidden;
    cursor: pointer;
    transition: .3s all ease;

    @media ${device.tablet} {
       width: 100%;
       align-items: center;
       padding: 14px 20px;
    }


    ${({sub, id, theme}) => {
        if(sub === id){
            return `
                background-color: ${theme.colors.gray800};
                border: 2px solid ${theme.colors.gray800};

                ${Discount} {
                    background: ${theme.colors.gray800};
                }

                ${Period}{
                    color: #fff;
                }

                ${PeriodPrice}{
                    color: #fff;
                }

                :hover ${Discount}{
                    background-color: theme.colors.gray800};
                }
                
            `;
        } else {
            return `
                background-color: ;
                border: 2px solid ${theme.colors.gray300};

                ${Discount} {
                    background: ${theme.colors.gray300};
                    
                }
                :hover ${Discount}{
                    background-color: ${theme.colors.gray800};
                }
            `;
        }
    }};

    :hover {
        border-color: ${({theme}) => theme.colors.gray800};
    }
`

export const CardDesc = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`


export const Summary = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;

    @media ${device.tablet} {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
`


export const CartButton = styled.button`
    background-color: ${({theme}) => theme.colors.primary};
    color: #fff;
    padding: 1.2rem 2rem;
    font-size: ${({theme}) => theme.fontSizes._400};
    border: 1px solid #E9633E;
    border-radius: 7px;
    letter-spacing: 1px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: nowrap;
    align-items: center;
    transition: 0.3s all ease;

    :hover {
        background-color: #f05b32;
    }

    @media ${device.tablet} {
       width: 100%;
       align-items: center;
       justify-content: center;
    }
`


export const SummaryInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 10px;

    @media ${device.tablet} {
       width: 100%;
       align-items: center;
       justify-content: center;
    }
`

export const SummaryPrice = styled.div`
    font-size: ${({theme}) => theme.fontSizes._600};
    color: ${({theme}) => theme.colors.black};
    font-weight: 400;
`

export const SummaryDetails = styled.div`
    font-size: ${({theme}) => theme.fontSizes._400};
    color: ${({theme}) => theme.colors.gray400};
    letter-spacing: 0.2px;
    font-weight: 400;
`

export const Description = styled.p`
    font-size: ${({theme}) => theme.fontSizes._400};
    color: ${({theme}) => theme.colors.black};
    margin-top: 50px;
    margin-bottom: 120px;
    max-width: 754px;
    line-height: 1.7;
    letter-spacing: 0.15px;
`

