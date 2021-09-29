import React from "react";

import "./Directory.styles.scss";
import CustomButton from "../custom-button/custom-button.components";
import { selectDirectorySections } from "../../Redux/directory/directors.selectors";
import { connect } from "react-redux";
import { addItem } from "../../Redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections, addItem }) => {
  return (
    <div className="directory-container">
      <h2 className="bestSellers">Best Sellers</h2>
      <div id="#section3" className="directory-menu">
        {sections.map(({ id, title, imageUrl, price }) => (
          <div key={id} className="collection-item">
            <div className="card">
              <img src={imageUrl} alt="Avatar" />
              <div className="container">
                <p id="price">${price}</p>
                <p id="title">{title.toUpperCase()}</p>
              </div>
            </div>

            <CustomButton
              onClick={() => {
                addItem({
                  id: id,
                  title: title,
                  imageUrl: imageUrl,
                  price: price,
                });
                //   console.log(title);
                //call action
              }}
            >
              Add to cart
            </CustomButton>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (value) => dispatch(addItem(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
