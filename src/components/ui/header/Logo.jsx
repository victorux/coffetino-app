import logo from "../../../assets/logo.svg"
import { StyledLogo } from "./header.styles"

import {} from "./header.styles"

function Logo() {
  return (
    <div>
      <StyledLogo href="/">
        <img src={logo} alt="Logo Coffetino"/>
      </StyledLogo>
    </div>
  )
}

export default Logo