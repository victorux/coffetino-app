
import cartIcon from "../../../assets/icons/shopping-cart.svg"
import {
  IconBox,
  IconQuantity
} from "./header.styles"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

function CartIcon() {
  const quantity = useSelector(state => state.cart.qty);

  return (
    <Link to="/cart" title="Shopping cart">
      <IconBox>
          <img src={cartIcon} width="24" alt="" />
        <IconQuantity>{quantity}</IconQuantity>
      </IconBox>
    </Link>
  )
}

export default CartIcon