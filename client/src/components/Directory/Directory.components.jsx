import React from "react";

import "./Directory.styles.scss";
import CustomButton from "../custom-button/custom-button.components";
import { selectDirectorySections } from "../../Redux/directory/directors.selectors";
import { connect } from "react-redux";
import { addItem } from "../../Redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections, addItem }) => {
  return (
    <div id="#section3" className="directory-menu">
      {sections.map(({ id, title, imageUrl, price }) => (
        <div key={id} className="collection-item">
          <img className="directory-img" src={imageUrl} alt={title} />
          <div className="collection-footer">
            <span className="name">{title.toUpperCase()}</span>
            <span className="price">${price}</span>
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
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (value) => dispatch(addItem(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Directory);

// {/* <div className="collection-footer">
// <span className="name">{item.title}</span>
// <span className="price">{price}</span>
// </div>
// <CustomButton onClick={() => addItem(item)} inverted>
// Add to cart
// </CustomButton>
// </div> */}
