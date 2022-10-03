import logo from "../../../assets/logo.svg"
import { StyledLogo } from "./header.styles"
import { Link } from "react-router-dom"

function Logo() {
  return (
      <StyledLogo>
          <Link to="/">
              <img src={logo} alt="Logo Coffetino"/>
          </Link>
      </StyledLogo>
  )
}

export default Logo