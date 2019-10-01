import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';

import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
    },
    {
      headerLayoutPreset: 'left',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerTitle: <Header />,
        headerStyle: {
          backgroundColor: '#141419',
        },
        headerTintColor: '#fff',
        headerTitleContainerStyle: {
          marginLeft: 10,
        },
      },
    }
  )
);

export default Routes;
