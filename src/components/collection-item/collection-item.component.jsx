import React from 'react';
import { connect } from 'react-redux';


import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {

    const { name, price, imageUrl } = item; 
    return (
        <div className="collection-item">
            <div className='image' style={{ backgroundImage: `url(${imageUrl})`}}>

            </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span> 
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
    // we are creating this function that is a prop called addItem that will go into our CollectionItem as the addItem function that we need to leverage
    // and whenever we call this function (addItem), this function will recive the item as the property,
    // pass it into the addItem action creator, ehich gives us back that object where the type is equal to ADD_ITEM,
    // and the payload is equal to the item that got passed in, and then we will dispatch that new object into the store
})

export default connect(null, mapDispatchToProps)(CollectionItem);