import React from 'react';
import { useSelector } from 'react-redux';

import { Cart, Logo } from './styles';

import LogoImage from '../../assets/images/logo.png';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <>
      <Logo source={LogoImage} />
      <Cart>{cartSize}</Cart>
    </>
  );
}
