import styled from 'styled-components';

export const StyledBurger = styled.button`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 1.5rem;
    height: 0.14rem;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.black};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      background: ${({ open }) => open ? '#FF714A' : '#092436' };
      
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      background: ${({ open }) => open ? '#FF714A' : '#092436' };
      box-shadow: ${({ open }) => open ? '2px 4px 5px 0 rgba(255,113,74,0.75)' : 'unset' };
    }
  }
`;