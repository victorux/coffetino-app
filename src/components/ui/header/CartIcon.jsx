
import cartIcon from "../../../assets/icons/shopping-cart.svg"
import {
  IconBox,
  IconQuantity
} from "./header.styles"

function CartIcon() {
  return (
    <a href="/" title="Shopping cart">
      <IconBox>
          <img src={cartIcon} width="24" alt="" />
        <IconQuantity>0</IconQuantity>
      </IconBox>
    </a>
  )
}

export default CartIcon