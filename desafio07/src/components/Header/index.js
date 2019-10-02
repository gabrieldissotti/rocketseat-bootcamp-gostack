import React from 'react';
import { connect } from 'react-redux';

import { Cart, Logo } from './styles';

import LogoImage from '../../assets/images/logo.png';

function Header({ cartSize }) {
  return (
    <>
      <Logo source={LogoImage} />
      <Cart>{cartSize}</Cart>
    </>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
