import Logo from "./Logo"
import CartIcon from "./CartIcon"
import {
  StyledHeader,
  Container,
  StyledNav,
  LinksContainer,
  Link,
  StyledSpan,
  Separator,
} from "./header.styles"

function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <LinksContainer>
            <Logo />
            <Separator />
            <Link href="" title="Shop">Shop</Link>
            <Link href="" title="Shop">Subscription</Link>
          </LinksContainer>
          <LinksContainer>
            <CartIcon />
            <Separator />
            <div>
              <Link href="" title="Sign in">Sign In</Link>
              <StyledSpan>or</StyledSpan>
              <Link href="" title="Sign up free" isHighlighted>Sign up Free</Link>
            </div>
          </LinksContainer>
        </StyledNav>
      </Container>
    </StyledHeader>
  )
}

export default Header