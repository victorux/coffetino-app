import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../../redux/userRedux.js';
import {
  DesktopLinks,
  StyledSpan,
  Separator,
  SignoutStyled
} from './header.styles.js'
import {Link} from "react-router-dom"

function DesktopMenu() {

  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logOut());
  }
  return (
    <DesktopLinks>
      <Separator />
        <div>
          { user ? 
          <SignoutStyled onClick={handleSignOut}>Sign Out</SignoutStyled> 
          : <div>
            <Link to="/signin" title="Sign in">Sign In</Link>
            <StyledSpan>or</StyledSpan>
            <Link to="/signup" title="Sign up free" className="primary">Sign up Free</Link>
            </div>}
        </div>
    </DesktopLinks>
  )
}

export default DesktopMenu