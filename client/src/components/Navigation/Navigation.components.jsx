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
        <li className="nav-hide">
          {" "}
          <h1 className="dragonFeeders">Dragon Feeders</h1>
        </li>
        <Link to="/">
          <li className="nav-link nav-hide" key={1}>
            Home
          </li>
        </Link>
        <Link to="#section1">
          <li className="nav-link nav-hide" key={1}>
            About
          </li>
        </Link>
        {/* <Link to='#section2'><li key={2}>Testmonial</li></Link> */}
        <Link to="#section3">
          <li className="nav-link nav-hide" key={3}>
            Shop
          </li>
        </Link>
        <Link className="nav-link nav-hide" to="#section4">
          <li key={4}>Contact Us</li>
        </Link>
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
