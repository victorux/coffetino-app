import styled from "styled-components";

export const FooterStyled = styled.footer`
  margin: 120px auto;
  padding: 100px 20px 0 20px;
  max-width: ${props => props.theme.maxWidth};
  border-top: 1px solid ${ props => props.theme.colors.gray200};
`

export const FooterBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
`

export const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  gap: 14px;
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
  
  input {
    height: 48px;
    font-size: ${props => props.theme.fontSizes._400};
    font-weight: 300;
    letter-spacing: 0.25px;
    max-width: 210px;
    padding: 20px;
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
    transform: translateX(-14px);
    
    &:hover {
      background-color: ${props => props.theme.colors.primaryDark};
      cursor: pointer;
    }
    
    &:active {
      background-color: ${props => props.theme.colors.primary};
    }
  }
`