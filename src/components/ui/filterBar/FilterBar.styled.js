import styled from "styled-components";
// import breakpoints from "../../styles/breakpoints"
import globalVariables from "../../styles/globalVariables"
import {device} from "../../styles/breakpoints";
// import {device} from "../../styles/breakpoints"


export const StyledContainer = styled.div`
  max-width: ${globalVariables.maxWidth};
  padding: 30px 20px 0 20px;
  margin: 0 auto;
  border-top: 1px solid ${({theme}) => theme.colors.gray200};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const StyledTitle = styled.h1`
  font-family: ${({theme}) => theme.fonts.sans};
  font-size: ${({theme}) => theme.fontSizes._900};
  margin: 10px 0;
  
  @media ${device.tablet}{
    font-size: ${({theme}) => theme.fontSizes._700};
  }
`

export const StyledFiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media ${device.tablet}{
    gap: 10px;
  }
`


export const StyledSelect = styled.div`
    position: relative;
`

export const Select = styled.select`
    border-radius: 7px;
    border: 1px solid ${({theme}) => theme.colors.gray300};
    background-color: white;
    color: ${({theme}) => theme.colors.black};
    font-size: 1rem;
    text-align: center;
    padding: 14px 20px;
    width: 9rem;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    letter-spacing: 0.025rem;
    transition: all .33s ease;
    transition: all .33s ease;
  

    &:focus {
        outline-offset: 0px !important;
        outline: none !important;
    }
`
