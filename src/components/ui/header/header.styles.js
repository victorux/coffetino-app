import styled from 'styled-components';
import globalVariables from '../../styles/globalVariables';
import {device} from "../../styles/breakpoints.js";

export const StyledHeader = styled.header`
  padding: 40px 0;
  position: relative;

  @media ${device.tablet}{
    padding: 20px 0;
  }

  @media ${device.laptop}{
    padding: 28px 0;
  }
`

export const Container = styled.div`
  max-width: ${globalVariables.maxWidth};
  margin: 0 auto;
  padding: 20px;
`

export const StyledLogo = styled.div`

  :hover {
    opacity: 0.7;
    transition: all .33s ease;
  }
`

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`

export const LeftNavigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  font-size: ${globalVariables.fontSizes._400};
`

export const LeftLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  font-size: ${globalVariables.fontSizes._400};

  a {
    color: ${({ isHighlighted, ...otherProps }) => isHighlighted ? otherProps.theme.colors.primary : otherProps.theme.colors.black};
    position: relative;
  }

  a::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    border-radius: 4px;
    background-color: #18272F;
    bottom: -10px;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }

  a:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  /* Hide links when: viewport < tablet */
  @media ${device.tablet}{
    display: none;
  }
`
export const RightNavigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  font-size: ${globalVariables.fontSizes._400};
`

export const DesktopLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  font-size: ${globalVariables.fontSizes._400};
  
  div {


    a {
      position: relative;
      color: ${({theme}) => theme.colors.black};
      
      :last-child{
        color: ${({theme}) => theme.colors.primary};
      }


      :last-child::before {
        background-color: ${({theme}) => theme.colors.primary};
      }
    }

    a::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      border-radius: 4px;
      background-color: #18272F;
      bottom: -10px;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform .3s ease-in-out;
    }

    a:hover::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }  

  @media ${device.tablet}{
    display: none;
  }
`

// export const StyledLink = styled.a`
//   color: ${({ isHighlighted, ...otherProps }) => isHighlighted ? otherProps.theme.colors.primary : otherProps.theme.colors.black};
// `

export const StyledSpan = styled.span`
  margin: 0 14px; 
  color: ${globalVariables.colors.regular};
`

export const Separator = styled.div`
  background-color: ${({theme}) => theme.colors.gray200};
  width: 1px;
  height: 14px;
`

export const IconBox = styled.div`
  position: relative;
  cursor: pointer;
`

export const IconQuantity = styled.div`
  position: absolute;
  right: -10px;
  top: -10px;
  width: 20px;
  height: 20px;
  background-color: ${({theme}) => theme.colors.black};
  border-radius: 50%;
  color: ${({theme}) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${globalVariables.fontSizes._300};
`



// Mobile Menu

export const MobileMenuContainer = styled.div`
  display: none;
  overflow: hidden;

  @media ${device.tablet}{
    display: block;
  }
`
