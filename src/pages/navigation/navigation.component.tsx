import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../store/user/user.selector";

import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { signOutStart } from "../../store/user/user.action";


import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const onSignOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="shop">Shop </NavLink>
          {currentUser ? (
            <Fragment>
              <NavLink to="order-history">
                Order History
              </NavLink>
              <NavLink as="span" onClick={onSignOutUser}>
                Sign out
              </NavLink>
            </Fragment>
          ) : (
            <NavLink to="auth">Sign In</NavLink>
          )}
          <CartIcon />
          {isCartOpen && <CartDropdown></CartDropdown>}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
