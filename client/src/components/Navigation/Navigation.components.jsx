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
        <Link to='/'><li key={1}>Home</li></Link>
        <Link to='#section1'><li key={1}>About</li></Link>
        <Link to='#section2'><li key={2}>Testmonial</li></Link>
        <Link to='#section3'><li key={3}>Shop</li></Link>
        <Link to='#section4'><li key={4}>Contact Us</li></Link>
        <li style={{ backgroundColor: "white", position: "relative" }}>
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
