import React from 'react'
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';

const Menu = ({open}) => {
  return (
    <StyledMenu open={open} >
      <a href="/">
        Shop
      </a>
      <a href="/">
        Subscription
      </a>
      <div>
        <a href="/">
          Sign In
        </a>
        <span>or</span>
        <a href="/">
          Sign Up for free
        </a>
      </div>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;