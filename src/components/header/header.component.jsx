import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo} from '../../assets/crown.svg';


import './header.styles.scss';
import FormInput from '../form-input/form-input.component';

const Header = ({ currentUser }) => (
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
                <Link className='sign-in' to='/signin'> SIGN IN </Link>
                 ) 
            }
        </div>
    </div>
);

//can be any name
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

//connect is HOC
export default connect(mapStateToProps)(Header);