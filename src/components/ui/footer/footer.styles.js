import styled from "styled-components";
import  {device} from "../../styles/breakpoints";

export const FooterStyled = styled.footer`
  margin: 120px auto;
  padding: 100px 20px 0 20px;
  max-width: ${props => props.theme.maxWidth};
  border-top: 1px solid ${ props => props.theme.colors.gray200};

  @media ${device.laptopL}{
    padding: 60px 60px 0 60px;
    margin: 60px auto;
  }

  @media ${device.tablet}{
    padding: 60px 20px 0 20px;
    margin: 60px auto;
  }
`

export const FooterBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 40px;
  
  @media ${device.laptopL}{
    flex-direction: row;
    justify-content: space-between;
    row-gap: 80px;
  }

  @media ${device.tablet}{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`

export const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  gap: 14px;
  order: 2;

  @media ${device.laptopL}{
    align-items: center;
    justify-content: center;

    &:last-child {
      width: 100%;
      order: 1;
      justify-content: center;
      align-items: center;
    }
  }
`

export const ListTitle = styled.span`
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes._400};
  color: ${props => props.theme.colors.black};
  letter-spacing: 0.5px;
`

export const ListLink = styled.a`
  font-weight: 300;
  font-size: ${props => props.theme.fontSizes._400};
  color: ${props => props.theme.colors.black};
  letter-spacing: 0.25px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  
  @media ${device.mobileL}{
    flex-direction: column;
    gap: 10px;
  }
  
  input {
    height: 48px;
    font-size: ${props => props.theme.fontSizes._400};
    font-weight: 300;
    letter-spacing: 0.25px;
    max-width: 210px;
    padding: 20px 20px 20px 14px;
    border-radius: 4px;
    outline: none;
    border: 2px solid ${ props => props.theme.colors.gray200};
    
    &:focus {
      border: 2px solid ${ props => props.theme.colors.gray500};
    }
  }
  
  button {
    font-weight: 400;
    letter-spacing: 0.5px;
    padding: 0 14px;
    outline: none;
    border: none;
    font-size: ${props => props.theme.fontSizes._400};
    background-color: ${props => props.theme.colors.primary};
    border-radius: 4px;
    color: #fff;
    transition: 0.3s all ease;
    transform: translateX(-12px);

    @media ${device.mobileL}{
      padding:  14px 0;
      transform: translateX(0px);
    }
    
    &:hover {
      background-color: ${props => props.theme.colors.primaryDark};
      cursor: pointer;
    }
    
    &:active {
      background-color: ${props => props.theme.colors.primary};
    }
  }
`