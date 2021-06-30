import React from "react";
import CartIcon from "../CartIcon/CartIcon.components";
import { createStructuredSelector } from "reselect";
import CartDropdown from "../cart-dropdown/cart-dropdown.components";
import "./Navigation.styles.scss";
import { connect } from "react-redux";
import { selectCartHidden } from "../../Redux/cart/cart.selectors";
import { toggleCartHidden } from "../../Redux/cart/cart.actions";
import { Link } from "react-router-dom";
const Navigation = ({ hidden }) => {
  return (
    <nav className="nav-flex">
      <ul className="menu-nav">
        <Link><li>Home</li></Link>
        <Link><li>About</li></Link>
        <Link><li>Testmonial</li></Link>
        <Link><li>Shop</li></Link>
        <Link><li>Contact Us</li></Link>
        <li style={{ backgroundColor: "red", position: "relative" }}>
          <CartIcon />

          {hidden ? null : <CartDropdown />}
        </li>
      </ul>
    </nav>
  );
};
const mapStateToProps = createStructuredSelector({
  // currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
