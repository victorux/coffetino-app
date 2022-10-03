import React from 'react'
import {
  DesktopLinks,
  // StyledLink,
  StyledSpan,
  Separator} from './header.styles.js'
import {Link} from "react-router-dom"

function DesktopMenu() {
  return (
    <DesktopLinks>
      <Separator />
        <div>
          <Link to="/signin" title="Sign in">Sign In</Link>
          <StyledSpan>or</StyledSpan>
          <Link to="/signup" title="Sign up free" className="primary">Sign up Free</Link>
        </div>
    </DesktopLinks>
  )
}

export default DesktopMenu