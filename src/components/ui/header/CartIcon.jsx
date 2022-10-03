
import cartIcon from "../../../assets/icons/shopping-cart.svg"
import {
  IconBox,
  IconQuantity
} from "./header.styles"
import { Link } from "react-router-dom"

function CartIcon() {
  return (
    <Link to="/cart" title="Shopping cart">
      <IconBox>
          <img src={cartIcon} width="24" alt="" />
        <IconQuantity>0</IconQuantity>
      </IconBox>
    </Link>
  )
}

export default CartIcon