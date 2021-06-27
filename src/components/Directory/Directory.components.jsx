import React from 'react';

import './Directory.styles.scss'
import CustomButton from '../custom-button/custom-button.components';
import { selectDirectorySections } from '../../Redux/directory/directors.selectors'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections, item }) => {

    return (
        <div className='directory-menu'>

            {
                sections.map(({ item: { id, title, imageUrl } }) => (
                    <div className='collection-item'>
                        <img className='directory-img' src={imageUrl} key={id} alt={title} />
                        <div className="collection-footer">
                            <span className="name">{item.title.toUpperCase()}</span>
                            <span className="price">{item.price}</span>

                        </div>

                        <CustomButton   >
                            Add to cart
                        </CustomButton>
                    </div>


                ))

            }

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);



// {/* <div className="collection-footer">
// <span className="name">{item.title}</span>
// <span className="price">{price}</span>
// </div>
// <CustomButton onClick={() => addItem(item)} inverted>
// Add to cart
// </CustomButton>
// </div> */}