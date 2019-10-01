import React from 'react';
import { NavigationActions } from 'react-navigation';

import { Cart, Logo } from './styles';

import LogoImage from '../../assets/images/logo.png';

export default function Header() {
  return (
    <>
      <Logo source={LogoImage} />
      <Cart>3</Cart>
    </>
  );
}
