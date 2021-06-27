import React from "react";
import CartIcon from "../CartIcon/CartIcon.components";
import { createStructuredSelector } from "reselect";
import CartDropdown from "../cart-dropdown/cart-dropdown.components";
import "./Navigation.styles.scss";
import { connect } from "react-redux";
import { selectCartHidden } from "../../Redux/cart/cart.selectors";
import { toggleCartHidden } from "../../Redux/cart/cart.actions";
const Navigation = ({ hidden }) => {
  return (
    <nav className="nav-flex">
      <ul className="menu-nav">
        <li>Home</li>
        <li>About</li>
        <li>Testmonial</li>
        <li>Shop</li>
        <li>Contact Us</li>
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
