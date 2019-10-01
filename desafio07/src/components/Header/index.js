import React from 'react';
import { Image, Text } from 'react-native';

import LogoImage from '../../assets/images/logo.png';

export default function Header() {
  return (
    <>
      <Image source={LogoImage} style={{ width: 155, height: 20 }} />
      <Text
        style={{
          color: '#fff',
          backgroundColor: '#7159c1',
          padding: 5,
          borderRadius: 15,
        }}
      >
        3
      </Text>
    </>
  );
}
