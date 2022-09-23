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
  StyledSpan,
  Separator,
} from "./header.styles"

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
            <Separator />
            <div>
              <Link href="" title="Sign in">Sign In</Link>
              <StyledSpan>or</StyledSpan>
              <Link href="" title="Sign up free" isHighlighted>Sign up Free</Link>
            </div>
          </RightNavigation>
        </StyledNav>
      </Container>
    </StyledHeader>
  )
}

export default Header