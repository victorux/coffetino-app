import React from "react"
import Logo from "./Logo"
import CartIcon from "./CartIcon"
import {
  StyledHeader,
  Container,
  StyledNav,
  LeftNavigation,
  LeftLinksContainer,
  RightNavigation,
  Separator,
} from "./header.styles"
import MobileMenu from "./MobileMenu"
import DesktopMenu from "./DesktopMenu"
import {Link} from "react-router-dom";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <LeftNavigation>
            <Logo />
            <LeftLinksContainer>
              <Separator />
              <Link to="/products">Shop</Link>
              <Link to="/about" >About Us</Link>
            </LeftLinksContainer>
          </LeftNavigation>
          <RightNavigation>
            <CartIcon />
            {/* Mobile */}
            <MobileMenu />
            {/* Desktop */}
            <DesktopMenu />
          </RightNavigation>
        </StyledNav>
      </Container>
    </StyledHeader>
  )
}

export default Header