import React from 'react'
import {
  DesktopLinks,
  Link,
  StyledSpan,
  Separator} from './header.styles.js'

function DesktopMenu() {
  return (
    <DesktopLinks>
      <Separator />
        <div>
          <Link href="" title="Sign in">Sign In</Link>
          <StyledSpan>or</StyledSpan>
          <Link href="" title="Sign up free" isHighlighted>Sign up Free</Link>
        </div>
    </DesktopLinks>
  )
}

export default DesktopMenu