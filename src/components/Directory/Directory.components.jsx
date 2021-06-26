import React from 'react';
import { directoryData } from '../../Data/Data';
import './Directory.styles.scss'
import CustomButton from '../custom-button/custom-button.components';


const Directory = () => {




    return (
        <div className='directory-menu'>

            {
                directoryData.map((item) => (
                    <div className='collection-item'>
                        <img className='directory-img' src={item.imageUrl} key={item.id} alt={item.title} />
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


export default Directory;


// {/* <div className="collection-footer">
// <span className="name">{item.title}</span>
// <span className="price">{price}</span>
// </div>
// <CustomButton onClick={() => addItem(item)} inverted>
// Add to cart
// </CustomButton>
// </div> */}