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
  Link,
  Separator,
} from "./header.styles"
import MobileMenu from "./MobileMenu"
import DesktopMenu from "./DesktopMenu"

function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <LeftNavigation>
            <Logo />
            <LeftLinksContainer>
              <Separator />
              <Link href="" title="Shop">Shop</Link>
              <Link href="" title="Shop">Subscription</Link>
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