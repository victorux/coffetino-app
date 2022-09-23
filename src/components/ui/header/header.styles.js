import styled from 'styled-components';
import globalVariables from '../../styles/globalVariables';
import {device} from "../../styles/breakpoints.js";

export const StyledHeader = styled.header`
  padding: 40px 0;
`

export const Container = styled.div`
  max-width: ${globalVariables.maxWidth};
  margin: 0 auto;
  padding: 20px;
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

export const Link = styled.a`
  color: ${({ isHighlighted, ...otherProps }) => isHighlighted ? otherProps.theme.colors.primary : otherProps.theme.colors.black};
`

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