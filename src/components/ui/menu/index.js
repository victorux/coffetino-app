import React from 'react'
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import { useSelector } from 'react-redux';

const Menu = ({open}) => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <StyledMenu open={open} >
      <a href="/products">
        Shop
      </a>
      <a href="/about">
        About Us
      </a>
      {
        user 
        ? <a href="/">Sign Out</a>
        : <div>
            <a href="/signin">Sign In</a>
            <span>or</span>
            <a href="/signup">Sign Up for free</a>
          </div>
      }
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;