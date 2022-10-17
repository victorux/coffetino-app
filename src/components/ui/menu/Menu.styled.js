import styled from 'styled-components';
import {device} from "../../styles/breakpoints.js";

export const StyledMenu = styled.nav`
  z-index: 100;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.black};
  text-align: left;
  padding: 1rem 4rem;
  position: absolute;
  top: 100px;
  left: 0;
  transition: transform 0.33s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  box-shadow: 0 8px 11px 0 rgba(129,129,129,0.50);
  
  @media ${device.tablet} {
    width: 100%;
  }

  & > a {
    font-size: 1.5rem;
    text-transform: capitalize;
    padding: 1rem 0;
    letter-spacing: 0.05rem;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    transition: color 0.25s linear;
    border-bottom: 1px solid rgba(255,255,255,0.15);
    
    @media ${device.tablet} {
      font-size: 1rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 7px;
    color: ${({ theme }) => theme.colors.gray500};

    a {
      font-size: 1.5rem;
      text-transform: capitalize;
      padding: 1rem 0;
      letter-spacing: 0.05rem;
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
      transition: color 0.25s linear;

      :last-child {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: underline;
      }

      :last-child:hover {
      color: ${({ theme }) => theme.colors.gray400};
    }

      @media ${device.tablet} {
      font-size: 1rem;
      text-align: center;
      }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }


    }
  }
`;