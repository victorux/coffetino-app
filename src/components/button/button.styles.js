import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 20px 30px;
  border: none;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 7px;
  color: #ffffff;
  font-family: ${({theme}) => theme.fonts.ubuntu};
  letter-spacing: 0.5px;
  font-size: ${({theme}) => theme.fontSizes._400};
  transition: all  0.25s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 6px 6px ${({theme}) => theme.colors.primaryDark};
  }
  
  &:active {
    box-shadow: 0 0 ${({theme}) => theme.colors.primaryDark};
    transform: translate(6px, 6px) scale(1.1);
  }
`
