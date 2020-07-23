import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.components';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden, selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


import './header.styles.scss';
import FormInput from '../form-input/form-input.component';
import { ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className="options">
           <Link to='/shop' className='option'> SHOP </Link> 
           <Link to='/contact' className='option'> CONTACT </Link> 
           { currentUser ? (
                <div className="option" onClick={ () => auth.signOut() }> SIGN OUT </div>
                ) : (
                <Link className='option' to='/signin'> SIGN IN </Link>
                 ) 
            }
            <CartIcon/>
        </div>
        { hidden ? null : <CartDropdown/> }
    </div>
);

//can be any name
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

//connect is HOC
export default connect(mapStateToProps)(Header);